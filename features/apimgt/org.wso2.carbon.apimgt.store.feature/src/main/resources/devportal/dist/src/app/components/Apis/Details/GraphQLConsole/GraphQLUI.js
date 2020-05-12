"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = GraphQLUI;

var _react = _interopRequireWildcard(require("react"));

var _graphiql = _interopRequireDefault(require("graphiql"));

var _isomorphicFetch = _interopRequireDefault(require("isomorphic-fetch"));

require("graphiql/graphiql.css");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _reactIntl = require("react-intl");

var _graphiqlExplorer = _interopRequireDefault(require("graphiql-explorer"));

var _ApiContext = require("../ApiContext");

var _api = _interopRequireDefault(require("../../../../data/api"));

var _Progress = _interopRequireDefault(require("../../../Shared/Progress"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _require = require('graphql'),
    buildSchema = _require.buildSchema;
/**
 *
 * @param {*} props
 */


function GraphQLUI(props) {
  var authorizationHeader = props.authorizationHeader,
      URLs = props.URLs,
      securitySchemeType = props.securitySchemeType,
      accessTokenProvider = props.accessTokenProvider;

  var _useContext = (0, _react.useContext)(_ApiContext.ApiContext),
      api = _useContext.api;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      schema = _useState2[0],
      setSchema = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      query = _useState4[0],
      setQuery = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isExplorerOpen = _useState6[0],
      setIsExplorerOpen = _useState6[1];

  var graphiqlEl = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var apiID = api.id;
    var apiClient = new _api["default"]();
    var promiseGraphQL = apiClient.getGraphQLSchemaByAPIId(apiID);
    promiseGraphQL.then(function (res) {
      var graphqlSchemaObj = buildSchema(res.data);
      setSchema(graphqlSchemaObj);
    });
  }, []);
  var parameters = {};

  var handleToggleExplorer = function handleToggleExplorer() {
    var newExplorerIsOpen = !isExplorerOpen;
    parameters.isExplorerOpen = newExplorerIsOpen;
    setIsExplorerOpen(newExplorerIsOpen);
  };
  /**
   *
   * @param {*} graphQLParams
   */


  function graphQLFetcher(graphQLParams) {
    var token;

    if (authorizationHeader === 'apikey') {
      token = accessTokenProvider();
    } else if (securitySchemeType === 'BASIC') {
      token = 'Basic ' + accessTokenProvider();
    } else {
      token = 'Bearer ' + accessTokenProvider();
    }

    return (0, _isomorphicFetch["default"])(URLs.https, {
      method: 'post',
      headers: _defineProperty({
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }, authorizationHeader, token),
      body: JSON.stringify(graphQLParams)
    }).then(function (response) {
      return response.json();
    });
  }

  if ({
    schema: schema
  } === null) {
    return /*#__PURE__*/_react["default"].createElement(_Progress["default"], null);
  } else {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
      width: "30%",
      m: 1
    }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
      label: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        defaultMessage: "Gateway URLs",
        id: "Apis.Details.GraphQLConsole.GraphQLUI.URLs"
      }),
      value: URLs.https,
      name: "selectedURL",
      fullWidth: true,
      margin: "normal",
      variant: "outlined",
      InputProps: URLs.https,
      disabled: true
    })), /*#__PURE__*/_react["default"].createElement("div", {
      styles: {
        width: '100%'
      }
    }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
      display: "flex"
    }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
      display: "flex"
    }, /*#__PURE__*/_react["default"].createElement(_graphiqlExplorer["default"], {
      schema: schema,
      query: query,
      onEdit: setQuery,
      explorerIsOpen: isExplorerOpen,
      onToggleExplorer: handleToggleExplorer
    })), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
      display: "flex",
      height: "800px",
      flexGrow: 1
    }, /*#__PURE__*/_react["default"].createElement(_graphiql["default"], {
      ref: graphiqlEl,
      fetcher: graphQLFetcher,
      schema: schema,
      query: query,
      onEditQuery: setQuery
    }, /*#__PURE__*/_react["default"].createElement(_graphiql["default"].Toolbar, null, /*#__PURE__*/_react["default"].createElement(_graphiql["default"].Button, {
      onClick: function onClick() {
        return graphiqlEl.current.handlePrettifyQuery();
      },
      label: "Prettify",
      title: "Prettify Query (Shift-Ctrl-P)"
    }), /*#__PURE__*/_react["default"].createElement(_graphiql["default"].Button, {
      onClick: function onClick() {
        return graphiqlEl.current.handleToggleHistory();
      },
      label: "History",
      title: "Show History"
    }), /*#__PURE__*/_react["default"].createElement(_graphiql["default"].Button, {
      onClick: function onClick() {
        return setIsExplorerOpen(!isExplorerOpen);
      },
      label: "Explorer",
      title: "Toggle Explorer"
    })))))));
  }
}

GraphQLUI.propTypes = {
  classes: _propTypes["default"].shape({
    paper: _propTypes["default"].string.isRequired
  }).isRequired
};