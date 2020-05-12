"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _reactIntl = require("react-intl");

var _core = require("@material-ui/core");

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Alert = _interopRequireDefault(require("../../../Shared/Alert"));

var _api = _interopRequireDefault(require("../../../../data/api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
    textField: {
      marginTop: 0,
      width: '87.5%'
    },
    contentWrapper: {
      maxWidth: theme.custom.contentAreaWidth,
      paddingLeft: theme.spacing(2),
      paddingTop: theme.spacing.unig,
      marginTop: theme.spacing(2)
    },
    category: {
      width: '12%',
      marginRight: '0.5%'
    }
  };
};
/**
 * Display a component to edit a comment
 * @class CommmentEdit
 * @extends {React.Component}
 */


var CommentEdit = /*#__PURE__*/function (_React$Component) {
  _inherits(CommentEdit, _React$Component);

  var _super = _createSuper(CommentEdit);

  /**
   * Creates an instance of CommentEdit
   * @param {*} props properies passed by the parent element
   * @memberof CommentEdit
   */
  function CommentEdit(props) {
    var _this;

    _classCallCheck(this, CommentEdit);

    _this = _super.call(this, props);
    _this.state = {
      commentText: '',
      category: '',
      currentLength: 0
    };
    _this.inputChange = _this.inputChange.bind(_assertThisInitialized(_this));
    _this.handleCategoryChange = _this.handleCategoryChange.bind(_assertThisInitialized(_this));
    _this.handleClickUpdateComment = _this.handleClickUpdateComment.bind(_assertThisInitialized(_this));
    _this.handleClickCancel = _this.handleClickCancel.bind(_assertThisInitialized(_this));
    _this.filterCommentToUpdate = _this.filterCommentToUpdate.bind(_assertThisInitialized(_this));
    _this.filterCommentToUpdateReply = _this.filterCommentToUpdateReply.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * @memberof Comments
   */


  _createClass(CommentEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var comment = this.props.comment;
      this.setState({
        commentText: comment.commentText,
        category: comment.category,
        currentLength: comment.commentText.length
      });
    }
    /**
     * Handles the comment text when input changes
     * @param {Object} {target} target element
     * @memberof CommentEdit
     */

  }, {
    key: "inputChange",
    value: function inputChange(_ref) {
      var target = _ref.target;
      this.setState({
        commentText: target.value,
        currentLength: target.value.length
      });
    }
    /**
     * Hides the component to edit a comment when cancelled
     * @memberof CommentEdit
     */

  }, {
    key: "handleClickCancel",
    value: function handleClickCancel() {
      var _this$props = this.props,
          toggleShowEdit = _this$props.toggleShowEdit,
          commentsUpdate = _this$props.commentsUpdate,
          allComments = _this$props.allComments;
      toggleShowEdit();
      commentsUpdate(allComments);
    }
    /**
     * Handles category when the category is changed
     * @param {any} event Drop down select event
     * @memberof CommentEdit
     */

  }, {
    key: "handleCategoryChange",
    value: function handleCategoryChange(event) {
      this.setState({
        category: event.target.value
      });
    }
    /**
     * Filters the comment to update
     * @memberof CommentAdd
     */

  }, {
    key: "filterCommentToUpdate",
    value: function filterCommentToUpdate(commentToFilter) {
      var comment = this.props.comment;
      return commentToFilter.commentId === comment.commentId;
    }
    /**
     * Filters the comment to update
     * @memberof CommentAdd
     */

  }, {
    key: "filterCommentToUpdateReply",
    value: function filterCommentToUpdateReply(commentToFilter) {
      var comment = this.props.comment;
      return commentToFilter.commentId === comment.parentCommentId;
    }
    /**
     * Handles updating a comment
     * @memberof CommentEdit
     */

  }, {
    key: "handleClickUpdateComment",
    value: function handleClickUpdateComment() {
      var _this2 = this;

      var _this$props2 = this.props,
          apiId = _this$props2.apiId,
          comment = _this$props2.comment,
          allComments = _this$props2.allComments,
          toggleShowEdit = _this$props2.toggleShowEdit,
          commentsUpdate = _this$props2.commentsUpdate,
          intl = _this$props2.intl;
      var _this$state = this.state,
          category = _this$state.category,
          commentText = _this$state.commentText;
      var Api = new _api["default"]();
      var commentToEdit = comment;
      commentToEdit.commentText = commentText.trim();
      commentToEdit.category = category; // to check whether a string does not contain only whitehis spaces

      if (comment.commentText.replace(/\s/g, '').length) {
        Api.updateComment(apiId, commentToEdit.commentId, commentToEdit).then(function (result) {
          var updatedComment = result.body;

          if (commentToEdit.parentCommentId === undefined) {
            var index = allComments.findIndex(_this2.filterCommentToUpdate);
            allComments[index].category = updatedComment.category;
            allComments[index].commentText = updatedComment.commentText;
          } else {
            var _index = allComments.findIndex(_this2.filterCommentToUpdateReply);

            var replyIndex = allComments[_index].replies.findIndex(_this2.filterCommentToUpdate);

            allComments[_index].replies[replyIndex] = updatedComment;
          }

          toggleShowEdit();
          commentsUpdate(allComments);
        })["catch"](function (error) {
          console.error(error);

          if (error.response) {
            _Alert["default"].error(error.response.body.message);
          } else {
            _Alert["default"].error(intl.formatMessage({
              defaultMessage: 'Something went wrong while adding the comment',
              id: 'Apis.Details.Comments.CommentEdit.something.went.wrong'
            }));
          }
        });
      } else {
        _Alert["default"].error(intl.formatMessage({
          defaultMessage: 'You cannot enter a blank comment',
          id: 'Apis.Details.Comments.CommentEdit.blank.comment.error'
        }));
      }
    }
    /**
     * Render method of the component
     * @returns {React.Component} Comment html component
     * @memberof CommentEdit
     */

  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props3 = this.props,
          classes = _this$props3.classes,
          theme = _this$props3.theme,
          intl = _this$props3.intl;
      var _this$state2 = this.state,
          category = _this$state2.category,
          commentText = _this$state2.commentText,
          currentLength = _this$state2.currentLength;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
        className: classes.category
      }, /*#__PURE__*/_react["default"].createElement(_Select["default"], {
        value: category,
        onChange: this.handleCategoryChange
      }, /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
        value: "General"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Apis.Details.Comments.CommentEdit.general",
        defaultMessage: "General"
      })), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
        value: "Feature Request"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Apis.Details.Comments.CommentEdit.feature.request",
        defaultMessage: "Feature Request"
      })), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
        value: "Bug Report"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Apis.Details.Comments.CommentEdit.bug.report",
        defaultMessage: "Bug Report"
      })))), /*#__PURE__*/_react["default"].createElement(_core.TextField, {
        id: "multiline-static",
        autoFocus: true,
        multiline: true,
        className: classes.textField,
        margin: "normal",
        placeholder: intl.formatMessage({
          defaultMessage: 'Write a comment',
          id: 'Apis.Details.Comments.CommentEdit.write.a.comment'
        }),
        inputProps: {
          maxLength: theme.custom.maxCommentLength
        },
        value: commentText,
        onChange: this.inputChange
      }), /*#__PURE__*/_react["default"].createElement(_core.Typography, {
        className: classes.commentText,
        align: "right"
      }, currentLength + '/' + theme.custom.maxCommentLength), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        container: true,
        spacing: 1
      }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true
      }, /*#__PURE__*/_react["default"].createElement(_core.Button, {
        variant: "contained",
        color: "primary",
        onClick: function onClick() {
          return _this3.handleClickUpdateComment();
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Apis.Details.Comments.CommentEdit.btn.save",
        defaultMessage: "Save"
      }))), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true
      }, /*#__PURE__*/_react["default"].createElement(_core.Button, {
        onClick: function onClick() {
          return _this3.handleClickCancel();
        },
        className: classes.button
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Apis.Details.Comments.CommentEdit.btn.cancel",
        defaultMessage: "Cancel"
      })))));
    }
  }]);

  return CommentEdit;
}(_react["default"].Component);

CommentEdit.propTypes = {
  classes: _propTypes["default"].instanceOf(Object).isRequired,
  apiId: _propTypes["default"].string.isRequired,
  allComments: _propTypes["default"].instanceOf(Array).isRequired,
  commentsUpdate: _propTypes["default"].func.isRequired,
  toggleShowEdit: _propTypes["default"].func.isRequired,
  comment: _propTypes["default"].instanceOf(Object).isRequired,
  intl: _propTypes["default"].shape({
    formatMessage: _propTypes["default"].func
  }).isRequired
};

var _default = (0, _reactIntl.injectIntl)((0, _styles.withStyles)(styles, {
  withTheme: true
})(CommentEdit));

exports["default"] = _default;