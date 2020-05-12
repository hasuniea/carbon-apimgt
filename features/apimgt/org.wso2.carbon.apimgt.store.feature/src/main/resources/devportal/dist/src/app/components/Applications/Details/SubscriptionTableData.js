"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _TableCell = _interopRequireDefault(require("@material-ui/core/TableCell"));

var _TableRow = _interopRequireDefault(require("@material-ui/core/TableRow"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _DialogContentText = _interopRequireDefault(require("@material-ui/core/DialogContentText"));

var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _Slide = _interopRequireDefault(require("@material-ui/core/Slide"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _reactIntl = require("react-intl");

var _ScopeValidation = require("AppComponents/Shared/ScopeValidation");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _api = _interopRequireDefault(require("AppData/api"));

var _Subscription = _interopRequireDefault(require("AppData/Subscription"));

var _Invoice = _interopRequireDefault(require("./Invoice"));

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

/**
 *
 *
 * @class SubscriptionTableData
 * @extends {React.Component}
 */
var SubscriptionTableData = /*#__PURE__*/function (_React$Component) {
  _inherits(SubscriptionTableData, _React$Component);

  var _super = _createSuper(SubscriptionTableData);

  /**
   *Creates an instance of SubscriptionTableData.
   * @param {*} props properties
   * @memberof SubscriptionTableData
   */
  function SubscriptionTableData(props) {
    var _this;

    _classCallCheck(this, SubscriptionTableData);

    _this = _super.call(this, props);
    _this.state = {
      openMenu: false,
      isMonetizedAPI: false,
      isDynamicUsagePolicy: false
    };
    _this.handleRequestClose = _this.handleRequestClose.bind(_assertThisInitialized(_this));
    _this.handleRequestOpen = _this.handleRequestOpen.bind(_assertThisInitialized(_this));
    _this.handleRequestDelete = _this.handleRequestDelete.bind(_assertThisInitialized(_this));
    _this.checkIfDynamicUsagePolicy = _this.checkIfDynamicUsagePolicy.bind(_assertThisInitialized(_this));
    _this.checkIfMonetizedAPI = _this.checkIfMonetizedAPI.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   *
   *
   * @memberof SubscriptionTableData
   */


  _createClass(SubscriptionTableData, [{
    key: "handleRequestClose",
    value: function handleRequestClose() {
      this.setState({
        openMenu: false
      });
    }
    /**
    *
    *
    * @memberof SubscriptionTableData
    */

  }, {
    key: "handleRequestOpen",
    value: function handleRequestOpen() {
      this.setState({
        openMenu: true
      });
    }
    /**
     *
     * Handle onclick for subscription delete
     * @param {*} subscriptionId subscription id
     * @memberof SubscriptionTableData
     */

  }, {
    key: "handleRequestDelete",
    value: function handleRequestDelete(subscriptionId) {
      var handleSubscriptionDelete = this.props.handleSubscriptionDelete;
      this.setState({
        openMenu: false
      });

      if (handleSubscriptionDelete) {
        handleSubscriptionDelete(subscriptionId);
      }
    }
    /**
     * Check if the API is monetized
     * @param apiUUID API UUID
     */

  }, {
    key: "checkIfMonetizedAPI",
    value: function checkIfMonetizedAPI(apiUUID) {
      var _this2 = this;

      var apiClient = new _api["default"]();
      var promisedApi = apiClient.getAPIById(apiUUID);
      promisedApi.then(function (response) {
        if (response && response.data) {
          var apiData = JSON.parse(response.data);

          _this2.setState({
            isMonetizedAPI: apiData.monetization.enabled
          });
        }
      });
    }
    /**
     * Check if the policy is dynamic usage type
     * @param subscriptionUUID subscription UUID
     */

  }, {
    key: "checkIfDynamicUsagePolicy",
    value: function checkIfDynamicUsagePolicy(subscriptionUUID) {
      var _this3 = this;

      var client = new _Subscription["default"]();
      var promisedSubscription = client.getSubscription(subscriptionUUID);
      promisedSubscription.then(function (response) {
        if (response && response.body) {
          var subscriptionData = JSON.parse(response.data);

          if (subscriptionData.throttlingPolicy) {
            var apiClient = new _api["default"]();
            var promisedPolicy = apiClient.getTierByName(subscriptionData.throttlingPolicy, 'subscription');
            promisedPolicy.then(function (policyResponse) {
              var policyData = JSON.parse(policyResponse.data);

              if (policyData.monetizationAttributes.billingType && policyData.monetizationAttributes.billingType === 'DYNAMICRATE') {
                _this3.setState({
                  isDynamicUsagePolicy: true
                });
              }
            });
          }
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.checkIfMonetizedAPI(this.props.subscription.apiId);
      this.checkIfDynamicUsagePolicy(this.props.subscription.subscriptionId);
    }
    /**
    * @inheritdoc
    * @memberof SubscriptionTableData
    */

  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props$subscript = this.props.subscription,
          apiInfo = _this$props$subscript.apiInfo,
          status = _this$props$subscript.status,
          throttlingPolicy = _this$props$subscript.throttlingPolicy,
          subscriptionId = _this$props$subscript.subscriptionId,
          apiId = _this$props$subscript.apiId;
      var _this$state = this.state,
          openMenu = _this$state.openMenu,
          isMonetizedAPI = _this$state.isMonetizedAPI,
          isDynamicUsagePolicy = _this$state.isDynamicUsagePolicy;

      var link = /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
        to: '/apis/' + apiId
      }, apiInfo.name + ' - ' + apiInfo.version);

      return /*#__PURE__*/_react["default"].createElement(_TableRow["default"], {
        hover: true
      }, /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, link), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, apiInfo.lifeCycleStatus), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, throttlingPolicy), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, status), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_ScopeValidation.ScopeValidation, {
        resourcePath: _ScopeValidation.resourcePaths.SINGLE_SUBSCRIPTION,
        resourceMethod: _ScopeValidation.resourceMethods.DELETE
      }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
        "aria-label": "Delete",
        onClick: this.handleRequestOpen
      }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], null, "delete"))), /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
        open: openMenu,
        transition: _Slide["default"]
      }, /*#__PURE__*/_react["default"].createElement(_DialogTitle["default"], null, "Confirm"), /*#__PURE__*/_react["default"].createElement(_DialogContent["default"], null, /*#__PURE__*/_react["default"].createElement(_DialogContentText["default"], null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Applications.Details.SubscriptionTableData.delete.subscription.confirmation",
        defaultMessage: "Are you sure you want to delete the Subscription?"
      }))), /*#__PURE__*/_react["default"].createElement(_DialogActions["default"], null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        dense: true,
        color: "primary",
        onClick: this.handleRequestClose
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Applications.Details.SubscriptionTableData.cancel",
        defaultMessage: "Cancel"
      })), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        dense: true,
        color: "primary",
        onClick: function onClick() {
          return _this4.handleRequestDelete(subscriptionId);
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Applications.Details.SubscriptionTableData.delete",
        defaultMessage: "Delete"
      })))))), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, /*#__PURE__*/_react["default"].createElement(_Invoice["default"], {
        subscriptionId: subscriptionId,
        isMonetizedAPI: isMonetizedAPI,
        isDynamicUsagePolicy: isDynamicUsagePolicy
      })));
    }
  }]);

  return SubscriptionTableData;
}(_react["default"].Component);

SubscriptionTableData.propTypes = {
  subscription: _propTypes["default"].shape({
    apiInfo: _propTypes["default"].shape({
      name: _propTypes["default"].string.isRequired,
      version: _propTypes["default"].string.isRequired,
      lifeCycleStatus: _propTypes["default"].string.isRequired
    }).isRequired,
    throttlingPolicy: _propTypes["default"].string.isRequired,
    subscriptionId: _propTypes["default"].string.isRequired,
    apiId: _propTypes["default"].string.isRequired,
    status: _propTypes["default"].string.isRequired
  }).isRequired,
  handleSubscriptionDelete: _propTypes["default"].func.isRequired
};
var _default = SubscriptionTableData;
exports["default"] = _default;