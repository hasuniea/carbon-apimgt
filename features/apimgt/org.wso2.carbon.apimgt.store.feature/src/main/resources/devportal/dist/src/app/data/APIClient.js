"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _swaggerClient = _interopRequireDefault(require("swagger-client"));

var _asyncMutex = require("async-mutex");

var _Settings = _interopRequireDefault(require("Settings"));

var _queryString = _interopRequireDefault(require("query-string"));

var _AuthManager = _interopRequireDefault(require("./AuthManager"));

var _Utils = _interopRequireDefault(require("./Utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * This class expose single swaggerClient instance created using the given swagger URL (Publisher, Store, ect ..)
 * it's highly unlikely to change the REST API Swagger definition (swagger.json) file on the fly,
 * Hence this singleton class help to preserve consecutive swagger client object creations saving redundant IO operations.
 */
var APIClient = /*#__PURE__*/function () {
  /**
   * @param {String} host : Host of apis. Host for the swagger-client's spec property.
   * @param {{}} args : Accept as an optional argument for APIClient constructor.Merge the given args with default args.
   * @returns {APIClient|*|null}
   */
  function APIClient(host) {
    var _this = this;

    var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, APIClient);

    this.host = host || location.host;
    this.environment = _Utils["default"].getCurrentEnvironment();
    var authorizations = {
      OAuth2Security: {
        token: {
          access_token: _AuthManager["default"].getUser() ? _AuthManager["default"].getUser().getPartialToken() : ''
        }
      }
    };
    _swaggerClient["default"].http.withCredentials = true;

    var promisedResolve = _swaggerClient["default"].resolve({
      url: _Utils["default"].getSwaggerURL(),
      requestInterceptor: function requestInterceptor(request) {
        request.headers.Accept = 'text/yaml';
      }
    });

    APIClient.spec = promisedResolve;
    this._client = promisedResolve.then(function (resolved) {
      var argsv = Object.assign(args, {
        spec: _this._fixSpec(resolved.spec),
        authorizations: authorizations,
        requestInterceptor: _this._getRequestInterceptor(),
        responseInterceptor: _this._getResponseInterceptor()
      });
      _swaggerClient["default"].http.withCredentials = true;
      return new _swaggerClient["default"](argsv);
    });

    this._client["catch"](_AuthManager["default"].unauthorizedErrorHandler);

    this.mutex = new _asyncMutex.Mutex();
  }
  /**
   * Expose the private _client property to public
   * @returns {APIClient} an instance of APIClient class
   */


  _createClass(APIClient, [{
    key: "_fixSpec",

    /**
     * Temporary method to fix the hostname attribute Till following issues get fixed ~tmkb
     * https://github.com/swagger-api/swagger-js/issues/1081
     * https://github.com/swagger-api/swagger-js/issues/1045
     * @param spec {JSON} : Json object of the specification
     * @returns {JSON} : Fixed specification
     * @private
     */
    value: function _fixSpec(spec) {
      spec.host = this.host;
      spec.security = [{
        OAuth2Security: ['apim:api_subscribe']
      }];
      return spec;
    }
  }, {
    key: "_getResponseInterceptor",
    value: function _getResponseInterceptor() {
      var _this2 = this;

      return function (data) {
        if (data.headers.etag) {
          APIClient.addETag(data.url, data.headers.etag);
        } // If an unauthenticated response is received, we check whether the token is valid by introspecting it.
        // If it is not valid, we need to clear the stored tokens (in cookies etc) in the browser by redirecting the
        //   user to logout.


        if (data.status === 401 && data.obj != null && data.obj.description === 'Unauthenticated request') {
          var userData = _AuthManager["default"].getUserFromToken();

          var existingUser = _AuthManager["default"].getUser(_this2.environment.label);

          if (existingUser) {
            userData.then(function (user) {
              if (user) {
                window.location = _Settings["default"].app.context + _Utils["default"].CONST.LOGOUT_CALLBACK;
              }
            })["catch"](function (error) {
              console.error('Error occurred while checking token status. Hence redirecting to login', error);
              window.location = _Settings["default"].app.context + _Utils["default"].CONST.LOGOUT_CALLBACK;
            });
          } else {
            console.error('Attempted a call to a protected API without a proper access token');
          }
        }

        return data;
      };
    }
    /**
     * Interceptor for each request
     * @returns {Object}
     * @memberof APIClient
     */

  }, {
    key: "_getRequestInterceptor",
    value: function _getRequestInterceptor() {
      var _this3 = this;

      return function (request) {
        var _window = window,
            location = _window.location;

        if (location) {
          var _queryString$parse = _queryString["default"].parse(location.search),
              tenant = _queryString$parse.tenant;

          if (tenant) {
            request.headers['X-WSO2-Tenant'] = tenant;
          }
        }

        var existingUser = _AuthManager["default"].getUser(_this3.environment.label);

        if (!existingUser) {
          console.log('User not found. Token refreshing failed.');
          return request;
        }

        var existingToken = _AuthManager["default"].getUser(_this3.environment.label).getPartialToken();

        var refToken = _AuthManager["default"].getUser(_this3.environment.label).getRefreshPartialToken();

        if (existingToken) {
          request.headers.authorization = 'Bearer ' + existingToken;
          return request;
        } else {
          console.log('Access token is expired. Trying to refresh.');

          if (!refToken) {
            console.log('Refresh token not found. Token refreshing failed.');
            return request;
          }
        }

        var env = _this3.environment;

        var promise = _this3.mutex.acquire().then(function (release) {
          existingToken = _AuthManager["default"].getUser(env.label).getPartialToken();

          if (existingToken) {
            request.headers.authorization = 'Bearer ' + existingToken;
            release();
            return request;
          } else {
            return _AuthManager["default"].refresh(env).then(function (res) {
              return res.json();
            }).then(function () {
              request.headers.authorization = 'Bearer ' + _AuthManager["default"].getUser(env.label).getPartialToken();
              return request;
            })["catch"](function (error) {
              console.error('Error:', error);
            })["finally"](function () {
              release();
            });
          }
        });

        if (APIClient.getETag(request.url) && (request.method === 'PUT' || request.method === 'DELETE' || request.method === 'POST')) {
          request.headers['If-Match'] = APIClient.getETag(request.url);
        }

        return promise;
      };
    }
  }, {
    key: "client",
    get: function get() {
      return this._client;
    }
    /**
     * Get the ETag of a given resource key from the session storage
     * @param key {string} key of resource.
     * @returns {string} ETag value for the given key
     */

  }], [{
    key: "getETag",
    value: function getETag(key) {
      return sessionStorage.getItem('etag_' + key);
    }
    /**
     * Add an ETag to a given resource key into the session storage
     * @param key {string} key of resource.
     * @param etag {string} etag value to be stored against the key
     */

  }, {
    key: "addETag",
    value: function addETag(key, etag) {
      sessionStorage.setItem('etag_' + key, etag);
    }
    /**
     * Get Scope for a particular resource path
     *
     * @param resourcePath resource path of the action
     * @param resourceMethod resource method of the action
     */

  }, {
    key: "getScopeForResource",
    value: function getScopeForResource(resourcePath, resourceMethod) {
      if (!APIClient.spec) {
        _swaggerClient["default"].http.withCredentials = true;
        APIClient.spec = _swaggerClient["default"].resolve({
          url: _Utils["default"].getSwaggerURL()
        });
      }

      return APIClient.spec.then(function (resolved) {
        return resolved.spec.paths[resourcePath] && resolved.spec.paths[resourcePath][resourceMethod] && resolved.spec.paths[resourcePath][resourceMethod].security[0].OAuth2Security[0];
      });
    }
  }]);

  return APIClient;
}();

APIClient.spec = null;
var _default = APIClient;
exports["default"] = _default;