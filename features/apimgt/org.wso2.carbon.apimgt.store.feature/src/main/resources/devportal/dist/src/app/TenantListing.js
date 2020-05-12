"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _SettingsContext = _interopRequireDefault(require("AppComponents/Shared/SettingsContext"));

var _reactIntl = require("react-intl");

var _styles = require("@material-ui/core/styles");

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _api = _interopRequireDefault(require("./data/api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
 * Copyright (c) 2019, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1,
      display: 'flex',
      background: theme.palette.background["default"],
      height: '100vh'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
      margin: 'auto',
      '-webkit-box-shadow': '0px 0px 2px 0px rgba(0,0,0,0.5)',
      '-moz-box-shadow': '0px 0px 2px 0px rgba(0,0,0,0.5)',
      'box-shadow': '0px 0px 2px 0px rgba(0,0,0,0.5)',
      '&:hover': {
        background: theme.palette.grey[100],
        cursor: 'grab'
      }
    },
    list: {
      background: theme.palette.background.paper,
      display: 'block',
      margin: '10px auto',
      padding: "".concat(theme.spacing(3), "px ").concat(theme.spacing(2), "px"),
      overflow: 'auto'
    },
    wrapper: {
      margin: '100px auto',
      padding: theme.spacing(2),
      display: 'block'
    },
    listItem: {
      margin: 'auto'
    }
  };
};

var tenantListing = function tenantListing(props) {
  var settingContext = (0, _react.useContext)(_SettingsContext["default"]);
  var tenantList = props.tenantList,
      classes = props.classes,
      theme = props.theme;
  var orderedList = tenantList.sort(function (a, b) {
    return a.domain > b.domain ? 1 : -1;
  });
  /**
   * call the setting API.
   * @param {string} domain
   */

  function getSettings(domain) {
    var api = new _api["default"]();
    var promisedSettings = api.getSettings();
    promisedSettings.then(function (response) {
      settingContext.setSettings(response.body);
      settingContext.setTenantDomain(domain);
    })["catch"](function (error) {
      console.error('Error while receiving settings : ', error);
    });
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    md: 4,
    justify: "left",
    spacing: 0,
    className: classes.wrapper
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h4"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "TenantListing.title",
    defaultMessage: "Tenant Developer Portals"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.list
  }, orderedList.map(function (_ref) {
    var domain = _ref.domain;
    return /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      key: domain,
      item: true,
      xs: 12,
      md: 12,
      className: classes.listItem
    }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
      style: {
        textDecoration: 'none'
      },
      to: "/apis?tenant=".concat(domain),
      onClick: function onClick() {
        return getSettings(domain);
      }
    }, /*#__PURE__*/_react["default"].createElement(_Paper["default"], {
      elevation: 0,
      square: true,
      className: classes.paper
    }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      noWrap: true,
      style: {
        fontSize: theme.typography.h5.fontSize,
        fontWeight: theme.typography.h1.fontWeight
      }
    }, domain))));
  }))));
};

tenantListing.propTypes = {
  classes: _propTypes["default"].shape({
    root: _propTypes["default"].string,
    list: _propTypes["default"].string,
    paper: _propTypes["default"].string,
    listItem: _propTypes["default"].string
  }).isRequired,
  tenantList: _propTypes["default"].arrayOf(_propTypes["default"].string).isRequired,
  theme: _propTypes["default"].shape({
    typography: _propTypes["default"].shape({
      h5: _propTypes["default"].shape({
        fontSize: _propTypes["default"].string.isRequired
      }).isRequired,
      h1: _propTypes["default"].shape({
        fontWeight: _propTypes["default"].string.isRequired
      }).isRequired
    }).isRequired
  }).isRequired
};

var _default = (0, _styles.withStyles)(styles, {
  withTheme: true
})(tenantListing);

exports["default"] = _default;