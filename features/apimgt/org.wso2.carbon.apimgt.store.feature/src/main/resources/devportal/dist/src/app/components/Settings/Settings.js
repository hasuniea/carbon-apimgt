"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Alerts = _interopRequireDefault(require("./Alerts/Alerts"));

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
    settingsRoot: {
      padding: theme.spacing(),
      width: '100%'
    }
  };
};
/**
 * @param {any} props sdf
 * @return {any} dds
 * */


function Settings(props) {
  var classes = props.classes;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.settingsRoot
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    container: true,
    direction: "column",
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Alerts["default"], null))));
}

Settings.propTypes = {
  classes: _propTypes["default"].shape({
    settingsRoot: _propTypes["default"].string.isRequired
  }).isRequired
};

var _default = (0, _core.withStyles)(styles)(Settings);

exports["default"] = _default;