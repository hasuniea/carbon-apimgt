"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _qs = _interopRequireDefault(require("qs"));

var _Settings = _interopRequireDefault(require("Settings"));

var _Utils = _interopRequireDefault(require("./Utils"));

var _User = _interopRequireDefault(require("./User"));

var _APIClient = _interopRequireDefault(require("./APIClient"));

var _APIClientFactory = _interopRequireDefault(require("./APIClientFactory"));

var _Constants = _interopRequireDefault(require("./Constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Manage the application authentication and authorization requirements.
 *
 * @class AuthManager
 */
var AuthManager = /*#__PURE__*/function () {
  function AuthManager() {
    _classCallCheck(this, AuthManager);

    this.isLogged = false;
    this.username = null;
  }
  /**
   * Static method to handle unauthorized user action error catch, It will look for response status code and skip !401 errors
   * @param {object} error_response
   */


  _createClass(AuthManager, [{
    key: "authenticateUser",

    /**
     * By given username and password Authenticate the user, Since this REST API has no swagger definition,
     * Can't use swaggerjs to generate client.Hence using Axios to make AJAX calls
     * @param {String} username : Username of the user
     * @param {String} password : Plain text password
     * @param {Object} environment : environment object
     * @returns {AxiosPromise} : Promise object with the login request made
     */
    value: function authenticateUser(username, password, environment) {
      var headers = {
        Authorization: 'Basic deidwe',
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      };
      var data = {
        username: username,
        password: password,
        grant_type: 'password',
        validity_period: 3600,
        scopes: 'apim:subscribe apim:signup apim:workflow_approve apim:sub_alert_manage'
      };
      var promised_response = (0, _axios["default"])(_Utils["default"].getLoginTokenPath(environment), {
        method: 'POST',
        data: _qs["default"].stringify(data),
        headers: headers,
        withCredentials: true
      }); // Set the environment that user tried to authenticate

      var previous_environment = _Utils["default"].getEnvironment();

      _Utils["default"].setEnvironment(environment);

      promised_response.then(function (response) {
        var validityPeriod = response.data.validityPeriod; // In seconds

        var WSO2_AM_TOKEN_1 = response.data.partialToken;
        var user = new _User["default"](_Utils["default"].getEnvironment().label, response.data.authUser, response.data.idToken);
        user.setPartialToken(WSO2_AM_TOKEN_1, validityPeriod, _Settings["default"].app.context);
        user.scopes = response.data.scopes.split(' ');
        AuthManager.setUser(user);
      })["catch"](function (error) {
        console.error('Authentication Error:\n', error);

        _Utils["default"].setEnvironment(previous_environment);
      });
      return promised_response;
    }
    /**
     * Revoke the issued OAuth access token for currently logged in user and clear both cookie and localstorage data.
     */

  }, {
    key: "logout",
    value: function logout() {
      var authHeader = 'Bearer ' + AuthManager.getUser().getPartialToken(); // TODO Will have to change the logout end point url to contain the app context(i.e. publisher/store, etc.)

      var url = _Utils["default"].getAppLogoutURL();

      var headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: authHeader
      };

      var promisedLogout = _axios["default"].post(url, null, {
        headers: headers
      });

      return promisedLogout.then(function (response) {
        _Utils["default"].delete_cookie(_User["default"].CONST.WSO2_AM_TOKEN_1, _Settings["default"].app.context);

        localStorage.removeItem(_User["default"].CONST.LOCALSTORAGE_USER);
        new _APIClientFactory["default"]().destroyAPIClient(_Utils["default"].getEnvironment().label); // Single client should be re initialize after log out
      });
    }
    /**
     * Call Token API with refresh token grant type
     * @param {Object} environment - Name of the environment
     * @return {AxiosPromise}
     */

  }, {
    key: "registerUser",

    /**
     * Register anonymous user by generating token using client_credentials grant type
     * @param {Object} environment : environment object
     * @returns {AxiosPromise} : Promise object with the request made
     */
    value: function registerUser(environment) {
      var headers = {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      };
      var data = {
        grant_type: 'client_credentials',
        validity_period: 3600,
        scopes: 'apim:self-signup'
      };
      var promised_response = (0, _axios["default"])(_Utils["default"].getSignUpTokenPath(environment), {
        method: 'POST',
        data: _qs["default"].stringify(data),
        headers: headers,
        withCredentials: false
      });
      promised_response.then(function (response) {
        var validityPeriod = response.data.validityPeriod;
        var WSO2_AM_TOKEN_1 = response.data.partialToken;
        var user = new _User["default"](_Utils["default"].getEnvironment().label, response.data.authUser, response.data.idToken);
        user.setPartialToken(WSO2_AM_TOKEN_1, validityPeriod, _Settings["default"].app.context);
        user.scopes = response.data.scopes;
        AuthManager.setUser(user);
      })["catch"](function (error) {
        console.error('Authentication Error: ', error);
      });
      return promised_response;
    }
  }], [{
    key: "unauthorizedErrorHandler",
    value: function unauthorizedErrorHandler(error_response) {
      if (error_response.status !== 401) {
        /* Skip unrelated response code to handle in unauthorizedErrorHandler */
        throw error_response;
        /* re throwing the error since we don't handle it here and propagate to downstream error handlers in catch chain */
      }

      var message = 'The session has expired' + '.<br/> You will be redirect to the login page ...';

      if (typeof noty !== 'undefined') {
        noty({
          text: message,
          type: 'error',
          dismissQueue: true,
          modal: true,
          progressBar: true,
          timeout: 5000,
          layout: 'top',
          theme: 'relax',
          maxVisible: 10,
          callback: {
            afterClose: function afterClose() {
              window.location = loginPageUri;
            }
          }
        });
      } else {
        throw error_response;
      }
    }
    /**
     * An user object is return in present of user logged in user info in browser local storage, at the same time checks for partialToken in the cookie as well.
     * This may give a partial indication(passive check not actually check the token validity via an API) of whether the user has logged in or not, The actual API call may get denied
     * if the cookie stored access token is invalid/expired
     * @param {string} environmentName: label of the environment, the user to be retrieved from
     * @returns {User | null} Is any user has logged in or not
     */

  }, {
    key: "getUser",
    value: function getUser() {
      var environmentName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _Utils["default"].getCurrentEnvironment().label;
      var userData = localStorage.getItem("".concat(_User["default"].CONST.LOCALSTORAGE_USER, "_").concat(environmentName));

      var partialToken = _Utils["default"].getCookie(_User["default"].CONST.WSO2_AM_TOKEN_1, environmentName);

      var refreshToken = _Utils["default"].getCookie(_User["default"].CONST.WSO2_AM_REFRESH_TOKEN_1, environmentName);

      var isLoginCookie = _Utils["default"].getCookie('IS_LOGIN', 'DEFAULT');

      if (isLoginCookie) {
        _Utils["default"].deleteCookie('IS_LOGIN', _Settings["default"].app.context, 'DEFAULT');

        localStorage.removeItem("".concat(_User["default"].CONST.LOCALSTORAGE_USER, "_").concat(environmentName));
        return null;
      }

      if (!(userData && (partialToken || refreshToken))) {
        return null;
      }

      return _User["default"].fromJson(JSON.parse(userData), environmentName);
    }
  }, {
    key: "hasBasicLoginPermission",
    value: function hasBasicLoginPermission(scopes) {
      return scopes.includes('apim:subscribe');
    }
    /**
     * Do token introspection and Get the currently logged in user's details
     * When user authentication happens via redirection flow, This method might get used to
     * retrieve the user information
     * after setting the access token parts in cookies, Because access token parts are stored in /publisher path ,
     * just making an external request in same path will submit both cookies, allowing the service to build the
     * complete access token and do the introspection.
     * Return a promise resolving to user object iff introspect calls return active user else null
     * @static
     * @returns {Promise} fetch response promise resolving to introspect response JSON or null otherwise
     * @memberof AuthManager
     */

  }, {
    key: "getUserFromToken",
    value: function getUserFromToken() {
      var _this = this;

      var partialToken = _Utils["default"].getCookie(_User["default"].CONST.WSO2_AM_TOKEN_1);

      if (!partialToken) {
        return new Promise(function (resolve, reject) {
          return reject(new Error('No partial token found'));
        });
      }

      var promisedResponse = fetch(_Settings["default"].app.context + '/services/auth/introspect', {
        credentials: 'same-origin'
      });
      return promisedResponse.then(function (response) {
        return response.json();
      }).then(function (data) {
        var user = null;
        var username;

        if (data.active) {
          var currentEnv = _Utils["default"].getCurrentEnvironment();

          var count = (data.username.match(/@/g) || []).length;

          if (data.username.endsWith('@carbon.super') && count <= 1) {
            username = data.username.replace('@carbon.super', '');
          } else {
            username = data.username;
          }

          user = new _User["default"](currentEnv.label, username);
          var scopes = data.scope.split(' ');

          if (_this.hasBasicLoginPermission(scopes)) {
            user.scopes = scopes;
            AuthManager.setUser(user, currentEnv.label);
          } else {
            console.warn('The user with ' + partialToken + ' doesn\'t have enough permission!');
            throw new Error(_Constants["default"].errorCodes.INSUFFICIENT_PREVILEGES);
          }
        } else {
          console.warn('User with ' + partialToken + ' is not active!');
          throw new Error(_Constants["default"].errorCodes.INVALID_TOKEN);
        }

        return user;
      });
    }
    /**
     * Persist an user in browser local storage and in-memory, Since only one use can be logged
     * into the application at a time,This method will override any previously persist user data.
     * @param {User} user : An instance of the {User} class
     * @param {string} environmentName: label of the environment to be set the user
     */

  }, {
    key: "setUser",
    value: function setUser(user, environmentName) {
      environmentName = environmentName || _Utils["default"].getEnvironment().label;

      if (!(user instanceof _User["default"])) {
        throw new Error('Invalid user object');
      }

      if (user) {
        localStorage.setItem("".concat(_User["default"].CONST.LOCALSTORAGE_USER, "_").concat(environmentName), JSON.stringify(user.toJson()));
      }
    }
    /**
     *
     * Get scope for resources
     * @static
     * @param {String} resourcePath
     * @param {String} resourceMethod
     * @returns Boolean
     * @memberof AuthManager
     */

  }, {
    key: "hasScopes",
    value: function hasScopes(resourcePath, resourceMethod) {
      var user = AuthManager.getUser();

      if (user) {
        var userScopes = user.scopes;

        var validScope = _APIClient["default"].getScopeForResource(resourcePath, resourceMethod);

        return validScope.then(function (scope) {
          return userScopes.includes(scope);
        });
      }
    }
  }, {
    key: "refresh",
    value: function refresh(environment) {
      var params = {
        refresh_token: AuthManager.getUser(environment.label).getRefreshPartialToken(),
        validity_period: -1,
        scopes: AuthManager.CONST.USER_SCOPES
      };
      var referrer = document.referrer.indexOf('https') !== -1 ? document.referrer : null;
      var url = _Settings["default"].app.context + environment.refreshTokenPath;
      var headers = {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Alt-Referer': referrer
      };
      return fetch(url, {
        method: 'POST',
        body: _qs["default"].stringify(params),
        headers: headers
      });
    }
  }]);

  return AuthManager;
}(); // TODO: derive this from swagger definitions ~tmkb


AuthManager.CONST = {
  USER_SCOPES: 'apim:api_key apim:app_manage apim:app_update apim:dedicated_gateway apim:self-signup ' + 'apim:store_settings apim:sub_alert_manage apim:sub_manage apim:subscribe openid'
};
var _default = AuthManager;
exports["default"] = _default;