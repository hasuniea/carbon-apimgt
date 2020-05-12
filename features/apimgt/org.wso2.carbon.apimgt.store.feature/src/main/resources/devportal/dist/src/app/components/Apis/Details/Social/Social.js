"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _reactIntl = require("react-intl");

var _Settings = require("Settings");

var _ApiContext = require("AppComponents/Apis/Details/ApiContext");

var _EmbadCode = _interopRequireDefault(require("AppComponents/Apis/Details/Social/EmbadCode"));

var _MailOutline = _interopRequireDefault(require("@material-ui/icons/MailOutline"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
    socialLink: {
      display: 'inline-block',
      '& img': {
        width: 32,
        marginLeft: theme.spacing(1)
      }
    },
    oneFlex: {
      flex: 1
    },
    socialLinkWrapper: {
      display: 'flex',
      alignItems: 'center',
      paddingRight: theme.spacing(2),
      '& > div': {
        display: 'inline-block'
      }
    },
    divider: {
      display: 'inline-block',
      borderRight: 'solid 1px #ccc',
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      height: 30
    },
    codeIcon: {
      cursor: 'pointer',
      color: theme.palette.getContrastText(theme.custom.infoBar.background)
    }
  };
});
/**
 * Render the social icons
 * @param {int} num1 The first number.
 * @param {int} num2 The second number.
 * @returns {int} The sum of the two numbers.
 */

function Social() {
  var classes = useStyles();

  var _useContext = (0, _react.useContext)(_ApiContext.ApiContext),
      api = _useContext.api;

  var apiName = api.name;
  var apiUrl = encodeURI(window.location);
  var theme = (0, _styles.useTheme)();
  var _theme$custom$social$ = theme.custom.social.showSharing,
      active = _theme$custom$social$.active,
      showFacebook = _theme$custom$social$.showFacebook,
      showReddit = _theme$custom$social$.showReddit,
      showTwitter = _theme$custom$social$.showTwitter,
      showEmbad = _theme$custom$social$.showEmbad,
      showEmail = _theme$custom$social$.showEmail;

  if (!active) {
    return /*#__PURE__*/_react["default"].createElement("span", null);
  }

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.oneFlex
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.socialLinkWrapper
  }, showFacebook && /*#__PURE__*/_react["default"].createElement("a", {
    className: classes.socialLink,
    id: "facebook",
    href: "http://www.facebook.com/sharer.php?u=".concat(apiUrl),
    target: "_blank",
    rel: "noopener noreferrer",
    title: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      id: "Apis.Details.Social.Social.facebook",
      defaultMessage: "Facebook"
    })
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "".concat(_Settings.app.context, "/site/public/images/social/facebook.png"),
    alt: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      id: "Apis.Details.Social.Social.facebook",
      defaultMessage: "Facebook"
    })
  })), showTwitter && /*#__PURE__*/_react["default"].createElement("a", {
    className: classes.socialLink,
    id: "facebook",
    href: "http://twitter.com/share?url=".concat(apiUrl, "&text=").concat(apiName),
    target: "_blank",
    rel: "noopener noreferrer",
    title: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      id: "Apis.Details.Social.Social.twitter",
      defaultMessage: "Twitter"
    })
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "".concat(_Settings.app.context, "/site/public/images/social/twitter.png"),
    alt: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      id: "Apis.Details.Social.Social.twitter",
      defaultMessage: "Twitter"
    })
  })), showReddit && /*#__PURE__*/_react["default"].createElement("a", {
    className: classes.socialLink,
    id: "facebook",
    href: "http://www.reddit.com/submit?url=".concat(apiUrl, "&title=").concat(apiName),
    target: "_blank",
    rel: "noopener noreferrer",
    title: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      id: "Apis.Details.Social.Social.reddit",
      defaultMessage: "Reddit"
    })
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "".concat(_Settings.app.context, "/site/public/images/social/reddit.png"),
    alt: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      id: "Apis.Details.Social.Social.reddit",
      defaultMessage: "Reddit"
    })
  })), showEmbad && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.divider
  }), /*#__PURE__*/_react["default"].createElement(_EmbadCode["default"], null)), showEmail && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.divider
  }), /*#__PURE__*/_react["default"].createElement("a", {
    href: "mailto:?Subject=".concat(apiName, "&body=Link+:+").concat(apiUrl, "\""),
    className: classes.codeIcon
  }, /*#__PURE__*/_react["default"].createElement(_MailOutline["default"], null)))));
}

var _default = (0, _reactIntl.injectIntl)(Social);

exports["default"] = _default;