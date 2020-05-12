"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _Settings = _interopRequireDefault(require("Settings"));

var _AuthManager = _interopRequireDefault(require("./AuthManager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Utility class for Store application
 */
var Utils = /*#__PURE__*/function () {
  function Utils() {
    _classCallCheck(this, Utils);
  }

  _createClass(Utils, null, [{
    key: "getCookie",

    /**
     * Get JavaScript accessible cookies saved in browser, by giving the cooke name.
     * @param {String} cookieName : Name of the cookie which need to be retrived
     * @param {String} environmentName : label of the environment of the cookie
     * @returns {String|null} : If found a cookie with given name , return its value,Else null value is returned
     */
    value: function getCookie(cookieName, environmentName) {
      environmentName = environmentName || Utils.getEnvironment().label;
      var pairs = document.cookie.split(";");
      var cookie = null;

      var _iterator = _createForOfIteratorHelper(pairs),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var pair = _step.value;
          pair = pair.split("=");
          var cookie_name = pair[0].trim();
          var value = encodeURIComponent(pair[1]);

          if (cookie_name === "".concat(cookieName, "_").concat(environmentName)) {
            cookie = value;
            break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return cookie;
    }
    /**
    * Get JavaScript accessible cookies saved in browser, by giving the cooke name.
    * @param {String} name - Name of the cookie which need to be retrieved
    * @returns {String|null} - If found a cookie with given name , return its value,Else null value is returned
    */

  }, {
    key: "getCookieWithoutEnvironment",
    value: function getCookieWithoutEnvironment(name) {
      var pairs = document.cookie.split(';');
      var cookie = null;

      var _iterator2 = _createForOfIteratorHelper(pairs),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var pair = _step2.value;
          pair = pair.split('=');
          var cookieName = pair[0].trim();

          if (pair[1] !== 'undefined') {
            var value = encodeURIComponent(pair[1]);

            if (cookieName === name) {
              cookie = value;
              break;
            }
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return cookie;
    }
    /**
     * Delete a browser cookie given its name
     * @param {String} name : Name of the cookie which need to be deleted
     * @param {String} path : Path of the cookie which need to be deleted
     * @param {String} environmentName: label of the environment of the cookie
     */

  }, {
    key: "deleteCookie",
    value: function deleteCookie(name, path, environmentName) {
      environmentName = environmentName || Utils.getEnvironment().label;
      document.cookie = "".concat(name, "_").concat(environmentName, "=; path=").concat(path, "; expires=Thu, 01 Jan 1970 00:00:01 GMT");
    }
    /**
     * Set a cookie with given name and value assigned to it. Cookies can be only set to the same origin,
     * which the script is running
     * @param {String} name : Name of the cookie which need to be set
     * @param {String} value : Value of the cookie, expect it to be URLEncoded
     * @param {number} validityPeriod :  (Optional) Validity period of the cookie in seconds
     * @param {String} path : Path which needs to set the given cookie
     * @param {boolean} secured : secured parameter is set
     */

  }, {
    key: "setCookie",
    value: function setCookie(name, value, validityPeriod) {
      var path = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "/";
      var environmentName = arguments.length > 4 ? arguments[4] : undefined;
      var secured = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;
      environmentName = environmentName || Utils.getEnvironment().label;
      var expiresDirective = "";
      var securedDirective = secured ? "; Secure" : "";

      if (validityPeriod) {
        var date = new Date();
        date.setTime(date.getTime() + validityPeriod * 1000);
        expiresDirective = "; expires=" + date.toUTCString();
      }

      document.cookie = "".concat(name, "_").concat(environmentName, "=").concat(value, "; path=").concat(path).concat(expiresDirective).concat(securedDirective);
    }
    /**
     * Given an object returns whether the object is empty or not
     * @param {Object} object : Any JSON object
     * @returns {boolean}
     */

  }, {
    key: "isEmptyObject",
    value: function isEmptyObject(object) {
      return Object.keys(object).length === 0 && object.constructor === Object;
    }
    /**
     * Get the current environment from local-storage
     * @returns {Object} environment: {label, host, loginTokenPath}
     */

  }, {
    key: "getEnvironment",
    value: function getEnvironment() {
      if (Utils._environment) {
        return Utils._environment;
      }

      var environmentData = localStorage.getItem(Utils.CONST.LOCALSTORAGE_ENVIRONMENT);

      if (!environmentData) {
        return Utils.getDefaultEnvironment();
      }

      return JSON.parse(environmentData);
    }
    /**
     * Get the current environment from local-storage
     * @returns {Object} environment: {label, host, loginTokenPath}
     */

  }, {
    key: "getCurrentEnvironment",
    value: function getCurrentEnvironment() {
      if (Utils.environment) {
        return Utils.environment;
      }

      var environmentData = localStorage.getItem(Utils.CONST.LOCAL_STORAGE_ENVIRONMENT);

      if (!environmentData) {
        return Utils.getDefaultEnvironment();
      }

      return JSON.parse(environmentData);
    }
    /**
     * Get an environment object with default values.
     * @returns {Object} environment: {label: string, host: string, loginTokenPath: string}
     * @private
     */

  }, {
    key: "getDefaultEnvironment",
    value: function getDefaultEnvironment() {
      return {
        label: 'Default',
        host: window.location.host,
        loginTokenPath: '/login/token',
        refreshTokenPath: '/services/refresh/refresh.jag'
      };
    }
    /**
     * Get current environment's index from the given environment array
     * @param {Array} environments
     * @param {string} name: name of the environment [default]: current environment name
     * @returns {number}
     */

  }, {
    key: "getEnvironmentID",
    value: function getEnvironmentID(environments) {
      var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Utils.getEnvironment().label;

      if (!name) {
        return 0;
      }

      for (var i = 0; i < environments.length; i++) {
        if (name === environments[i].label) {
          return i;
        }
      }

      return -1;
    }
    /**
     * Store the given environment in local-storage
     * @param {object} environment
     */

  }, {
    key: "setEnvironment",
    value: function setEnvironment(environment) {
      if (!environment) {
        environment = Utils.getDefaultEnvironment();
      }

      if (!environment.host) {
        environment.host = window.location.host;
      } //Store environment.


      Utils._environment = environment;
      localStorage.setItem(Utils.CONST.LOCALSTORAGE_ENVIRONMENT, JSON.stringify(environment));
    }
  }, {
    key: "getPromised_DCRappInfo",
    value: function getPromised_DCRappInfo(environment) {
      return _axios["default"].get(Utils.getDCRappInfoRequestURL(environment));
    }
  }, {
    key: "getDCRappInfoRequestURL",
    value: function getDCRappInfoRequestURL() {
      var environment = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Utils.getEnvironment();
      return "".concat(Utils.CONST.PROTOCOL).concat(environment.host).concat(Utils.CONST.DCR_APP_INFO).concat(_Settings["default"].app.context);
    }
  }, {
    key: "getAppLogoutURL",
    value: function getAppLogoutURL() {
      return Utils.CONST.PROTOCOL + Utils.getEnvironment().host + Utils.CONST.LOGOUT + _Settings["default"].app.context;
    }
  }, {
    key: "getLoginTokenPath",
    value: function getLoginTokenPath() {
      var environment = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Utils.getEnvironment();
      return "".concat(Utils.CONST.PROTOCOL).concat(environment.host).concat(Utils.CONST.LOGIN_TOKEN_PATH).concat(_Settings["default"].app.context);
    }
  }, {
    key: "getSignUpTokenPath",
    value: function getSignUpTokenPath(environment) {
      return "".concat(Utils.CONST.PROTOCOL).concat(environment.host).concat(Utils.CONST.LOGIN_SIGN_UP_PATH).concat(_Settings["default"].app.context);
    }
  }, {
    key: "getSwaggerURL",
    value: function getSwaggerURL() {
      return "https://" + Utils.getEnvironment().host + Utils.CONST.SWAGGER_YAML;
    }
  }, {
    key: "getBrowserLocal",
    value: function getBrowserLocal() {
      var language = navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage;
      var languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];
      return languageWithoutRegionCode || language;
    }
  }]);

  return Utils;
}();

_defineProperty(Utils, "downloadFile", function (response) {
  var fileName = '';
  var contentDisposition = response.headers['content-disposition'];

  if (contentDisposition && contentDisposition.indexOf('attachment') !== -1) {
    var fileNameReg = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
    var matches = fileNameReg.exec(contentDisposition);
    if (matches != null && matches[1]) fileName = matches[1].replace(/['"]/g, '');
  }

  var contentType = response.headers['content-type'];
  var blob = new Blob([response.data], {
    type: contentType
  });

  if (typeof window.navigator.msSaveBlob !== 'undefined') {
    window.navigator.msSaveBlob(blob, fileName);
  } else {
    var URL = window.URL || window.webkitURL;
    var downloadUrl = URL.createObjectURL(blob);

    if (fileName) {
      var aTag = document.createElement('a');

      if (typeof aTag.download === 'undefined') {
        window.location = downloadUrl;
      } else {
        aTag.href = downloadUrl;
        aTag.download = fileName;
        document.body.appendChild(aTag);
        aTag.click();
      }
    } else {
      window.location = downloadUrl;
    }

    setTimeout(function () {
      URL.revokeObjectURL(downloadUrl);
    }, 100);
  }
});

Utils.CONST = {
  LOCALSTORAGE_ENVIRONMENT: 'environment_store',
  //TODO: fix/remove below wrong paths
  DCR_APP_INFO: '/login/login',
  LOGOUT: '/login/logout',
  LOGIN_TOKEN_PATH: '/login/token',
  LOGIN_SIGN_UP_PATH: '/login/signup',
  LOGOUT_CALLBACK: '/services/auth/callback/logout',
  SWAGGER_YAML: '/api/am/store/v1/swagger.yaml',
  PROTOCOL: 'https://'
};
/**
 * Current environment
 * @type {object} environment object
 * @private
 */

Utils._environment = undefined;
var _default = Utils;
exports["default"] = _default;