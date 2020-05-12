"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _os = _interopRequireDefault(require("os"));

var _Settings = require("Settings");

var _AuthManager = _interopRequireDefault(require("../src/app/data/AuthManager.jsx"));

var _Utils = _interopRequireDefault(require("../src/app/data/Utils"));

var _User = _interopRequireDefault(require("../src/app/data/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TestUtils = /*#__PURE__*/function () {
  function TestUtils() {
    _classCallCheck(this, TestUtils);
  }

  _createClass(TestUtils, null, [{
    key: "setupMockEnvironment",
    value: function setupMockEnvironment() {
      var hostname = _os["default"].hostname(); // for IP address Object.entries(os.networkInterfaces())[0][1][0].address


      global.window = {
        location: {
          hash: '',
          host: hostname + ':9292',
          hostname: hostname,
          origin: 'https://' + hostname + ':9292',
          pathname: '/',
          port: '9292',
          protocol: 'https:'
        }
      };
      global.document = {
        value_: '',

        get cookie() {
          return this.value_;
        },

        set cookie(value) {
          this.value_ += value + '; ';
        },

        clearCookies: function clearCookies() {
          this.value_ = '';
        }
      };
    }
    /**
     * Logged a user(get an OAuth access token) for a given user and set the *FULL* access tokens in WSO2_AM_TOKEN_1,
     * Since test request is made in node environment HTTP only cookies are also accessible, Hence merging HTTP only and
     * other to build the complete access token
     * @param username
     * @param password
     * @returns {AxiosPromise}
     */

  }, {
    key: "userLogin",
    value: function userLogin() {
      var username = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'admin';
      var password = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'admin';
      var authenticator = new _AuthManager["default"]();
      var promisedAuth = authenticator.authenticateUser(username, password);
      promisedAuth.then(function (response) {
        var WSO2_AM_TOKEN_MSF4J;

        var _iterator = _createForOfIteratorHelper(response.headers['set-cookie']),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var cookie = _step.value;
            var parts = cookie.split('=');

            if (parts[0] === _User["default"].CONST.WSO2_AM_TOKEN_MSF4J) {
              WSO2_AM_TOKEN_MSF4J = parts[1].split(';')[0];
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        var _response$data = response.data,
            partialToken = _response$data.partialToken,
            validityPeriod = _response$data.validityPeriod;
        document.clearCookies();

        _Utils["default"].setCookie(_User["default"].CONST.WSO2_AM_TOKEN_1, partialToken + WSO2_AM_TOKEN_MSF4J, validityPeriod, _Settings.app.context);
      });
      return promisedAuth;
    }
  }]);

  return TestUtils;
}();

var _default = TestUtils;
exports["default"] = _default;