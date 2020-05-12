"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _reactIntl = require("react-intl");

var _reactTagcloud = require("react-tagcloud");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

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
    clickablePointer: {
      cursor: 'pointer',
      padding: theme.spacing(1)
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
 * Component used to handle API Tag Cloud
 * @class ApiTagCloud
 * @extends {React.Component}
 * @param {any} value @inheritDoc
 */

function ApiTagCloud(props) {
  var classes = useStyles();
  var theme = (0, _styles.useTheme)();
  var _theme$custom = theme.custom,
      _theme$custom$tagWise = _theme$custom.tagWise,
      key = _theme$custom$tagWise.key,
      active = _theme$custom$tagWise.active,
      colorOptions = _theme$custom.tagCloud.colorOptions;
  var history = (0, _reactRouterDom.useHistory)();
  var allTags = props.allTags;
  var apisTagWithoutGroups = null;

  if (allTags.count !== 0) {
    // Remve the tags with a sufix '-group' to ignore the
    if (active) {
      apisTagWithoutGroups = allTags.filter(function (item) {
        return item.value.search(key) === -1;
      });
    } else {
      apisTagWithoutGroups = allTags;
    }
  }
  /**
   *
   * @param {String} tag selected tag
   * @memberof ApiTagCloud
   */


  var handleOnClick = function handleOnClick(tag) {
    var tagSearchURL = "/apis?offset=0&query=tag:".concat(tag.value);
    history.push(tagSearchURL);
  };

  return apisTagWithoutGroups && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h6",
    gutterBottom: true,
    className: classes.filterTitle
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    defaultMessage: "Tag Cloud",
    id: "Apis.Listing.ApiTagCloud.title"
  })), /*#__PURE__*/_react["default"].createElement(_reactTagcloud.TagCloud, {
    minSize: 14,
    maxSize: 25,
    colorOptions: colorOptions,
    tags: apisTagWithoutGroups,
    shuffle: false,
    className: classes.clickablePointer,
    onClick: function onClick(tag) {
      return handleOnClick(tag);
    }
  }));
}

ApiTagCloud.propTypes = {
  classes: _propTypes["default"].shape({}).isRequired,
  tag: _propTypes["default"].shape({}).isRequired,
  listType: _propTypes["default"].string.isRequired,
  apiType: _propTypes["default"].string.isRequired,
  allTags: _propTypes["default"].shape({}).isRequired
};
var _default = ApiTagCloud;
exports["default"] = _default;