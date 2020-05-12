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
"use strict";

var _mocha = require("mocha");

var _chai = require("chai");

var _utils = _interopRequireDefault(require("./utils"));

var _api = _interopRequireDefault(require("../src/app/data/api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_utils["default"].setupMockEnvironment();

(0, _mocha.describe)("Endpoint", function () {
  (0, _mocha.before)("Make any REST API calls ,Login a user and get access token", function (done) {
    _utils["default"].userLogin().then(function (response) {
      done();
    });
  });
  (0, _mocha.describe)("#create()", function () {
    (0, _mocha.it)("Should create a global endpoint", function () {
      var api = new _api["default"]();
      var c_time = Date.now();
      var endpointDefinition = {
        endpointConfig: JSON.stringify({
          serviceUrl: 'http://test.wso2.org/api/endpoint'
        }),
        endpointSecurity: {
          enabled: true,
          username: "admin",
          password: "admin",
          type: "basic"
        },
        // type: digest
        type: "http",
        name: "testing_endpoint_" + c_time,
        maxTps: 1000
      };
      var promisedEndpoint = api.addEndpoint(endpointDefinition);
      return promisedEndpoint.then(function (response) {
        _chai.assert.equal(response.status, 201, "Endpoint creation failed!");

        _chai.assert.containsAllKeys(response.obj, endpointDefinition, "Response endpoint object doesn't match with created endpoint!");
      });
    });
  });
  (0, _mocha.describe)("#update()", function () {
    _mocha.it.skip("Should update existing endpoint resource", function () {
      var api = new _api["default"]();
      var c_time = Date.now();
      var endpointDefinition = api.getEndpoints();
      return endpointDefinition.then(function (response) {
        console.log(response);
      });
    });
  });
  (0, _mocha.describe)("#delete()", function () {
    /* TODO: not implemented ~tmkb*/
    (0, _mocha.it)("Should delete an endpoint resource by its ID", function () {
      var api = new _api["default"]();
      var c_time = Date.now();
      var endpointDefinition = api.getEndpoints();
      return endpointDefinition.then(function (response) {
        var endpoint = response.obj.list.pop(); // Poping the endpoint created in #create() case

        var promisedDelete = api.deleteEndpoint(endpoint.id);
        return promisedDelete.then(function (response) {
          _chai.assert.equal(response.status, 200, "Can't delete API!");
        });
      });
    });
  });
});