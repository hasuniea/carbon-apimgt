"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIntl = require("react-intl");

var _styles = require("@material-ui/core/styles");

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _InlineMessage = _interopRequireDefault(require("AppComponents/Shared/InlineMessage"));

var _Alert = _interopRequireDefault(require("AppComponents/Shared/Alert"));

var _api = _interopRequireDefault(require("AppData/api"));

var _CustomIcon = _interopRequireDefault(require("AppComponents/Shared/CustomIcon"));

var _UseWindowSize = _interopRequireDefault(require("AppComponents/Shared/UseWindowSize"));

var _Details = _interopRequireDefault(require("AppComponents/Apis/Details/Documents/Details"));

var _Errors = require("AppComponents/Base/Errors");

var _Progress = _interopRequireDefault(require("AppComponents/Shared/Progress"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
      height: '100%',
      background: theme.custom.apiDetailPages.documentBackground
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
      paddingBottom: 0,
      '& .material-icons': {
        color: theme.palette.getContrastText(theme.palette.background.paper)
      }
    }
  }, _defineProperty(_ref, "contentWrapper", {
    maxWidth: theme.custom.contentAreaWidth,
    paddingLeft: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }), _defineProperty(_ref, "titleSub", {
    marginLeft: theme.spacing(2),
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
  }), _defineProperty(_ref, "toggleWrapper", _defineProperty({
    position: 'relative',
    background: '#fff9',
    paddingLeft: 20
  }, "background", theme.custom.apiDetailPages.documentBackground)), _defineProperty(_ref, "docsWrapper", {
    margin: 0,
    background: theme.custom.apiDetailPages.documentBackground
  }), _defineProperty(_ref, "docContainer", {
    display: 'flex',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20
  }), _defineProperty(_ref, "docListWrapper", {
    width: 285
  }), _defineProperty(_ref, "docView", {
    flex: 1
  }), _defineProperty(_ref, "listItemRoot", {
    minWidth: 30
  }), _ref;
};
/**
 * Show document list.
 * @param {JSON} props The second number.
 * @returns {JSX} The sum of the two numbers.
 */


function DocList(props) {
  var classes = props.classes,
      documentList = props.documentList,
      apiId = props.apiId,
      selectedDoc = props.selectedDoc;

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      selectedIndexA = _useState2[0],
      changeSelectedIndexA = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedIndexB = _useState4[0],
      changeSelectedIndexB = _useState4[1];

  var _useWindowSize = (0, _UseWindowSize["default"])(),
      _useWindowSize2 = _slicedToArray(_useWindowSize, 1),
      width = _useWindowSize2[0];

  var _useState5 = (0, _react.useState)(!(width < 1400)),
      _useState6 = _slicedToArray(_useState5, 2),
      showDocList = _useState6[0],
      setShowDocList = _useState6[1];

  var toggleDocList = function toggleDocList() {
    setShowDocList(!showDocList);
  };

  var handleListItemClick = function handleListItemClick(event, doc) {
    var path = "/apis/".concat(apiId, "/documents/").concat(doc.documentId);
    props.history.push(path);
  };

  var makeActive = function makeActive() {
    var iA = 0;

    var _iterator = _createForOfIteratorHelper(documentList),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var type = _step.value;
        var iB = 0;

        var _iterator2 = _createForOfIteratorHelper(type.docs),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var doc = _step2.value;

            if (doc.documentId === selectedDoc.documentId) {
              changeSelectedIndexA(iA);
              changeSelectedIndexB(iB);
            }

            iB++;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        iA++;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };

  (0, _react.useEffect)(function () {
    makeActive();
  }, [selectedDoc]);
  (0, _react.useEffect)(function () {
    width < 1400 ? setShowDocList(false) : setShowDocList(true);
  }, [width]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h4",
    className: classes.titleSub
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Apis.Details.Documents.Documentation.title",
    defaultMessage: "API Documentation"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.docContainer
  }, showDocList && /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.docListWrapper
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.paperMenu
  }, /*#__PURE__*/_react["default"].createElement(_List["default"], {
    component: "nav",
    className: classes.listRoot
  }, documentList.map(function (type, indexA) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
      key: indexA
    }, /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
      className: classes.parentListItem
    }, /*#__PURE__*/_react["default"].createElement(_ListItemIcon["default"], {
      classes: {
        root: classes.listItemRoot
      }
    }, /*#__PURE__*/_react["default"].createElement(_CustomIcon["default"], {
      strokeColor: "#444",
      width: 24,
      height: 24,
      icon: "docs"
    })), /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
      primary: type.docType,
      classes: {
        root: classes.typeText
      }
    })), type.docs.length > 0 && /*#__PURE__*/_react["default"].createElement(_List["default"], {
      component: "div",
      className: classes.childList
    }, type.docs.map(function (doc, indexB) {
      return /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
        button: true,
        className: classes.nested,
        classes: {
          selected: classes.selected
        },
        selected: selectedIndexA === indexA && selectedIndexB === indexB,
        onClick: function onClick(event) {
          return handleListItemClick(event, doc);
        },
        key: indexB
      }, /*#__PURE__*/_react["default"].createElement(_ListItemIcon["default"], {
        classes: {
          root: classes.listItemRoot
        }
      }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, doc.sourceType === 'MARKDOWN' && /*#__PURE__*/_react["default"].createElement(_Icon["default"], null, "code"), doc.sourceType === 'INLINE' && /*#__PURE__*/_react["default"].createElement(_Icon["default"], null, "description"), doc.sourceType === 'URL' && /*#__PURE__*/_react["default"].createElement(_Icon["default"], null, "open_in_new"), doc.sourceType === 'FILE' && /*#__PURE__*/_react["default"].createElement(_Icon["default"], null, "arrow_downward"))), /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
        inset: true,
        primary: doc.name,
        classes: {
          root: classes.docLinkRoot
        }
      }));
    })));
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.toggleWrapper
  }, /*#__PURE__*/_react["default"].createElement("a", {
    className: classes.toggler,
    onClick: toggleDocList,
    onKeyDown: toggleDocList
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.togglerTextParent
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.togglerText
  }, showDocList ? /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Apis.Details.Documents.Documentation.hide",
    defaultMessage: "HIDE"
  }) : /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Apis.Details.Documents.Documentation.show",
    defaultMessage: "SHOW"
  }))), showDocList ? /*#__PURE__*/_react["default"].createElement(_Icon["default"], null, "keyboard_arrow_left") : /*#__PURE__*/_react["default"].createElement(_Icon["default"], null, "keyboard_arrow_right"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.docView
  }, selectedDoc && /*#__PURE__*/_react["default"].createElement(_Details["default"], {
    documentList: documentList,
    selectedDoc: selectedDoc,
    apiId: apiId
  }))));
}

DocList.propTypes = {
  classes: _propTypes["default"].shape({}).isRequired
};

var _default = (0, _reactIntl.injectIntl)((0, _styles.withStyles)(styles)(DocList));

exports["default"] = _default;