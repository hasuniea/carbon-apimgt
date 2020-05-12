"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("./redirecting.css");

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

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

/**
 * Redirecting animation
 *
 * @param {*} props
 * @returns { JSX }
 */
var Redirecting = function Redirecting(props) {
  var message = props.message;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "redirect-flex-container"
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    justify: "center",
    alignItems: "center",
    spacing: 0,
    className: "redirect-grid-container"
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    lg: 6,
    md: 8,
    xs: 10
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    alignItems: "center"
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    sm: 2,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_CircularProgress["default"], {
    className: "redirect-loadingbar"
  })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    sm: 10,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "redirect-main-content"
  }, /*#__PURE__*/_react["default"].createElement(_Paper["default"], {
    elevation: 5,
    square: true,
    className: "redirect-paper"
  }, message)))))));
};

var _default = Redirecting;
exports["default"] = _default;