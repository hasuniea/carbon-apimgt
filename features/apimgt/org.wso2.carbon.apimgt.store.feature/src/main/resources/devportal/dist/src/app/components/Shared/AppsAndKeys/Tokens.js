"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactIntl = require("react-intl");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Input = _interopRequireDefault(require("@material-ui/core/Input"));

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Chip = _interopRequireDefault(require("@material-ui/core/Chip"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Styles for Grid and Paper elements
var styles = function styles(theme) {
  return {
    FormControl: {
      padding: theme.spacing(2),
      width: '100%'
    },
    FormControlOdd: {
      padding: theme.spacing(2),
      backgroundColor: theme.palette.background.paper,
      width: '100%'
    },
    quotaHelp: {
      position: 'relative'
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    chip: {
      margin: theme.spacing(0.25)
    }
  };
};

var MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 224,
      width: 250
    }
  }
};
/**
 * Used to display generate acctoken UI
 */

var tokens = function tokens(props) {
  /**
  * This method is used to handle the updating of create application
  * request object.
  * @param {*} field field that should be updated in appliction request
  * @param {*} event event fired
  */
  var handleChange = function handleChange(field, event) {
    var accessTokenRequest = props.accessTokenRequest,
        updateAccessTokenRequest = props.updateAccessTokenRequest;

    var newRequest = _objectSpread({}, accessTokenRequest);

    var currentTarget = event.target;

    switch (field) {
      case 'timeout':
        newRequest.timeout = currentTarget.value;
        break;

      case 'scopesSelected':
        newRequest.scopesSelected = currentTarget.value;
        break;

      case 'keyType':
        newRequest.keyType = currentTarget.value;
        break;

      default:
        break;
    }

    updateAccessTokenRequest(newRequest);
  };

  var classes = props.classes,
      intl = props.intl,
      accessTokenRequest = props.accessTokenRequest,
      subscriptionScopes = props.subscriptionScopes;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    margin: "normal",
    className: classes.FormControl
  }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    required: true,
    label: intl.formatMessage({
      defaultMessage: 'Access token validity period',
      id: 'Shared.AppsAndKeys.Tokens.access.token'
    }),
    InputLabelProps: {
      shrink: true
    },
    helperText: intl.formatMessage({
      defaultMessage: 'You can set an expiration period to determine the validity period of ' + 'the token after generation. Set this to a negative value to ensure that the ' + 'token never expires.',
      id: 'Shared.AppsAndKeys.Tokens.you.can.set'
    }),
    fullWidth: true,
    name: "timeout",
    onChange: function onChange(e) {
      return handleChange('timeout', e);
    },
    placeholder: intl.formatMessage({
      defaultMessage: 'Enter time in milliseconds',
      id: 'Shared.AppsAndKeys.Tokens.enter.time'
    }),
    value: accessTokenRequest.timeout,
    autoFocus: true,
    className: classes.inputText
  })), /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    margin: "normal",
    className: classes.FormControlOdd,
    disabled: subscriptionScopes.length === 0
  }, /*#__PURE__*/_react["default"].createElement(_InputLabel["default"], {
    htmlFor: "quota-helper",
    className: classes.quotaHelp
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Shared.AppsAndKeys.Tokens.when.you.generate.scopes",
    defaultMessage: "Scopes"
  })), /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    name: "scopesSelected",
    multiple: true,
    value: accessTokenRequest.scopesSelected,
    onChange: function onChange(e) {
      return handleChange('scopesSelected', e);
    },
    input: /*#__PURE__*/_react["default"].createElement(_Input["default"], {
      id: "select-multiple-chip"
    }),
    renderValue: function renderValue(selected) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.chips
      }, selected.map(function (value) {
        return /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
          key: value,
          label: value,
          className: classes.chip
        });
      }));
    },
    MenuProps: MenuProps
  }, subscriptionScopes.map(function (scope) {
    return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      key: scope,
      value: scope
    }, scope);
  })), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "caption"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Shared.AppsAndKeys.Tokens.when.you.generate",
    defaultMessage: 'When you generate access tokens to APIs protected by scope/s,' + ' you can select the scope/s and then generate the token for it. Scopes enable ' + 'fine-grained access control to API resources based on user roles. You define scopes to ' + 'an API resource. When a user invokes the API, his/her OAuth 2 bearer token cannot grant ' + 'access to any API resource beyond its associated scopes.'
  }))));
};

tokens.contextTypes = {
  intl: _propTypes["default"].shape({}).isRequired
};

var _default = (0, _reactIntl.injectIntl)((0, _styles.withStyles)(styles)(tokens));

exports["default"] = _default;