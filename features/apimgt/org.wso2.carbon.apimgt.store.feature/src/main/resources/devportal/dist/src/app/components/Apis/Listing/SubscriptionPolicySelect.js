"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _reactIntl = require("react-intl");

var _ScopeValidation = require("../../Shared/ScopeValidation");

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
 * @param {*} theme
 */
var styles = function styles(theme) {
  return {
    root: {
      display: 'flex'
    },
    buttonGap: {
      marginLeft: 20
    },
    select: {
      width: 100
    }
  };
};
/**
 *
 *
 * @class SubscriptionPolicySelect
 * @extends {React.Component}
 */


var SubscriptionPolicySelect = /*#__PURE__*/function (_React$Component) {
  _inherits(SubscriptionPolicySelect, _React$Component);

  var _super = _createSuper(SubscriptionPolicySelect);

  function SubscriptionPolicySelect(props) {
    var _this;

    _classCallCheck(this, SubscriptionPolicySelect);

    _this = _super.call(this, props);
    _this.state = {
      selectedPolicy: null
    };
    return _this;
  }
  /**
   *
   *
   * @returns
   * @memberof SubscriptionPolicySelect
   */


  _createClass(SubscriptionPolicySelect, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var policies = this.props.policies;
      this.setState({
        selectedPolicy: policies[0]
      });
    }
    /**
     *
     *
     * @returns
     * @memberof SubscriptionPolicySelect
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          classes = _this$props.classes,
          policies = _this$props.policies,
          apiId = _this$props.apiId,
          handleSubscribe = _this$props.handleSubscribe,
          applicationId = _this$props.applicationId;
      var selectedPolicy = this.state.selectedPolicy;
      return policies && /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.root
      }, /*#__PURE__*/_react["default"].createElement(_Select["default"], {
        className: classes.select,
        value: selectedPolicy,
        onChange: function onChange(e) {
          _this2.setState({
            selectedPolicy: e.target.value
          });
        }
      }, policies.map(function (policy) {
        return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
          value: policy,
          key: policy
        }, policy);
      })), /*#__PURE__*/_react["default"].createElement(_ScopeValidation.ScopeValidation, {
        resourcePath: _ScopeValidation.resourcePaths.SUBSCRIPTIONS,
        resourceMethod: _ScopeValidation.resourceMethods.POST
      }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        variant: "contained",
        size: "small",
        color: "primary",
        className: classes.buttonGap,
        onClick: function onClick() {
          handleSubscribe(applicationId, apiId, selectedPolicy);
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        defaultMessage: "Subscribe",
        id: "Apis.Listing.SubscriptionPolicySelect.subscribe"
      }))));
    }
  }]);

  return SubscriptionPolicySelect;
}(_react["default"].Component);

SubscriptionPolicySelect.propTypes = {
  classes: _propTypes["default"].object.isRequired
};

var _default = (0, _styles.withStyles)(styles, {
  withTheme: true
})(SubscriptionPolicySelect);

exports["default"] = _default;