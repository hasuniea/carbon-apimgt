"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _core = require("@material-ui/core");

var _Stepper = _interopRequireDefault(require("@material-ui/core/Stepper"));

var _Step = _interopRequireDefault(require("@material-ui/core/Step"));

var _StepLabel = _interopRequireDefault(require("@material-ui/core/StepLabel"));

var _reactIntl = require("react-intl");

var _styles = require("@material-ui/core/styles");

var _CreateAppStep = _interopRequireDefault(require("./CreateAppStep"));

var _SubscribeToAppStep = _interopRequireDefault(require("./SubscribeToAppStep"));

var _GenerateKeysStep = _interopRequireDefault(require("./GenerateKeysStep"));

var _GenerateAccessTokenStep = _interopRequireDefault(require("./GenerateAccessTokenStep"));

var _CopyAccessTokenStep = _interopRequireDefault(require("./CopyAccessTokenStep"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return {
    paper: {
      marginLeft: theme.spacing(3)
    },
    titleSub: {
      marginLeft: theme.spacing(3),
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      color: theme.palette.getContrastText(theme.palette.background["default"])
    },
    boxWrapper: {
      '& span, & h5, & label, & td, & li, & div, & input, & p.MuiFormHelperText-root': {
        color: theme.palette.getContrastText(theme.palette.background.paper)
      }
    }
  };
};

var stepComponents = [_CreateAppStep["default"], _SubscribeToAppStep["default"], _GenerateKeysStep["default"], _GenerateAccessTokenStep["default"], _CopyAccessTokenStep["default"]];
/**
 * Class used for wizard
 */

var Wizard = /*#__PURE__*/function (_Component) {
  _inherits(Wizard, _Component);

  var _super = _createSuper(Wizard);

  /**
   * @param {*} props properties
   */
  function Wizard(props) {
    var _this;

    _classCallCheck(this, Wizard);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "setStepStatus", function (stepStatus) {
      _this.setState({
        stepStatus: stepStatus
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setCreatedApp", function (createdApp) {
      _this.setState({
        createdApp: createdApp
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setCreatedToken", function (createdToken) {
      _this.setState({
        createdToken: createdToken
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setCreatedKeyType", function (createdKeyType) {
      _this.setState({
        createdKeyType: createdKeyType
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleNext", function () {
      _this.setState(function (_ref) {
        var currentStep = _ref.currentStep;
        return {
          currentStep: currentStep + 1
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleReset", function () {
      _this.setState({
        currentStep: 0
      });
    });

    var intl = _this.props.intl;
    _this.steps = [intl.formatMessage({
      defaultMessage: 'Create application',
      id: 'Apis.Details.Credentials.Wizard.Wizard.create'
    }), intl.formatMessage({
      defaultMessage: 'Subscribe to new application',
      id: 'Apis.Details.Credentials.Wizard.Wizard.subscribe.to.new.application'
    }), intl.formatMessage({
      defaultMessage: 'Generate Keys',
      id: 'Apis.Details.Credentials.Wizard.Wizard.generate.keys'
    }), intl.formatMessage({
      defaultMessage: 'Generate Access Token',
      id: 'Apis.Details.Credentials.Wizard.Wizard.generate.access.token'
    }), intl.formatMessage({
      defaultMessage: 'Copy Access Token',
      id: 'Apis.Details.Credentials.Wizard.Wizard.copy.access.token'
    })];
    _this.stepStatuses = {
      PROCEED: 'PROCEED',
      BLOCKED: 'BLOCKED'
    };
    _this.state = {
      currentStep: 0,
      createdApp: null,
      createdToken: null,
      redirect: false,
      createdKeyType: '',
      stepStatus: 'PROCEED'
    };
    return _this;
  }
  /**
   * Used to set the status retured after executing each step. Used in workflow
   * scenario to evaluate wheather we can proceed to next step
   * @param {*} stepStatus status
   */


  _createClass(Wizard, [{
    key: "render",

    /**
     * @inheritdoc
     */
    value: function render() {
      var classes = this.props.classes;
      var _this$state = this.state,
          currentStep = _this$state.currentStep,
          stepStatus = _this$state.stepStatus;
      var CurrentStepComponent = stepComponents[currentStep];
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_core.Typography, {
        variant: "h4",
        className: classes.titleSub
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: 'Apis.Details.Credentials.Credentials' + '.api.credentials.generate',
        defaultMessage: "Subscription & Key Generation Wizard"
      })), /*#__PURE__*/_react["default"].createElement(_core.Paper, {
        elevation: 0,
        className: classes.paper
      }, /*#__PURE__*/_react["default"].createElement(_core.Box, {
        py: 1,
        mx: "auto",
        display: "flex"
      }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true,
        xs: 12,
        md: 12
      }, /*#__PURE__*/_react["default"].createElement(_Stepper["default"], {
        activeStep: currentStep
      }, this.steps.map(function (label) {
        return /*#__PURE__*/_react["default"].createElement(_Step["default"], {
          key: label
        }, /*#__PURE__*/_react["default"].createElement(_StepLabel["default"], null, label));
      })))), /*#__PURE__*/_react["default"].createElement(_core.Box, {
        py: 1,
        mx: "auto",
        display: "block",
        className: classes.boxWrapper
      }, stepStatus === this.stepStatuses.PROCEED && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(CurrentStepComponent, _extends({}, this.state, {
        incrementStep: this.handleNext,
        setStepStatus: this.setStepStatus,
        stepStatuses: this.stepStatuses,
        classes: classes,
        setCreatedApp: this.setCreatedApp,
        setCreatedKeyType: this.setCreatedKeyType,
        setCreatedToken: this.setCreatedToken,
        handleReset: this.handleReset
      })))), /*#__PURE__*/_react["default"].createElement(_core.Box, {
        py: 1,
        mb: 1,
        mx: "auto",
        display: "flex"
      }, stepStatus === this.stepStatuses.BLOCKED && /*#__PURE__*/_react["default"].createElement(_core.Box, {
        pt: 2,
        px: 3,
        display: "flex"
      }, /*#__PURE__*/_react["default"].createElement(_core.Typography, {
        variant: "h5"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: 'Apis.Details.Credentials.Wizard.Wizard.approval.request.' + 'for.this.step.has',
        defaultMessage: "A request to register this step has been sent."
      }))))));
    }
  }]);

  return Wizard;
}(_react.Component);

Wizard.propTypes = {
  classes: _propTypes["default"].shape({
    appBar: _propTypes["default"].string,
    toolbar: _propTypes["default"].string,
    subscribeTitle: _propTypes["default"].string,
    plainContent: _propTypes["default"].string,
    root: _propTypes["default"].string,
    instructions: _propTypes["default"].string,
    button: _propTypes["default"].string,
    wizardContent: _propTypes["default"].string
  }).isRequired,
  intl: _propTypes["default"].func.isRequired,
  throttlingPolicyList: _propTypes["default"].arrayOf(_propTypes["default"].string).isRequired
};

var _default = (0, _reactIntl.injectIntl)((0, _styles.withStyles)(styles)(Wizard));

exports["default"] = _default;