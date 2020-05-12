"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _styles = require("@material-ui/core/styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Table = _interopRequireDefault(require("@material-ui/core/Table"));

var _TablePagination = _interopRequireDefault(require("@material-ui/core/TablePagination"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _TableFooter = _interopRequireDefault(require("@material-ui/core/TableFooter"));

var _TableRow = _interopRequireDefault(require("@material-ui/core/TableRow"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _CustomIcon = _interopRequireDefault(require("AppComponents/Shared/CustomIcon"));

var _reactIntl = require("react-intl");

var _reactRouterDom = require("react-router-dom");

var _ScopeValidation = require("AppComponents/Shared/ScopeValidation");

var _Alert = _interopRequireDefault(require("AppComponents/Shared/Alert"));

var _Loading = _interopRequireDefault(require("AppComponents/Base/Loading/Loading"));

var _Application = _interopRequireDefault(require("AppData/Application"));

var _GenericDisplayDialog = _interopRequireDefault(require("AppComponents/Shared/GenericDisplayDialog"));

var _SettingsContext = _interopRequireDefault(require("AppComponents/Shared/SettingsContext"));

var _Settings = require("Settings");

var _AppsTableContent = _interopRequireDefault(require("./AppsTableContent"));

var _ApplicationTableHead = _interopRequireDefault(require("./ApplicationTableHead"));

var _DeleteConfirmation = _interopRequireDefault(require("./DeleteConfirmation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
 *
 * @inheritdoc
 * @param {*} theme theme object
 */
var styles = function styles(theme) {
  return {
    card: {
      minWidth: 275,
      paddingBottom: 20
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)'
    },
    pos: {
      marginBottom: 12,
      color: theme.palette.text.secondary
    },
    createAppWrapper: {
      textDecoration: 'none'
    },
    divider: {
      marginBottom: 20
    },
    createButton: {
      textDecoration: 'none',
      display: 'inline-block',
      marginLeft: 20,
      alignSelf: 'flex-start'
    },
    titleWrapper: {
      display: 'flex'
    },
    // New styles
    // //////////////////////
    content: {
      flexGrow: 1
    },
    root: {
      height: 80,
      background: theme.custom.infoBar.background,
      color: theme.palette.getContrastText(theme.custom.infoBar.background),
      borderBottom: "solid 1px ".concat(theme.palette.grey.A200),
      display: 'block'
    },
    mainIconWrapper: {
      paddingTop: theme.spacing(1.5),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(2.5)
    },
    mainTitleWrapper: {
      display: 'flex'
    },
    createLinkWrapper: {
      paddingLeft: theme.spacing(2)
    },
    appContent: {
      marginTop: theme.spacing(2),
      maxWidth: '95%',
      margin: 'auto',
      maxHeight: theme.spacing(90),
      height: theme.spacing(90),
      overflow: 'scroll'
    },
    dialogContainer: {
      width: 1000,
      padding: theme.spacing(2)
    },
    container: {
      height: '100%'
    },
    appTablePaper: {
      '& table tr td': {
        paddingLeft: theme.spacing(1)
      },
      '& table tr:nth-child(even)': {
        backgroundColor: theme.custom.listView.tableBodyEvenBackgrund,
        '& td, & a, & .material-icons': {
          color: theme.palette.getContrastText(theme.custom.listView.tableBodyEvenBackgrund)
        }
      },
      '& table tr:nth-child(odd)': {
        backgroundColor: theme.custom.listView.tableBodyOddBackgrund,
        '& td, & a, & .material-icons': {
          color: theme.palette.getContrastText(theme.custom.listView.tableBodyOddBackgrund)
        }
      },
      '& table th': {
        backgroundColor: theme.custom.listView.tableHeadBackground,
        color: theme.palette.getContrastText(theme.custom.listView.tableHeadBackground),
        paddingLeft: theme.spacing(1)
      }
    }
  };
};
/**
 * @inheritdoc
 * @class Listing
 * @extends {Component}
 */


var Listing = /*#__PURE__*/function (_Component) {
  _inherits(Listing, _Component);

  var _super = _createSuper(Listing);

  /**
   *
   * @param {any} props properties
   */
  function Listing(props) {
    var _this;

    _classCallCheck(this, Listing);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "isApplicationGroupSharingEnabled", function () {
      var settingsContext = _this.context;
      var enabled = settingsContext.settings.applicationSharingEnabled;

      _this.setState({
        isApplicationSharingEnabled: enabled
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateApps", function () {
      var _this$state = _this.state,
          page = _this$state.page,
          rowsPerPage = _this$state.rowsPerPage,
          order = _this$state.order,
          orderBy = _this$state.orderBy;

      var promisedApplications = _Application["default"].all(rowsPerPage, page * rowsPerPage, order, orderBy);

      promisedApplications.then(function (applications) {
        var total = applications.pagination.total; // Applications list put into map, to make it efficient when deleting apps (referring back to an App)

        var apps = new Map();
        applications.list.map(function (app) {
          return apps.set(app.applicationId, app);
        }); // Store application against its UUID

        _this.setState({
          data: apps,
          totalApps: total
        });
      })["catch"](function (error) {
        console.log(error);
        var status = error.status;

        if (status === 404) {
          // eslint-disable-next-line react/no-unused-state
          _this.setState({
            notFound: true
          });
        } else if (status === 401) {
          window.location = _Settings.appSettings.context + '/services/configs';
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleRequestSort", function (event, property) {
      var _this$state2 = _this.state,
          orderBy = _this$state2.orderBy,
          order = _this$state2.order;
      var currentOrder = 'desc';

      if (orderBy === property) {
        currentOrder = order === 'desc' ? 'asc' : 'desc';

        _this.setState({
          order: currentOrder
        }, _this.updateApps);
      } else {
        _this.setState({
          order: currentOrder,
          orderBy: property
        }, _this.updateApps);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleChangePage", function (event, page) {
      _this.setState({
        page: page
      }, _this.updateApps);
    });

    _defineProperty(_assertThisInitialized(_this), "handleChangeRowsPerPage", function (event) {
      var nextRowsPerPage = event.target.value;
      var _this$state3 = _this.state,
          rowsPerPage = _this$state3.rowsPerPage,
          page = _this$state3.page;
      var rowsPerPageRatio = rowsPerPage / nextRowsPerPage;
      var nextPage = Math.floor(page * rowsPerPageRatio);

      _this.setState({
        rowsPerPage: nextRowsPerPage,
        page: nextPage
      }, _this.updateApps);
    });

    _defineProperty(_assertThisInitialized(_this), "handleClose", function () {
      _this.setState({
        open: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickOpen", function () {
      var history = _this.props.history;
      history.push('/applications/create');
    });

    _defineProperty(_assertThisInitialized(_this), "toggleDeleteConfirmation", function (event) {
      var id = '';

      if (event) {
        id = event.currentTarget.getAttribute('data-appid');
      }

      _this.setState(function (_ref) {
        var isDeleteOpen = _ref.isDeleteOpen;
        return {
          isDeleteOpen: !isDeleteOpen,
          deletingId: id
        };
      });
    });

    _this.state = {
      order: 'asc',
      orderBy: 'name',
      data: null,
      page: 0,
      rowsPerPage: Listing.rowsPerPage,
      open: false,
      isApplicationSharingEnabled: true,
      isDeleteOpen: false,
      totalApps: 0
    };
    _this.handleAppDelete = _this.handleAppDelete.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * @memberof Listing
   */


  _createClass(Listing, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateApps();
      this.isApplicationGroupSharingEnabled();
    }
    /**
     * retrieve Settings from the context and check the application sharing enabled
     * @param {*} settingsData required data
     */

  }, {
    key: "handleAppDelete",

    /**
     * @param {*} event event
     * @memberof Listing
     */
    value: function handleAppDelete() {
      var _this2 = this;

      var _this$state4 = this.state,
          data = _this$state4.data,
          deletingId = _this$state4.deletingId,
          page = _this$state4.page;
      var intl = this.props.intl;
      var newData = new Map(_toConsumableArray(data));
      var app = newData.get(deletingId);
      app.deleting = true;
      var message = intl.formatMessage({
        defaultMessage: 'Application {name} deleted successfully!',
        id: 'Applications.Listing.Listing.application.deleted.successfully'
      }, {
        name: app.name
      });

      var promisedDelete = _Application["default"].deleteApp(deletingId);

      promisedDelete.then(function (ok) {
        if (ok) {
          newData["delete"](deletingId);

          _Alert["default"].info(message);

          _this2.toggleDeleteConfirmation(); // Page is reduced by 1, when there is only one application in a particular page and it is deleted (except when in first page)


          if (newData.size === 0 && page !== 0) {
            _this2.setState(function (state) {
              return {
                page: state.page - 1
              };
            });
          }

          _this2.updateApps();
        }
      })["catch"](function (error) {
        console.log(error);
        message = intl.formatMessage({
          defaultMessage: 'Error while deleting application {name}',
          id: 'Applications.Listing.Listing.application.deleting.error'
        }, {
          name: app.name
        });

        _Alert["default"].error(message);
      });
    }
  }, {
    key: "render",

    /**
     * @inheritdoc
     */
    value: function render() {
      var _this$state5 = this.state,
          data = _this$state5.data,
          order = _this$state5.order,
          orderBy = _this$state5.orderBy,
          rowsPerPage = _this$state5.rowsPerPage,
          page = _this$state5.page,
          open = _this$state5.open,
          isApplicationSharingEnabled = _this$state5.isApplicationSharingEnabled,
          isDeleteOpen = _this$state5.isDeleteOpen,
          totalApps = _this$state5.totalApps;

      if (!data) {
        return /*#__PURE__*/_react["default"].createElement(_Loading["default"], null);
      }

      var _this$props = this.props,
          classes = _this$props.classes,
          theme = _this$props.theme,
          intl = _this$props.intl;
      var strokeColorMain = theme.palette.getContrastText(theme.custom.infoBar.background);
      var paginationEnabled = totalApps > Listing.rowsPerPage;
      return /*#__PURE__*/_react["default"].createElement("main", {
        className: classes.content
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.root
      }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.mainIconWrapper
      }, /*#__PURE__*/_react["default"].createElement(_CustomIcon["default"], {
        strokeColor: strokeColorMain,
        width: 42,
        height: 42,
        icon: "applications"
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.mainTitleWrapper
      }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "h4",
        className: classes.mainTitle
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Applications.Listing.Listing.applications",
        defaultMessage: "Applications"
      })), (data.size !== 0 || open) && /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.createLinkWrapper
      }, /*#__PURE__*/_react["default"].createElement(_ScopeValidation.ScopeValidation, {
        resourcePath: _ScopeValidation.resourcePaths.APPLICATIONS,
        resourceMethod: _ScopeValidation.resourceMethods.POST
      }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
        to: "/applications/create"
      }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        variant: "contained",
        color: "primary"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Applications.Create.Listing.add.new.application",
        defaultMessage: "Add New Application"
      }))))), data && /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "caption",
        gutterBottom: true,
        align: "left"
      }, data.count === 0 && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Applications.Listing.Listing.no.applications.created",
        defaultMessage: "No Applications created"
      }))))), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
        display: "flex",
        pl: 3
      }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "caption",
        gutterBottom: true,
        align: "left"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Applications.Listing.Listing.logical.description",
        defaultMessage: "An application is a logical collection of APIs. \n                                        Applications allow you to use a single access token to invoke a\n                                         collection of APIs and to subscribe to one API multiple times\n                                          and allows unlimited access by default."
      })))), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        container: true,
        spacing: 0,
        justify: "center",
        className: classes.container
      }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true,
        xs: 12
      }, data.size > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.appContent
      }, /*#__PURE__*/_react["default"].createElement(_Paper["default"], {
        className: classes.appTablePaper
      }, /*#__PURE__*/_react["default"].createElement(_Table["default"], null, /*#__PURE__*/_react["default"].createElement(_ApplicationTableHead["default"], {
        order: order,
        orderBy: orderBy,
        onRequestSort: this.handleRequestSort
      }), /*#__PURE__*/_react["default"].createElement(_AppsTableContent["default"], {
        handleAppDelete: this.handleAppDelete,
        apps: data,
        page: page,
        rowsPerPage: rowsPerPage,
        order: order,
        orderBy: orderBy,
        isApplicationSharingEnabled: isApplicationSharingEnabled,
        toggleDeleteConfirmation: this.toggleDeleteConfirmation
      }), paginationEnabled && /*#__PURE__*/_react["default"].createElement(_TableFooter["default"], null, /*#__PURE__*/_react["default"].createElement(_TableRow["default"], null, /*#__PURE__*/_react["default"].createElement(_TablePagination["default"], {
        component: "td",
        count: totalApps,
        rowsPerPage: rowsPerPage,
        rowsPerPageOptions: [5, 10, 15],
        labelRowsPerPage: "Show",
        page: page,
        backIconButtonProps: {
          'aria-label': 'Previous Page'
        },
        nextIconButtonProps: {
          'aria-label': 'Next Page'
        },
        onChangePage: this.handleChangePage,
        onChangeRowsPerPage: this.handleChangeRowsPerPage
      })))))) : /*#__PURE__*/_react["default"].createElement(_GenericDisplayDialog["default"], {
        classes: classes,
        handleClick: this.handleClickOpen,
        heading: "Create New Application",
        caption: intl.formatMessage({
          defaultMessage: "An application is a logical collection of APIs. Applications\n                                    allow you to use a single access token to invoke a collection\n                                    of APIs and to subscribe to one API multiple times with different\n                                    SLA levels. The DefaultApplication is pre-created and allows unlimited\n                                    access by default.",
          id: 'Applications.Listing.Listing.generic.display.description'
        }),
        buttonText: intl.formatMessage({
          defaultMessage: 'ADD NEW APPLICATION',
          id: 'Applications.Listing.Listing.generic.display.description.text'
        })
      }), /*#__PURE__*/_react["default"].createElement(_DeleteConfirmation["default"], {
        handleAppDelete: this.handleAppDelete,
        isDeleteOpen: isDeleteOpen,
        toggleDeleteConfirmation: this.toggleDeleteConfirmation
      }))));
    }
  }]);

  return Listing;
}(_react.Component);

_defineProperty(Listing, "contextType", _SettingsContext["default"]);

_defineProperty(Listing, "rowsPerPage", 10);

Listing.propTypes = {
  classes: _propTypes["default"].shape({
    root: _propTypes["default"].string,
    flex: _propTypes["default"].string,
    content: _propTypes["default"].string,
    mainIconWrapper: _propTypes["default"].string,
    mainTitle: _propTypes["default"].string,
    mainTitleWrapper: _propTypes["default"].string,
    createLinkWrapper: _propTypes["default"].string,
    appContent: _propTypes["default"].string
  }).isRequired,
  theme: _propTypes["default"].shape({}).isRequired,
  intl: _propTypes["default"].shape({}).isRequired,
  history: _propTypes["default"].shape({
    push: _propTypes["default"].func
  }).isRequired
};

var _default = (0, _reactIntl.injectIntl)((0, _styles.withStyles)(styles, {
  withTheme: true
})(Listing));

exports["default"] = _default;