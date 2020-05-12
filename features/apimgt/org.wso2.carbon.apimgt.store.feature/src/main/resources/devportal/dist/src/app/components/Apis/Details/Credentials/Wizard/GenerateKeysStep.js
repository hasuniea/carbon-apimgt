"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Radio = _interopRequireDefault(require("@material-ui/core/Radio"));

var _RadioGroup = _interopRequireDefault(require("@material-ui/core/RadioGroup"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _FormLabel = _interopRequireDefault(require("@material-ui/core/FormLabel"));

var _KeyConfiguration = _interopRequireDefault(require("AppComponents/Shared/AppsAndKeys/KeyConfiguration"));

var _Application = _interopRequireDefault(require("AppData/Application"));

var _api = _interopRequireDefault(require("AppData/api"));

var _reactIntl = require("react-intl");

var _styles = require("@material-ui/core/styles");

var _lodash = _interopRequireDefault(require("lodash.clonedeep"));

var _ButtonPanel = _interopRequireDefault(require("./ButtonPanel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    keyConfigWrapper: {
      paddingLeft: theme.spacing(4)
    },
    radioWrapper: {
      flexDirection: 'row'
    }
  };
});

var generateKeysStep = function generateKeysStep(props) {
  var keyStates = {
    COMPLETED: 'COMPLETED',
    APPROVED: 'APPROVED',
    CREATED: 'CREATED',
    REJECTED: 'REJECTED'
  };

  var _useState = (0, _react.useState)('PRODUCTION'),
      _useState2 = _slicedToArray(_useState, 2),
      selectedType = _useState2[0],
      setSelectedType = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      notFound = _useState4[0],
      setNotFound = _useState4[1];

  var _useState5 = (0, _react.useState)(true),
      _useState6 = _slicedToArray(_useState5, 2),
      nextActive = _useState6[0],
      setNextActive = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isUserOwner = _useState8[0],
      setIsUserOwner = _useState8[1];

  var _useState9 = (0, _react.useState)({
    keyType: 'PRODUCTION',
    serverSupportedGrantTypes: [],
    supportedGrantTypes: [],
    callbackUrl: ''
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      keyRequest = _useState10[0],
      setKeyRequest = _useState10[1];

  var currentStep = props.currentStep,
      createdApp = props.createdApp,
      incrementStep = props.incrementStep,
      setCreatedKeyType = props.setCreatedKeyType,
      intl = props.intl,
      setStepStatus = props.setStepStatus,
      stepStatuses = props.stepStatuses;
  /**
  * @param {*} event event
  * @param {*} currentTab current tab
  * @memberof Wizard
  */

  var handleRadioChange = function handleRadioChange(event) {
    var newKeyType = event.target.value;
    setSelectedType(newKeyType);
    var newKeyRequest = (0, _lodash["default"])(keyRequest);
    newKeyRequest.keyType = newKeyType;
    setKeyRequest(newKeyRequest);
  };

  (0, _react.useEffect)(function () {
    setIsUserOwner(true);
    var api = new _api["default"]();
    var promisedSettings = api.getSettings();
    promisedSettings.then(function (response) {
      var newRequest = (0, _lodash["default"])(keyRequest);
      newRequest.serverSupportedGrantTypes = response.obj.grantTypes;
      newRequest.supportedGrantTypes = response.obj.grantTypes.filter(function (item) {
        return item !== 'authorization_code' && item !== 'implicit';
      });
      setKeyRequest(newRequest);
    })["catch"](function (error) {
      if (process.env.NODE_ENV !== 'production') {
        console.log(error);
      }

      var status = error.status;

      if (status === 404) {
        setNotFound({
          notFound: true
        });
      }
    });
  }, []);

  var generateKeys = function generateKeys() {
    _Application["default"].get(createdApp.value).then(function (application) {
      return application.generateKeys(keyRequest.keyType, keyRequest.supportedGrantTypes, keyRequest.callbackUrl);
    }).then(function (response) {
      if (response.keyState === keyStates.CREATED || response.keyState === keyStates.REJECTED) {
        setStepStatus(stepStatuses.BLOCKED);
      } else {
        incrementStep();
        setCreatedKeyType(keyRequest.keyType);
        setStepStatus(stepStatuses.PROCEED);
        console.log('Keys generated successfully with ID : ' + response);
      }
    })["catch"](function (error) {
      if (process.env.NODE_ENV !== 'production') {
        console.log(error);
      }

      var status = error.status;

      if (status === 404) {
        setNotFound(true);
      }
    });
  };

  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.keyConfigWrapper
  }, /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    component: "fieldset",
    className: classes.formControl
  }, /*#__PURE__*/_react["default"].createElement(_FormLabel["default"], {
    component: "legend"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    defaultMessage: "Key Type",
    id: "Apis.Details.Credentials.Wizard.GenerateKeysStep.keyType"
  })), /*#__PURE__*/_react["default"].createElement(_RadioGroup["default"], {
    value: selectedType,
    onChange: handleRadioChange,
    classes: {
      root: classes.radioWrapper
    }
  }, /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], {
    value: "PRODUCTION",
    control: /*#__PURE__*/_react["default"].createElement(_Radio["default"], null),
    label: intl.formatMessage({
      defaultMessage: 'PRODUCTION',
      id: 'Apis.Details.Credentials.Wizard.GenerateKeysStep.production'
    })
  }), /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], {
    value: "SANDBOX",
    control: /*#__PURE__*/_react["default"].createElement(_Radio["default"], null),
    label: intl.formatMessage({
      defaultMessage: 'SANDBOX',
      id: 'Apis.Details.Credentials.Wizard.GenerateKeysStep.sandbox'
    })
  }))), /*#__PURE__*/_react["default"].createElement(_KeyConfiguration["default"], {
    updateKeyRequest: setKeyRequest,
    keyRequest: keyRequest,
    keyType: selectedType,
    isUserOwner: isUserOwner,
    setGenerateEnabled: setNextActive
  })), /*#__PURE__*/_react["default"].createElement(_ButtonPanel["default"], {
    classes: classes,
    currentStep: currentStep,
    handleCurrentStep: generateKeys,
    nextActive: nextActive
  }));
};

var _default = (0, _reactIntl.injectIntl)(generateKeysStep);

exports["default"] = _default;