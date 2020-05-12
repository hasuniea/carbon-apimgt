"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _styles = require("@material-ui/core/styles");

var _reactIntl = require("react-intl");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _materialUiChipInput = _interopRequireDefault(require("material-ui-chip-input"));

var _Application = _interopRequireDefault(require("AppData/Application"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @inheritdoc
 * @param {*} theme theme object
 */
var styles = function styles(theme) {
  return {
    FormControl: {
      padding: theme.spacing(2),
      width: '100%'
    },
    FormControlOdd: {
      padding: theme.spacing(2),
      backgroundColor: theme.palette.background.paper,
      width: '100%'
    },
    quotaHelp: {
      position: 'relative'
    },
    mandatoryStarSelect: {
      '& label>span:nth-child(2)': {
        color: 'red'
      }
    },
    mandatoryStarText: {
      '& label>span:nth-child(1)': {
        color: 'red'
      }
    },
    applicationForm: {
      '& span, & div, & p, & input': {
        color: theme.palette.getContrastText(theme.palette.background.paper)
      }
    }
  };
};

var ApplicationCreate = function ApplicationCreate(props) {
  /**
   * This method is used to handle the updating of create application
   * request object.
   * @param {*} field field that should be updated in appliction request
   * @param {*} event event fired
   */
  var handleChange = function handleChange(_ref) {
    var _ref$target = _ref.target,
        field = _ref$target.name,
        value = _ref$target.value;
    var applicationRequest = props.applicationRequest,
        updateApplicationRequest = props.updateApplicationRequest;

    var newRequest = _objectSpread({}, applicationRequest); // const { target: currentTarget } = event;


    switch (field) {
      case 'name':
        newRequest.name = value;
        break;

      case 'description':
        newRequest.description = value;
        break;

      case 'throttlingPolicy':
        newRequest.throttlingPolicy = value;
        break;

      case 'tokenType':
        newRequest.tokenType = value;
        break;

      case 'attributes':
        newRequest.attributes = value;
        break;

      default:
        break;
    }

    updateApplicationRequest(newRequest);
  };
  /**
   *
   *
   * @returns {Component}
   * @memberof ApplicationCreate
   */


  var classes = props.classes,
      throttlingPolicyList = props.throttlingPolicyList,
      applicationRequest = props.applicationRequest,
      isNameValid = props.isNameValid,
      allAppAttributes = props.allAppAttributes,
      handleAttributesChange = props.handleAttributesChange,
      isRequiredAttribute = props.isRequiredAttribute,
      getAttributeValue = props.getAttributeValue,
      intl = props.intl,
      validateName = props.validateName,
      isApplicationSharingEnabled = props.isApplicationSharingEnabled,
      handleAddChip = props.handleAddChip,
      handleDeleteChip = props.handleDeleteChip;
  return /*#__PURE__*/_react["default"].createElement("form", {
    noValidate: true,
    autoComplete: "off",
    className: classes.applicationForm
  }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    classes: {
      root: classes.mandatoryStarText
    },
    margin: "normal",
    variant: "outlined",
    autoFocus: true,
    fullWidth: true,
    required: true,
    value: applicationRequest.name,
    label: intl.formatMessage({
      defaultMessage: 'Application Name',
      id: 'Shared.AppsAndKeys.ApplicationCreateForm.application.name'
    }),
    helperText: intl.formatMessage({
      defaultMessage: "Enter a name to identify the Application.\n                                    You will be able to pick this application when subscribing to APIs",
      id: 'Shared.AppsAndKeys.ApplicationCreateForm.enter.a.name'
    }),
    name: "name",
    onChange: handleChange,
    placeholder: intl.formatMessage({
      defaultMessage: 'My Application',
      id: 'Shared.AppsAndKeys.ApplicationCreateForm.my.mobile.application'
    }),
    onBlur: function onBlur(e) {
      return validateName(e.target.value);
    },
    error: !isNameValid,
    inputProps: {
      maxLength: 70
    }
  }), /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    classes: {
      root: classes.mandatoryStarSelect
    },
    required: true,
    fullWidth: true,
    id: "outlined-select-currency",
    select: true,
    label: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      defaultMessage: "Per Token Quota.",
      id: "Shared.AppsAndKeys.ApplicationCreateForm.per.token.quota"
    }),
    value: applicationRequest.throttlingPolicy,
    name: "throttlingPolicy",
    onChange: handleChange,
    helperText: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      defaultMessage: "Assign API request quota per access token.\n                            Allocated quota will be shared among all\n                            the subscribed APIs of the application.",
      id: "Shared.AppsAndKeys.ApplicationCreateForm.assign.api.request"
    }),
    margin: "normal",
    variant: "outlined"
  }, throttlingPolicyList.map(function (policy) {
    return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      key: policy,
      value: policy
    }, policy);
  })), /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    classes: {
      root: classes.mandatoryStarSelect
    },
    required: true,
    fullWidth: true,
    id: "outlined-select-currency",
    select: true,
    label: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      defaultMessage: "Token Type",
      id: "Shared.AppsAndKeys.ApplicationCreateForm.token.type"
    }),
    value: applicationRequest.tokenType,
    name: "tokenType",
    onChange: handleChange,
    helperText: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      defaultMessage: "Select token type",
      id: "Shared.AppsAndKeys.ApplicationCreateForm.select.token.type"
    }),
    margin: "normal",
    variant: "outlined"
  }, Object.entries(_Application["default"].TOKEN_TYPES).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        key = _ref3[0],
        value = _ref3[1];

    return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      key: value.displayName,
      value: key
    }, value.displayName);
  })), /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    margin: "normal",
    variant: "outlined",
    fullWidth: true,
    value: applicationRequest.description,
    label: intl.formatMessage({
      defaultMessage: 'Application Description',
      id: 'Shared.AppsAndKeys.ApplicationCreateForm.application.description.label'
    }),
    helperText: intl.formatMessage({
      defaultMessage: 'Describe the application',
      id: 'Shared.AppsAndKeys.ApplicationCreateForm.describe.the.application.help'
    }),
    name: "description",
    onChange: handleChange,
    placeholder: intl.formatMessage({
      defaultMessage: 'My Mobile Application',
      id: 'Shared.AppsAndKeys.ApplicationCreateForm.my.mobile.application.placeholder'
    })
  }), allAppAttributes && Object.entries(allAppAttributes).map(function (item) {
    return item[1].hidden !== 'true' ? /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
      classes: {
        root: classes.mandatoryStarText
      },
      margin: "normal",
      variant: "outlined",
      required: isRequiredAttribute(item[1].attribute),
      label: item[1].attribute,
      value: getAttributeValue(item[1].attribute),
      helperText: item[1].description,
      fullWidth: true,
      name: item[1].attribute,
      onChange: handleAttributesChange(item[1].attribute),
      placeholder: 'Enter ' + item[1].attribute,
      className: classes.inputText
    }) : null;
  }), isApplicationSharingEnabled && /*#__PURE__*/_react["default"].createElement(_materialUiChipInput["default"], _extends({
    label: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      defaultMessage: "Application Groups",
      id: "Shared.AppsAndKeys.ApplicationCreateForm.add.groups.label"
    }),
    helperText: intl.formatMessage({
      defaultMessage: 'Type a group and enter',
      id: 'Shared.AppsAndKeys.ApplicationCreateForm.type.a.group.and.enter'
    }),
    margin: "normal",
    variant: "outlined",
    fullWidth: true
  }, applicationRequest, {
    value: applicationRequest.groups || [],
    onAdd: function onAdd(chip) {
      return handleAddChip(chip, applicationRequest.groups);
    },
    onDelete: function onDelete(chip, index) {
      return handleDeleteChip(chip, index, applicationRequest.groups);
    }
  })));
};

ApplicationCreate.defaultProps = {
  ApplicationCreate: null
};
ApplicationCreate.propTypes = {
  classes: _propTypes["default"].shape({}).isRequired,
  applicationRequest: _propTypes["default"].shape({}).isRequired,
  intl: _propTypes["default"].shape({}).isRequired,
  isNameValid: _propTypes["default"].bool.isRequired,
  allAppAttributes: _propTypes["default"].arrayOf(_propTypes["default"].array),
  handleAttributesChange: _propTypes["default"].func.isRequired,
  getAttributeValue: _propTypes["default"].func.isRequired,
  validateName: _propTypes["default"].func.isRequired,
  updateApplicationRequest: _propTypes["default"].func.isRequired,
  isRequiredAttribute: _propTypes["default"].func.isRequired,
  isApplicationSharingEnabled: _propTypes["default"].bool.isRequired,
  handleAddChip: _propTypes["default"].func.isRequired,
  handleDeleteChip: _propTypes["default"].func.isRequired,
  throttlingPolicyList: _propTypes["default"].arrayOf(_propTypes["default"].string).isRequired
};

var _default = (0, _reactIntl.injectIntl)((0, _styles.withStyles)(styles)(ApplicationCreate));

exports["default"] = _default;