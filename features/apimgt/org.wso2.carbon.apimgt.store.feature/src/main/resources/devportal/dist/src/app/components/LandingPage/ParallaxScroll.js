"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _reactSafeHtml = _interopRequireDefault(require("react-safe-html"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Settings = require("Settings");

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
    parallax: {
      /* Set a specific height */
      minHeight: 200,

      /* Create the parallax scrolling effect */
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      position: 'relative',
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3)
    },
    slideContentWrapper: {
      position: 'absolute',
      background: '#00000044',
      color: theme.palette.getContrastText('#000000'),
      top: theme.spacing(3),
      padding: theme.spacing(2),
      margin: '0 100px',
      alignItem: 'center'
    },
    slideContentTitle: {
      fontWeight: theme.typography.fontWeightLight,
      fontSize: theme.typography.h3.fontSize
    },
    slideContentContent: {
      fontWeight: theme.typography.fontWeightLight,
      fontSize: theme.typography.body1.fontSize
    }
  };
};

function ParallaxScroll(props) {
  var classes = props.classes,
      theme = props.theme,
      index = props.index;
  var slide = theme.custom.landingPage.parallax.content[index];
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.parallax,
    style: {
      backgroundImage: 'url("' + _Settings.app.context + slide.src + '")'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])(classes.slideContentWrapper, 'slideContentWrapper')
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])(classes.slideContentTitle, 'slideContentTitle')
  }, /*#__PURE__*/_react["default"].createElement(_reactSafeHtml["default"], {
    html: slide.title
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.slideContentContent
  }, /*#__PURE__*/_react["default"].createElement(_reactSafeHtml["default"], {
    html: slide.content
  })))));
}

ParallaxScroll.propTypes = {
  classes: _propTypes["default"].object.isRequired,
  index: _propTypes["default"].object.isRequired,
  theme: _propTypes["default"].object.isRequired
};

var _default = (0, _styles.withStyles)(styles, {
  withTheme: true
})(ParallaxScroll);

exports["default"] = _default;