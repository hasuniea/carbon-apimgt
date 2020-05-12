"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _core = require("@material-ui/core");

var _ApplicationFormHandler = _interopRequireDefault(require("AppComponents/Applications/ApplicationFormHandler"));

var _Errors = require("AppComponents/Base/Errors");

var _RedirectToLogin = _interopRequireDefault(require("AppComponents/Login/RedirectToLogin"));

var _Progress = _interopRequireDefault(require("AppComponents/Shared/Progress"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Apis = (0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('AppComponents/Apis/Apis'));
  });
});
var Landing = (0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('AppComponents/LandingPage/Landing'));
  });
});
var TagCloudListing = (0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('AppComponents/Apis/Listing/TagCloudListing'));
  });
});
var SettingsBase = (0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('AppComponents/Settings/SettingsBase'));
  });
});
var Listing = (0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('AppComponents/Applications/Listing/Listing'));
  });
});
var Details = (0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('AppComponents/Applications/Details/index'));
  });
});
/**
 * Handle redirection
 * @param {*} theme configuration
 * @returns {*}
 */

function getRedirectingPath(theme) {
  if (theme.custom.landingPage.active) {
    return '/home';
  } else if (theme.custom.landingPage.active === false && theme.custom.tagWise.active && theme.custom.tagWise.style === 'page') {
    return '/api-groups';
  } else {
    return 'apis';
  }
}
/**
 * Handle routes
 * @param {*} props properties
 * @returns {*}
 */


function AppRouts(props) {
  var isAuthenticated = props.isAuthenticated,
      isUserFound = props.isUserFound,
      theme = props.theme;
  return /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
    fallback: /*#__PURE__*/_react["default"].createElement(_Progress["default"], null)
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Redirect, {
    exact: true,
    from: "/",
    to: getRedirectingPath(theme)
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/home",
    component: Landing
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/api-groups",
    component: TagCloudListing
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/(apis|api-products)",
    component: Apis
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/settings",
    render: function render(localProps) {
      if (isAuthenticated) {
        return /*#__PURE__*/_react["default"].createElement(SettingsBase, localProps);
      } else {
        return /*#__PURE__*/_react["default"].createElement(_RedirectToLogin["default"], localProps);
      }
    }
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/applications",
    exact: true,
    render: function render(localProps) {
      if (isAuthenticated) {
        return /*#__PURE__*/_react["default"].createElement(Listing, localProps);
      } else if (isUserFound) {
        return /*#__PURE__*/_react["default"].createElement(_Errors.ScopeNotFound, localProps);
      } else {
        return /*#__PURE__*/_react["default"].createElement(_RedirectToLogin["default"], localProps);
      }
    }
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/applications/create",
    render: function render(localProps) {
      if (isAuthenticated) {
        return /*#__PURE__*/_react["default"].createElement(_ApplicationFormHandler["default"], localProps);
      } else if (isUserFound) {
        return /*#__PURE__*/_react["default"].createElement(_Errors.ScopeNotFound, localProps);
      } else {
        return /*#__PURE__*/_react["default"].createElement(_RedirectToLogin["default"], localProps);
      }
    }
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/applications/:application_id/edit",
    render: function render(localProps) {
      if (isAuthenticated) {
        return /*#__PURE__*/_react["default"].createElement(_ApplicationFormHandler["default"], localProps);
      } else if (isUserFound) {
        return /*#__PURE__*/_react["default"].createElement(_Errors.ScopeNotFound, localProps);
      } else {
        return /*#__PURE__*/_react["default"].createElement(_RedirectToLogin["default"], localProps);
      }
    }
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/applications/:application_uuid/",
    render: function render(localProps) {
      if (isAuthenticated) {
        return /*#__PURE__*/_react["default"].createElement(Details, localProps);
      } else if (isUserFound) {
        return /*#__PURE__*/_react["default"].createElement(_Errors.ScopeNotFound, localProps);
      } else {
        return /*#__PURE__*/_react["default"].createElement(_RedirectToLogin["default"], localProps);
      }
    }
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    component: _Errors.PageNotFound
  })));
}

var _default = (0, _core.withStyles)({}, {
  withTheme: true
})(AppRouts);

exports["default"] = _default;