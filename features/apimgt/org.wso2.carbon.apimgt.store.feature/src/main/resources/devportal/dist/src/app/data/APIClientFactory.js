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

var _APIClient = _interopRequireDefault(require("./APIClient"));

var _Utils = _interopRequireDefault(require("./Utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var APIClientFactory = /*#__PURE__*/function () {
  function APIClientFactory() {
    _classCallCheck(this, APIClientFactory);

    if (APIClientFactory._instance) {
      return APIClientFactory._instance;
    }

    this._APIClientMap = new Map();
    APIClientFactory._instance = this;
  }

  _createClass(APIClientFactory, [{
    key: "getAPIClient",
    value: function getAPIClient(environmentLabel) {
      var api_Client = this._APIClientMap.get(environmentLabel);

      if (api_Client) {
        return api_Client;
      }

      api_Client = new _APIClient["default"](_Utils["default"].getEnvironment().host);

      this._APIClientMap.set(environmentLabel, api_Client);

      return api_Client;
    }
  }, {
    key: "destroyAPIClient",
    value: function destroyAPIClient(environmentLabel) {
      this._APIClientMap["delete"](environmentLabel);
    }
  }]);

  return APIClientFactory;
}();

APIClientFactory._instance = null;
var _default = APIClientFactory;
exports["default"] = _default;