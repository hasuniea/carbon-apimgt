"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _Input = _interopRequireDefault(require("@material-ui/core/Input"));

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _styles = require("@material-ui/core/styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _FormHelperText = _interopRequireDefault(require("@material-ui/core/FormHelperText"));

var _reactIntl = require("react-intl");

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * @inheritdoc
 * @param {*} theme theme object
 */
var styles = function styles(theme) {
  return {
    titleBar: {
      display: 'flex',
      justifyContent: 'space-between',
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      borderColor: theme.palette.text.secondary,
      marginBottom: 20
    },
    buttonLeft: {
      alignSelf: 'flex-start',
      display: 'flex'
    },
    buttonRight: {
      alignSelf: 'flex-end',
      display: 'flex',
      marginLeft: 20
    },
    title: {
      display: 'inline-block',
      marginLeft: 20
    },
    buttonsWrapper: {
      marginTop: 40
    },
    legend: {
      marginBottom: 0,
      borderBottomStyle: 'none',
      marginTop: 20,
      fontSize: 12
    },
    inputText: {
      marginTop: 20
    },
    buttonRightLink: {
      textDecoration: 'none'
    },
    FormControl: {
      padding: theme.spacing(2),
      width: '100%'
    },
    FormControlOdd: {
      backgroundColor: theme.palette.background.paper
    },
    quotaHelp: {
      position: 'relative'
    },
    subscribeRoot: {
      paddingLeft: theme.spacing(2)
    },
    subscribeRootSmall: {
      marginLeft: "-".concat(theme.spacing(4), "px")
    },
    smallDisplay: {
      width: 240,
      '& .MuiInput-formControl': {
        marginTop: 0
      }
    },
    smallDisplayFix: {
      '& .MuiSelect-selectMenu': {
        padding: 0
      }
    },
    selectMenuRoot: {
      margin: 0,
      padding: 0
    },
    appDropDown: {
      color: theme.palette.getContrastText(theme.palette.background.paper)
    }
  };
};

var subscribeToApi = function subscribeToApi(props) {
  var _classNames3;

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      appSelected = _useState2[0],
      setAppSelected = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      policySelected = _useState4[0],
      setPolicySelected = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      applicationsList = _useState6[0],
      setApplicationsList = _useState6[1];

  var classes = props.classes,
      throttlingPolicyList = props.throttlingPolicyList,
      applicationsAvailable = props.applicationsAvailable,
      subscriptionRequest = props.subscriptionRequest,
      updateSubscriptionRequest = props.updateSubscriptionRequest,
      renderSmall = props.renderSmall;
  (0, _react.useEffect)(function () {
    if (throttlingPolicyList && throttlingPolicyList[0]) {
      setPolicySelected(throttlingPolicyList[0].tierName);
    }
  }, [throttlingPolicyList]);
  (0, _react.useEffect)(function () {
    if (applicationsAvailable && applicationsAvailable[0]) {
      setApplicationsList(applicationsAvailable);
      setAppSelected(applicationsAvailable[0].value);

      var newRequest = _objectSpread({}, subscriptionRequest);

      newRequest.applicationId = applicationsAvailable[0].value;
    }
  }, [applicationsAvailable]);
  /**
   * This method is used to handle the updating of subscription
   * request object and selected fields.
   * @param {*} field field that should be updated in subscription request
   * @param {*} event event fired
   */

  var handleChange = function handleChange(field, event) {
    var newRequest = _objectSpread({}, subscriptionRequest);

    var target = event.target;

    switch (field) {
      case 'application':
        newRequest.applicationId = target.value;
        setAppSelected(target.value);
        break;

      case 'throttlingPolicy':
        newRequest.throttlingPolicy = target.value;
        setPolicySelected(target.value);
        break;

      default:
        break;
    }

    updateSubscriptionRequest(newRequest);
  };

  return /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    className: (0, _classnames["default"])(classes.subscribeRoot, _defineProperty({}, classes.subscribeRootSmall, renderSmall))
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12,
    md: renderSmall ? 12 : 6
  }, appSelected && /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    className: (0, _classnames["default"])(classes.FormControl, _defineProperty({}, classes.smallDisplay, renderSmall))
  }, /*#__PURE__*/_react["default"].createElement(_InputLabel["default"], {
    shrink: true,
    htmlFor: "age-label-placeholder",
    className: classes.quotaHelp
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Shared.AppsAndKeys.SubscribeToApi.application",
    defaultMessage: "Application"
  })), /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    value: appSelected,
    onChange: function onChange(e) {
      return handleChange('application', e);
    },
    input: /*#__PURE__*/_react["default"].createElement(_Input["default"], {
      name: "appSelected",
      id: "app-label-placeholder"
    }),
    displayEmpty: true,
    name: "appSelected",
    className: classes.selectEmpty
  }, applicationsList.map(function (app) {
    return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      value: app.value,
      key: app.value,
      className: classes.appDropDown
    }, app.label);
  })), /*#__PURE__*/_react["default"].createElement(_FormHelperText["default"], null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Shared.AppsAndKeys.SubscribeToApi.select.an.application.to.subscribe",
    defaultMessage: "Select an Application to subscribe"
  }))), throttlingPolicyList && /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    className: (0, _classnames["default"])(classes.FormControl, classes.smallDisplayFix, (_classNames3 = {}, _defineProperty(_classNames3, classes.smallDisplay, renderSmall), _defineProperty(_classNames3, classes.FormControlOdd, !renderSmall), _classNames3))
  }, /*#__PURE__*/_react["default"].createElement(_InputLabel["default"], {
    shrink: true,
    htmlFor: "policy-label-placeholder",
    className: classes.quotaHelp
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Shared.AppsAndKeys.SubscribeToApi.throttling.policy",
    defaultMessage: "Throttling Policy"
  })), /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    value: policySelected,
    onChange: function onChange(e) {
      return handleChange('throttlingPolicy', e);
    },
    input: /*#__PURE__*/_react["default"].createElement(_Input["default"], {
      name: "policySelected",
      id: "policy-label-placeholder"
    }),
    displayEmpty: true,
    name: "policySelected",
    className: classes.selectEmpty
  }, throttlingPolicyList.map(function (policy) {
    return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      value: policy.tierName,
      key: policy.tierName,
      className: classes.appDropDown
    }, policy.tierPlan === 'COMMERCIAL' ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
      classes: {
        root: classes.selectMenuRoot
      },
      primary: policy.tierName,
      secondary: policy.monetizationAttributes.pricePerRequest ? /*#__PURE__*/_react["default"].createElement(_Typography["default"], null, policy.monetizationAttributes.pricePerRequest, ' ', policy.monetizationAttributes.currencyType, ' per Request') : /*#__PURE__*/_react["default"].createElement(_Typography["default"], null, policy.monetizationAttributes.fixedPrice, ' ', policy.monetizationAttributes.currencyType, ' per ', policy.monetizationAttributes.billingCycle)
    })) : /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
      primary: policy.tierName
    }));
  })), /*#__PURE__*/_react["default"].createElement(_FormHelperText["default"], null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Shared.AppsAndKeys.SubscribeToApi.available.policies",
    defaultMessage: "Available Policies -"
  }), ' ', throttlingPolicyList.map(function (policy, index) {
    return /*#__PURE__*/_react["default"].createElement("span", {
      key: policy.tierName
    }, policy.tierName, index !== throttlingPolicyList.length - 1 && /*#__PURE__*/_react["default"].createElement("span", null, ","));
  })))));
};

subscribeToApi.propTypes = {
  classes: _propTypes["default"].shape({
    FormControl: _propTypes["default"].string,
    quotaHelp: _propTypes["default"].string,
    selectEmpty: _propTypes["default"].string,
    FormControlOdd: _propTypes["default"].string,
    subscribeRoot: _propTypes["default"].string,
    subscribeRootSmall: _propTypes["default"].string,
    smallDisplayFix: _propTypes["default"].string,
    selectMenuRoot: _propTypes["default"].string,
    smallDisplay: _propTypes["default"].string
  }).isRequired,
  applicationsAvailable: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    value: _propTypes["default"].string,
    label: _propTypes["default"].string
  })).isRequired,
  throttlingPolicyList: _propTypes["default"].arrayOf(_propTypes["default"].shape({})).isRequired,
  subscriptionRequest: _propTypes["default"].shape({}).isRequired,
  updateSubscriptionRequest: _propTypes["default"].func.isRequired,
  renderSmall: _propTypes["default"].bool
};
subscribeToApi.defaultProps = {
  renderSmall: false
};

var _default = (0, _styles.withStyles)(styles)(subscribeToApi);

exports["default"] = _default;