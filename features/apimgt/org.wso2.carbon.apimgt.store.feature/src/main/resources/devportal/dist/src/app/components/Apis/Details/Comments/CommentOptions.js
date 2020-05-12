"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

var _reactIntl = require("react-intl");

var _VerticalDivider = _interopRequireDefault(require("../../../Shared/VerticalDivider"));

var _AuthManager = _interopRequireDefault(require("../../../../data/AuthManager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var styles = function styles(theme) {
  return {
    link: {
      color: theme.palette.getContrastText(theme.palette.primary.main),
      '& span.MuiButton-label span': {
        color: theme.palette.getContrastText(theme.palette.primary.main)
      },
      cursor: 'pointer'
    },
    time: {
      color: theme.palette.getContrastText(theme.palette.background["default"]),
      marginTop: theme.spacing(0.3)
    },
    verticalSpace: {
      marginTop: theme.spacing(1),
      display: 'flex',
      alignItems: 'center'
    },
    disable: {
      color: theme.palette.grey[200]
    },
    commentIcon: {
      color: theme.palette.getContrastText(theme.palette.background["default"])
    },
    commentText: {
      color: theme.palette.getContrastText(theme.palette.background["default"]),
      marginTop: theme.spacing.unig,
      width: '100%',
      whiteSpace: 'pre-wrap',
      overflowWrap: 'break-word'
    },
    root: {
      marginTop: theme.spacing(2.5)
    },
    contentWrapper: {
      maxWidth: theme.custom.contentAreaWidth,
      paddingLeft: theme.spacing(2),
      paddingTop: theme.spacing.unig
    }
  };
};
/**
 * Component to display options of the comment
 * @class CommentOptions
 * @extends {React.Component}
 */


var CommentOptions = /*#__PURE__*/function (_React$Component) {
  _inherits(CommentOptions, _React$Component);

  var _super = _createSuper(CommentOptions);

  /**
   * Creates an instance of CommentAdd
   * @param {*} props properies passed by the parent element
   * @memberof CommentAdd
   */
  function CommentOptions(props) {
    var _this;

    _classCallCheck(this, CommentOptions);

    _this = _super.call(this, props);
    _this.state = {};
    _this.showAddComment = _this.showAddComment.bind(_assertThisInitialized(_this));
    _this.showEditComment = _this.showEditComment.bind(_assertThisInitialized(_this));
    _this.handleClickOpen = _this.handleClickOpen.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * Shows the component to add a new comment
   * @param {any} index Index of comment in the array
   * @memberof CommentOptions
   */


  _createClass(CommentOptions, [{
    key: "showAddComment",
    value: function showAddComment(index) {
      var _this$props = this.props,
          editIndex = _this$props.editIndex,
          showAddComment = _this$props.showAddComment;

      if (editIndex === -1) {
        showAddComment(index);
      }
    }
    /**
     * Shows the component to edit a comment
     * @param {any} index Index of comment in the array
     * @memberof Comment
     */

  }, {
    key: "showEditComment",
    value: function showEditComment(index) {
      var _this$props2 = this.props,
          editIndex = _this$props2.editIndex,
          showEditComment = _this$props2.showEditComment;

      if (editIndex === -1) {
        showEditComment(index);
      }
    }
    /**
     * Shows the confimation dialog to delete a comment
     * @param {Object} comment Comment that has to be deleted
     * @memberof Comment
     */

  }, {
    key: "handleClickOpen",
    value: function handleClickOpen(comment) {
      var _this$props3 = this.props,
          editIndex = _this$props3.editIndex,
          handleClickOpen = _this$props3.handleClickOpen;

      if (editIndex === -1) {
        handleClickOpen(comment);
      }
    }
    /**
     * Returns the date and time in a particular format
     * @param {any} timestamp Timestamp that has to be formatted
     * @memberof CommentOptions
     */

  }, {
    key: "displayDate",
    value: function displayDate(timestamp) {
      var localDate = new Date(timestamp);
      var localDateString = localDate.toLocaleDateString(undefined, {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });
      var localTimeString = localDate.toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit'
      });
      return localDateString + ' ' + localTimeString;
    }
    /**
     * Render method of the component
     * @returns {React.Component} Comment html component
     * @memberof CommentOptions
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
          _React$createElement;

      var _this$props4 = this.props,
          classes = _this$props4.classes,
          comment = _this$props4.comment,
          editIndex = _this$props4.editIndex,
          index = _this$props4.index,
          theme = _this$props4.theme;
      return /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        container: true,
        spacing: 1,
        className: classes.verticalSpace,
        key: comment.id
      }, _AuthManager["default"].getUser() && comment.createdBy === _AuthManager["default"].getUser().name && [/*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true,
        key: "key-delete"
      }, /*#__PURE__*/_react["default"].createElement(_Button["default"], (_React$createElement = {
        variant: "outlined",
        size: "small",
        className: editIndex === -1 ? classes.link : classes.disable,
        onClick: function onClick() {
          return _this2.handleClickOpen(comment);
        }
      }, _defineProperty(_React$createElement, "variant", "contained"), _defineProperty(_React$createElement, "color", "primary"), _React$createElement), /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Apis.Details.Comments.CommentOptions.delete",
        defaultMessage: "Delete"
      }))), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true,
        key: "key-delete-vertical-divider"
      }, /*#__PURE__*/_react["default"].createElement(_VerticalDivider["default"], {
        height: 15
      }))], /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true,
        className: classes.time
      }, /*#__PURE__*/_react["default"].createElement(_core.Typography, {
        component: "a",
        variant: "caption"
      }, this.displayDate(comment.createdTime))));
    }
  }]);

  return CommentOptions;
}(_react["default"].Component);

CommentOptions.defaultProps = {
  showAddComment: null
};
CommentOptions.propTypes = {
  classes: _propTypes["default"].instanceOf(Object).isRequired,
  editIndex: _propTypes["default"].number.isRequired,
  index: _propTypes["default"].number.isRequired,
  comment: _propTypes["default"].instanceOf(Object).isRequired,
  handleClickOpen: _propTypes["default"].func.isRequired,
  showEditComment: _propTypes["default"].func.isRequired,
  showAddComment: _propTypes["default"].func
};

var _default = (0, _styles.withStyles)(styles, {
  withTheme: true
})(CommentOptions);

exports["default"] = _default;