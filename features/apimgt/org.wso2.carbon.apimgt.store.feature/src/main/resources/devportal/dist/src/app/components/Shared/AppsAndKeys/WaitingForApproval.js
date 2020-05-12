"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _reactIntl = require("react-intl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var styles = function styles(theme) {
  return {
    root: {
      padding: theme.spacing(3)
    }
  };
};

var waitingForApproval = function waitingForApproval(props) {
  var classes = props.classes,
      keyState = props.keyState,
      states = props.states,
      intl = props.intl;
  var message = intl.formatMessage({
    defaultMessage: 'A request to register this application has been sent and is pending approval.',
    id: 'Shared.AppsAndKeys.WaitingForApproval.msg.ok'
  });

  if (keyState === states.REJECTED) {
    message = intl.formatMessage({
      defaultMessage: 'This application has been rejected from generating keys',
      id: 'Shared.AppsAndKeys.WaitingForApproval.msg.reject'
    });
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.root
  }, message);
};

var _default = (0, _reactIntl.injectIntl)((0, _styles.withStyles)(styles)(waitingForApproval));

exports["default"] = _default;