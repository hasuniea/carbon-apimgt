"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TagCloudListing;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _reactIntl = require("react-intl");

var _api = _interopRequireDefault(require("AppData/api"));

var _TagCloudListingTags = _interopRequireDefault(require("./TagCloudListingTags"));

var _CustomIcon = _interopRequireDefault(require("../../Shared/CustomIcon"));

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
    appBar: {
      height: 70,
      background: theme.custom.infoBar.background,
      color: theme.palette.getContrastText(theme.custom.infoBar.background),
      borderBottom: 'solid 1px ' + theme.palette.grey.A200,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    mainIconWrapper: {
      paddingTop: 13,
      paddingLeft: 20,
      paddingRight: 20
    },
    mainTitle: {
      paddingTop: 10
    },
    mainTitleWrapper: {
      flexGrow: 1
    },
    content: {
      flexGrow: 1
    },
    listContentWrapper: {
      padding: "0 ".concat(theme.spacing(3), "px")
    },
    iconDefault: {
      color: theme.palette.getContrastText(theme.custom.infoBar.background)
    }
  };
});

function TagCloudListing() {
  var classes = useStyles();
  var theme = (0, _styles.useTheme)();

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      allTags = _useState2[0],
      setAllTags = _useState2[1];

  (0, _react.useEffect)(function () {
    var restApiClient = new _api["default"]();
    var promisedTags = restApiClient.getAllTags();
    promisedTags.then(function (response) {
      setAllTags(response.body.list);
    })["catch"](function (error) {
      console.log(error);
    });
  }, []);
  var strokeColorMain = theme.palette.getContrastText(theme.palette.background.paper);
  return /*#__PURE__*/_react["default"].createElement("main", {
    className: classes.content
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.appBar
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.mainIconWrapper
  }, /*#__PURE__*/_react["default"].createElement(_CustomIcon["default"], {
    strokeColor: strokeColorMain,
    width: 42,
    height: 42,
    icon: "api"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.mainTitleWrapper
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h4",
    className: classes.mainTitle
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    defaultMessage: "API Groups",
    id: "Apis.Listing.TagCloudListing.apigroups.main"
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.listContentWrapper
  }, allTags && /*#__PURE__*/_react["default"].createElement(_TagCloudListingTags["default"], {
    allTags: allTags,
    mainPage: true
  })));
}