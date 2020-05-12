"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _Modal = _interopRequireDefault(require("@material-ui/core/Modal"));

var _Code = _interopRequireDefault(require("@material-ui/icons/Code"));

var _reactIntl = require("react-intl");

var _reactCopyToClipboard = _interopRequireDefault(require("react-copy-to-clipboard"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Position the modal
 * @returns {JSON} css atrributes JSON.
 */
function getModalStyle() {
  var top = 50;
  var left = 50;
  return {
    top: "".concat(top, "%"),
    left: "".concat(left, "%"),
    transform: "translate(-".concat(top, "%, -").concat(left, "%)")
  };
}

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    },
    codeIcon: {
      cursor: 'pointer',
      color: theme.palette.getContrastText(theme.custom.infoBar.background)
    },
    code: {
      background: '#efefef',
      color: 'cc0000',
      border: 'solid 1px #ccc',
      padding: theme.spacing(1)
    },
    iconStyle: {
      position: 'absolute',
      top: 60,
      right: 30
    }
  };
});
/**
 * Adds two numbers together.
 * @param {JSON} props props passed from parent
 * @returns {JSX} code in a modal
 */

function EmbadCode(props) {
  var intl = props.intl;
  var classes = useStyles(); // getModalStyle is not a pure function, we roll the style only on the first render

  var _React$useState = _react["default"].useState(getModalStyle),
      _React$useState2 = _slicedToArray(_React$useState, 1),
      modalStyle = _React$useState2[0];

  var _React$useState3 = _react["default"].useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      open = _React$useState4[0],
      setOpen = _React$useState4[1];

  var _React$useState5 = _react["default"].useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      codeCopied = _React$useState6[0],
      setCodeCopied = _React$useState6[1];

  var url = new URL(window.location);
  url.searchParams.set('widget', true);

  var onCopy = function onCopy() {
    setCodeCopied(true);
    setTimeout(function () {
      return setCodeCopied(false);
    }, 2000);
  };

  var handleOpen = function handleOpen() {
    setOpen(true);
  };

  var handleClose = function handleClose() {
    setOpen(false);
  };

  var embadCode = '<iframe width="450" height="120" src="' + url + '" frameBorder="0" allowFullScreen title="Embad API" />';
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Code["default"], {
    className: classes.codeIcon,
    onClick: handleOpen
  }), /*#__PURE__*/_react["default"].createElement(_Modal["default"], {
    open: open,
    onClose: handleClose,
    "aria-labelledby": "simple-modal-title",
    "aria-describedby": "simple-modal-description"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: modalStyle,
    className: classes.paper
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    id: "simple-modal-title"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Apis.Details.Social.EmbadCode",
    defaultMessage: "Embad"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.code
  }, /*#__PURE__*/_react["default"].createElement("code", null, embadCode)), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: codeCopied ? intl.formatMessage({
      defaultMessage: 'Copied',
      id: 'Apis.Details.Environments.copied'
    }) : intl.formatMessage({
      defaultMessage: 'Copy to clipboard',
      id: 'Apis.Details.Environments.copy.to.clipboard'
    }),
    placement: "right",
    className: classes.iconStyle
  }, /*#__PURE__*/_react["default"].createElement(_reactCopyToClipboard["default"], {
    text: embadCode,
    onCopy: onCopy
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    color: "secondary"
  }, "file_copy"))))));
}

var _default = (0, _reactIntl.injectIntl)(EmbadCode);

exports["default"] = _default;