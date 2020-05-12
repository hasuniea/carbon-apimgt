"use strict";

var _api = _interopRequireDefault(require("../src/app/data/api"));

var _mocha = require("mocha");

var _chai = require("chai");

var _utils = _interopRequireDefault(require("./utils"));

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
_utils["default"].setupMockEnvironment();

(0, _mocha.describe)('Api', function () {
  (0, _mocha.before)("Make any REST API calls ,Login a user and get access token", function (done) {
    _utils["default"].userLogin().then(function (response) {
      done();
    });
  });
  (0, _mocha.describe)('#create()', function () {
    (0, _mocha.it)('Should return HTTP 201 status code with newly created API UUID', function () {
      var api = new _api["default"]();
      var c_time = Date.now() / 1000 | 0;
      var data = {
        "name": "test_api_" + c_time,
        "context": "/testing_" + c_time,
        "version": "1.0.0"
      };
      var promised_create = api.create(data);
      return promised_create.then(function (response) {
        _chai.assert.equal(response.status, 201, 'API creation failed!');
      });
    });
  });
  (0, _mocha.describe)('#createWithInlineEndpoint()', function () {
    (0, _mocha.it)('Should return HTTP 201 status code with newly created API UUID', function () {
      var api = new _api["default"]();
      var c_time = Date.now();
      var data = {
        "name": "test_api_" + c_time,
        "context": "/testing_" + c_time,
        "version": "1.0.0",
        "endpoint": [{
          type: "production",
          inline: {
            endpointConfig: JSON.stringify({
              serviceUrl: 'http://test.wso2.org/api/endpoint'
            }),
            endpointSecurity: {
              enabled: false
            },
            type: "http",
            name: "testing_endpoint" + c_time,
            maxTps: 1000
          }
        }]
      };
      var promised_create = api.create(data);
      return promised_create.then(function (response) {
        _chai.assert.isAtLeast(response.obj.endpoint.length, 1, 'No endpoint configurations were found');

        _chai.assert.equal(response.status, 201, 'API creation failed!');
      });
    });
  });
  (0, _mocha.describe)('#getAll', function () {
    (0, _mocha.it)('Should return all the APIs available to the store', function () {
      var api = new _api["default"]();
      var promised_all_apis = api.getAll();
      return promised_all_apis.then(function (response) {
        var apis = response.obj;

        _chai.assert.isTrue(apis.count === apis.list.length && response.status === 200, 'APIs count miss match or wrong response code');

        _chai.assert.isAtLeast(apis.count, 1, "APIs count should be at least one");
      });
    });
  });
  (0, _mocha.describe)('#delete', function () {
    (0, _mocha.it)('Should delete the previously created API using it`s returned UUID', function () {
      var api = new _api["default"]();
      var c_time = Date.now();
      var data = {
        "name": "test_api_" + c_time,
        "context": "/testing_" + c_time,
        "version": "1.0.0",
        "endpoint": []
      };
      var promised_create = api.create(data);
      return promised_create.then(function (response) {
        _chai.assert.equal(response.status, 201, 'API creation failed');

        var new_api_uuid = response.obj.id;
        var promised_delete = api.deleteAPI(new_api_uuid);
        return promised_delete.then(function (response) {
          return api.get(new_api_uuid)["catch"](function (error) {
            _chai.assert.equal(error.status, 404, 'API should be not found if it was deleted');
          }).then(function (response) {
            _chai.assert.isUndefined(response, 'API can`t be found if it`s deleted correctly');
          });
        });
      });
    });
  });
  (0, _mocha.describe)('#update', function () {
    (0, _mocha.it)('Should update an API with inline endpoints', function () {
      var api = new _api["default"]();
      var c_time = Date.now();
      var data = {
        "name": "test_api_update" + c_time,
        "context": "/testing_update" + c_time,
        "version": "1.0.0",
        "endpoint": []
      };
      var promised_create = api.create(data);
      return promised_create.then(function (response) {
        _chai.assert.equal(response.status, 201, 'API creation failed');

        var new_api_uuid = response.obj.id;
        var get_api = api.get(new_api_uuid);
        return get_api.then(function (response) {
          _chai.assert.equal(response.obj.id, new_api_uuid, 'API get operation failed');

          var endpoint_created_time = Date.now();
          var endpointData = [{
            inline: {
              endpointConfig: JSON.stringify({
                serviceUrl: 'http://test.wso2.org/api/endpoint'
              }),
              endpointSecurity: {
                enabled: false
              },
              type: "http",
              name: "testing_endpoint" + endpoint_created_time,
              maxTps: 1000
            }
          }];
          var update_data = response.obj; // Update the payload by setting the endpoint

          update_data.endpoint = endpointData;
          var promised_api_update = api.update(update_data);
          return promised_api_update.then(function (response) {
            _chai.assert.equal("testing_endpoint" + endpoint_created_time, response.obj.endpoint[0].inline.name, 'API update has failed');
          });
        });
      });
    });
  });
});