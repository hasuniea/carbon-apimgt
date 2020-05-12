"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _icons = require("@material-ui/icons");

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _styles = require("@material-ui/core/styles");

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

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

/**
 *
 *
 * @param {*} theme
 */
var styles = function styles(theme) {
  var starColor = theme.custom.infoBar.starColor || theme.palette.getContrastText(theme.custom.infoBar.background);
  return {
    starRate: {
      color: starColor,
      '&.material-icons': {
        fontSize: 40
      }
    },
    userRating: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center'
    }
  };
};

function StarRatingSummary(props) {
  var classes = props.classes,
      theme = props.theme,
      avgRating = props.avgRating,
      reviewCount = props.reviewCount,
      returnCount = props.returnCount;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, returnCount > 0 ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    className: classes.starRate
  }, "star_border"), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.ratingSummary
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.userRating
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body1"
  }, avgRating), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body1"
  }, "/5.0")), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body1",
    gutterBottom: true,
    align: "left"
  }, reviewCount, ' ', reviewCount === 1 ? /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    defaultMessage: "user",
    id: "Apis.Listing.StarRatingBar.user"
  }) : /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    defaultMessage: "users",
    id: "Apis.Listing.StarRatingBar.users"
  })))) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_icons.StarRate, {
    className: classes.starRate,
    style: {
      color: theme.palette.grey.A200
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.ratingSummary
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "caption",
    gutterBottom: true,
    align: "left"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    defaultMessage: "Not Rated",
    id: "Apis.Listing.StarRatingBar.not.rated"
  })))));
}

var _default = (0, _styles.withStyles)(styles, {
  withTheme: true
})(StarRatingSummary);

exports["default"] = _default;