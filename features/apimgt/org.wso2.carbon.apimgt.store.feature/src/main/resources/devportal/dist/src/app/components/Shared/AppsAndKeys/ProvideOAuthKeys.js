"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _FormHelperText = _interopRequireDefault(require("@material-ui/core/FormHelperText"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

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
var styles = function styles(theme) {
  return {
    textField: {
      marginTop: 0
    }
  };
};
/**
 * Provide Consumer Key and Secret of existing Auth apps
 *
 * @param props
 * @returns {*}
 * @constructor
 */


function ProvideOAuthKeys(props) {
  var classes = props.classes,
      consumerKey = props.consumerKey,
      consumerSecret = props.consumerSecret,
      intl = props.intl,
      onChange = props.onChange,
      isUserOwner = props.isUserOwner;
  /**
   * Handle onChange of provided consumer key and secret
   *
   * @param event
   */

  function handleChange(event) {
    if (onChange) {
      onChange(event);
    }
  }

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 3,
    direction: "column"
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    id: "provided-consumer-key",
    name: "providedConsumerKey",
    className: classes.textField,
    label: intl.formatMessage({
      defaultMessage: 'Consumer Key',
      id: 'Shared.AppsAndKeys.ProvideOAuthKeys.consumer.key'
    }),
    value: consumerKey,
    onChange: function onChange(e) {
      return handleChange(e);
    },
    margin: "normal",
    fullWidth: true,
    disabled: !isUserOwner,
    variant: "outlined"
  }), /*#__PURE__*/_react["default"].createElement(_FormControl["default"], null, /*#__PURE__*/_react["default"].createElement(_FormHelperText["default"], {
    id: "consumer-key-helper-text"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Shared.AppsAndKeys.ProvideOAuthKeys.consumer.key.title",
    defaultMessage: "Consumer Key of the OAuth application"
  })))), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    id: "provided-consumer-secret",
    name: "providedConsumerSecret",
    label: intl.formatMessage({
      defaultMessage: 'Consumer Secret',
      id: 'Shared.AppsAndKeys.ProvideOAuthKeys.consumer.secret'
    }),
    className: classes.textField,
    value: consumerSecret,
    onChange: function onChange(e) {
      return handleChange(e);
    },
    margin: "normal",
    fullWidth: true,
    disabled: !isUserOwner,
    variant: "outlined"
  }), /*#__PURE__*/_react["default"].createElement(_FormControl["default"], null, /*#__PURE__*/_react["default"].createElement(_FormHelperText["default"], {
    id: "consumer-secret-helper-text"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Shared.AppsAndKeys.ProvideOAuthKeys.consumer.secret.of.application",
    defaultMessage: "Consumer Secret of the OAuth application"
  }))))));
}

ProvideOAuthKeys.propTypes = {
  classes: _propTypes["default"].shape({}).isRequired,
  intl: _propTypes["default"].shape({}).isRequired,
  onChange: _propTypes["default"].func.isRequired,
  consumerKey: _propTypes["default"].string,
  consumerSecret: _propTypes["default"].string,
  isUserOwner: _propTypes["default"].string
};
ProvideOAuthKeys.defaultProps = {
  consumerKey: '',
  consumerSecret: '',
  isUserOwner: false
};

var _default = (0, _reactIntl.injectIntl)((0, _styles.withStyles)(styles)(ProvideOAuthKeys));

exports["default"] = _default;