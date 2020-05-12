"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _ScopeValidation = require("AppComponents/Shared/ScopeValidation");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIntl = require("react-intl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
    subscribeButtons: {
      display: 'flex',
      paddingTop: theme.spacing(2)
    },
    buttonElm: {
      height: 28,
      marginLeft: 20
    },
    buttonElmText: {
      marginLeft: 20,
      paddingTop: 5
    }
  };
};

var subscibeButtonPanel = function subscibeButtonPanel(props) {
  var classes = props.classes,
      avalibleAppsLength = props.avalibleAppsLength,
      subscribedAppsLength = props.subscribedAppsLength,
      handleClickToggle = props.handleClickToggle,
      intl = props.intl;
  return /*#__PURE__*/_react["default"].createElement(_ScopeValidation.ScopeValidation, {
    resourcePath: _ScopeValidation.resourcePaths.SUBSCRIPTIONS,
    resourceMethod: _ScopeValidation.resourceMethods.POST
  }, avalibleAppsLength > 0 && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    variant: "outlined",
    size: "small",
    color: "primary",
    className: classes.buttonElm,
    onClick: function onClick() {
      return handleClickToggle('openAvailable');
    }
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Apis.Details.Credentials.SubscibeButtonPanel.subscribe.to.available.app",
    defaultMessage: "Subscribe to Available App"
  })), /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    variant: "caption",
    component: "p",
    className: classes.buttonElmText
  }, avalibleAppsLength, ' ', /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Apis.Details.Credentials.SubscibeButtonPanel.available",
    defaultMessage: "Available"
  }))), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    variant: "outlined",
    size: "large",
    color: "primary",
    className: classes.buttonElm,
    onClick: function onClick() {
      return handleClickToggle('openNew');
    }
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Apis.Details.Credentials.SubscibeButtonPanel.subscribe.wizard",
    defaultMessage: "Wizard"
  })));
};

subscibeButtonPanel.propTypes = {
  classes: _propTypes["default"].shape({
    subscribeButtons: _propTypes["default"].shape({}),
    buttonElm: _propTypes["default"].shape({}),
    buttonElmText: _propTypes["default"].shape({})
  }).isRequired,
  handleClickToggle: _propTypes["default"].func.isRequired,
  intl: _propTypes["default"].func.isRequired,
  avalibleAppsLength: _propTypes["default"].number.isRequired,
  subscribedAppsLength: _propTypes["default"].number.isRequired
};

var _default = (0, _reactIntl.injectIntl)((0, _styles.withStyles)(styles, {
  withTheme: true
})(subscibeButtonPanel));

exports["default"] = _default;