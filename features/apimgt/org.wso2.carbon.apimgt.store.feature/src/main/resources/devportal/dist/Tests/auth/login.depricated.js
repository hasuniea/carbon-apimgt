"use strict";

var _AuthManager = _interopRequireDefault(require("../../src/app/data/AuthManager"));

var _mocha = require("mocha");

var _chai = require("chai");

var _utils = _interopRequireDefault(require("../utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
 * Copyright (c) 2019, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
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
(0, _mocha.describe)('AuthManager', function () {
  (0, _mocha.before)(function () {
    _utils["default"].setupMockEnvironment();
  });
  (0, _mocha.describe)('#authenticateUser()', function () {
    (0, _mocha.it)('Should return HTTP 200 status code if user authenticate', function () {
      var authenticator = new _AuthManager["default"]();
      var environment = {
        "host": "localhost:9292",
        "loginTokenPath": "/login/token",
        "label": "Production"
      };
      var promised_auth = authenticator.authenticateUser('admin', 'admin', environment);
      return promised_auth.then(function (response) {
        _chai.assert.equal(response.status, 200);
      });
    });
  });
});