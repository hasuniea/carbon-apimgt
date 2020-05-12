"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("swagger-ui-react/swagger-ui.css");

var _swaggerUiReact = _interopRequireDefault(require("swagger-ui-react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var disableAuthorizeAndInfoPlugin = function disableAuthorizeAndInfoPlugin() {
  return {
    wrapComponents: {
      info: function info() {
        return function () {
          return null;
        };
      },
      authorizeBtn: function authorizeBtn() {
        return function () {
          return null;
        };
      }
    }
  };
};
/**
 *
 * @class SwaggerUI
 * @extends {Component}
 */


var SwaggerUI = function SwaggerUI(props) {
  var spec = props.spec,
      accessTokenProvider = props.accessTokenProvider,
      authorizationHeader = props.authorizationHeader,
      api = props.api,
      securitySchemeType = props.securitySchemeType;
  var componentProps = {
    spec: spec,
    validatorUrl: null,
    defaultModelsExpandDepth: -1,
    docExpansion: 'list',
    requestInterceptor: function requestInterceptor(req) {
      var url = req.url;
      var context = api.context;
      var patternToCheck = "".concat(context, "/*");

      if (authorizationHeader === 'apikey') {
        req.headers[authorizationHeader] = accessTokenProvider();
      } else if (securitySchemeType === 'BASIC') {
        req.headers[authorizationHeader] = 'Basic ' + accessTokenProvider();
      } else {
        req.headers[authorizationHeader] = 'Bearer ' + accessTokenProvider();
      }

      if (url.endsWith(patternToCheck)) {
        req.url = url.substring(0, url.length - 2);
      } else if (url.includes(patternToCheck + '?')) {
        // Check for query parameters.
        var splitTokens = url.split('/*?');
        req.url = splitTokens.length > 1 ? splitTokens[0] + '?' + splitTokens[1] : splitTokens[0];
      }

      return req;
    },
    defaultModelExpandDepth: -1,
    plugins: [disableAuthorizeAndInfoPlugin]
  };
  return /*#__PURE__*/_react["default"].createElement(_swaggerUiReact["default"], componentProps);
};

SwaggerUI.propTypes = {
  accessTokenProvider: _propTypes["default"].func.isRequired,
  authorizationHeader: _propTypes["default"].string.isRequired,
  api: _propTypes["default"].shape({
    context: _propTypes["default"].string.isRequired
  }).isRequired,
  spec: _propTypes["default"].string.isRequired
};
var _default = SwaggerUI;
exports["default"] = _default;