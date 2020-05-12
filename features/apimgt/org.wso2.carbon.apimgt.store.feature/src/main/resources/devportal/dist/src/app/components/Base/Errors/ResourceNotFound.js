"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _reactIntl = require("react-intl");

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _reactRouterDom = require("react-router-dom");

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _Container = _interopRequireDefault(require("@material-ui/core/Container"));

var _Custom404Image = _interopRequireDefault(require("./Custom404Image"));

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
var ResourceNotFound = function ResourceNotFound(props) {
  return /*#__PURE__*/_react["default"].createElement(_Container["default"], {
    maxWidth: "md"
  }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    padding: 4
  }, /*#__PURE__*/_react["default"].createElement(_Paper["default"], {
    elevation: 0
  }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    padding: 4
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    alignItems: "center",
    justify: "center",
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h5",
    gutterBottom: true
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Base.Errors.ResourceNotfound.default_tittle",
    defaultMessage: "Page Not Found"
  })), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "subtitle1",
    gutterBottom: true
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Base.Errors.ResourceNotfound.default_body",
    defaultMessage: "The page you are looking for is not available"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      color: 'green'
    }
  }, ' ', props.response ? props.response.statusText : '', ' ')), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    py: 5
  }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    pb: 2
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "subtitle1"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Base.Errors.ResourceNotFound.more.links",
    defaultMessage: "You may check the links below"
  }))), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "/apis/",
    style: {
      marginRight: 8
    }
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    variant: "contained",
    color: "primary"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Base.Errors.ResourceNotFound.api.list",
    defaultMessage: "API List"
  }))), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "/applications/"
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    variant: "contained",
    color: "primary"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Base.Errors.ResourceNotFound.applications",
    defaultMessage: "Applications"
  }))))), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/_react["default"].createElement(_Custom404Image["default"], {
    style: {
      fontSize: 400,
      fill: '#ccc'
    }
  })))))));
};

var _default = ResourceNotFound;
exports["default"] = _default;