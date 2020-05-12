"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _ApplicationCreateForm = _interopRequireDefault(require("AppComponents/Shared/AppsAndKeys/ApplicationCreateForm"));

var _api = _interopRequireDefault(require("AppData/api"));

var _Alert = _interopRequireDefault(require("AppComponents/Shared/Alert"));

var _lodash = _interopRequireDefault(require("lodash.clonedeep"));

var _reactIntl = require("react-intl");

var _styles = require("@material-ui/core/styles");

var _ButtonPanel = _interopRequireDefault(require("./ButtonPanel"));

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

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    appCreateFormWrapper: {
      paddingLeft: theme.spacing(2)
    }
  };
});

var createAppStep = function createAppStep(props) {
  var APPLICATION_STATES = {
    CREATED: 'CREATED',
    APPROVED: 'APPROVED',
    REJECTED: 'REJECTED'
  };

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      throttlingPolicyList = _useState2[0],
      setThrottlingPolicyList = _useState2[1];

  var _useState3 = (0, _react.useState)({
    name: '',
    throttlingPolicy: '',
    description: '',
    tokenType: 'JWT',
    groups: null,
    attributes: {}
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      applicationRequest = _useState4[0],
      setApplicationRequest = _useState4[1];

  var _useState5 = (0, _react.useState)(true),
      _useState6 = _slicedToArray(_useState5, 2),
      isNameValid = _useState6[0],
      setIsNameValid = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      allAppAttributes = _useState8[0],
      setAllAppAttributes = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      notFound = _useState10[0],
      setNotFound = _useState10[1];

  var currentStep = props.currentStep,
      setCreatedApp = props.setCreatedApp,
      incrementStep = props.incrementStep,
      intl = props.intl,
      setStepStatus = props.setStepStatus,
      stepStatuses = props.stepStatuses;

  var validateName = function validateName(value) {
    if (!value || value.trim() === '') {
      setIsNameValid({
        isNameValid: false
      });
      return Promise.reject(new Error(intl.formatMessage({
        defaultMessage: 'Application name is required',
        id: 'Apis.Details.Credentials.Wizard.CreateAppStep.application.name.is.required'
      })));
    }

    setIsNameValid({
      isNameValid: true
    });
    return Promise.resolve(true);
  };
  /**
   * @param {object} name application attribute name
   * @returns {void}
   * @memberof ApplicationFormHandler
   */


  var isRequiredAttribute = function isRequiredAttribute(name) {
    if (allAppAttributes) {
      for (var i = 0; i < allAppAttributes.length; i++) {
        if (allAppAttributes[i].attribute === name) {
          return allAppAttributes[i].required === 'true';
        }
      }
    }

    return false;
  };
  /**
   * @param {object} name application attribute name
   * @returns {Object} attribute value
   * @memberof ApplicationFormHandler
   */


  var getAttributeValue = function getAttributeValue(name) {
    return applicationRequest.attributes[name];
  };

  var createApplication = function createApplication() {
    var api = new _api["default"]();
    validateName(applicationRequest.name).then(function () {
      return api.createApplication(applicationRequest);
    }).then(function (response) {
      var data = response.body;

      if (data.status === APPLICATION_STATES.APPROVED) {
        var appCreated = {
          value: data.applicationId,
          label: data.name
        };
        console.log('Application created successfully.');
        setCreatedApp(appCreated);
        incrementStep();
        setStepStatus(stepStatuses.PROCEED);
      } else {
        setStepStatus(stepStatuses.BLOCKED);
      }
    })["catch"](function (error) {
      var response = error.response;

      if (response && response.body) {
        var message = response.body.description || intl.formatMessage({
          defaultMessage: 'Error while creating the application',
          id: 'Apis.Details.Credentials.Wizard.CreateAppStep.error.while.creating.the.application'
        });

        _Alert["default"].error(message);
      } else {
        _Alert["default"].error(error.message);
      }

      console.error('Error while creating the application');
    });
  };
  /**
   * @param {object} name application attribute name
   * @returns {void}
   * @memberof ApplicationFormHandler
   */


  var handleAttributesChange = function handleAttributesChange(name) {
    return function (event) {
      var newApplicationRequest = (0, _lodash["default"])(applicationRequest);
      newApplicationRequest.attributes[name] = event.target.value;
      setApplicationRequest(newApplicationRequest);
    };
  };
  /**
   * add a new group function
   * @param {*} chip newly added group
   * @param {*} appGroups already existing groups
   */


  var handleAddChip = function handleAddChip(chip, appGroups) {
    var newRequest = _objectSpread({}, applicationRequest);

    var values = appGroups || [];
    values = values.slice();
    values.push(chip);
    newRequest.groups = values;
    setApplicationRequest(newRequest);
  };
  /**
   * remove a group from already existing groups function
   * @param {*} chip selected group to be removed
   * @param {*} index selected group index to be removed
   * @param {*} appGroups already existing groups
   */


  var handleDeleteChip = function handleDeleteChip(chip, index, appGroups) {
    var newRequest = _objectSpread({}, applicationRequest);

    var values = appGroups || [];
    values = values.filter(function (v) {
      return v !== chip;
    });
    newRequest.groups = values;
    setApplicationRequest(newRequest);
  };

  (0, _react.useEffect)(function () {
    // Get all the tiers to populate the drop down.
    var api = new _api["default"]();
    var promiseTiers = api.getAllTiers('application');
    var promisedAttributes = api.getAllApplicationAttributes();
    Promise.all([promiseTiers, promisedAttributes]).then(function (response) {
      var _response = _slicedToArray(response, 2),
          tierResponse = _response[0],
          allAttributes = _response[1];

      var throttlingPolicyListLocal = tierResponse.body.list.map(function (item) {
        return item.name;
      });

      var newRequest = _objectSpread({}, applicationRequest);

      if (throttlingPolicyListLocal.length > 0) {
        var _throttlingPolicyList = _slicedToArray(throttlingPolicyListLocal, 1);

        newRequest.throttlingPolicy = _throttlingPolicyList[0];
      }

      var allAppAttr = [];
      allAttributes.body.list.map(function (item) {
        return allAppAttr.push(item);
      });

      if (allAttributes.length > 0) {
        newRequest.attributes = allAppAttr.filter(function (item) {
          return !item.hidden;
        });
      }

      setApplicationRequest(newRequest);
      setThrottlingPolicyList(throttlingPolicyListLocal);
      setAllAppAttributes(allAppAttr);
    })["catch"](function (error) {
      if (process.env.NODE_ENV !== 'production') {
        console.log(error);
      }

      var status = error.status;

      if (status === 404) {
        setNotFound(true);
      }
    });
  }, []);
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.appCreateFormWrapper
  }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    px: 2,
    display: "flex",
    justifyContent: "flex-start"
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 10,
    md: 6
  }, /*#__PURE__*/_react["default"].createElement(_ApplicationCreateForm["default"], {
    throttlingPolicyList: throttlingPolicyList,
    applicationRequest: applicationRequest,
    updateApplicationRequest: setApplicationRequest,
    validateName: validateName,
    isNameValid: isNameValid,
    allAppAttributes: allAppAttributes,
    handleAttributesChange: handleAttributesChange,
    isRequiredAttribute: isRequiredAttribute,
    getAttributeValue: getAttributeValue,
    handleDeleteChip: handleDeleteChip,
    handleAddChip: handleAddChip
  }))), /*#__PURE__*/_react["default"].createElement(_ButtonPanel["default"], {
    classes: classes,
    currentStep: currentStep,
    handleCurrentStep: createApplication
  }));
};

var _default = (0, _reactIntl.injectIntl)(createAppStep);

exports["default"] = _default;