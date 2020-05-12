"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _core = require("@material-ui/core");

var _CommonListing = _interopRequireDefault(require("./Listing/CommonListing"));

var _TagCloudListing = _interopRequireDefault(require("./Listing/TagCloudListing"));

var _index = _interopRequireDefault(require("./Details/index"));

var _Errors = require("../Base/Errors");

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
 * Default API Store overview page
 *
 * @returns {React.Component}
 */
function Apis() {
  return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/api-groups",
    render: function render(props) {
      return /*#__PURE__*/_react["default"].createElement(_TagCloudListing["default"], props);
    }
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/apis",
    render: function render(props) {
      return /*#__PURE__*/_react["default"].createElement(_CommonListing["default"], props);
    }
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/apis/search",
    render: function render(props) {
      return /*#__PURE__*/_react["default"].createElement(_CommonListing["default"], props);
    }
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/apis/:api_uuid/",
    render: function render(props) {
      return /*#__PURE__*/_react["default"].createElement(_index["default"], props);
    }
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    component: _Errors.ResourceNotFound
  }));
}

var _default = (0, _core.withStyles)({}, {
  withTheme: true
})(Apis);

exports["default"] = _default;