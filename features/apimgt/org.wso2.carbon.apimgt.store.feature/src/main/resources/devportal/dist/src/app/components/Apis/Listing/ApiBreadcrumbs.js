"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ApiBreadcrumbs;

var _react = _interopRequireDefault(require("react"));

var _reactIntl = require("react-intl");

var _styles = require("@material-ui/core/styles");

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Breadcrumbs = _interopRequireDefault(require("@material-ui/core/Breadcrumbs"));

var _Link = _interopRequireDefault(require("@material-ui/core/Link"));

var _reactRouterDom = require("react-router-dom");

var _CustomIcon = _interopRequireDefault(require("AppComponents/Shared/CustomIcon"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

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
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      padding: theme.spacing(1, 3)
    },
    link: {
      display: 'flex',
      alignItems: 'center'
    },
    linkNotActive: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'default'
    },
    icon: {
      marginRight: theme.spacing(0.5),
      width: 20,
      height: 20
    },
    selectedTagText: {
      textIndent: 4
    },
    apiGroup: {
      color: theme.palette.grey[800]
    }
  };
});

function ApiBreadcrumbs(props) {
  var classes = useStyles();
  var theme = (0, _styles.useTheme)();
  var selectedTag = props.selectedTag;
  return /*#__PURE__*/_react["default"].createElement(_Paper["default"], {
    elevation: 0,
    className: classes.root
  }, /*#__PURE__*/_react["default"].createElement(_Breadcrumbs["default"], {
    "aria-label": "breadcrumb"
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: theme.custom.tagWise.active && theme.custom.tagWise.style === 'page' ? '/api-groups' : '/apis',
    className: classes.apiGroup
  }, /*#__PURE__*/_react["default"].createElement(_Link["default"], {
    color: "inherit",
    className: classes.link
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    className: classes.icon
  }, "dynamic_feed"), /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    defaultMessage: "API Groups",
    id: "Apis.Listing.ApiBreadcrumbs.apigroups.main"
  }))), selectedTag && /*#__PURE__*/_react["default"].createElement(_Link["default"], {
    color: "inherit",
    className: classes.linkNotActive
  }, /*#__PURE__*/_react["default"].createElement(_CustomIcon["default"], {
    width: 16,
    height: 16,
    icon: "api"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: classes.selectedTagText
  }, selectedTag))));
}