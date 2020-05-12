"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _TableBody = _interopRequireDefault(require("@material-ui/core/TableBody"));

var _TableCell = _interopRequireDefault(require("@material-ui/core/TableCell"));

var _TableRow = _interopRequireDefault(require("@material-ui/core/TableRow"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _reactIntl = require("react-intl");

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

var _ResourceNotFound = _interopRequireDefault(require("AppComponents/Base/Errors/ResourceNotFound"));

var _ScopeValidation = require("AppComponents/Shared/ScopeValidation");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @inheritdoc
 * @param {*} theme theme object
 */
var styles = function styles(theme) {
  return {
    fullHeight: {
      height: '100%'
    },
    tableRow: {
      height: theme.spacing(5)
    }
  };
};

var StyledTableCell = (0, _styles.withStyles)(function (theme) {
  return {
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white
    },
    body: {
      fontSize: 14
    },
    root: {
      padding: "0 0 0  ".concat(theme.spacing(2), "px")
    }
  };
})(_TableCell["default"]);
var StyledTableRow = (0, _styles.withStyles)(function (theme) {
  return {
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background["default"]
      }
    }
  };
})(_TableRow["default"]);
/**
 *
 *
 * @class AppsTableContent
 * @extends {Component}
 */

var AppsTableContent = /*#__PURE__*/function (_Component) {
  _inherits(AppsTableContent, _Component);

  var _super = _createSuper(AppsTableContent);

  /**
   * @inheritdoc
   */
  function AppsTableContent(props) {
    var _this;

    _classCallCheck(this, AppsTableContent);

    _this = _super.call(this, props);
    _this.state = {
      notFound: false
    };
    _this.APPLICATION_STATES = {
      CREATED: 'CREATED',
      APPROVED: 'APPROVED',
      REJECTED: 'REJECTED'
    };
    return _this;
  }
  /**
   * @inheritdoc
   * @memberof AppsTableContent
   */


  _createClass(AppsTableContent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          apps = _this$props.apps,
          toggleDeleteConfirmation = _this$props.toggleDeleteConfirmation,
          classes = _this$props.classes,
          rowsPerPage = _this$props.rowsPerPage;
      var notFound = this.state.notFound;
      var appsTableData = [];

      if (apps) {
        appsTableData = _toConsumableArray(apps.values()).map(function (app) {
          app.deleting = false;
          return app;
        });
      }

      if (notFound) {
        return /*#__PURE__*/_react["default"].createElement(_ResourceNotFound["default"], null);
      }

      return /*#__PURE__*/_react["default"].createElement(_TableBody["default"], {
        className: classes.fullHeight
      }, appsTableData.map(function (app) {
        return /*#__PURE__*/_react["default"].createElement(StyledTableRow, {
          className: classes.tableRow,
          key: app.applicationId
        }, /*#__PURE__*/_react["default"].createElement(StyledTableCell, {
          align: "left"
        }, app.status === _this2.APPLICATION_STATES.APPROVED ? /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
          to: '/applications/' + app.applicationId
        }, app.name) : app.name), /*#__PURE__*/_react["default"].createElement(StyledTableCell, {
          align: "left"
        }, app.owner), /*#__PURE__*/_react["default"].createElement(StyledTableCell, {
          align: "left"
        }, app.throttlingPolicy), /*#__PURE__*/_react["default"].createElement(StyledTableCell, {
          align: "left"
        }, app.status === _this2.APPLICATION_STATES.APPROVED && /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
          variant: "subtitle1",
          gutterBottom: true
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Applications.Listing.AppsTableContent.active",
          defaultMessage: "ACTIVE"
        })), app.status === _this2.APPLICATION_STATES.CREATED && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
          variant: "subtitle1",
          gutterBottom: true
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Applications.Listing.AppsTableContent.inactive",
          defaultMessage: "INACTIVE"
        })), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
          variant: "caption"
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Applications.Listing.AppsTableContent.wait.approval",
          defaultMessage: "waiting for approval"
        }))), app.status === _this2.APPLICATION_STATES.REJECTED && /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
          variant: "subtitle1",
          gutterBottom: true
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Applications.Listing.AppsTableContent.rejected",
          defaultMessage: "REJECTED"
        }))), /*#__PURE__*/_react["default"].createElement(StyledTableCell, {
          align: "left"
        }, app.subscriptionCount), /*#__PURE__*/_react["default"].createElement(StyledTableCell, {
          align: "left"
        }, /*#__PURE__*/_react["default"].createElement(_ScopeValidation.ScopeValidation, {
          resourcePath: _ScopeValidation.resourcePaths.SINGLE_APPLICATION,
          resourceMethod: _ScopeValidation.resourceMethods.PUT
        }, app.status === _this2.APPLICATION_STATES.APPROVED && /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
          title: "Edit"
        }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
          to: "/applications/".concat(app.applicationId, "/edit/")
        }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], null, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
          "aria-label": /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
            id: "Applications.Listing.AppsTableContent.edit.btn",
            defaultMessage: "Edit"
          })
        }, "edit"))))), /*#__PURE__*/_react["default"].createElement(_ScopeValidation.ScopeValidation, {
          resourcePath: _ScopeValidation.resourcePaths.SINGLE_APPLICATION,
          resourceMethod: _ScopeValidation.resourceMethods.DELETE
        }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
          title: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
            id: "Applications.Listing.AppsTableContent.delete.tooltip",
            defaultMessage: "Delete"
          })
        }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
          disabled: app.deleting,
          "data-appid": app.applicationId,
          onClick: toggleDeleteConfirmation,
          color: "default",
          "aria-label": /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
            id: "Applications.Listing.AppsTableContent.delete.label",
            defaultMessage: "Delete"
          })
        }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], null, "delete")))), app.deleting && /*#__PURE__*/_react["default"].createElement(_CircularProgress["default"], {
          size: 24
        })));
      }));
    }
  }]);

  return AppsTableContent;
}(_react.Component);

AppsTableContent.propTypes = {
  toggleDeleteConfirmation: _propTypes["default"].func.isRequired,
  apps: _propTypes["default"].instanceOf(Map).isRequired
};

var _default = (0, _styles.withStyles)(styles)(AppsTableContent);

exports["default"] = _default;