"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Collapse = _interopRequireDefault(require("@material-ui/core/Collapse"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _reactIntl = require("react-intl");

var _Loading = _interopRequireDefault(require("AppComponents/Base/Loading/Loading"));

var _ResourceNotFound = _interopRequireDefault(require("AppComponents/Base/Errors/ResourceNotFound"));

var _VerticalDivider = _interopRequireDefault(require("AppComponents/Shared/VerticalDivider"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _api = _interopRequireDefault(require("AppData/api"));

var _Application = _interopRequireDefault(require("AppData/Application"));

var _Alert = _interopRequireDefault(require("AppComponents/Shared/Alert"));

var _DeleteConfirmation = _interopRequireDefault(require("../Listing/DeleteConfirmation"));

var _AuthManager = _interopRequireDefault(require("AppData/AuthManager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @param {*} theme theme details
 * @returns {Object}
 */
var styles = function styles(theme) {
  var mainBack = theme.custom.infoBar.background || '#ffffff';
  var infoBarHeight = theme.custom.infoBar.height || 70;
  var starColor = theme.custom.infoBar.starColor || theme.palette.getContrastText(mainBack);
  return {
    root: {
      height: infoBarHeight,
      background: mainBack,
      color: theme.palette.getContrastText(mainBack),
      borderBottom: 'solid 1px ' + theme.palette.grey.A200,
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(2)
    },
    backIcon: {
      color: theme.palette.primary.main,
      fontSize: 56,
      cursor: 'pointer'
    },
    backText: {
      color: theme.palette.primary.main,
      cursor: 'pointer',
      fontFamily: theme.typography.fontFamily
    },
    starRate: {
      fontSize: 40,
      color: starColor
    },
    starRateMy: {
      fontSize: 70,
      color: theme.palette.primary.main
    },
    rateLink: {
      cursor: 'pointer',
      lineHeight: '70px'
    },
    topBar: {
      display: 'flex',
      paddingBottom: theme.spacing(2)
    },
    infoContent: {
      color: theme.palette.getContrastText(mainBack),
      background: mainBack,
      padding: theme.spacing(3),
      '& td, & th': {
        color: theme.palette.getContrastText(mainBack)
      }
    },
    infoContentBottom: {
      background: theme.custom.infoBar.sliderBackground,
      color: theme.palette.getContrastText(theme.custom.infoBar.sliderBackground),
      borderBottom: 'solid 1px ' + theme.palette.grey.A200
    },
    bootstrapRoot: {
      padding: 0,
      'label + &': {
        marginTop: theme.spacing(3)
      }
    },
    bootstrapInput: {
      borderRadius: 4,
      backgroundColor: theme.palette.common.white,
      border: '1px solid #ced4da',
      padding: '5px 12px',
      width: 350,
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      fontFamily: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'].join(','),
      '&:focus': {
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
      }
    },
    epWrapper: {
      display: 'flex'
    },
    prodLabel: {
      lineHeight: '30px',
      marginRight: 10,
      width: 100
    },
    contentWrapper: {
      maxWidth: theme.custom.contentAreaWidth - theme.custom.leftMenu.width,
      alignItems: 'center'
    },
    ratingBoxWrapper: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    },
    ratingBox: {
      backgroundColor: theme.custom.leftMenu.background,
      border: '1px solid rgb(71, 211, 244)',
      borderRadius: '5px',
      display: 'flex',
      position: 'absolute',
      top: 14,
      height: '40px',
      color: theme.palette.getContrastText(theme.custom.leftMenu.background),
      alignItems: 'center',
      left: '0',
      paddingLeft: '5px',
      paddingRight: '5px'
    },
    userRating: {
      display: 'flex',
      alignItems: 'flex-end'
    },
    verticalDividerStar: {
      borderLeft: 'solid 1px ' + theme.palette.grey.A200,
      height: 40,
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1)
    },
    backLink: {
      alignItems: 'center',
      textDecoration: 'none',
      display: 'flex'
    },
    ratingSummery: {
      alignItems: 'center',
      flexDirection: 'column',
      display: 'flex'
    },
    infoBarMain: {
      width: '100%'
    },
    buttonView: {
      textAlign: 'left',
      justifyContent: 'left',
      display: 'flex',
      paddingLeft: theme.spacing(2),
      cursor: 'pointer'
    },
    buttonOverviewText: {
      display: 'inline-block',
      paddingTop: 3
    },
    button: {
      display: 'inline-grid',
      cursor: 'pointer',
      '& .material-icons, & span': {
        color: theme.palette.getContrastText(theme.custom.infoBar.background)
      }
    },
    editButton: {
      display: 'inline-grid',
      cursor: 'pointer',
      '& .material-icons, & span': {
        color: theme.palette.getContrastText(theme.custom.infoBar.background)
      }
    },
    iconButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    },
    appNameXSmall: {
      whiteSpace: 'nowrap',
      overflowX: 'auto',
      overflowY: 'hidden',
      maxWidth: 200,
      lineHeight: 1.3
    },
    appNameSmall: {
      whiteSpace: 'nowrap',
      overflowX: 'auto',
      overflowY: 'hidden',
      maxWidth: 310,
      lineHeight: 1.3
    },
    appNameMid: {
      whiteSpace: 'nowrap',
      overflowX: 'auto',
      overflowY: 'hidden',
      maxWidth: 640,
      lineHeight: 1.3
    },
    appNameBig: {
      whiteSpace: 'nowrap',
      overflowX: 'auto',
      overflowY: 'hidden',
      maxWidth: 980,
      lineHeight: 1.3
    },
    linkTitle: {
      color: theme.palette.getContrastText(theme.custom.infoBar.background)
    }
  };
};
/**
 *
 *
 * @class InfoBar
 * @extends {React.Component}
 */


var InfoBar = /*#__PURE__*/function (_React$Component) {
  _inherits(InfoBar, _React$Component);

  var _super = _createSuper(InfoBar);

  /**
   * @param {Object} props props passed from above
   */
  function InfoBar(props) {
    var _this;

    _classCallCheck(this, InfoBar);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "toggleDeleteConfirmation", function () {
      _this.setState(function (_ref) {
        var isDeleteOpen = _ref.isDeleteOpen;
        return {
          isDeleteOpen: !isDeleteOpen
        };
      });
    });

    _this.state = {
      notFound: false,
      showOverview: true,
      isDeleteOpen: false,
      applicationOwner: ''
    };
    _this.toggleOverview = _this.toggleOverview.bind(_assertThisInitialized(_this));
    _this.handleAppDelete = _this.handleAppDelete.bind(_assertThisInitialized(_this));
    _this.handleDeleteConfimation = _this.handleDeleteConfimation.bind(_assertThisInitialized(_this));
    _this.toggleDeleteConfirmation = _this.toggleDeleteConfirmation.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * @memberof InfoBar
   */


  _createClass(InfoBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var client = new _api["default"]();
      var applicationId = this.props.applicationId; // Get application

      var promisedApplication = client.getApplication(applicationId);
      promisedApplication.then(function (response) {
        _this2.setState({
          applicationOwner: response.obj.owner
        });

        var promisedPolicy = client.getTierByName(response.obj.throttlingPolicy, 'application');
        return Promise.all([response, promisedPolicy]);
      }).then(function (response) {
        var _response$map = response.map(function (data) {
          return data.obj;
        }),
            _response$map2 = _slicedToArray(_response$map, 2),
            application = _response$map2[0],
            tier = _response$map2[1];

        _this2.setState({
          application: application,
          tierDescription: tier.description
        });
      })["catch"](function (error) {
        if (process.env.NODE_ENV !== 'production') {
          console.error(error);
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
     * Toggles the showOverview state
     * @param {boolean} todo toggle state
     * @memberof InfoBar
     */

  }, {
    key: "toggleOverview",
    value: function toggleOverview(todo) {
      if (typeof todo === 'boolean') {
        this.setState({
          showOverview: todo
        });
      } else {
        this.setState(function (prevState) {
          return {
            showOverview: !prevState.showOverview
          };
        });
      }
    }
    /**
     * Handles delete confimation
     * @memberof InfoBar
     */

  }, {
    key: "handleDeleteConfimation",
    value: function handleDeleteConfimation() {
      var isDeleteOpen = this.state.isDeleteOpen;
      this.setState({
        isDeleteOpen: !isDeleteOpen
      });
    }
    /**
     * Handles application deletion
     * @memberof InfoBar
     */

  }, {
    key: "handleAppDelete",
    value: function handleAppDelete() {
      var _this3 = this;

      var _this$props = this.props,
          applicationId = _this$props.applicationId,
          intl = _this$props.intl;
      var application = this.state.application;

      var promisedDelete = _Application["default"].deleteApp(applicationId);

      var message = intl.formatMessage({
        defaultMessage: 'Application {name} deleted successfully!',
        id: 'Applications.Details.InfoBar.application.deleted.successfully'
      }, {
        name: application.name
      });
      promisedDelete.then(function (ok) {
        if (ok) {
          _Alert["default"].info(message);

          _this3.toggleDeleteConfirmation();
        }

        _this3.props.history.push('/applications');
      })["catch"](function (error) {
        console.log(error);
        message = intl.formatMessage({
          defaultMessage: 'Error while deleting application {name}',
          id: 'Applications.Details.InfoBar.application.deleting.error'
        }, {
          name: application.name
        });

        _Alert["default"].error(message);
      });
    }
  }, {
    key: "render",

    /**
     * @returns {div}
     * @memberof InfoBar
     */
    value: function render() {
      var _this$props2 = this.props,
          classes = _this$props2.classes,
          theme = _this$props2.theme,
          applicationId = _this$props2.applicationId;
      var _this$state = this.state,
          application = _this$state.application,
          tierDescription = _this$state.tierDescription,
          showOverview = _this$state.showOverview,
          notFound = _this$state.notFound,
          isDeleteOpen = _this$state.isDeleteOpen,
          applicationOwner = _this$state.applicationOwner;
      var position = theme.custom.leftMenu.position;

      if (notFound) {
        return /*#__PURE__*/_react["default"].createElement(_ResourceNotFound["default"], {
          message: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
            id: "Applications.Details.InfoBar.listing.resource.not.found",
            defaultMessage: "Resource Not Fount"
          })
        });
      }

      if (!application) {
        return /*#__PURE__*/_react["default"].createElement(_Loading["default"], null);
      }

      var isUserOwner = _AuthManager["default"].getUser().name === applicationOwner;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.infoBarMain
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.root
      }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true,
        xs: 10
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          marginLeft: theme.spacing(1)
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
        to: '/applications/' + applicationId + '/overview',
        className: classes.linkTitle
      }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "h4"
      }, application.name))), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          marginLeft: theme.spacing(1)
        }
      }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "caption",
        gutterBottom: true,
        align: "left"
      }, application.subscriptionCount, ' ', /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Applications.Details.InfoBar.subscriptions",
        defaultMessage: "Subscriptions"
      })))), /*#__PURE__*/_react["default"].createElement(_VerticalDivider["default"], {
        height: 70
      }), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true,
        xs: 1,
        m: 1,
        className: classes.editButton
      }, isUserOwner ? /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
        to: "/applications/".concat(applicationId, "/edit/"),
        className: classes.editButton
      }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        style: {
          padding: '4px'
        },
        color: "default",
        classes: {
          label: classes.iconButton
        },
        "aria-label": /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Applications.Details.InfoBar.edit",
          defaultMessage: "Edit"
        })
      }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], null, "edit"), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "caption",
        style: {
          marginTop: '2px'
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Applications.Details.InfoBar.edit.text",
        defaultMessage: "Edit"
      })))) : /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        disabled: true,
        style: {
          padding: '4px'
        },
        color: "default",
        classes: {
          label: classes.iconButton
        },
        "aria-label": /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Applications.Details.InfoBar.edit",
          defaultMessage: "Edit"
        })
      }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], null, "edit"), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "caption",
        style: {
          marginTop: '2px'
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Applications.Details.InfoBar.edit.text",
        defaultMessage: "Edit"
      })))), /*#__PURE__*/_react["default"].createElement(_VerticalDivider["default"], {
        height: 70
      }), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true,
        xs: 1,
        m: 1,
        className: classes.button
      }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        onClick: this.handleDeleteConfimation,
        disabled: _AuthManager["default"].getUser().name !== applicationOwner,
        color: "default",
        classes: {
          label: classes.iconButton
        },
        "aria-label": /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Applications.Details.InfoBar.delete",
          defaultMessage: "Delete"
        })
      }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], null, "delete"), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "caption",
        style: {
          marginTop: '2px'
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Applications.Details.InfoBar.text",
        defaultMessage: "Delete"
      }))), /*#__PURE__*/_react["default"].createElement(_DeleteConfirmation["default"], {
        handleAppDelete: this.handleAppDelete,
        isDeleteOpen: isDeleteOpen,
        toggleDeleteConfirmation: this.toggleDeleteConfirmation
      }))));
    }
  }]);

  return InfoBar;
}(_react["default"].Component);

InfoBar.propTypes = {
  classes: _propTypes["default"].shape({}).isRequired,
  theme: _propTypes["default"].shape({}).isRequired,
  applicationId: _propTypes["default"].string.isRequired
};

var _default = (0, _reactIntl.injectIntl)((0, _reactRouterDom.withRouter)((0, _styles.withStyles)(styles, {
  withTheme: true
})(InfoBar)));

exports["default"] = _default;