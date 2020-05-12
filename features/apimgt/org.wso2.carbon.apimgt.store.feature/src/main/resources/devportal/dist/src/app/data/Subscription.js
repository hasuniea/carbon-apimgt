/**
 * Copyright (c) 2018, WSO2 Inc. (http://wso2.com) All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
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

/***
 * Class to expose Subscription {Resource} related operations
 */
var Subscription = /*#__PURE__*/function (_Resource) {
  _inherits(Subscription, _Resource);

  var _super = _createSuper(Subscription);

  function Subscription() {
    var _this;

    _classCallCheck(this, Subscription);

    _this = _super.call(this);
    _this.client = new _APIClientFactory["default"]().getAPIClient(_Utils["default"].getEnvironment().label).client;
    return _this;
  }
  /**
   * Get all Subscriptions
   * @param apiId id of the API
   * @param applicationId id of the application 
   * @param limit subscription count to return
   * @returns {promise} With all subscription for given applicationId or apiId.
   */


  _createClass(Subscription, [{
    key: "getSubscriptions",
    value: function getSubscriptions(apiId, applicationId) {
      var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 25;
      var promise_get = this.client.then(function (client) {
        return client.apis["Subscriptions"].get_subscriptions({
          apiId: apiId,
          applicationId: applicationId,
          limit: limit
        });
      });
      return promise_get;
    }
    /**
     * Get a single subscription
     * @param subscriptionUUID subscription UUID
     */

  }, {
    key: "getSubscription",
    value: function getSubscription(subscriptionUUID) {
      var promised_subscription = this.client.then(function (client) {
        return client.apis["Subscriptions"].get_subscriptions__subscriptionId_({
          subscriptionId: subscriptionUUID
        });
      });
      return promised_subscription;
    }
    /**
    * Get pending invoice if available * @param {*} subscriptionUUID
    */

  }, {
    key: "getMonetizationInvoice",
    value: function getMonetizationInvoice(subscriptionUUID) {
      var promiseInvoice = this.client.then(function (client) {
        return client.apis['API Monetization'].get_subscriptions__subscriptionId__usage({
          subscriptionId: subscriptionUUID
        });
      });
      return promiseInvoice;
    }
    /**
    * Delete subscription
    * @param subscriptionId id of the subscription
    * @returns {promise} With 200 OK.
    */

  }, {
    key: "deleteSubscription",
    value: function deleteSubscription(subscriptionId) {
      var promised_delete_subscription = this.client.then(function (client) {
        return client.apis["Subscriptions"].delete_subscriptions__subscriptionId_({
          subscriptionId: subscriptionId
        });
      });
      return promised_delete_subscription;
    }
  }]);

  return Subscription;
}(_Resource2["default"]);

exports["default"] = Subscription;