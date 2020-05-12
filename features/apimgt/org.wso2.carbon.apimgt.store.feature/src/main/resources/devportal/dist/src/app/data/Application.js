"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _APIClientFactory = _interopRequireDefault(require("./APIClientFactory"));

var _Resource2 = _interopRequireDefault(require("./Resource"));

var _Utils = _interopRequireDefault(require("./Utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Class to expose Application {Resource} related operations i:e: Get all Application , Delete, Generate Keys ect..
 * @param {string} name Application name
 * @param {string} description Application description
 * @param {string} throttlingTier Application throttling tier
 * @param {string} kwargs Arguments
 */
var Application = /*#__PURE__*/function (_Resource) {
  _inherits(Application, _Resource);

  var _super = _createSuper(Application);

  function Application(name, description, throttlingTier, kwargs) {
    var _this;

    _classCallCheck(this, Application);

    _this = _super.call(this);
    _this.id = kwargs ? kwargs.applicationId : null;
    _this.client = new _APIClientFactory["default"]().getAPIClient(_Utils["default"].getEnvironment().label).client;
    _this.keys = new Map();
    _this.tokens = new Map();

    for (var key in kwargs) {
      if (kwargs.hasOwnProperty(key)) {
        if (key === 'keys') {
          _this._setKeys(kwargs[key]);

          continue;
        }

        _this[key] = kwargs[key];
      }
    }

    return _this;
  }
  /** *
   * Set this.keys object by iterating the keys array received from REST API
   * @param {Array} keys  An array of keys object containing either PRODUCTION or/and SANDBOX key information
   * @private
   */


  _createClass(Application, [{
    key: "_setKeys",
    value: function _setKeys(keys) {
      var _iterator = _createForOfIteratorHelper(keys),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var keyObj = _step.value;
          this.keys.set(keyObj.keyType, keyObj);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    /** *
     * Set this.tokens object by iterating the keys array received from REST API
     * @param {Array} keys  An array of keys object containing either PRODUCTION or/and SANDBOX key information
     * @private
     */

  }, {
    key: "_setTokens",
    value: function _setTokens(keys) {
      var _iterator2 = _createForOfIteratorHelper(keys),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var keyObj = _step2.value;
          this.tokens.set(keyObj.keyType, keyObj.token);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
    /** *
     * Get keys of the current instance of an application
     * @param  {string} keyType Key type either `Production` or `SandBox`
     * @returns {promise} Set the fetched CS/CK into current instance and return keys array as Promise object
     */

  }, {
    key: "getKeys",
    value: function getKeys(keyType) {
      var _this2 = this;

      return this.client.then(function (client) {
        return client.apis['Application Keys'].get_applications__applicationId__keys({
          applicationId: _this2.applicationId
        });
      }).then(function (keysResponse) {
        var keys = keysResponse.obj.list;

        _this2._setKeys(keys);

        _this2._setTokens(keys);

        return _this2.keys;
      });
    }
    /** *
     * Generate token for this application instance
     * @param {string} type token type
     * @param {string} validityPeriod token validityPeriod
     * @param {string} selectedScopes token scopes
     * @returns {promise} Set the generated token into current
     * instance and return tokenObject received as Promise object
     */

  }, {
    key: "generateToken",
    value: function generateToken(type, validityPeriod, selectedScopes) {
      var _this3 = this;

      var promiseToken = this.getKeys().then(function () {
        return _this3.client;
      }).then(function (client) {
        var keys = _this3.keys.get(type);

        var accessToken = _this3.tokens.get(type);

        var requestContent = {
          consumerSecret: keys.consumerSecret,
          validityPeriod: validityPeriod,
          revokeToken: accessToken.accessToken,
          scopes: selectedScopes,
          additionalProperties: ''
        };
        var payload = {
          applicationId: _this3.id,
          keyType: type,
          body: requestContent
        };
        return client.apis['Application Tokens'].post_applications__applicationId__keys__keyType__generate_token(payload);
      });
      return promiseToken.then(function (tokenResponse) {
        var token = tokenResponse.obj;

        _this3.tokens.set(type, token);

        return token;
      });
    }
    /** *
     * Generate Consumer Secret and Consumer Key for this application instance
     * @param {string} keyType Key type either `Production` or `SandBox`
     * @param {string[]} supportedGrantTypes Grant types supported
     * @param  {string} callbackUrl callback url
     * @param  {string} tokenType Token type either `OAUTH` or `JWT`
     * @param {string} additionalProperties additional properties that needed for application.
     * @returns {promise} Set the generated token into current instance and return tokenObject
     * received as Promise object
     */

  }, {
    key: "generateKeys",
    value: function generateKeys(keyType, supportedGrantTypes, callbackUrl, validityTime, additionalProperties) {
      var _this4 = this;

      var promisedKeys = this.client.then(function (client) {
        var requestContent = {
          keyType: keyType,

          /* TODO: need to support dynamic key types ~tmkb */
          grantTypesToBeSupported: supportedGrantTypes,
          callbackUrl: callbackUrl,
          validityTime: validityTime,
          additionalProperties: additionalProperties
        };
        var payload = {
          applicationId: _this4.id,
          body: requestContent
        };
        return client.apis['Application Keys'].post_applications__applicationId__generate_keys(payload);
      });
      return promisedKeys.then(function (keysResponse) {
        _this4.keys.set(keyType, keysResponse.obj);

        return _this4.keys.get(keyType);
      });
    }
    /** *
     * Cleanup Consumer Secret and Consumer Key for this application instance
     * @param {string} keyType Key type either `Production` or `SandBox`
     * @returns {promise} Set the generated token into current instance and return tokenObject
     * received as Promise object
     */

  }, {
    key: "cleanUpKeys",
    value: function cleanUpKeys(keyType) {
      var _this5 = this;

      return this.client.then(function (client) {
        return client.apis['Application Keys'].post_applications__applicationId__keys__keyType__clean_up({
          applicationId: _this5.id,
          keyType: keyType
        });
      }).then(function (response) {
        _this5.keys = new Map();
        _this5.tokens = new Map();
        return response.ok;
      });
    }
    /** *
     * Generate Consumer Secret and Consumer Key for this application instance
     * @param  {string} tokenType Token Type either `OAUTH` or `JWT`
     * @param  {string} keyType Key type either `Production` or `SandBox`
     * @param {string[]} supportedGrantTypes Grant types supported
     * @param  {string} callbackUrl callback url
     * @param  {String} consumerKey Consumer key of application
     * @param  {String} consumerSecret Consumer secret of application
     * @param  {String} additionalProperties Additional properties for the oauth application
     * @returns {promise} Update the callbackURL and/or supportedGrantTypes
     */

  }, {
    key: "updateKeys",
    value: function updateKeys(tokenType, keyType, supportedGrantTypes, callbackUrl, consumerKey, consumerSecret, additionalProperties) {
      var _this6 = this;

      var promisedPut = this.client.then(function (client) {
        var requestContent = {
          consumerKey: consumerKey,
          consumerSecret: consumerSecret,
          supportedGrantTypes: supportedGrantTypes,
          callbackUrl: callbackUrl,
          keyType: keyType,
          tokenType: tokenType,
          additionalProperties: additionalProperties
        };
        var payload = {
          applicationId: _this6.id,
          keyType: keyType,
          body: requestContent
        };
        return client.apis['Application Keys'].put_applications__applicationId__keys__keyType_(payload);
      });
      return promisedPut.then(function (keysResponse) {
        _this6.keys.set(keyType, keysResponse.obj);

        return _this6;
      });
    }
    /**
     * Regenerate Consumer Secret for this application instance
     * @param {String} consumerKey Consumer key of application
     * @param {string} keyType Key type either `Production` or `SandBox`
     * @returns {promise} Update the consumerSecret
     */

  }, {
    key: "regenerateSecret",
    value: function regenerateSecret(consumerKey, keyType) {
      var _this7 = this;

      var promisedPost = this.client.then(function (client) {
        var payload = {
          applicationId: _this7.id,
          keyType: keyType,
          body: consumerKey
        };
        return client.apis['Application Keys'].post_applications__applicationId__keys__keyType__regenerate_secret(payload);
      });
      return promisedPost.then(function (secretResponse) {
        var secret = secretResponse.obj;

        _this7.keys.set(keyType, secretResponse.obj);

        return secret;
      });
    }
    /**
     * Provide Consumer Key and Secret of Existing OAuth Apps
     *
     * @param keyType           key type, either PRODUCTION or SANDBOX
     * @param consumerKey       consumer key of the OAuth app
     * @param consumerSecret    consumer secret of the OAuth app
     * @returns {*}
     */

  }, {
    key: "provideKeys",
    value: function provideKeys(keyType, consumerKey, consumerSecret) {
      var _this8 = this;

      var promisedKeys = this.client.then(function (client) {
        var requestContent = {
          consumerKey: consumerKey,
          consumerSecret: consumerSecret,
          keyType: keyType
        };
        var payload = {
          applicationId: _this8.id,
          body: requestContent
        };
        return client.apis['Application Keys'].post_applications__applicationId__map_keys(payload);
      });
      return promisedKeys.then(function (keysResponse) {
        _this8.keys.set(keyType, keysResponse.obj);

        return _this8.keys.get(keyType);
      });
    }
  }], [{
    key: "get",
    value: function get(id) {
      var _this9 = this;

      var apiClient = new _APIClientFactory["default"]().getAPIClient(_Utils["default"].getEnvironment());
      var promisedGet = apiClient.client.then(function (client) {
        return client.apis.Applications.get_applications__applicationId_({
          applicationId: id
        }, _this9._requestMetaData());
      });
      return promisedGet.then(function (response) {
        var appJson = response.obj;
        return new Application(appJson.name, appJson.description, appJson.throttlingTier, appJson);
      });
    }
  }, {
    key: "all",
    value: function all() {
      var _this10 = this;

      var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var sortOrder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'asc';
      var sortBy = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'name';
      var apiClient = new _APIClientFactory["default"]().getAPIClient(_Utils["default"].getEnvironment());
      var promisedAll = apiClient.client.then(function (client) {
        return client.apis.Applications.get_applications({
          limit: limit,
          offset: offset,
          sortOrder: sortOrder,
          sortBy: sortBy
        }, _this10._requestMetaData());
      });
      return promisedAll.then(function (response) {
        return response.obj;
      });
    }
  }, {
    key: "deleteApp",
    value: function deleteApp(id) {
      var _this11 = this;

      var apiClient = new _APIClientFactory["default"]().getAPIClient(_Utils["default"].getEnvironment());
      var promisedDelete = apiClient.client.then(function (client) {
        return client.apis.Applications.delete_applications__applicationId_({
          applicationId: id
        }, _this11._requestMetaData());
      });
      return promisedDelete.then(function (response) {
        return response.ok;
      });
    }
  }]);

  return Application;
}(_Resource2["default"]);

exports["default"] = Application;
Application.KEY_TYPES = {
  PRODUCTION: 'PRODUCTION',
  SANDBOX: 'SANDBOX'
};
Application.TOKEN_TYPES = {
  JWT: {
    key: 'JWT',
    displayName: 'Self-contained (JWT)'
  },
  OAUTH: {
    key: 'OAUTH',
    displayName: 'Reference (Opaque)'
  }
};