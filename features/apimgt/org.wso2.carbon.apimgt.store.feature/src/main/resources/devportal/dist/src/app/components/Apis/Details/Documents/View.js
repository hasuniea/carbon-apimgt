"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

var _reactSafeHtml = _interopRequireDefault(require("react-safe-html"));

var _reactIntl = require("react-intl");

var _ApiContext = require("../ApiContext");

var _api = _interopRequireDefault(require("AppData/api"));

var _Alert = _interopRequireDefault(require("../../../Shared/Alert"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var styles = function styles(theme) {
  return {
    root: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    },
    docTitle: {
      fontWeight: 100,
      fontSize: 50,
      color: theme.palette.grey[500]
    },
    docBadge: {
      padding: theme.spacing(1),
      background: theme.palette.primary.main,
      position: 'absolute',
      top: 0,
      marginTop: -22,
      color: theme.palette.getContrastText(theme.palette.primary.main)
    },
    button: {
      padding: theme.spacing(2),
      marginTop: theme.spacing(2)
    },
    displayURL: {
      padding: theme.spacing(2),
      marginTop: theme.spacing(2),
      background: theme.palette.grey[200],
      color: theme.palette.getContrastText(theme.palette.grey[200]),
      display: 'flex'
    },
    displayURLLink: {
      paddingLeft: theme.spacing(2)
    },
    docSummary: {
      marginTop: theme.spacing(2)
    },
    fileAvailability: {
      marginTop: theme.spacing(1),
      marginLeft: theme.spacing(0.8)
    }
  };
};
/**
 *
 *
 * @param {*} props
 * @returns
 */


function View(props) {
  var classes = props.classes,
      doc = props.doc,
      apiId = props.apiId,
      fullScreen = props.fullScreen,
      intl = props.intl;

  var _useContext = (0, _react.useContext)(_ApiContext.ApiContext),
      api = _useContext.api;

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      code = _useState2[0],
      setCode = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isFileAvailable = _useState4[0],
      setIsFileAvailable = _useState4[1];

  var restAPI = new _api["default"]();
  (0, _react.useEffect)(function () {
    if (doc.sourceType === 'MARKDOWN' || doc.sourceType === 'INLINE') loadContentForDoc();

    if (doc.sourceType === 'FILE') {
      var promised_get_content = restAPI.getFileForDocument(apiId, doc.documentId);
      promised_get_content.then(function () {
        setIsFileAvailable(true);
      })["catch"](function () {
        setIsFileAvailable(false);
      });
    }
  }, [props.doc]);

  var loadContentForDoc = function loadContentForDoc() {
    var docPromise = restAPI.getInlineContentOfDocument(apiId, doc.documentId);
    docPromise.then(function (doc) {
      var text = doc.text;
      Object.keys(api).map(function (fieldName) {
        var regex = new RegExp('\_\_\_' + fieldName + '\_\_\_', 'g');
        text = text.replace(regex, api[fieldName]);
      });
      setCode(text);
    })["catch"](function (error) {
      if (process.env.NODE_ENV !== 'production') {
        console.log(error);
      }
    });
  };
  /**
   * Download the document related file
   * @param {any} response Response of download file
   */


  var downloadFile = function downloadFile(response, doc) {
    var fileName = '';
    var contentDisposition = response.headers['content-disposition'];

    if (contentDisposition && contentDisposition.indexOf('attachment') !== -1) {
      var fileNameReg = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
      var matches = fileNameReg.exec(contentDisposition);
      if (matches != null && matches[1]) fileName = matches[1].replace(/['"]/g, '');
    }

    var contentType = response.headers['content-type'];
    var blob = new Blob([response.data], {
      type: contentType
    });

    if (typeof window.navigator.msSaveBlob !== 'undefined') {
      window.navigator.msSaveBlob(blob, fileName);
    } else {
      var URL = window.URL || window.webkitURL;
      var downloadUrl = URL.createObjectURL(blob);

      if (fileName) {
        var aTag = document.createElement('a');

        if (typeof aTag.download === 'undefined') {
          window.location = downloadUrl;
        } else {
          aTag.href = downloadUrl;
          aTag.download = fileName;
          document.body.appendChild(aTag);
          aTag.click();
        }
      } else {
        window.location = downloadUrl;
      }

      setTimeout(function () {
        URL.revokeObjectURL(downloadUrl);
      }, 100);
    }
  };

  var handleDownload = function handleDownload() {
    var promised_get_content = restAPI.getFileForDocument(apiId, doc.documentId);
    promised_get_content.then(function (done) {
      downloadFile(done, document);
    })["catch"](function (error) {
      if (process.env.NODE_ENV !== 'production') {
        console.log(error);

        _Alert["default"].error(intl.formatMessage({
          id: 'Apis.Details.Documents.View.error.downloading',
          defaultMessage: 'Error downloading the file'
        }));
      }
    });
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !fullScreen && /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.docBadge
  }, doc.type), doc.summary && /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body1",
    className: classes.docSummary
  }, doc.summary), doc.sourceType === 'MARKDOWN' && /*#__PURE__*/_react["default"].createElement(_reactMarkdown["default"], {
    source: code
  }), doc.sourceType === 'INLINE' && /*#__PURE__*/_react["default"].createElement(_reactSafeHtml["default"], {
    html: code
  }), doc.sourceType === 'URL' && /*#__PURE__*/_react["default"].createElement("a", {
    className: classes.displayURL,
    href: doc.sourceUrl,
    target: "_blank"
  }, doc.sourceUrl, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    className: classes.displayURLLink
  }, "open_in_new")), doc.sourceType === 'FILE' && /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    variant: "contained",
    color: "default",
    className: classes.button,
    disabled: !isFileAvailable,
    onClick: handleDownload
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Apis.Details.Documents.View.btn.download",
    defaultMessage: "Download"
  }), /*#__PURE__*/_react["default"].createElement(_Icon["default"], null, "arrow_downward")), doc.sourceType === 'FILE' && !isFileAvailable && /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    className: classes.fileAvailability
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: "Apis.Details.Documents.View.file.availability",
    defaultMessage: "No file available"
  })));
}

View.propTypes = {
  classes: _propTypes["default"].shape({}).isRequired,
  doc: _propTypes["default"].shape({}).isRequired,
  apiId: _propTypes["default"].string.isRequired,
  intl: _propTypes["default"].shape({
    formatMessage: _propTypes["default"].func
  }).isRequired,
  fullScreen: _propTypes["default"].bool.isRequired
};

var _default = (0, _reactIntl.injectIntl)((0, _styles.withStyles)(styles)(View));

exports["default"] = _default;