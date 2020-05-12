/*
 * Copyright (c) 2017, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Utils = _interopRequireDefault(require("./Utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Represent an user logged in to the application, There will be allays one user per session and
 * this user details will be persist in browser localstorage.
 */
var User = /*#__PURE__*/function () {
  /**
   * Create a user for the given environment
   * @param {string} environment
   * @param {string} name
   * @param {string} id_token
   * @param {boolean} remember
   * @returns {User|null} user object
   */
  function User(environment, name, id_token) {
    var remember = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    _classCallCheck(this, User);

    var user = User._userMap.get(environment);

    if (user) {
      return user;
    }

    this.name = name;
    this._scopes = [];
    this._idToken = id_token;
    this._remember = remember;

    User._userMap.set(environment, this);
  }
  /**
   * OAuth scopes which are available for use by this user
   * @returns {Array} : An array of scopes
   */


  _createClass(User, [{
    key: "getPartialToken",

    /**
     * Get the JS accessible access token fragment from cookie storage.
     * @returns {String|null}
     */
    value: function getPartialToken() {
      return _Utils["default"].getCookie(User.CONST.WSO2_AM_TOKEN_1);
    }
    /**
     * Get the JS accessible refresh token fragment from cookie storage.
     * @returns {String|null}
     */

  }, {
    key: "getRefreshPartialToken",
    value: function getRefreshPartialToken() {
      return _Utils["default"].getCookie(User.CONST.WSO2_AM_REFRESH_TOKEN_1);
    }
    /**
     * Store the JavaScript accessible access token segment in cookie storage
     * @param {String} newToken : Part of the access token which needs when accessing REST API
     * @param {Number} validityPeriod : Validity period of the cookie in seconds
     * @param path Path which need to be set to cookie
     */

  }, {
    key: "setPartialToken",
    value: function setPartialToken(newToken, validityPeriod, path) {
      _Utils["default"].delete_cookie(User.CONST.WSO2_AM_TOKEN_1, path);

      _Utils["default"].setCookie(User.CONST.WSO2_AM_TOKEN_1, newToken, validityPeriod, path);
    }
    /**
     *
     * @param type
     */

  }, {
    key: "checkPermission",
    value: function checkPermission(type) {
      throw "Not implemented!";
    }
    /**
     * Provide user data in JSON structure.
     * @returns {JSON} : JSON representation of the user object
     */

  }, {
    key: "toJson",
    value: function toJson() {
      return {
        name: this.name,
        scopes: this._scopes,
        idToken: this._idToken,
        remember: this._remember
      };
    }
    /**
     * User utility method to create an user from JSON object.
     * @param {JSON} userJson : Need to provide user information in JSON structure to create an user object
     * @returns {User} : An instance of User(this) class.
     */

  }, {
    key: "scopes",
    get: function get() {
      return this._scopes;
    }
    /**
     * Set OAuth scopes available to be used by this user
     * @param {Array} newScopes :  An array of scopes
     */
    ,
    set: function set(newScopes) {
      Object.assign(this.scopes, newScopes);
    }
  }], [{
    key: "fromJson",
    value: function fromJson(userJson) {
      if (!userJson.name) {
        throw "Need to provide user `name` key in the JSON object, to create an user";
      }

      var _user = new User(_Utils["default"].getEnvironment().label, userJson.name);

      _user.scopes = userJson.scopes;
      _user.idToken = userJson.idToken;
      _user.rememberMe = userJson.remember;
      return _user;
    }
  }]);

  return User;
}();

exports["default"] = User;
User.CONST = {
  WSO2_AM_TOKEN_MSF4J: "WSO2_AM_TOKEN_MSF4J",
  WSO2_AM_TOKEN_1: "WSO2_AM_TOKEN_1",
  WSO2_AM_REFRESH_TOKEN_1: 'WSO2_AM_REFRESH_TOKEN_1',
  LOCALSTORAGE_USER: "wso2_user_store",
  DEVPORTAL_CLIENT_ID: "CLIENT_ID",
  DEVPORTAL_SESSION_STATE: "devportal_session_state"
};
/**
 * Map of users (key = environmentLabel, value = User instance)
 * @type {Map}
 * @private
 */

User._userMap = new Map();