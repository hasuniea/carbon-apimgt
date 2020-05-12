"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Delete = _interopRequireDefault(require("@material-ui/icons/Delete"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Fab = _interopRequireDefault(require("@material-ui/core/Fab"));

var _Add = _interopRequireDefault(require("@material-ui/icons/Add"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemSecondaryAction = _interopRequireDefault(require("@material-ui/core/ListItemSecondaryAction"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _Radio = _interopRequireDefault(require("@material-ui/core/Radio"));

var _RadioGroup = _interopRequireDefault(require("@material-ui/core/RadioGroup"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Validation = _interopRequireDefault(require("AppData/Validation"));

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
    FormControl: {
      "margin-bottom": theme.spacing(1),
      width: "100%",
      padding: theme.spacing(0, 1)
    },
    outterBox: {
      margin: theme.spacing(1),
      padding: theme.spacing(1),
      borderColor: theme.palette.text.secondary
    },
    Fab: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2)
    }
  };
};
/**
 * Used to display IP address and Http Referer restrictions in generate api key UI
 */


var apiKeyRestrictions = function apiKeyRestrictions(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      invalidIP = _useState2[0],
      setInvalidIP = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      invalidReferer = _useState4[0],
      setInvalidReferer = _useState4[1];

  var intl = props.intl,
      classes = props.classes,
      newIP = props.newIP,
      updateNewIp = props.updateNewIp,
      ipList = props.ipList,
      updateIpList = props.updateIpList,
      restrictSchema = props.restrictSchema,
      updateRestrictSchema = props.updateRestrictSchema,
      newReferer = props.newReferer,
      updateNewReferer = props.updateNewReferer,
      refererList = props.refererList,
      updateRefererList = props.updateRefererList;

  var onRefererTextUpdate = function onRefererTextUpdate(e) {
    updateNewReferer(e.target.value.trim());

    if (e.target.value.trim() === "") {
      setInvalidReferer(false);
    }
  };

  var addRefererItem = function addRefererItem() {
    if (newReferer !== null && newReferer !== "") {
      setInvalidReferer(false);
      refererList.push(newReferer.trim());
      updateRefererList(refererList);
      updateNewReferer("");
    } else {
      setInvalidReferer(true);
    }
  };

  var deleteRefererItem = function deleteRefererItem(refererItem) {
    refererList.splice(refererList.indexOf(refererItem), 1);
    updateRefererList(refererList);
  };

  var onIpTextUpdate = function onIpTextUpdate(e) {
    updateNewIp(e.target.value.trim());

    if (e.target.value.trim() === "") {
      setInvalidIP(false);
    }
  };

  var addIpItem = function addIpItem() {
    if (newIP !== null && newIP !== "") {
      if (_Validation["default"].ipAddress.validate(newIP).error) {
        setInvalidIP(true);
      } else {
        setInvalidIP(false);
        ipList.push(newIP);
        updateIpList(ipList);
        updateNewIp("");
      }
    }
  };

  var deleteIpItem = function deleteIpItem(ipItem) {
    ipList.splice(ipList.indexOf(ipItem), 1);
    updateIpList(ipList);
  };

  var onRestrictSchemaChange = function onRestrictSchemaChange(e) {
    updateRestrictSchema(e.target.value);
    updateIpList([]);
    updateRefererList([]);
    updateNewIp("");
    updateNewReferer("");
    setInvalidIP(false);
    setInvalidReferer(false);
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    border: 1,
    borderRadius: 5,
    className: classes.outterBox
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h5",
    component: "h6"
  }, "Key Restrictions"), /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    component: "fieldset"
  }, /*#__PURE__*/_react["default"].createElement(_RadioGroup["default"], {
    "aria-label": "API Key Restrictions",
    value: restrictSchema,
    row: true,
    onChange: onRestrictSchemaChange
  }, /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], {
    value: "none",
    control: /*#__PURE__*/_react["default"].createElement(_Radio["default"], {
      color: "primary"
    }),
    label: "None",
    labelPlacement: "end"
  }), /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], {
    value: "ip",
    control: /*#__PURE__*/_react["default"].createElement(_Radio["default"], {
      color: "primary"
    }),
    label: "IP Addresses",
    labelPlacement: "end"
  }), /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], {
    value: "referer",
    control: /*#__PURE__*/_react["default"].createElement(_Radio["default"], {
      color: "primary"
    }),
    label: "HTTP Referrers (Web Sites)",
    labelPlacement: "end"
  }))), restrictSchema === "ip" && /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    component: "div",
    id: "ipPanel"
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    direction: "row",
    spacing: 0,
    justify: "left",
    alignItems: "left"
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    md: 10,
    xs: 10
  }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    label: "IP Address",
    value: newIP,
    onChange: onIpTextUpdate,
    className: classes.inputText,
    helperText: invalidIP ? intl.formatMessage({
      defaultMessage: "Invalid IP Address",
      id: "Shared.AppsAndKeys.Tokens.apiKeyRestriction.ip.validity.error"
    }) : "",
    error: invalidIP,
    margin: "dense",
    variant: "outlined",
    placeholder: intl.formatMessage({
      defaultMessage: "Enter IP Address",
      id: "Shared.AppsAndKeys.Tokens.apiKeyRestriction.enter.ip"
    }),
    fullWidth: true
  })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    md: 2,
    xs: 2
  }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_Fab["default"], {
    className: classes.Fab,
    size: "small",
    color: "primary",
    "aria-label": "add",
    onClick: addIpItem
  }, /*#__PURE__*/_react["default"].createElement(_Add["default"], null))))), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    direction: "row",
    spacing: 0,
    justify: "left",
    alignItems: "left",
    md: 10,
    xs: 10
  }, ipList.length > 0 && /*#__PURE__*/_react["default"].createElement(_List["default"], null, ipList.map(function (ip, index) {
    return /*#__PURE__*/_react["default"].createElement(_ListItem["default"], null, /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
      primary: ip
    }), /*#__PURE__*/_react["default"].createElement(_ListItemSecondaryAction["default"], null, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
      title: "Delete task",
      placement: "top"
    }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
      edge: "end",
      "aria-label": "delete",
      onClick: function onClick() {
        return deleteIpItem(ip);
      }
    }, /*#__PURE__*/_react["default"].createElement(_Delete["default"], null)))));
  })))), restrictSchema === "referer" && /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    component: "div",
    id: "refererPanel"
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    direction: "row",
    spacing: 0,
    justify: "left",
    alignItems: "left"
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    md: 10,
    xs: 10
  }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    label: "Referer",
    value: newReferer,
    onChange: onRefererTextUpdate,
    className: classes.inputText,
    helperText: invalidReferer ? intl.formatMessage({
      defaultMessage: "Invalid Http Referer",
      id: "Shared.AppsAndKeys.Tokens.apiKeyRestriction.referer.validity.error"
    }) : "",
    error: invalidReferer,
    margin: "dense",
    variant: "outlined",
    placeholder: intl.formatMessage({
      defaultMessage: "Enter Http Referer",
      id: "Shared.AppsAndKeys.Tokens.apiKeyRestriction.enter.referer"
    }),
    fullWidth: true
  })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    md: 2,
    xs: 2
  }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_Fab["default"], {
    size: "small",
    className: classes.Fab,
    color: "primary",
    "aria-label": "add",
    onClick: addRefererItem
  }, /*#__PURE__*/_react["default"].createElement(_Add["default"], null))))), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    direction: "row",
    spacing: 0,
    justify: "left",
    alignItems: "left",
    md: 10,
    xs: 10
  }, refererList.length > 0 && /*#__PURE__*/_react["default"].createElement(_List["default"], null, refererList.map(function (referer, index) {
    return /*#__PURE__*/_react["default"].createElement(_ListItem["default"], null, /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
      primary: referer
    }), /*#__PURE__*/_react["default"].createElement(_ListItemSecondaryAction["default"], null, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
      title: "Delete task",
      placement: "top"
    }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
      edge: "end",
      "aria-label": "delete",
      onClick: function onClick() {
        return deleteRefererItem(referer);
      }
    }, /*#__PURE__*/_react["default"].createElement(_Delete["default"], null)))));
  }))))));
};

apiKeyRestrictions.contextTypes = {
  intl: _propTypes["default"].shape({}).isRequired
};

var _default = (0, _reactIntl.injectIntl)((0, _styles.withStyles)(styles)(apiKeyRestrictions));

exports["default"] = _default;