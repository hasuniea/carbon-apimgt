"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderInput = renderInput;
exports.renderSuggestion = renderSuggestion;
exports.getSuggestions = getSuggestions;
exports.getSuggestionValue = getSuggestionValue;
exports.buildSearchQuery = buildSearchQuery;

var _react = _interopRequireDefault(require("react"));

var _match = _interopRequireDefault(require("autosuggest-highlight/match"));

var _parse = _interopRequireDefault(require("autosuggest-highlight/parse"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var _InputAdornment = _interopRequireDefault(require("@material-ui/core/InputAdornment"));

var _SearchOutlined = _interopRequireDefault(require("@material-ui/icons/SearchOutlined"));

var _reactRouterDom = require("react-router-dom");

var _SettingsApplicationsOutlined = _interopRequireDefault(require("@material-ui/icons/SettingsApplicationsOutlined"));

var _LibraryBooks = _interopRequireDefault(require("@material-ui/icons/LibraryBooks"));

var _NativeSelect = _interopRequireDefault(require("@material-ui/core/NativeSelect"));

var _reactIntl = require("react-intl");

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

var _api = _interopRequireDefault(require("AppData/api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* Utility methods defined here are described in
* react-autosuggest documentation https://github.com/moroshko/react-autosuggest
*/

/**
 *
 * @param {Object} inputProps Props given for the underline input element
 * @returns {React.Component} @inheritdoc
 */
function renderInput(inputProps) {
  var classes = inputProps.classes,
      ref = inputProps.ref,
      isLoading = inputProps.isLoading,
      onDropDownChange = inputProps.onDropDownChange,
      other = _objectWithoutProperties(inputProps, ["classes", "ref", "isLoading", "onDropDownChange"]);

  var loadingAdorment = null;

  if (isLoading) {
    loadingAdorment = /*#__PURE__*/_react["default"].createElement(_InputAdornment["default"], {
      position: "end"
    }, /*#__PURE__*/_react["default"].createElement(_CircularProgress["default"], null));
  }

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.searchBoxWrap
  }, /*#__PURE__*/_react["default"].createElement(_NativeSelect["default"], {
    onChange: onDropDownChange,
    className: classes.selectRoot
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Base.Header.headersearch.SearchUtils.lcState.all",
    defaultMessage: "All"
  }, function (placeholder) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      value: ""
    }, placeholder);
  }), /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Base.Header.headersearch.SearchUtils.lcState.published",
    defaultMessage: "Production"
  }, function (placeholder) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      value: "PUBLISHED"
    }, placeholder);
  }), /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Base.Header.headersearch.SearchUtils.lcState.prototyped",
    defaultMessage: "Prototyped"
  }, function (placeholder) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      value: "PROTOTYPED"
    }, placeholder);
  })), /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    id: "searchQuery",
    classes: {
      root: classes.inputRoot
    },
    InputProps: _objectSpread({
      inputRef: ref,
      className: classes.input,
      classes: {
        focused: classes.inputFocused
      },
      startAdornment: /*#__PURE__*/_react["default"].createElement(_InputAdornment["default"], {
        position: "start"
      }, /*#__PURE__*/_react["default"].createElement(_SearchOutlined["default"], null)),
      endAdornment: loadingAdorment
    }, other)
  })));
}
/**
 *
 * Use your imagination to define how suggestions are rendered.
 * @param {Object} suggestion This is either API object or document coming from search API call
 * @param {Object} { query, isHighlighted } query : User entered value
 * @returns {React.Component} @inheritdoc
 */


function renderSuggestion(suggestion, _ref) {
  var query = _ref.query,
      isHighlighted = _ref.isHighlighted;
  var matches = (0, _match["default"])(suggestion.name, query);
  var parts = (0, _parse["default"])(suggestion.name, matches);
  var path = suggestion.type === 'API' ? "/apis/".concat(suggestion.id, "/overview") : "/apis/".concat(suggestion.apiUUID, "/documents/").concat(suggestion.id, "/details"); // TODO: Style the version ( and apiName if docs) apearing in the menu item

  var suffix = suggestion.type === 'API' ? suggestion.version : suggestion.apiName + ' ' + suggestion.apiVersion;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: path,
    style: {
      color: 'black'
    }
  }, /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    selected: isHighlighted
  }, /*#__PURE__*/_react["default"].createElement(_ListItemIcon["default"], null, suggestion.type === 'API' ? /*#__PURE__*/_react["default"].createElement(_SettingsApplicationsOutlined["default"], null) : /*#__PURE__*/_react["default"].createElement(_LibraryBooks["default"], null)), /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
    primary: parts.map(function (part, index) {
      return part.highlight ? /*#__PURE__*/_react["default"].createElement("span", {
        key: String(index),
        style: {
          fontWeight: 500
        }
      }, part.text) : /*#__PURE__*/_react["default"].createElement("strong", {
        key: String(index),
        style: {
          fontWeight: 300
        }
      }, part.text);
    }),
    secondary: suffix
  }))), /*#__PURE__*/_react["default"].createElement(_Divider["default"], null));
}
/**
 * When suggestion is clicked, Autosuggest needs to populate the input
 * based on the clicked suggestion. Teach Autosuggest how to calculate the input value for every given suggestion.
 *
 * @param {Object} suggestion API Object returned from APIS search api.list[]
 * @returns {String} API Name
 */


function getSuggestionValue(suggestion) {
  return suggestion.name;
}
/**
 * Compose the query that needs to be send to the backend api
 * @param searchText
 * @param lcstate
 * @returns {string}
 */


function buildSearchQuery(searchText, lcstate) {
  searchText = searchText && !searchText.includes(':') ? 'content:' + searchText : searchText;
  return lcstate ? (searchText + ' status:' + lcstate).trim().toLowerCase() : searchText.trim().toLowerCase();
}
/**
 * Called for any input change to get the results set
 *
 * @param {String} value current value in input element
 * @returns {Promise} If no input text, return a promise which resolve to empty array, else return the API.all response
 */


function getSuggestions(searchText, lcstate) {
  var searchQuery = buildSearchQuery(searchText, lcstate);

  if (/:(\s+|(?![\s\S]))/g.test(searchText)) {
    return new Promise(function (resolve) {
      return resolve({
        obj: {
          list: []
        }
      });
    });
  } else {
    var api = new _api["default"]();
    return api.search({
      query: searchQuery,
      limit: 8
    });
  }
}