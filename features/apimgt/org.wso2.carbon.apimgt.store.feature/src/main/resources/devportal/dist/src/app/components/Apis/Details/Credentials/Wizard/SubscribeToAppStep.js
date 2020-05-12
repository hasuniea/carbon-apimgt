"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _SubscribeToApi = _interopRequireDefault(require("AppComponents/Shared/AppsAndKeys/SubscribeToApi"));

var _Alert = _interopRequireDefault(require("AppComponents/Shared/Alert"));

var _api = _interopRequireDefault(require("AppData/api"));

var _ApiContext = require("AppComponents/Apis/Details/ApiContext");

var _reactIntl = require("react-intl");

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

var subscribeToAppStep = function subscribeToAppStep(props) {
  var SUBSCRIPTION_STATES = {
    ON_HOLD: 'ON_HOLD',
    UNBLOCKED: 'UNBLOCKED',
    REJECTED: 'REJECTED'
  };

  var _useState = (0, _react.useState)({
    applicationId: '',
    apiId: '',
    throttlingPolicy: ''
  }),
      _useState2 = _slicedToArray(_useState, 2),
      subscriptionRequest = _useState2[0],
      setApplicationRequest = _useState2[1];

  var _useContext = (0, _react.useContext)(_ApiContext.ApiContext),
      apiObject = _useContext.api;

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      newApp = _useState4[0],
      setNewApp = _useState4[1];

  var _useState5 = (0, _react.useState)(apiObject.tiers),
      _useState6 = _slicedToArray(_useState5, 1),
      throttlingPolicyList = _useState6[0];

  var currentStep = props.currentStep,
      createdApp = props.createdApp,
      incrementStep = props.incrementStep,
      intl = props.intl,
      setStepStatus = props.setStepStatus,
      stepStatuses = props.stepStatuses,
      classes = props.classes;

  var subscribeToApplication = function subscribeToApplication() {
    var api = new _api["default"]();
    api.subscribe(subscriptionRequest.apiId, subscriptionRequest.applicationId, subscriptionRequest.throttlingPolicy).then(function (response) {
      if (response.body.status === SUBSCRIPTION_STATES.UNBLOCKED) {
        console.log('Subscription created successfully with ID : ' + response.body.subscriptionId);

        _Alert["default"].info(intl.formatMessage({
          defaultMessage: 'Subscribed successfully',
          id: 'Apis.Details.Credentials.Wizard.SubscribeToAppStep.subscribed.successfully'
        }));

        incrementStep();
        setStepStatus(stepStatuses.PROCEED);
      } else {
        setStepStatus(stepStatuses.BLOCKED);
      }
    })["catch"](function (error) {
      console.log('Error while creating the subscription.');
      console.error(error);
    });
  };

  (0, _react.useEffect)(function () {
    var newSubscriptionRequest = _objectSpread(_objectSpread({}, subscriptionRequest), {}, {
      apiId: apiObject.id
    });

    if (throttlingPolicyList) {
      var _throttlingPolicyList = _slicedToArray(throttlingPolicyList, 1),
          tierData = _throttlingPolicyList[0];

      newSubscriptionRequest.throttlingPolicy = tierData.tierName;
    }

    if (createdApp) {
      newSubscriptionRequest.applicationId = createdApp.value;
    }

    setApplicationRequest(newSubscriptionRequest);
    setNewApp(createdApp);
  }, [createdApp]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_SubscribeToApi["default"], {
    throttlingPolicyList: throttlingPolicyList,
    applicationsAvailable: [newApp],
    subscriptionRequest: subscriptionRequest,
    updateSubscriptionRequest: setApplicationRequest
  }), /*#__PURE__*/_react["default"].createElement(_ButtonPanel["default"], {
    classes: classes,
    currentStep: currentStep,
    handleCurrentStep: subscribeToApplication
  }));
};

var _default = (0, _reactIntl.injectIntl)(subscribeToAppStep);

exports["default"] = _default;