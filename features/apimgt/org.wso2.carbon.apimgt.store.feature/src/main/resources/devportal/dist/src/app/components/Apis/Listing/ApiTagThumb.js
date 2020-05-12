"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _styles = require("@material-ui/core/styles");

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _reactRouterDom = require("react-router-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Settings = require("Settings");

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
 * @inheritdoc
 * @param {*} theme theme object
 */
var styles = function styles(theme) {
  return {
    thumbContent: {
      width: theme.custom.tagWise.thumbnail.width - theme.spacing(1),
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(1)
    },
    thumbLeft: {
      alignSelf: 'flex-start',
      flex: 1
    },
    thumbRight: {
      alignSelf: 'flex-end'
    },
    thumbInfo: {
      display: 'flex'
    },
    thumbHeader: {
      width: theme.custom.tagWise.thumbnail.width - theme.spacing(1),
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      cursor: 'pointer',
      justifyContent: 'center',
      margin: 0
    },
    contextBox: {
      // eslint-disable-next-line radix
      width: parseInt(150 - theme.spacing(0.5)),
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      cursor: 'pointer',
      margin: 0,
      display: 'inline-block',
      lineHeight: '1em'
    },
    thumbWrapper: {
      position: 'relative',
      paddingTop: 20,
      marginRight: theme.spacing(2)
    },
    deleteIcon: {
      fill: 'red'
    },
    textWrapper: {
      color: theme.custom.tagCloud.leftMenu.color,
      '& .material-icons': {
        color: theme.custom.tagCloud.leftMenu.color
      }
    },
    image: {
      width: theme.custom.tagWise.thumbnail.width
    },
    imageWrapper: {
      color: theme.palette.text.secondary,
      backgroundColor: theme.palette.background.paper,
      width: theme.custom.tagWise.thumbnail.width + theme.spacing(1),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    imageOverlap: {
      position: 'absolute',
      bottom: 1,
      backgroundColor: theme.custom.thumbnail.contentBackgroundColor
    }
  };
};
/**
 * Get ApiTagThumb
 * @param {*} props properties
 * @returns {*}
 */


function ApiTagThumb(props) {
  var tag = props.tag,
      path = props.path,
      classes = props.classes,
      theme = props.theme,
      style = props.style,
      mainPage = props.mainPage;
  var tagLink = path + ':' + tag.value;
  var image = theme.custom.tagWise.thumbnail.image;
  var name = tag.value.split(theme.custom.tagWise.key)[0];

  if (style === 'fixed-left' || !mainPage) {
    return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
      to: tagLink,
      className: classes.textWrapper
    }, /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
      button: true
    }, /*#__PURE__*/_react["default"].createElement(_ListItemIcon["default"], null, /*#__PURE__*/_react["default"].createElement(_Icon["default"], null, "label")), /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
      primary: name
    })));
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.thumbWrapper
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: tagLink,
    className: classes.imageWrapper
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: _Settings.app.context + image,
    className: classes.image,
    alt: ""
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])(classes.thumbContent)
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: tagLink,
    className: classes.textWrapper
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    className: classes.thumbHeader,
    variant: "h4",
    gutterBottom: true,
    title: name
  }, name))));
}

ApiTagThumb.propTypes = {
  classes: _propTypes["default"].shape({
    thumbWrapper: _propTypes["default"].shape({}).isRequired,
    imageWrapper: _propTypes["default"].shape({}).isRequired,
    thumbContent: _propTypes["default"].shape({}).isRequired,
    imageOverlap: _propTypes["default"].shape({}).isRequired,
    textWrapper: _propTypes["default"].shape({}).isRequired,
    thumbHeader: _propTypes["default"].shape({}).isRequired,
    image: _propTypes["default"].shape({}).isRequired
  }).isRequired,
  theme: _propTypes["default"].shape({
    custom: _propTypes["default"].shape({
      tagWise: _propTypes["default"].shape({}).isRequired
    }).isRequired
  }).isRequired,
  tag: _propTypes["default"].shape({
    value: _propTypes["default"].shape({
      split: _propTypes["default"].func
    }).isRequired
  }).isRequired,
  path: _propTypes["default"].shape({}).isRequired,
  style: _propTypes["default"].string.isRequired
};

var _default = (0, _styles.withStyles)(styles, {
  withTheme: true
})(ApiTagThumb);

exports["default"] = _default;