"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _reactIntl = require("react-intl");

var _Alert = _interopRequireDefault(require("AppComponents/Shared/Alert"));

var _SettingsContext = _interopRequireDefault(require("AppComponents/Shared/SettingsContext"));

var _ResourceNotFound = _interopRequireDefault(require("../Base/Errors/ResourceNotFound"));

var _api = _interopRequireDefault(require("../../data/api"));

var _ApiThumb = _interopRequireDefault(require("../Apis/Listing/ApiThumb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 *
 *
 * @param {*} theme
 */
var styles = function styles(theme) {
  return {
    tagedApisWrapper: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
    }
  };
};
/**
 *
 *
 * @param {*} props
 * @returns
 */


function ApisWithTag(props) {
  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      apis = _useState2[0],
      setApis = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      notFound = _useState4[0],
      setNotFound = _useState4[1];

  var tag = props.tag,
      classes = props.classes,
      maxCount = props.maxCount,
      intl = props.intl;
  var settingsContext = (0, _react.useContext)(_SettingsContext["default"]);
  (0, _react.useEffect)(function () {
    var restApi = new _api["default"]();
    var promisedApis = restApi.getAllAPIs({
      query: 'tag:' + tag,
      limit: maxCount
    });
    promisedApis.then(function (response) {
      setApis(response.obj);
    })["catch"](function (error) {
      var status = error.status,
          response = error.response;
      var message = intl.formatMessage({
        defaultMessage: 'Invalid tenant domain',
        id: 'LandingPage.ApisWithTag.invalid.tenant.domain'
      });

      if (response && response.body.code === 901300) {
        settingsContext.setTenantDomain('INVALID');

        _Alert["default"].error(message);
      }

      if (status === 404) {
        setNotFound(true);
      }
    });
  }, []);
  /**
   *
   *
   * @returns
   * @memberof Listing
   */

  if (notFound) {
    return /*#__PURE__*/_react["default"].createElement(_ResourceNotFound["default"], null);
  } else {
    return apis && /*#__PURE__*/_react["default"].createElement("div", {
      className: classes.tagedApisWrapper
    }, apis.list.map(function (api) {
      return /*#__PURE__*/_react["default"].createElement(_ApiThumb["default"], {
        api: api,
        key: api.id
      });
    }));
  }
}

ApisWithTag.propTypes = {
  classes: _propTypes["default"].object.isRequired,
  tag: _propTypes["default"].object.isRequired,
  maxCount: _propTypes["default"].object.isRequired
};

var _default = (0, _reactIntl.injectIntl)((0, _styles.withStyles)(styles)(ApisWithTag));

exports["default"] = _default;