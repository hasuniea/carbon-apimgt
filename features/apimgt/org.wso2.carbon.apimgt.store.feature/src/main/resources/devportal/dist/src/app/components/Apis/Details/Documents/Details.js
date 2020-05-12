"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Details;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _View = _interopRequireDefault(require("AppComponents/Apis/Details/Documents/View"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _reactRouter = require("react-router");

var _api = _interopRequireDefault(require("AppData/api"));

var _Progress = _interopRequireDefault(require("AppComponents/Shared/Progress"));

var _Alert = _interopRequireDefault(require("AppComponents/Shared/Alert"));

var _DocList = _interopRequireDefault(require("./DocList"));

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
    fullView: {
      cursor: 'pointer',
      position: 'absolute',
      right: 5,
      top: 5
    },
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
      minHeight: 400,
      position: 'relative',
      background: theme.custom.apiDetailPages.documentBackground
    },
    popupHeader: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      position: 'fixed',
      width: '100%'
    },
    viewWrapper: {
      padding: theme.spacing(2),
      marginTop: 50
    }
  };
});
/**
 * Switch routes for documents.
 * @param {JSON} props The props passed down from parents.
 * @returns {JSX} Returning JSX to render.
 */

function Details(props) {
  // const restApi = new API();
  var documentList = props.documentList,
      apiId = props.apiId,
      selectedDoc = props.selectedDoc;
  var classes = useStyles();

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1]; // const [doc, setDoc] = useState(null);


  var toggleOpen = function toggleOpen() {
    setOpen(!open);
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.paper
  }, (selectedDoc.sourceType === 'MARKDOWN' || selectedDoc.sourceType === 'INLINE') && /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    className: classes.fullView,
    onClick: toggleOpen
  }, "launch"), /*#__PURE__*/_react["default"].createElement(_View["default"], {
    doc: selectedDoc,
    apiId: apiId,
    fullScreen: open
  })), /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
    fullScreen: true,
    open: open,
    onClose: toggleOpen
  }, /*#__PURE__*/_react["default"].createElement("div", {
    square: true,
    className: classes.popupHeader
  }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
    color: "inherit",
    onClick: toggleOpen,
    "aria-label": "Close"
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], null, "close")), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h4"
  }, selectedDoc.name)), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.viewWrapper
  }, /*#__PURE__*/_react["default"].createElement(_View["default"], {
    doc: selectedDoc,
    apiId: apiId,
    fullScreen: open
  }))));
}