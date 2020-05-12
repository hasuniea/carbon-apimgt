"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _index = require("AppComponents/Base/Errors/index");

var _reactRouterDom = require("react-router-dom");

var _reactIntl = require("react-intl");

var _styles = require("@material-ui/core/styles");

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _InlineMessage = _interopRequireDefault(require("AppComponents/Shared/InlineMessage"));

var _Alert = _interopRequireDefault(require("AppComponents/Shared/Alert"));

var _api = _interopRequireDefault(require("AppData/api"));

var _Progress = _interopRequireDefault(require("AppComponents/Shared/Progress"));

var _reactRouter = require("react-router");

var _DocList = _interopRequireDefault(require("AppComponents/Apis/Details/Documents/DocList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  var _ref;

  return _ref = {
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
      minHeight: 400,
      position: 'relative'
    },
    paperMenu: {
      color: theme.palette.text.secondary,
      minHeight: 400 + theme.spacing(4),
      height: '100%'
    },
    contentWrapper: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      paddingTop: theme.spacing(3)
    },
    docContent: {
      paddingTop: theme.spacing(1)
    },
    parentListItem: {
      borderTop: 'solid 1px #ccc',
      borderBottom: 'solid 1px #ccc',
      color: theme.palette.grey[100],
      background: theme.palette.grey[100],
      cursor: 'default'
    },
    listRoot: {
      paddingTop: 0
    },
    nested: {
      paddingLeft: theme.spacing(3),
      paddingTop: 3,
      paddingBottom: 3
    },
    childList: {
      paddingTop: 0,
      marginTop: 0,
      paddingBottom: 0
    }
  }, _defineProperty(_ref, "contentWrapper", {
    maxWidth: theme.custom.contentAreaWidth,
    paddingLeft: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }), _defineProperty(_ref, "titleSub", {
    marginLeft: theme.spacing(3),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    color: theme.palette.getContrastText(theme.palette.background["default"])
  }), _defineProperty(_ref, "generateCredentialWrapper", {
    marginLeft: 0,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  }), _defineProperty(_ref, "genericMessageWrapper", {
    margin: theme.spacing(2)
  }), _defineProperty(_ref, "typeText", {
    color: '#000'
  }), _defineProperty(_ref, "docLinkRoot", {
    paddingLeft: 0
  }), _defineProperty(_ref, "toggler", {
    height: '100%',
    paddingTop: 20,
    cursor: 'pointer',
    marginLeft: '-20px',
    display: 'block'
  }), _defineProperty(_ref, "togglerTextParent", {
    writingMode: 'vertical-rl',
    transform: 'rotate(180deg)'
  }), _defineProperty(_ref, "togglerText", {
    textOrientation: 'sideways'
  }), _defineProperty(_ref, "toggleWrapper", {
    position: 'relative',
    background: '#fff9',
    paddingLeft: 20
  }), _defineProperty(_ref, "docsWrapper", {
    margin: 0
  }), _defineProperty(_ref, "docContainer", {
    display: 'flex',
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(2)
  }), _defineProperty(_ref, "docListWrapper", {
    width: 285
  }), _defineProperty(_ref, "docView", {
    flex: 1
  }), _defineProperty(_ref, "listItemRoot", {
    minWidth: 30
  }), _ref;
};
/**
 * Switch routes for documents.
 * @param {JSON} props The props passed down from parents.
 * @returns {JSX} Returning JSX to render.
 */


function Documents(props) {
  var classes = props.classes;
  var pathname = props.location.pathname;
  var match = (0, _reactRouter.matchPath)(pathname, {
    path: '/apis/:apiUuid/documents/:documentId',
    exact: true,
    strict: false
  });
  var apiId = props.match.params.apiUuid;
  var documentId = match ? match.params.documentId : null;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      documentList = _useState2[0],
      changeDocumentList = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedDoc = _useState4[0],
      setSelectedDoc = _useState4[1];

  (0, _react.useEffect)(function () {
    var restApi = new _api["default"]();
    var promisedApi = restApi.getDocumentsByAPIId(apiId);
    promisedApi.then(function (response) {
      var overviewDoc = response.body.list.filter(function (item) {
        return item.otherTypeName !== '_overview';
      });
      var types = [];

      if (overviewDoc.length > 0) {
        // Rearanging the response to group them by the sourceType property.
        for (var i = 0; i < overviewDoc.length; i++) {
          var selectedType = overviewDoc[i].type;
          var hasType = false;

          for (var j = 0; j < types.length; j++) {
            if (selectedType === types[j].docType) {
              types[j].docs.push(overviewDoc[i]);
              hasType = true;
            }
          }

          if (!hasType) {
            // Adding a new type entry
            types.push({
              docType: selectedType,
              docs: [overviewDoc[i]]
            });
          }

          if (overviewDoc[i].documentId === documentId) {
            setSelectedDoc(overviewDoc[i]);
          }
        }
      }

      changeDocumentList(types);

      if (!documentId && types.length > 0) {
        setSelectedDoc(types[0].docs[0]);
      }
    })["catch"](function (error) {
      if (process.env.NODE_ENV !== 'production') {
        console.log(error);
      }

      var status = error.status;

      if (status === 404) {
        _Alert["default"].error('Error occured');
      }
    });
  }, []);
  (0, _react.useEffect)(function () {
    if (documentList) {
      match = (0, _reactRouter.matchPath)(pathname, {
        path: '/apis/:apiUuid/documents/:documentId',
        exact: true,
        strict: false
      });
      documentId = match ? match.params.documentId : null;

      var _iterator = _createForOfIteratorHelper(documentList),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var type = _step.value;

          var _iterator2 = _createForOfIteratorHelper(type.docs),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var doc = _step2.value;

              if (doc.documentId === documentId) {
                setSelectedDoc(doc);
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, [documentId]);

  if (!documentList) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      variant: "h4",
      className: classes.titleSub
    }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      id: "Apis.Details.Documents.Documentation.title",
      defaultMessage: "API Documentation"
    })), /*#__PURE__*/_react["default"].createElement(_Progress["default"], null));
  }

  if (documentList && documentList.length === 0) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      variant: "h4",
      className: classes.titleSub
    }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      id: "Apis.Details.Documents.Documentation.title",
      defaultMessage: "API Documentation"
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: classes.genericMessageWrapper
    }, /*#__PURE__*/_react["default"].createElement(_InlineMessage["default"], {
      type: "info",
      className: classes.dialogContainer
    }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      variant: "h5",
      component: "h3"
    }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      id: "Apis.Details.Documents.Documentation.no.docs",
      defaultMessage: "No Documents Available"
    })), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      component: "p"
    }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      id: "Apis.Details.Documents.Documentation.no.docs.content",
      defaultMessage: "No documents are available for this API"
    })))));
  }

  if (!selectedDoc) {
    return /*#__PURE__*/_react["default"].createElement(_Progress["default"], null);
  }

  return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Redirect, {
    exact: true,
    from: "/apis/".concat(apiId, "/documents"),
    to: "/apis/".concat(apiId, "/documents/").concat(selectedDoc.documentId)
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/apis/:apiUuid/documents/:documentId",
    render: function render() {
      return /*#__PURE__*/_react["default"].createElement(_DocList["default"], _extends({}, props, {
        documentList: documentList,
        selectedDoc: selectedDoc,
        apiId: apiId
      }));
    }
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    component: _index.ResourceNotFound
  }));
}

var _default = (0, _reactIntl.injectIntl)((0, _styles.withStyles)(styles)(Documents));

exports["default"] = _default;