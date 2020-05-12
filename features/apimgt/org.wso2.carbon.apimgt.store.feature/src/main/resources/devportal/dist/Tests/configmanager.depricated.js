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

var _ConfigManager = _interopRequireDefault(require("../src/app/data/ConfigManager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

_utils["default"].setupMockEnvironment();

(0, _mocha.describe)("ConfigManager", function () {
  (0, _mocha.before)(function () {
    _utils["default"].setupMockEnvironment();
  });
  (0, _mocha.describe)("#readEnvironmentConfigs()", function () {
    (0, _mocha.it)("Should return HTTP 200 status code if configurations are read", function () {
      var promisedEnvironments = _ConfigManager["default"].getConfigs().environments;

      return promisedEnvironments.then(function (response) {
        _chai.assert.equal(response.status, 200, "Configuration read failed!");

        _chai.assert.isNotNull(response.data.environmentName, "Environment-name is NULL!");

        var environments = response.data.environments;

        _chai.assert.isAtLeast(environments.length, 1, "There should be AT LEAST one environment!");

        var _iterator = _createForOfIteratorHelper(environments),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var environment = _step.value;

            _chai.assert.isNotEmpty(environment.loginTokenPath, "Login Token Path of environment " + environment.label + " is EMPTY!");
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      });
    });
  });
});