"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _muiDatatables = _interopRequireDefault(require("mui-datatables"));

var _reactIntl = require("react-intl");

var _Subscription = _interopRequireDefault(require("AppData/Subscription"));

var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _DialogContentText = _interopRequireDefault(require("@material-ui/core/DialogContentText"));

var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var styles = function styles(theme) {
  return {
    dialogWrapper: {
      '& span,& p , & h5, & label, & td, & li, & div, & input, & p.MuiFormHelperText-root': {
        color: theme.palette.getContrastText(theme.palette.background.paper)
      }
    }
  };
};

var columns = ['Name', 'Value'];
var options = {
  filterType: 'checkbox',
  sort: false,
  search: false,
  viewColumns: false,
  filter: false,
  selectableRowsHeader: false,
  selectableRows: 'none',
  pagination: false,
  download: false
};

function Invoice(props) {
  var subscriptionId = props.subscriptionId,
      isMonetizedAPI = props.isMonetizedAPI,
      isDynamicUsagePolicy = props.isDynamicUsagePolicy,
      classes = props.classes;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showPopup = _useState2[0],
      setShowPopup = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showErrorPopup = _useState4[0],
      setShowErrorPopup = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      invoice = _useState6[0],
      setInvoice = _useState6[1];
  /**
   * Handle the popup for invoice
   */


  var handlePopup = function handlePopup() {
    setShowPopup(true);
    setInvoice(null);
    var client = new _Subscription["default"]();
    var promiseInvoice = client.getMonetizationInvoice(subscriptionId);
    promiseInvoice.then(function (response) {
      if (response && response.obj) {
        var invoiceData = [];
        var properties = response.obj.properties;
        Object.keys(properties).map(function (invoiveItem) {
          var insideArray = [];
          insideArray.push(invoiveItem);
          insideArray.push(properties[invoiveItem]);
          invoiceData.push(insideArray);
        });
        setInvoice(invoiceData);
      }
    })["catch"](function (error) {
      console.error(error);
      setShowErrorPopup(true);
    });
  };
  /**
   * Handle closing the popup for invoice
   */


  var handleClose = function handleClose() {
    setShowPopup(false);
  };

  var handleAlertClose = function handleAlertClose() {
    setShowErrorPopup(false);
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    variant: "outlined",
    size: "small",
    color: "primary",
    disabled: false,
    onClick: handlePopup
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Applications.Details.Invoice.view.btn",
    defaultMessage: "View Invoice"
  })), invoice ? /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
    open: showPopup,
    onClose: handleClose,
    fullWidth: "true",
    className: classes.dialogWrapper
  }, invoice && /*#__PURE__*/_react["default"].createElement(_muiDatatables["default"], {
    title: "Upcoming Invoice",
    data: invoice,
    columns: columns,
    options: options
  })) : /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
    open: showErrorPopup,
    onClose: handleAlertClose,
    fullWidth: "true",
    className: classes.dialogWrapper
  }, /*#__PURE__*/_react["default"].createElement(_DialogTitle["default"], null, "No Data Available"), /*#__PURE__*/_react["default"].createElement(_DialogContent["default"], null, /*#__PURE__*/_react["default"].createElement(_DialogContentText["default"], {
    id: "invoice-dialog-description"
  }, "Pending invoice data not found for this subscription.")), /*#__PURE__*/_react["default"].createElement(_DialogActions["default"], null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    onClick: handleAlertClose,
    color: "primary"
  }, "Close"))));
}

Invoice.propTypes = {
  subscriptionId: _propTypes["default"].string.isRequired
};

var _default = (0, _styles.withStyles)(styles)(Invoice);

exports["default"] = _default;