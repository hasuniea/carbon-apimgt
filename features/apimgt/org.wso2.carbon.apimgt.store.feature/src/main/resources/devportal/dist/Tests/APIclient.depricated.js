"use strict";

var _mocha = require("mocha");

var _chai = require("chai");

var _APIClient = _interopRequireDefault(require("../src/app/data/APIClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _mocha.describe)("APIClient", function () {
  (0, _mocha.describe)("#Constructor", function () {
    (0, _mocha.it)("Should return same instance at all time: ", function () {
      var instance_one = new _APIClient["default"]();
      var instance_two = new _APIClient["default"]();

      _chai.assert.notEqual(instance_one, instance_two, "Two instances are equal!");
    });
  });
});