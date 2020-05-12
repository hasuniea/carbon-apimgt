"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _reactRouterDom = require("react-router-dom");

var _styles = require("@material-ui/core/styles");

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _DialogContentText = _interopRequireDefault(require("@material-ui/core/DialogContentText"));

var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _Slide = _interopRequireDefault(require("@material-ui/core/Slide"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Collapse = _interopRequireDefault(require("@material-ui/core/Collapse"));

var _reactIntl = require("react-intl");

var _api = _interopRequireDefault(require("../../../data/api"));

var _ResourceNotFound = _interopRequireDefault(require("../../Base/Errors/ResourceNotFound"));

var _Loading = _interopRequireDefault(require("../../Base/Loading/Loading"));

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
      var apiId = _this.api_uuid;
      var applicationId = _this.state.applicationId;
      var policy = _this.state.policyName;
      var api = new _api["default"]();
      var promised_subscribe = api.subscribe(apiId, applicationId, policy);
      promised_subscribe.then(function (response) {
        console.log(intl.formatMessage({
          defaultMessage: 'Subscription created successfully with ID : ',
          id: 'Apis.Details.Subscribe.created.successfully.with.id'
        }) + response.body.subscriptionId); // this.addNotifications();

        _this.updateSubscriptionData();

        _this.setState({
          openSubsConfirm: true
        });
      })["catch"](function (error) {
        console.log(intl.formatMessage({
          defaultMessage: 'Error while creating the subscription.',
          id: 'Apis.Details.Subscribe.error'
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
      var intl = this.props.intl;
      this.refs.notificationSystem.addNotification({
        message: intl.formatMessage({
          defaultMessage: 'Subscribe to API successfully',
          id: 'Apis.Details.Subscribe.subscribe.successfull'
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
      return this.state.api ? /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.root
      }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
        className: (0, _classnames2["default"])(classes.expand, _defineProperty({}, classes.expandOpen, this.state.expanded)),
        onClick: this.handleExpandClick,
        "aria-expanded": this.state.expanded,
        "aria-label": intl.formatMessage({
          defaultMessage: 'Show more',
          id: 'Apis.Details.Subscribe.show.more'
        })
      }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], null, "expand_more")), /*#__PURE__*/_react["default"].createElement(_Collapse["default"], {
        "in": this.state.expanded,
        timeout: "auto",
        unmountOnExit: true
      }, "asdfsdf"), this.state.applications && this.state.applications.length > 0 ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "h5",
        className: classes.headline
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Apis.Details.Subscribe.test.this.api",
        defaultMessage: "Test this API?"
      })), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        gutterBottom: true
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Apis.Details.Subscribe.test.description",
        defaultMessage: "Create an application and subscribe to this API.\n                                                An application is a logical collection of APIs.\n                                                Applications allow you to use a single access token to invoke a collection\n                                                of APIs and to subscribe to one API multiple times with different SLA levels.\n                                                The DefaultApplication is pre-created and allows unlimited access by default."
      })), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        onClick: this.handleAppDialogOpen,
        color: "primary",
        variant: "raised",
        className: "form-buttons full-width"
      }, ' ', /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Apis.Details.Subscribe.create.new.application",
        defaultMessage: "Create New Application"
      }))) : /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "h5",
        className: classes.headline
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Apis.Details.Subscribe.subscriptions.title",
        defaultMessage: "Subscriptions"
      })), this.state.applicationsAvailable && this.state.applicationsAvailable.length > 0 ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
        className: classes.formControl
      }, /*#__PURE__*/_react["default"].createElement(_InputLabel["default"], null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Apis.Details.Subscribe.applications.title",
        defaultMessage: "Applications"
      })), /*#__PURE__*/_react["default"].createElement(_Select["default"], {
        value: this.state.applicationId,
        onChange: this.handleChange('applicationId')
      }, this.state.applicationsAvailable.map(function (app) {
        return /*#__PURE__*/_react["default"].createElement("option", {
          value: app.value,
          key: app.value
        }, app.label);
      }))), this.state.tiers && /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
        className: classes.formControl
      }, /*#__PURE__*/_react["default"].createElement(_Select["default"], {
        value: this.state.policyName,
        onChange: this.handleChange('policyName')
      }, this.state.tiers.map(function (tier) {
        return /*#__PURE__*/_react["default"].createElement("option", {
          value: tier.value,
          key: tier.value
        }, tier.label);
      }))), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        onClick: this.createSubscription,
        color: "primary",
        variant: "raised",
        className: "form-buttons full-width"
      }, ' ', /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Apis.Details.Subscribe.subscribe.to.this",
        defaultMessage: "Subscribed to this API"
      }))) : /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        gutterBottom: true
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Apis.Details.Subscribe.subscribed.to.all",
        defaultMessage: "You have subscribed to all the available applications. You need to create a new application to subscribe again to this API."
      })), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        onClick: this.handleAppDialogOpen,
        color: "primary",
        variant: "raised",
        className: "form-buttons full-width"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Apis.Details.Subscribe.create.new",
        defaultMessage: "Create New Application"
      }))), this.state.subscribedApplications && this.state.subscribedApplications.length > 0 && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "caption",
        className: classes.subtitle
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Apis.Details.Subscribe.showing.two.subscribed.applications",
        defaultMessage: "Subscribed Applications"
      }), this.state.subscribedApplications && this.state.subscribedApplications.length > 2 && /*#__PURE__*/_react["default"].createElement("span", null, "-", /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Apis.Details.Subscribe.showing.two.out.of",
        defaultMessage: "Showing 2 out of"
      }), this.state.subscribedApplications.length, "-", /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
        to: "/applications",
        className: classes.viewAllLink
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Apis.Details.Subscribe.view.all.link",
        defaultMessage: "View All"
      })))), this.state.subscribedApplications.slice(0).reverse().map(function (app, index) {
        return index < 2 && /*#__PURE__*/_react["default"].createElement("div", {
          className: classes.appListWrapper,
          key: index
        }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
          to: '/applications/' + app.value,
          key: app.value,
          className: classes.appLink
        }, /*#__PURE__*/_react["default"].createElement("span", {
          className: classes.applicationName
        }, app.label), /*#__PURE__*/_react["default"].createElement("span", {
          className: classes.caption
        }, "- (", app.policy, ")")));
      }))), /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
        fullScreen: true,
        open: this.state.createAppOpen,
        onClose: this.handleClose,
        transition: Transition
      }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        container: true
      }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true,
        xs: 1,
        className: classes.closeButton
      }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
        color: "inherit",
        onClick: this.handleAppDialogClose,
        "aria-label": intl.formatMessage({
          defaultMessage: 'Close',
          id: 'Apis.Details.Subscribe.close.label'
        })
      }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], null, "close"))), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true,
        xs: 11,
        className: classes.applicationCreateRoot
      }))), /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
        open: this.state.openSubsConfirm,
        onClose: this.handleCloseSubsConfirm,
        "aria-labelledby": "alert-dialog-title",
        "aria-describedby": "alert-dialog-description"
      }, /*#__PURE__*/_react["default"].createElement(_DialogTitle["default"], {
        id: "alert-dialog-title"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Apis.Details.Subscribe.use.google.location.service",
        defaultMessage: "Use Google's location service?"
      })), /*#__PURE__*/_react["default"].createElement(_DialogContent["default"], null, /*#__PURE__*/_react["default"].createElement(_DialogContentText["default"], {
        id: "alert-dialog-description"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Apis.Details.Subscribe.created.success",
        defaultMessage: "Successfully created application."
      }))), /*#__PURE__*/_react["default"].createElement(_DialogActions["default"], null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
        to: '/applications/' + this.state.applicationId
      }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        color: "primary"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Apis.Details.Subscribe.go.application",
        defaultMessage: "Go to application page."
      }))), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        onClick: this.handleCloseSubsConfirm,
        color: "primary",
        autoFocus: true
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Apis.Details.Subscribe.stay.on.the.api.details.page",
        defaultMessage: "Stay on the API details page."
      }))))) : /*#__PURE__*/_react["default"].createElement(_Loading["default"], null);
    }
  }]);

  return Subscribe;
}(_react.Component);

Subscribe.propTypes = {
  classes: _propTypes["default"].object.isRequired
};

var _default = (0, _reactIntl.injectIntl)((0, _styles.withStyles)(styles)(Subscribe));

exports["default"] = _default;