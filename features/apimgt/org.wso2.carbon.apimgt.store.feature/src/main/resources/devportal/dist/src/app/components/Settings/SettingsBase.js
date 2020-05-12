"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _reactIntl = require("react-intl");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Settings = _interopRequireDefault(require("./Settings"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
 *  Copyright (c) 2019, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 *  WSO2 Inc. licenses this file to you under the Apache License,
 *  Version 2.0 (the "License"); you may not use this file except
 *  in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing,
 *  software distributed under the License is distributed on an
 *  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 *  KIND, either express or implied. See the License for the
 *  specific language governing permissions and limitations
 *  under the License.
 */
var styles = function styles(theme) {
  return {
    root: {
      padding: theme.spacing(3),
      width: '100%'
    },
    headingWrapper: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      paddingLeft: theme.spacing(),
      '& span, & h5, & label, & input, & td, & li': {
        color: theme.palette.getContrastText(theme.palette.background["default"])
      }
    }
  };
};

function SettingsBase(props) {
  var classes = props.classes;
  return /*#__PURE__*/_react["default"].createElement(_core.Container, {
    fixed: true
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.headingWrapper
  }, /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    variant: "h5"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Apis.Settings.SettingsBase.header",
    defaultMessage: "Settings"
  })), /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    variant: "caption"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Apis.Settings.SettingsBase.sub.header",
    defaultMessage: "View and Configure Developer Portal Settings"
  }))), /*#__PURE__*/_react["default"].createElement(_Settings["default"], null));
}

SettingsBase.propTypes = {
  classes: _propTypes["default"].shape({}).isRequired
};

var _default = (0, _core.withStyles)(styles)(SettingsBase);

exports["default"] = _default;