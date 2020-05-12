"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _InlineMessage = _interopRequireDefault(require("AppComponents/Shared/InlineMessage"));

var _core = require("@material-ui/core");

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _ScopeValidation = require("AppComponents/Shared/ScopeValidation");

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
var genericDisplayDialog = function genericDisplayDialog(props) {
  var classes = props.classes,
      handleClick = props.handleClick,
      heading = props.heading,
      caption = props.caption,
      buttonText = props.buttonText;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.appContent
  }, /*#__PURE__*/_react["default"].createElement(_InlineMessage["default"], {
    type: "info",
    className: classes.dialogContainer
  }, /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    variant: "h5",
    component: "h3"
  }, heading), /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    component: "p"
  }, caption), /*#__PURE__*/_react["default"].createElement(_ScopeValidation.ScopeValidation, {
    resourcePath: _ScopeValidation.resourcePaths.APPLICATIONS,
    resourceMethod: _ScopeValidation.resourceMethods.POST
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    variant: "contained",
    color: "primary",
    className: classes.button,
    onClick: handleClick
  }, buttonText))));
};

var _default = genericDisplayDialog;
exports["default"] = _default;