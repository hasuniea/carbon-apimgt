"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("@material-ui/core/styles");

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Table = _interopRequireDefault(require("@material-ui/core/Table"));

var _TableBody = _interopRequireDefault(require("@material-ui/core/TableBody"));

var _TableCell = _interopRequireDefault(require("@material-ui/core/TableCell"));

var _TableRow = _interopRequireDefault(require("@material-ui/core/TableRow"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _reactIntl = require("react-intl");

var _ExpansionPanel = _interopRequireDefault(require("@material-ui/core/ExpansionPanel"));

var _ExpansionPanelDetails = _interopRequireDefault(require("@material-ui/core/ExpansionPanelDetails"));

var _ExpansionPanelSummary = _interopRequireDefault(require("@material-ui/core/ExpansionPanelSummary"));

var _reactRouterDom = require("react-router-dom");

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var _ExpansionPanelActions = _interopRequireDefault(require("@material-ui/core/ExpansionPanelActions"));

var _Settings = require("Settings");

var _Loading = _interopRequireDefault(require("AppComponents/Base/Loading/Loading"));

var _api = _interopRequireDefault(require("AppData/api"));

var _ResourceNotFound = _interopRequireDefault(require("AppComponents/Base/Errors/ResourceNotFound"));

var _Application = _interopRequireDefault(require("AppData/Application"));

var _TokenManager = _interopRequireDefault(require("AppComponents/Shared/AppsAndKeys/TokenManager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      padding: theme.spacing(3, 2),
      '& td, & th': {
        color: theme.palette.getContrastText(theme.custom.infoBar.background)
      },
      background: theme.custom.infoBar.background
    },
    table: {
      minWidth: '100%'
    },
    leftCol: {
      width: 200
    },
    iconAligner: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    iconTextWrapper: {
      display: 'inline-block',
      paddingLeft: 20
    },
    iconEven: {
      color: theme.custom.infoBar.iconEvenColor,
      width: theme.spacing(3)
    },
    iconOdd: {
      color: theme.custom.infoBar.iconOddColor,
      width: theme.spacing(3)
    },
    noKeysRoot: {
      backgroundImage: "url(".concat(_Settings.app.context + theme.custom.overviewPage.keysBackground, ")"),
      height: '100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      minHeight: 192,
      display: 'flex',
      alignItems: 'center'
    },
    heading: {
      color: theme.palette.getContrastText(theme.palette.background.paper),
      paddingLeft: theme.spacing(1)
    },
    emptyBox: {
      background: '#ffffff55',
      color: theme.palette.getContrastText(theme.palette.background.paper),
      border: 'solid 1px #fff',
      padding: theme.spacing(2),
      width: '100%'
    },
    summaryRoot: {
      display: 'flex',
      alignItems: 'center'
    },
    actionPanel: {
      justifyContent: 'flex-start'
    }
  };
});
/**
 * Render application overview page.
 * @param {JSON} props Props passed down from parent.
 * @returns {JSX} jsx output from render.
 */

function Overview(props) {
  var classes = useStyles();

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      application = _useState2[0],
      setApplication = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      tierDescription = _useState4[0],
      setTierDescription = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      notFound = _useState6[0],
      setNotFound = _useState6[1];

  var applicationId = props.match.params.applicationId;
  (0, _react.useEffect)(function () {
    var client = new _api["default"](); // Get application

    var promisedApplication = client.getApplication(applicationId);
    promisedApplication.then(function (response) {
      var promisedTier = client.getTierByName(response.obj.throttlingPolicy, 'application');
      var app = response.obj;
      promisedTier.then(function (tierResponse) {
        setTierDescription(tierResponse.obj.description);
        setApplication(app);
      });
    })["catch"](function (error) {
      if (process.env.NODE_ENV !== 'production') {
        console.log(error);
      }

      var status = error.status;

      if (status === 404) {
        setNotFound(true);
      } else {
        setNotFound(false);
      }
    });
  }, []);

  if (notFound) {
    return /*#__PURE__*/_react["default"].createElement(_ResourceNotFound["default"], null);
  }

  if (!application) {
    return /*#__PURE__*/_react["default"].createElement(_Loading["default"], null);
  }

  var pathPrefix = '/applications/' + applicationId;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react["default"].createElement(_Table["default"], {
    className: classes.table
  }, /*#__PURE__*/_react["default"].createElement(_TableBody["default"], null, /*#__PURE__*/_react["default"].createElement(_TableRow["default"], null, /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
    component: "th",
    scope: "row",
    className: classes.leftCol
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.iconAligner
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    className: classes.iconEven
  }, "description"), /*#__PURE__*/_react["default"].createElement("span", {
    className: classes.iconTextWrapper
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "caption",
    gutterBottom: true,
    align: "left"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Applications.Details.Overview.description",
    defaultMessage: "Description"
  }))))), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, application.description)), tierDescription && /*#__PURE__*/_react["default"].createElement(_TableRow["default"], null, /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
    component: "th",
    scope: "row",
    className: classes.leftCol
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.iconAligner
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    className: classes.iconOdd
  }, "settings_input_component"), /*#__PURE__*/_react["default"].createElement("span", {
    className: classes.iconTextWrapper
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "caption",
    gutterBottom: true,
    align: "left"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Applications.Details.InfoBar.throttling.tier",
    defaultMessage: "Throttling Tier"
  }))))), application && /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, application.throttlingPolicy, ' ', "(".concat(tierDescription, ")"))), /*#__PURE__*/_react["default"].createElement(_TableRow["default"], null, /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
    component: "th",
    scope: "row",
    className: classes.leftCol
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.iconAligner
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    className: classes.iconEven
  }, "vpn_key"), /*#__PURE__*/_react["default"].createElement("span", {
    className: classes.iconTextWrapper
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "caption",
    gutterBottom: true,
    align: "left"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Applications.Details.Overview.token.type",
    defaultMessage: "Token Type"
  }))))), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, _Application["default"].TOKEN_TYPES[application.tokenType].displayName)), /*#__PURE__*/_react["default"].createElement(_TableRow["default"], null, /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
    component: "th",
    scope: "row",
    className: classes.leftCol
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.iconAligner
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    className: classes.iconOdd
  }, "assignment_turned_in"), /*#__PURE__*/_react["default"].createElement("span", {
    className: classes.iconTextWrapper
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "caption",
    gutterBottom: true,
    align: "left"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Applications.Details.Overview.workflow.status",
    defaultMessage: "Workflow Status"
  }))))), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, application.status)), /*#__PURE__*/_react["default"].createElement(_TableRow["default"], null, /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
    component: "th",
    scope: "row",
    className: classes.leftCol
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.iconAligner
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    className: classes.iconEven
  }, "account_box"), /*#__PURE__*/_react["default"].createElement("span", {
    className: classes.iconTextWrapper
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "caption",
    gutterBottom: true,
    align: "left"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Applications.Details.Overview.application.owner",
    defaultMessage: "Application Owner"
  }))))), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, application.owner)), application.attributes && Object.keys(application.attributes).map(function (attr, index) {
    var attrValue = application.attributes[attr];
    return /*#__PURE__*/_react["default"].createElement(_TableRow["default"], {
      key: attr
    }, /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
      component: "th",
      scope: "row",
      className: classes.leftCol
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: classes.iconAligner
    }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      className: (0, _classnames["default"])(_defineProperty({}, classes.iconEven, index % 2 !== 0), _defineProperty({}, classes.iconOdd, index % 2 === 0))
    }, "web_asset"), /*#__PURE__*/_react["default"].createElement("span", {
      className: classes.iconTextWrapper
    }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      variant: "caption",
      gutterBottom: true,
      align: "left"
    }, attr)))), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, attrValue));
  })))), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12,
    lg: 6
  }, /*#__PURE__*/_react["default"].createElement(_ExpansionPanel["default"], {
    defaultExpanded: true
  }, /*#__PURE__*/_react["default"].createElement(_ExpansionPanelSummary["default"], {
    classes: {
      content: classes.summaryRoot
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    className: classes.iconEven
  }, "vpn_key"), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    className: classes.heading,
    variant: "h6"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Applications.Details.Overview.prod.keys.title",
    defaultMessage: "Production Keys"
  }))), /*#__PURE__*/_react["default"].createElement(_ExpansionPanelDetails["default"], {
    classes: {
      root: (0, _classnames["default"])(_defineProperty({}, classes.noKeysRoot, true))
    }
  }, /*#__PURE__*/_react["default"].createElement(_TokenManager["default"], {
    keyType: "PRODUCTION",
    selectedApp: {
      appId: application.applicationId,
      label: application.name,
      tokenType: application.tokenType,
      owner: application.owner,
      hashEnabled: application.hashEnabled
    },
    summary: true
  })), /*#__PURE__*/_react["default"].createElement(_Divider["default"], null), /*#__PURE__*/_react["default"].createElement(_ExpansionPanelActions["default"], {
    className: classes.actionPanel
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: pathPrefix + '/productionkeys/oauth',
    className: classes.button
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    size: "small",
    color: "primary"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Applications.Details.Overview.show.more",
    defaultMessage: "Manage >>"
  })))))), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12,
    lg: 6
  }, /*#__PURE__*/_react["default"].createElement(_ExpansionPanel["default"], {
    defaultExpanded: true
  }, /*#__PURE__*/_react["default"].createElement(_ExpansionPanelSummary["default"], {
    classes: {
      content: classes.summaryRoot
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    className: classes.iconEven
  }, "vpn_key"), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    className: classes.heading,
    variant: "h6"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Applications.Details.Overview.sand.keys.title",
    defaultMessage: "Sandbox Keys"
  }))), /*#__PURE__*/_react["default"].createElement(_ExpansionPanelDetails["default"], {
    classes: {
      root: (0, _classnames["default"])(_defineProperty({}, classes.noKeysRoot, true))
    }
  }, /*#__PURE__*/_react["default"].createElement(_TokenManager["default"], {
    keyType: "SANDBOX",
    selectedApp: {
      appId: application.applicationId,
      label: application.name,
      tokenType: application.tokenType,
      owner: application.owner,
      hashEnabled: application.hashEnabled
    },
    summary: true
  })), /*#__PURE__*/_react["default"].createElement(_Divider["default"], null), /*#__PURE__*/_react["default"].createElement(_ExpansionPanelActions["default"], {
    className: classes.actionPanel
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: pathPrefix + '/sandboxkeys/oauth',
    className: classes.button
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    size: "small",
    color: "primary"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Applications.Details.Overview.show.more",
    defaultMessage: "Manage >>"
  }))))))));
}

var _default = (0, _reactIntl.injectIntl)(Overview);

exports["default"] = _default;