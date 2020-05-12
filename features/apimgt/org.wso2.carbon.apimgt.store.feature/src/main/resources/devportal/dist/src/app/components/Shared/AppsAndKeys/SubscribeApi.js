"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _Slide = _interopRequireDefault(require("@material-ui/core/Slide"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIntl = require("react-intl");

var _api = _interopRequireDefault(require("../../../data/api"));

var _ResourceNotFound = _interopRequireDefault(require("../../Base/Errors/ResourceNotFound"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 *
 *
 * @param {*} theme
 */
var styles = function styles(theme) {
  return {
    media: {
      height: 200
    },
    root: {
      paddingLeft: 20,
      width: '100%',
      flex: 1
    },
    listApps: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      position: 'relative',
      overflow: 'auto',
      maxHeight: 300
    },
    listSection: {
      backgroundColor: 'inherit'
    },
    ul: {
      backgroundColor: 'inherit',
      padding: 0
    },
    appListItem: {
      paddingLeft: 0,
      marginLeft: 20
    },
    appBar: {
      position: 'relative'
    },
    flex: {
      flex: 1
    },
    applicationCreateRoot: {
      marginLeft: 40,
      marginRight: 40
    },
    closeButton: {
      marginLeft: 10,
      marginRight: 10
    },
    caption: {
      color: theme.palette.text.secondary
    },
    applicationName: {
      color: theme.palette.text.primary
    },
    formControl: {
      paddingRight: 20,
      marginBottom: 10,
      width: 200
    },
    subtitle: {
      marginTop: 20
    },
    appLink: {
      textDecoration: 'none'
    },
    viewAllLink: {
      color: theme.palette.text.secondary
    },
    expand: _defineProperty({
      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      }),
      marginLeft: 'auto'
    }, theme.breakpoints.up('sm'), {
      marginRight: -8
    }),
    expandOpen: {
      transform: 'rotate(180deg)'
    }
  };
};
/**
 *
 *
 * @param {*} props
 * @returns
 */


function Transition(props) {
  return /*#__PURE__*/_react["default"].createElement(_Slide["default"], _extends({
    direction: "up"
  }, props));
}
/**
 *
 *
 * @class Subscribe
 * @extends {Component}
 */


var Subscribe = /*#__PURE__*/function (_Component) {
  _inherits(Subscribe, _Component);

  var _super = _createSuper(Subscribe);

  /**
   *Creates an instance of Subscribe.
   * @param {*} props
   * @memberof Subscribe
   */
  function Subscribe(props) {
    var _this;

    _classCallCheck(this, Subscribe);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (name) {
      return function (event) {
        _this.setState(_defineProperty({}, name, event.target.value));
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleExpandClick", function () {
      _this.setState(function (state) {
        return {
          expanded: !state.expanded
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "createSubscription", function (e) {
      e.preventDefault();
      var intl = _this.props.intl;
      var apiId = _this.api_uuid;
      var applicationId = _this.state.applicationId;
      var policy = _this.state.policyName;
      var api = new _api["default"]();
      var promised_subscribe = api.subscribe(apiId, applicationId, policy);
      promised_subscribe.then(function (response) {
        console.log(intl.formatMessage({
          defaultMessage: 'Subscription created successfully with ID : ',
          id: 'Shared.AppsAndKeys.SubscribeApi.subscription.created'
        }) + response.body.subscriptionId); // this.addNotifications();

        _this.updateSubscriptionData();

        _this.setState({
          openSubsConfirm: true
        });
      })["catch"](function (error) {
        console.log(intl.formatMessage({
          defaultMessage: 'Error while creating the subscription.',
          id: 'Shared.AppsAndKeys.SubscribeApi.error.while.creating'
        }));
        console.error(error);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleAppDialogOpen", function () {
      _this.setState({
        createAppOpen: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleAppDialogClose", function () {
      _this.setState({
        createAppOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleCloseSubsConfirm", function () {
      _this.setState({
        openSubsConfirm: false
      });
    });

    _this.state = {
      api: null,
      applications: null,
      policies: null,
      dropDownApplications: null,
      dropDownPolicies: null,
      notFound: false,
      openSubscribeMenu: false,
      matDropVisible: false,
      matDropValue: 'one',
      subscribedApplications: [],
      applicationsAvailable: [],
      tiers: [],
      applicationId: '',
      policyName: '',
      openPopup: false,
      anchorEl: null,
      createAppOpen: false,
      openSubsConfirm: false,
      expaned: false
    };
    _this.api_uuid = _this.props.api_uuid;
    _this.logChange = _this.logChange.bind(_assertThisInitialized(_this));
    _this.openSubscribeMenu = _this.openSubscribeMenu.bind(_assertThisInitialized(_this));
    _this.closeSubscribeMenu = _this.closeSubscribeMenu.bind(_assertThisInitialized(_this));
    _this.handlePopupOpen = _this.handlePopupOpen.bind(_assertThisInitialized(_this));
    _this.handlePopupClose = _this.handlePopupClose.bind(_assertThisInitialized(_this));
    _this.updateSubscriptionData = _this.updateSubscriptionData.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   *
   *
   * @memberof Subscribe
   */


  _createClass(Subscribe, [{
    key: "updateSubscriptionData",
    value: function updateSubscriptionData() {
      var _this2 = this;

      var api = new _api["default"]();
      var promised_api = api.getAPIById(this.api_uuid);
      var existing_subscriptions = api.getSubscriptions(this.api_uuid, null);
      var promised_applications = api.getAllApplications();
      Promise.all([promised_api, existing_subscriptions, promised_applications]).then(function (response) {
        var _response$map = response.map(function (data) {
          return data.obj;
        }),
            _response$map2 = _slicedToArray(_response$map, 3),
            api = _response$map2[0],
            subscriptions = _response$map2[1],
            applications = _response$map2[2]; // Getting the policies from api details


        _this2.setState({
          api: api
        });

        if (api && api.policies) {
          var apiTiers = api.policies;
          var tiers = [];

          for (var i = 0; i < apiTiers.length; i++) {
            var tierName = apiTiers[i];
            tiers.push({
              value: tierName,
              label: tierName
            });
          }

          _this2.setState({
            tiers: tiers
          });

          if (tiers.length > 0) {
            _this2.setState({
              policyName: tiers[0].value
            });
          }
        }

        var subscribedApplications = []; // get the application IDs of existing subscriptions

        subscriptions.list.map(function (element) {
          return subscribedApplications.push({
            value: element.applicationId,
            policy: element.policy
          });
        });

        _this2.setState({
          subscribedApplications: subscribedApplications
        }); // Removing subscribed applications from all the applications and get the available applications to subscribe


        var applicationsAvailable = [];

        for (var _i2 = 0; _i2 < applications.list.length; _i2++) {
          var applicationId = applications.list[_i2].applicationId;
          var applicationName = applications.list[_i2].name; // include the application only if it does not has an existing subscriptions

          var applicationSubscribed = false;

          for (var j = 0; j < subscribedApplications.length; j++) {
            if (subscribedApplications[j].value === applicationId) {
              applicationSubscribed = true;
              subscribedApplications[j].label = applicationName;
            }
          }

          if (!applicationSubscribed) {
            applicationsAvailable.push({
              value: applicationId,
              label: applicationName
            });
          }
        }

        _this2.setState({
          applicationsAvailable: applicationsAvailable
        });

        if (applicationsAvailable && applicationsAvailable.length > 0) {
          _this2.setState({
            applicationId: applicationsAvailable[0].value
          });
        }
      })["catch"](function (error) {
        if (process.env.NODE_ENV !== 'production') {
          console.log(error);
        }

        var status = error.status;

        if (status === 404) {
          _this2.setState({
            notFound: true
          });
        }
      });
    }
    /**
     *
     *
     * @memberof Subscribe
     */

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateSubscriptionData();
    }
    /**
     *
     *
     * @memberof Subscribe
     */

  }, {
    key: "addNotifications",

    /**
     *
     *
     * @memberof Subscribe
     */
    value: function addNotifications() {
      var intl = this.props;
      this.refs.notificationSystem.addNotification({
        message: intl.formatMessage({
          defaultMessage: 'Subscribe to API successfully',
          id: 'Shared.AppsAndKeys.SubscribeApi.subscribe.to.api'
        }),
        position: 'tc',
        level: 'success'
      });
    }
    /**
     *
     *
     * @memberof Subscribe
     */

  }, {
    key: "handleClick",

    /**
     *
     *
     * @memberof Subscribe
     */
    value: function handleClick() {
      this.setState({
        redirect: true
      });
    }
    /**
     *
     *
     * @memberof Subscribe
     */

  }, {
    key: "openSubscribeMenu",
    value: function openSubscribeMenu() {
      this.setState({
        openSubscribeMenu: true
      });
    }
    /**
     *
     *
     * @memberof Subscribe
     */

  }, {
    key: "closeSubscribeMenu",
    value: function closeSubscribeMenu() {
      this.setState({
        openSubscribeMenu: false
      });
    }
    /**
     *
     *
     * @memberof Subscribe
     */

  }, {
    key: "handlePopupClose",
    value: function handlePopupClose() {
      this.setState({
        openPopup: false
      });
    }
    /**
     *
     *
     * @param {*} event
     * @memberof Subscribe
     */

  }, {
    key: "handlePopupOpen",
    value: function handlePopupOpen(event) {
      this.setState({
        openPopup: true,
        anchorEl: event.currentTarget
      });
    }
    /**
     *
     *
     * @param {*} e
     * @memberof Subscribe
     */

  }, {
    key: "onBlur",
    value: function onBlur(e) {
      if (!e.currentTarget.contains(document.activeElement)) {
        this.setState({
          matDropVisible: false
        });
      }
    }
    /**
     *
     *
     * @param {*} val
     * @memberof Subscribe
     */

  }, {
    key: "logChange",
    value: function logChange(val) {
      this.setState({
        matDropValue: val.value
      });
      console.log('Selected: ' + JSON.stringify(val));
    }
    /**
     *
     *
     * @memberof Subscribe
     */

  }, {
    key: "render",

    /**
     *
     *
     * @returns
     * @memberof Subscribe
     */
    value: function render() {
      if (this.state.notFound) {
        return /*#__PURE__*/_react["default"].createElement(_ResourceNotFound["default"], null);
      }

      if (this.state.redirect) {
        return /*#__PURE__*/_react["default"].createElement(Redirect, {
          push: true,
          to: "/application-create"
        });
      }

      var classes = this.props.classes;
      var api = this.state.api;
      return this.state.applicationsAvailable && this.state.applicationsAvailable.length > 0 && /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        container: true,
        spacing: 3,
        className: classes.root
      }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true,
        xs: 12,
        md: 6
      }, /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
        className: classes.FormControl
      }, /*#__PURE__*/_react["default"].createElement(_InputLabel["default"], {
        shrink: true,
        htmlFor: "age-label-placeholder",
        className: classes.quotaHelp
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        defaultMessage: "Application",
        id: "Shared.AppsAndKeys.SubscribeApi.application"
      })), /*#__PURE__*/_react["default"].createElement(_Select["default"], {
        value: this.state.applicationId,
        onChange: this.handleChange('applicationId')
      }, this.state.applicationsAvailable.map(function (app) {
        return /*#__PURE__*/_react["default"].createElement("option", {
          value: app.value,
          key: app.value
        }, app.label);
      })), /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        defaultMessage: "Label + placeholder",
        id: "Shared.AppsAndKeys.SubscribeApi.label.placeholder"
      }), /*#__PURE__*/_react["default"].createElement(FormHelperText, null)), this.state.tiers && /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
        className: classes.FormControlOdd
      }, /*#__PURE__*/_react["default"].createElement(_InputLabel["default"], {
        shrink: true,
        htmlFor: "age-label-placeholder",
        className: classes.quotaHelp
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        defaultMessage: "Throttling Tier",
        id: "Shared.AppsAndKeys.SubscribeApi.throttling.tier"
      })), /*#__PURE__*/_react["default"].createElement(_Select["default"], {
        value: this.state.policyName,
        onChange: this.handleChange('policyName')
      }, this.state.tiers.map(function (tier) {
        return /*#__PURE__*/_react["default"].createElement("option", {
          value: tier.value,
          key: tier.value
        }, tier.label);
      })), /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        defaultMessage: "Label + placeholder",
        id: "Shared.AppsAndKeys.SubscribeApi.label.placeholder.other"
      }), /*#__PURE__*/_react["default"].createElement(FormHelperText, null))));
    }
  }]);

  return Subscribe;
}(_react.Component);

Subscribe.propTypes = {
  classes: _propTypes["default"].object.isRequired
};

var _default = (0, _styles.withStyles)(styles)(Subscribe);

exports["default"] = _default;