"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _reactIntl = require("react-intl");

var _api = _interopRequireDefault(require("AppData/api"));

var _ApplicationCreateForm = _interopRequireDefault(require("AppComponents/Shared/AppsAndKeys/ApplicationCreateForm"));

var _Alert = _interopRequireDefault(require("AppComponents/Shared/Alert"));

var _SettingsContext = _interopRequireDefault(require("AppComponents/Shared/SettingsContext"));

var _Application = _interopRequireDefault(require("AppData/Application"));

var _reactRouterDom = require("react-router-dom");

var _AuthManager = _interopRequireDefault(require("AppData/AuthManager"));

var _Progress = _interopRequireDefault(require("AppComponents/Shared/Progress"));

var _ApplicationCreateBase = _interopRequireDefault(require("./Create/ApplicationCreateBase"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

/**
 * Main style object
 *
 * @param {*} theme
 */
var styles = function styles(theme) {
  return {
    button: {
      '& span': {
        color: theme.palette.getContrastText(theme.palette.primary.main)
      }
    }
  };
};
/**
 * Component used to handle application creation
 * @class ApplicationFormHandler
 * @extends {React.Component}
 * @param {any} value @inheritDoc
 */


var ApplicationFormHandler = /*#__PURE__*/function (_React$Component) {
  _inherits(ApplicationFormHandler, _React$Component);

  var _super = _createSuper(ApplicationFormHandler);

  /**
   * @param {*} props properties
   */
  function ApplicationFormHandler(props) {
    var _this;

    _classCallCheck(this, ApplicationFormHandler);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "getAttributeValue", function (name) {
      var applicationRequest = _this.state.applicationRequest;
      return applicationRequest.attributes[name];
    });

    _defineProperty(_assertThisInitialized(_this), "initiApplicationEditState", function (applicationId) {
      var applicationRequest = _this.state.applicationRequest;

      var promisedApplication = _Application["default"].get(applicationId); // Get all the tires to populate the drop down.


      var api = new _api["default"]();
      var promiseTiers = api.getAllTiers('application');
      var promisedAttributes = api.getAllApplicationAttributes();
      Promise.all([promisedApplication, promiseTiers, promisedAttributes]).then(function (response) {
        var _response = _slicedToArray(response, 3),
            application = _response[0],
            tierResponse = _response[1],
            allAttributes = _response[2];

        var throttlingPolicyList = tierResponse.body.list.map(function (item) {
          return item.name;
        });
        var allAppAttributes = allAttributes.body.list;

        var newRequest = _objectSpread({}, applicationRequest);

        newRequest.applicationId = application.applicationId;
        newRequest.name = application.name;
        newRequest.throttlingPolicy = application.throttlingPolicy;
        newRequest.description = application.description;
        newRequest.groups = application.groups;
        newRequest.tokenType = application.tokenType;
        newRequest.attributes = application.attributes;

        _this.setState({
          isEdit: true,
          applicationRequest: newRequest,
          throttlingPolicyList: throttlingPolicyList,
          allAppAttributes: allAppAttributes,
          applicationOwner: response[0].owner
        });
      })["catch"](function (error) {
        console.log(error);
        var status = error.status;

        if (status === 404) {
          // eslint-disable-next-line react/no-unused-state
          _this.setState({
            notFound: true
          });
        }
      });

      _this.isApplicationGroupSharingEnabled();
    });

    _defineProperty(_assertThisInitialized(_this), "initApplicationCreateState", function () {
      // Get all the tiers to populate the drop down.
      var api = new _api["default"]();
      var promiseTiers = api.getAllTiers('application');
      var promisedAttributes = api.getAllApplicationAttributes();
      Promise.all([promiseTiers, promisedAttributes]).then(function (response) {
        var _response2 = _slicedToArray(response, 2),
            tierResponse = _response2[0],
            allAttributes = _response2[1];

        var applicationRequest = _this.state.applicationRequest;
        var throttlingPolicyList = tierResponse.body.list.map(function (item) {
          return item.name;
        });

        var newRequest = _objectSpread({}, applicationRequest);

        if (throttlingPolicyList.length > 0) {
          var _throttlingPolicyList = _slicedToArray(throttlingPolicyList, 1);

          newRequest.throttlingPolicy = _throttlingPolicyList[0];
        }

        var allAppAttributes = [];
        allAttributes.body.list.map(function (item) {
          return allAppAttributes.push(item);
        });

        if (allAttributes.length > 0) {
          newRequest.attributes = allAppAttributes.filter(function (item) {
            return !item.hidden;
          });
        }

        _this.setState({
          applicationRequest: newRequest,
          throttlingPolicyList: throttlingPolicyList,
          allAppAttributes: allAppAttributes
        });
      })["catch"](function (error) {
        console.log(error);
        var status = error.status;

        if (status === 404) {
          // eslint-disable-next-line react/no-unused-state
          _this.setState({
            notFound: true
          });
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateApplicationRequest", function (applicationRequest) {
      _this.setState({
        applicationRequest: applicationRequest
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleAttributesChange", function (name) {
      return function (event) {
        var applicationRequest = _this.state.applicationRequest;
        applicationRequest.attributes[name] = event.target.value;

        _this.setState({
          applicationRequest: applicationRequest
        });
      };
    });

    _defineProperty(_assertThisInitialized(_this), "isRequiredAttribute", function (name) {
      var allAppAttributes = _this.state.allAppAttributes;

      if (allAppAttributes) {
        for (var i = 0; i < allAppAttributes.length; i++) {
          if (allAppAttributes[i].attribute === name) {
            return allAppAttributes[i].required === 'true';
          }
        }
      }

      return false;
    });

    _defineProperty(_assertThisInitialized(_this), "validateAttributes", function (attributes) {
      var intl = _this.props.intl;
      var allAppAttributes = _this.state.allAppAttributes;
      var isValidAttribute = true;
      var attributeNameList = Object.keys(attributes);

      if (allAppAttributes.length > 0) {
        for (var i = 0; i < allAppAttributes.length; i++) {
          if (allAppAttributes[i].required === 'true' && allAppAttributes[i].hidden === 'false') {
            if (attributeNameList.indexOf(allAppAttributes[i].attribute) === -1) {
              isValidAttribute = false;
            } else if (attributeNameList.indexOf(allAppAttributes[i].attribute) > -1 && (!attributes[allAppAttributes[i].attribute] || attributes[allAppAttributes[i].attribute].trim() === '')) {
              isValidAttribute = false;
            }
          }
        }
      }

      if (!isValidAttribute) {
        return Promise.reject(new Error(intl.formatMessage({
          id: 'Applications.Edit.app.update.error.no.required.attribute',
          defaultMessage: 'Please fill all required application attributes'
        })));
      } else {
        return Promise.resolve(true);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "saveApplication", function () {
      var applicationRequest = _this.state.applicationRequest;
      var _this$props = _this.props,
          intl = _this$props.intl,
          history = _this$props.history;
      var api = new _api["default"]();

      _this.validateName(applicationRequest.name).then(function () {
        return _this.validateAttributes(applicationRequest.attributes);
      }).then(function () {
        return api.createApplication(applicationRequest);
      }).then(function (response) {
        if (response.body.status === 'CREATED') {
          _Alert["default"].info(intl.formatMessage({
            id: 'application.creation.pending',
            defaultMessage: 'A request to register this application has been sent.'
          }));

          history.push('/applications');
        } else {
          console.log('Application created successfully.');

          _Alert["default"].info(intl.formatMessage({
            id: 'Applications.Create.ApplicationFormHandler.Application.created.successfully',
            defaultMessage: 'Application created successfully.'
          }));

          var appId = response.body.applicationId;
          history.push("/applications/".concat(appId));
        }
      })["catch"](function (error) {
        var response = error.response;

        if (response && response.body) {
          var message = response.body.description || intl.formatMessage({
            defaultMessage: 'Error while creating the application',
            id: 'Applications.Create.ApplicationFormHandler.error.while.creating.the.application'
          });

          _Alert["default"].error(message);
        } else {
          _Alert["default"].error(error.message);
        }

        console.error('Error while creating the application');
      });
    });

    _defineProperty(_assertThisInitialized(_this), "saveEdit", function () {
      var applicationRequest = _this.state.applicationRequest;
      var _this$props2 = _this.props,
          history = _this$props2.history,
          intl = _this$props2.intl;
      var api = new _api["default"]();

      _this.validateName(applicationRequest.name).then(function () {
        return _this.validateAttributes(applicationRequest.attributes);
      }).then(function () {
        return api.updateApplication(applicationRequest, null);
      }).then(function (response) {
        var appId = response.body.applicationId;
        history.push("/applications/".concat(appId));

        _Alert["default"].info(intl.formatMessage({
          id: 'Applications.ApplicationFormHandler.app.updated.success',
          defaultMessage: 'Application updated successfully'
        }));

        console.log('Application updated successfully.');
      })["catch"](function (error) {
        var response = error.response;

        if (response && response.body) {
          var message = response.body.description || 'Error while updating the application';

          _Alert["default"].error(message);
        } else {
          _Alert["default"].error(error.message);
        }

        console.error('Error while updating the application');
      });
    });

    _defineProperty(_assertThisInitialized(_this), "validateName", function (value) {
      var intl = _this.props.intl;

      if (!value || value.trim() === '') {
        _this.setState({
          isNameValid: false
        });

        return Promise.reject(new Error(intl.formatMessage({
          id: 'Applications.Create.ApplicationFormHandler.app.name.required',
          defaultMessage: 'Application name is required'
        })));
      }

      _this.setState({
        isNameValid: true
      });

      return Promise.resolve(true);
    });

    _defineProperty(_assertThisInitialized(_this), "handleAddChip", function (chip, appGroups) {
      var applicationRequest = _this.state.applicationRequest;

      var newRequest = _objectSpread({}, applicationRequest);

      var values = appGroups || [];
      values = values.slice();
      values.push(chip);
      newRequest.groups = values;

      _this.setState({
        applicationRequest: newRequest
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDeleteChip", function (chip, index, appGroups) {
      var applicationRequest = _this.state.applicationRequest;

      var newRequest = _objectSpread({}, applicationRequest);

      var values = appGroups || [];
      values = values.filter(function (v) {
        return v !== chip;
      });
      newRequest.groups = values;

      _this.setState({
        applicationRequest: newRequest
      });
    });

    _defineProperty(_assertThisInitialized(_this), "isApplicationGroupSharingEnabled", function () {
      var settingsContext = _this.context;
      var enabled = settingsContext.settings.applicationSharingEnabled;

      _this.setState({
        isApplicationSharingEnabled: enabled
      });
    });

    _this.state = {
      applicationRequest: {
        name: '',
        throttlingPolicy: '',
        description: '',
        tokenType: 'JWT',
        groups: null,
        attributes: {}
      },
      isNameValid: true,
      throttlingPolicyList: [],
      allAppAttributes: null,
      isApplicationSharingEnabled: true,
      applicationOwner: ''
    };
    _this.handleAddChip = _this.handleAddChip.bind(_assertThisInitialized(_this));
    _this.handleDeleteChip = _this.handleDeleteChip.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * Get all the throttling Policies from backend and
   * update the state
   * @memberof ApplicationFormHandler
   */


  _createClass(ApplicationFormHandler, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var params = this.props.match.params;

      if (params.application_id) {
        this.initiApplicationEditState(params.application_id);
      } else {
        this.initApplicationCreateState();
      }

      this.isApplicationGroupSharingEnabled();
    }
    /**
     * @param {object} name application attribute name
     * @returns {Object} attribute value
     * @memberof ApplicationFormHandler
     */

  }, {
    key: "render",

    /**
     * @inheritdoc
     * @memberof ApplicationFormHandler
     */
    value: function render() {
      var _this$state = this.state,
          throttlingPolicyList = _this$state.throttlingPolicyList,
          applicationRequest = _this$state.applicationRequest,
          isNameValid = _this$state.isNameValid,
          allAppAttributes = _this$state.allAppAttributes,
          isApplicationSharingEnabled = _this$state.isApplicationSharingEnabled,
          isEdit = _this$state.isEdit,
          applicationOwner = _this$state.applicationOwner;
      var _this$props3 = this.props,
          params = _this$props3.match.params,
          classes = _this$props3.classes;

      var CreatePageTitle = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "h5"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Applications.Create.ApplicationFormHandler.create.application.heading",
        defaultMessage: "Create an application"
      })), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "caption"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Applications.Create.ApplicationFormHandler.create.application.sub.heading",
        defaultMessage: 'Create an application providing name, quota and token type parameters.' + ' Description is optional'
      })));

      var EditPageTitle = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "h5"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Applications.Create.ApplicationFormHandler.edit.application.heading",
        defaultMessage: "Edit application"
      })), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "caption"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Applications.Create.ApplicationFormHandler.edit.application.sub.heading",
        defaultMessage: 'Edit this application. Name, quota and token type are mandatory parameters' + ' and description is optional'
      })));

      return params.application_id && applicationRequest.name === '' ? /*#__PURE__*/_react["default"].createElement(_Progress["default"], null) : /*#__PURE__*/_react["default"].createElement(_ApplicationCreateBase["default"], {
        title: isEdit ? EditPageTitle : CreatePageTitle
      }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
        py: 4,
        mb: 2,
        display: "flex",
        justifyContent: "center"
      }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true,
        xs: 10,
        md: 9
      }, /*#__PURE__*/_react["default"].createElement(_ApplicationCreateForm["default"], {
        throttlingPolicyList: throttlingPolicyList,
        applicationRequest: applicationRequest,
        updateApplicationRequest: this.updateApplicationRequest,
        validateName: this.validateName,
        isNameValid: isNameValid,
        allAppAttributes: allAppAttributes,
        handleAttributesChange: this.handleAttributesChange,
        isRequiredAttribute: this.isRequiredAttribute,
        getAttributeValue: this.getAttributeValue,
        isApplicationSharingEnabled: isApplicationSharingEnabled,
        handleDeleteChip: this.handleDeleteChip,
        handleAddChip: this.handleAddChip
      }), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
        display: "flex",
        justifyContent: "flex-start",
        mt: 4,
        spacing: 1
      }, /*#__PURE__*/_react["default"].createElement(_Box["default"], null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        variant: "contained",
        color: "primary",
        onClick: isEdit ? this.saveEdit : this.saveApplication,
        disabled: isEdit && _AuthManager["default"].getUser().name !== applicationOwner,
        className: classes.button
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Applications.Create.ApplicationFormHandler.save",
        defaultMessage: "SAVE"
      }))), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
        ml: 1
      }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
        to: "/applications/"
      }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        variant: "text"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Applications.Create.ApplicationFormHandler.cancel",
        defaultMessage: "CANCEL"
      }))))))));
    }
  }]);

  return ApplicationFormHandler;
}(_react["default"].Component);

_defineProperty(ApplicationFormHandler, "contextType", _SettingsContext["default"]);

ApplicationFormHandler.defaultProps = {
  match: {
    params: {
      application_id: null
    }
  }
};
ApplicationFormHandler.propTypes = {
  intl: _propTypes["default"].shape({
    formatMessage: _propTypes["default"].func.isRequired
  }).isRequired,
  history: _propTypes["default"].shape({
    push: _propTypes["default"].func.isRequired
  }).isRequired,
  match: _propTypes["default"].shape({
    params: _propTypes["default"].shape({
      application_id: _propTypes["default"].string
    }).isRequired
  }).isRequired
};

var _default = (0, _reactIntl.injectIntl)((0, _styles.withStyles)(styles)(ApplicationFormHandler));

exports["default"] = _default;