"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _reactRouterDom = require("react-router-dom");

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _reactIntl = require("react-intl");

var _APICategoryThumb = _interopRequireDefault(require("./APICategoryThumb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
 * Copyright (c) 2020, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
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
    mainTitle: {
      paddingTop: 10
    },
    mainTitleWrapper: {
      flexGrow: 1
    },
    listContentWrapper: {
      padding: "0 ".concat(theme.spacing(3), "px")
    },
    textWrapper: {
      color: theme.custom.tagCloud.leftMenu.color,
      '& .material-icons': {
        color: theme.custom.tagCloud.leftMenu.color
      }
    },
    tagWiseThumbWrapper: {
      display: 'flex'
    },
    filterTitle: {
      fontWeight: 200,
      paddingLeft: theme.spacing(2),
      background: theme.custom.tagCloud.leftMenu.titleBackground,
      color: theme.palette.getContrastText(theme.custom.tagCloud.leftMenu.titleBackground),
      height: theme.custom.infoBar.height,
      alignItems: 'center',
      display: 'flex'
    }
  };
});
/**
 * Shared listing page
 *
 * @class CategoryListingCategories
 * @extends {Component}
 */

function CategoryListingCategories(props) {
  var classes = useStyles();
  var theme = (0, _styles.useTheme)();
  var history = (0, _reactRouterDom.useHistory)();
  var _theme$custom$tagWise = theme.custom.tagWise,
      key = _theme$custom$tagWise.key,
      active = _theme$custom$tagWise.active,
      style = _theme$custom$tagWise.style,
      showAllApis = _theme$custom$tagWise.showAllApis;
  var tagWiseURL = '/apis?offset=0&query=api-category';
  var allCategories = props.allCategories;
  /**
   *
   * @inheritdoctheme
   * @returns {React.Component} @inheritdoc
   * @memberof TagCloudListing
   */

  return allCategories && allCategories.length > 0 ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h6",
    gutterBottom: true,
    className: classes.filterTitle
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    defaultMessage: "API Categories",
    id: "Apis.Listing.CategoryListingCategories.title"
  })), /*#__PURE__*/_react["default"].createElement(_List["default"], {
    component: "nav",
    "aria-label": "main mailbox folders"
  }, Object.keys(allCategories).map(function (key) {
    return /*#__PURE__*/_react["default"].createElement(_APICategoryThumb["default"], {
      key: key,
      category: allCategories[key],
      path: tagWiseURL,
      style: style
    });
  }))) : /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.mainTitle
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "subtitle1",
    gutterBottom: true,
    align: "center"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    defaultMessage: "Categories cannot be found",
    id: "Apis.Listing.CategoryListingCategories.categoriesNotFound"
  })));
}

CategoryListingCategories.propTypes = {
  classes: _propTypes["default"].shape({}).isRequired,
  theme: _propTypes["default"].shape({}).isRequired,
  allTags: _propTypes["default"].shape({}).isRequired
};
var _default = CategoryListingCategories;
exports["default"] = _default;