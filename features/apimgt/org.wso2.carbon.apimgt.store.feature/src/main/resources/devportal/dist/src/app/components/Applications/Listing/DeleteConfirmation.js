"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core/");

var _Slide = _interopRequireDefault(require("@material-ui/core/Slide"));

var _reactIntl = require("react-intl");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DeleteConfirmation = function DeleteConfirmation(props) {
  var handleAppDelete = props.handleAppDelete,
      isDeleteOpen = props.isDeleteOpen,
      toggleDeleteConfirmation = props.toggleDeleteConfirmation;
  return /*#__PURE__*/_react["default"].createElement(_core.Dialog, {
    open: isDeleteOpen,
    transition: _Slide["default"]
  }, /*#__PURE__*/_react["default"].createElement(_core.DialogTitle, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Applications.Listing.DeleteConfirmation.dialog.title",
    defaultMessage: "Delete Application"
  })), /*#__PURE__*/_react["default"].createElement(_core.DialogContent, null, /*#__PURE__*/_react["default"].createElement(_core.DialogContentText, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Applications.Listing.DeleteConfirmation.dialog.text.description",
    defaultMessage: "The application will be removed"
  }))), /*#__PURE__*/_react["default"].createElement(_core.DialogActions, null, /*#__PURE__*/_react["default"].createElement(_core.Button, {
    dense: true,
    onClick: toggleDeleteConfirmation
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Applications.Listing.DeleteConfirmation.dialog.cancel",
    defaultMessage: "Cancel"
  })), /*#__PURE__*/_react["default"].createElement(_core.Button, {
    size: "small",
    variant: "outlined",
    color: "primary",
    onClick: handleAppDelete
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Applications.Listing.DeleteConfirmation.dialog,delete",
    defaultMessage: "Delete"
  }))));
};

DeleteConfirmation.propTypes = {
  handleAppDelete: _propTypes["default"].func.isRequired,
  isDeleteOpen: _propTypes["default"].bool.isRequired,
  toggleDeleteConfirmation: _propTypes["default"].func.isRequired
};
var _default = DeleteConfirmation;
exports["default"] = _default;