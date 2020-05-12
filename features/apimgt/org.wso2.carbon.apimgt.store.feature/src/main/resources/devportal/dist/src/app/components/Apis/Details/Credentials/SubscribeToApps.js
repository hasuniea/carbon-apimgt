"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _core = require("@material-ui/core");

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _SubscribeToApi = _interopRequireDefault(require("AppComponents/Shared/AppsAndKeys/SubscribeToApi"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

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
 * @inheritdoc
 * @param {*} theme theme object
 */
var styles = function styles(theme) {
  return {
    appBar: {
      background: theme.palette.background.paper,
      color: theme.palette.getContrastText(theme.palette.background.paper)
    },
    toolbar: {
      marginLeft: theme.spacing(2)
    },
    subscribeTitle: {
      flex: 1
    },
    plainContent: {
      paddingTop: 80,
      paddingLeft: theme.spacing(2)
    },
    button: {
      marginTop: theme.spacing(2),
      marginRight: theme.spacing(1)
    }
  };
};

var subscrbeToApps = function subscrbeToApps(props) {
  var classes = props.classes,
      api = props.api,
      openAvailable = props.openAvailable,
      handleClickToggle = props.handleClickToggle,
      Transition = props.Transition,
      applicationsAvailable = props.applicationsAvailable,
      handleSubscribe = props.handleSubscribe,
      subscriptionRequest = props.subscriptionRequest,
      throttlingPolicyList = props.throttlingPolicyList,
      updateSubscriptionRequest = props.updateSubscriptionRequest,
      intl = props.intl;
  var appLength = applicationsAvailable.length;
  var appPlaceholder = appLength > 0 ? intl.formatMessage({
    defaultMessage: 'Applications',
    id: 'Apis.Details.Credentials.SubscibeToApps.applications'
  }) : intl.formatMessage({
    defaultMessage: 'Application',
    id: 'Apis.Details.Credentials.SubscibeToApps.application'
  });
  return /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
    fullScreen: true,
    open: openAvailable,
    onClose: function onClose() {
      return handleClickToggle('openAvailable');
    },
    TransitionComponent: Transition
  }, ' ', /*#__PURE__*/_react["default"].createElement(_AppBar["default"], {
    className: classes.appBar
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 0
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/_react["default"].createElement(_Toolbar["default"], {
    className: classes.toolbar
  }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
    color: "inherit",
    onClick: function onClick() {
      return handleClickToggle('openAvailable');
    },
    "aria-label": "Close"
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], null, "close")), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.subscribeTitle
  }, /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    variant: "h6"
  }, "Subscribe ".concat(api.name, " to ").concat(appPlaceholder)), /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    variant: "caption"
  }, "(".concat(appLength, " ").concat(appPlaceholder, " )"))), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    variant: "contained",
    color: "primary",
    className: classes.button,
    onClick: handleSubscribe
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Apis.Details.Credentials.SubscibeToApps.subscribe",
    defaultMessage: "Subscribe"
  })))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.plainContent
  }, /*#__PURE__*/_react["default"].createElement(_SubscribeToApi["default"], {
    applicationsAvailable: applicationsAvailable,
    subscriptionRequest: subscriptionRequest,
    throttlingPolicyList: throttlingPolicyList,
    updateSubscriptionRequest: updateSubscriptionRequest
  })));
};

subscrbeToApps.propTypes = {
  classes: _propTypes["default"].shape({
    appBar: _propTypes["default"].string,
    toolbar: _propTypes["default"].string,
    subscribeTitle: _propTypes["default"].string,
    button: _propTypes["default"].string,
    plainContent: _propTypes["default"].string
  }).isRequired,
  handleClickToggle: _propTypes["default"].func.isRequired,
  openAvailable: _propTypes["default"].bool.isRequired,
  handleSubscribe: _propTypes["default"].func.isRequired,
  intl: _propTypes["default"].func.isRequired,
  updateSubscriptionRequest: _propTypes["default"].func.isRequired,
  subscriptionRequest: _propTypes["default"].shape({}).isRequired,
  applicationsAvailable: _propTypes["default"].arrayOf(_propTypes["default"].shape({})).isRequired,
  throttlingPolicyList: _propTypes["default"].arrayOf(_propTypes["default"].string).isRequired,
  api: _propTypes["default"].shape({
    name: _propTypes["default"].string
  }).isRequired,
  Transition: _propTypes["default"].func.isRequired
};

var _default = (0, _reactIntl.injectIntl)((0, _styles.withStyles)(styles, {
  withTheme: true
})(subscrbeToApps));

exports["default"] = _default;