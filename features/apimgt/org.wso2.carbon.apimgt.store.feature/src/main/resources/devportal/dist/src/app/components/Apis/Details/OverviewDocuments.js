"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _ListSubheader = _interopRequireDefault(require("@material-ui/core/ListSubheader"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _styles = require("@material-ui/core/styles");

var _reactIntl = require("react-intl");

var _api = _interopRequireDefault(require("AppData/api"));

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
 * Add two numbers.
 * @param {JSON} theme The second number.
 * @returns {JSON} The theme object.
 */
var styles = function styles(theme) {
  return {
    root: {
      padding: theme.spacing(3),
      maxWidth: theme.custom.contentAreaWidth
    },
    iconClass: {
      marginRight: 10,
      color: theme.palette.secondary.main
    },
    boxBadge: {
      background: theme.palette.grey.A400,
      color: theme.palette.getContrastText(theme.palette.grey.A400),
      fontSize: theme.typography.h5.fontSize,
      padding: theme.spacing(1),
      width: 30,
      height: 30,
      marginRight: 20,
      textAlign: 'center'
    },
    subscriptionBox: {
      paddingLeft: theme.spacing(2)
    },
    linkStyle: {
      color: theme.palette.getContrastText(theme.palette.background["default"]),
      fontSize: theme.typography.fontSize
    },
    subscriptionTop: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    resourceWrapper: {
      height: 192,
      overflow: 'auto'
    },
    actionPanel: {
      justifyContent: 'flex-start'
    },
    linkToTest: {
      textDecoration: 'none'
    },
    emptyBox: {
      background: '#ffffff55',
      color: '#444',
      border: 'solid 1px #fff',
      padding: theme.spacing(2),
      marginTop: 50
    },
    listWrapper: {
      padding: 0,
      margin: 0,
      width: '100%'
    },
    listItemStyle: {
      padding: 0,
      marging: 0
    }
  };
};
/**
 * Add two numbers.
 * @param {number} props The second number.
 * @returns {JSX} jsx.
 */


function OverviewDocuments(props) {
  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      docs = _useState2[0],
      setDocs = _useState2[1];

  var apiId = props.apiId,
      setDocsCount = props.setDocsCount;
  var history = (0, _reactRouterDom.useHistory)();

  var truncateString = function truncateString(n, str) {
    return str.length > n ? str.substr(0, n - 1) + '...' : str;
  };

  (0, _react.useEffect)(function () {
    var restApi = new _api["default"]();
    var promisedApi = restApi.getDocumentsByAPIId(apiId);
    promisedApi.then(function (response) {
      if (response.obj.list.length > 0) {
        // Rearanging the response to group them by the sourceType property.
        setDocs(response.obj.list);
        setDocsCount(response.obj.count);
      }
    })["catch"](function (error) {
      if (process.env.NODE_ENV !== 'production') {
        console.log(error);
      }

      var status = error.status;

      if (status === 404) {
        Alert.error('Error occured');
      }
    });
  }, []);

  var gotoDoc = function gotoDoc(documentId) {
    history.push('/apis/' + apiId + '/documents/' + documentId);
  };
  /**
   *
   *
   * @returns
   * @memberof Overview
   */


  var classes = props.classes;

  if (docs.length === 0) {
    return /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      container: true,
      className: classes.root,
      spacing: 2
    }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true,
      xs: 12
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: classes.emptyBox
    }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      variant: "body2"
    }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      id: "Apis.Details.Overview.documents.no.content",
      defaultMessage: "No Documents Available"
    })))));
  }

  return docs.length > 0 && /*#__PURE__*/_react["default"].createElement(_List["default"], {
    component: "nav",
    "aria-labelledby": "nested-list-subheader",
    subheader: /*#__PURE__*/_react["default"].createElement(_ListSubheader["default"], {
      component: "div",
      id: "nested-list-subheader",
      className: classes.listItemStyle
    }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      id: "Apis.Details.Overview.documents.list.title.prefix",
      defaultMessage: "Showing "
    }), docs.length === 1 && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "1", /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      id: "Apis.Details.Overview.documents.list.title.sufix.document",
      defaultMessage: " Document"
    })), docs.length === 2 && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "2", /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      id: "Apis.Details.Overview.documents.list.title.sufix.documents",
      defaultMessage: " Documents"
    })), docs.length > 2 && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "3", /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      id: "Apis.Details.Overview.documents.list.title.sufix.documents.multiple",
      defaultMessage: " Documents out of "
    }), docs.length)),
    className: classes.listWrapper
  }, docs.map(function (doc, index) {
    return index <= 2 && /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
      button: true,
      onClick: function onClick() {
        return gotoDoc(doc.documentId);
      },
      className: classes.listItemStyle,
      key: doc.name
    }, /*#__PURE__*/_react["default"].createElement(_ListItemIcon["default"], null, /*#__PURE__*/_react["default"].createElement(_Icon["default"], null, "insert_drive_file")), /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
      primary: doc.name,
      secondary: truncateString(100, doc.summary)
    }));
  }));
}

OverviewDocuments.propTypes = {
  classes: _propTypes["default"].shape({}).isRequired,
  theme: _propTypes["default"].shape({}).isRequired
};

var _default = (0, _styles.withStyles)(styles, {
  withTheme: true
})(OverviewDocuments);

exports["default"] = _default;