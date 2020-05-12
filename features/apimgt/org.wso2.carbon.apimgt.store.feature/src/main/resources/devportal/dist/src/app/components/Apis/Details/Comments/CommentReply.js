"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core/");

var _styles = require("@material-ui/core/styles");

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _reactIntl = require("react-intl");

var _Alert = _interopRequireDefault(require("../../../Shared/Alert"));

var _ConfirmDialog = _interopRequireDefault(require("../../../Shared/ConfirmDialog"));

var _CommentEdit = _interopRequireDefault(require("./CommentEdit"));

var _CommentOptions = _interopRequireDefault(require("./CommentOptions"));

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
    link: {
      color: theme.palette.getContrastText(theme.palette.background["default"]),
      cursor: 'pointer'
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
 * Display a particular comment and details
 * @class CommentReply
 * @extends {React.Component}
 */


var CommentReply = /*#__PURE__*/function (_React$Component) {
  _inherits(CommentReply, _React$Component);

  var _super = _createSuper(CommentReply);

  /**
   * Creates an instance of Comment
   * @param {*} props properies passed by the parent element
   * @memberof CommentReply
   */
  function CommentReply(props) {
    var _this;

    _classCallCheck(this, CommentReply);

    _this = _super.call(this, props);
    _this.state = {
      openDialog: false,
      editIndex: -1,
      deleteComment: null
    };
    _this.handleClickDeleteComment = _this.handleClickDeleteComment.bind(_assertThisInitialized(_this));
    _this.handleShowEdit = _this.handleShowEdit.bind(_assertThisInitialized(_this));
    _this.handleClickOpen = _this.handleClickOpen.bind(_assertThisInitialized(_this));
    _this.showEditComment = _this.showEditComment.bind(_assertThisInitialized(_this));
    _this.handleConfirmDialog = _this.handleConfirmDialog.bind(_assertThisInitialized(_this));
    _this.handleClose = _this.handleClose.bind(_assertThisInitialized(_this));
    _this.filterRemainingComments = _this.filterRemainingComments.bind(_assertThisInitialized(_this));
    _this.filterCommentToDelete = _this.filterCommentToDelete.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * Filters the comments to be remained
   * @memberof CommentReply
   */


  _createClass(CommentReply, [{
    key: "filterRemainingComments",
    value: function filterRemainingComments(commentToFilter) {
      var deleteComment = this.state.deleteComment;
      return commentToFilter.commentId !== deleteComment.commentId;
    }
    /**
     * Filters the comments to be deleted
     * @memberof CommentReply
     */

  }, {
    key: "filterCommentToDelete",
    value: function filterCommentToDelete(commentToFilter) {
      var deleteComment = this.state.deleteComment;
      return commentToFilter.commentId === deleteComment.parentCommentId;
    }
    /**
     * Shows the component to edit a comment
     * @param {any} index Index of comment in the array
     * @memberof CommentReply
     */

  }, {
    key: "showEditComment",
    value: function showEditComment(index) {
      var editIndex = this.state.editIndex;

      if (editIndex === -1) {
        this.setState({
          editIndex: index
        });
      }
    }
    /**
     * Hides the component to edit a comment
     * @param {any} index Index of comment in the array
     * @memberof CommentReply
     */

  }, {
    key: "handleShowEdit",
    value: function handleShowEdit() {
      this.setState({
        editIndex: -1
      });
    }
    /**
     * Shows the confimation dialog to delete a comment
     * @param {Object} comment Comment that has to be deleted
     * @memberof CommentReply
     */

  }, {
    key: "handleClickOpen",
    value: function handleClickOpen(comment) {
      var editIndex = this.state.editIndex;

      if (editIndex === -1) {
        this.setState({
          deleteComment: comment,
          openDialog: true
        });
      }
    }
    /**
     * Hides the confimation dialog to delete a comment
     * @memberof CommentReply
     */

  }, {
    key: "handleClose",
    value: function handleClose() {
      this.setState({
        openDialog: false
      });
    }
    /**
     * Handles the Confirm Dialog
     * @param {*} bool properies passed by the Confirm Dialog
     * @memberof CommentReply
     */

  }, {
    key: "handleConfirmDialog",
    value: function handleConfirmDialog(message) {
      if (message) {
        this.handleClickDeleteComment();
      } else {
        this.handleClose();
      }
    }
    /**
     * Handles deleting a comment
     * @memberof CommentReply
     */

  }, {
    key: "handleClickDeleteComment",
    value: function handleClickDeleteComment() {
      var _this2 = this;

      var Api = new _api["default"]();
      var deleteComment = this.state.deleteComment;
      var _this$props = this.props,
          apiId = _this$props.apiId,
          allComments = _this$props.allComments,
          commentsUpdate = _this$props.commentsUpdate,
          intl = _this$props.intl;
      var commentIdOfCommentToDelete = deleteComment.commentId;
      var parentCommentIdOfCommentToDelete = deleteComment.parentCommentId;
      this.handleClose();
      Api.deleteComment(apiId, commentIdOfCommentToDelete).then(function (result) {
        if (parentCommentIdOfCommentToDelete === undefined) {
          var remainingComments = allComments.filter(_this2.filterRemainingComments);
          commentsUpdate(remainingComments);
        } else {
          var index = allComments.findIndex(_this2.filterCommentToDelete);
          var remainingReplies = allComments[index].replies.filter(_this2.filterRemainingComments);
          allComments[index].replies = remainingReplies;
          commentsUpdate(allComments);
        }
      })["catch"](function (error) {
        console.error(error);

        if (error.response) {
          _Alert["default"].error(error.response.body.message);
        } else {
          _Alert["default"].error(intl.formatMessage({
            defaultMessage: 'Something went wrong while deleting comment',
            id: 'Apis.Details.Comments.CommentReply.something.went.wrong'
          }) + ' - ' + commentIdOfCommentToDelete);
        }
      });
    }
    /**
     * Render method of the component
     * @returns {React.Component} Comment html component
     * @memberof CommentReply
     */

  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          classes = _this$props2.classes,
          comments = _this$props2.comments,
          apiId = _this$props2.apiId,
          allComments = _this$props2.allComments,
          commentsUpdate = _this$props2.commentsUpdate,
          intl = _this$props2.intl;
      var _this$state = this.state,
          editIndex = _this$state.editIndex,
          openDialog = _this$state.openDialog;
      return [comments && comments.map(function (comment, index) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: comment.commentId + '-' + index,
          className: classes.contentWrapper
        }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
          container: true,
          spacing: 1,
          className: classes.root
        }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
          item: true
        }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
          className: classes.commentIcon
        }, "account_box")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
          item: true,
          xs: true,
          zeroMinWidth: true
        }, /*#__PURE__*/_react["default"].createElement(_core.Typography, {
          noWrap: true,
          className: classes.commentText,
          variant: "body1"
        }, comment.createdBy), index !== editIndex && /*#__PURE__*/_react["default"].createElement(_core.Typography, {
          className: classes.commentText
        }, comment.commentText), editIndex === index && null, index === editIndex && /*#__PURE__*/_react["default"].createElement(_CommentEdit["default"], {
          apiId: apiId,
          allComments: allComments,
          commentsUpdate: commentsUpdate,
          comment: comment,
          toggleShowEdit: _this3.handleShowEdit
        }), /*#__PURE__*/_react["default"].createElement(_CommentOptions["default"], {
          classes: classes,
          comment: comment,
          editIndex: editIndex,
          index: index,
          showAddComment: _this3.showAddComment,
          handleClickOpen: _this3.handleClickOpen,
          showEditComment: _this3.showEditComment
        }))));
      }), /*#__PURE__*/_react["default"].createElement(_ConfirmDialog["default"], {
        key: "key-dialog",
        labelCancel: "Cancel",
        title: "Confirm Delete",
        message: intl.formatMessage({
          defaultMessage: 'Are you sure you want to delete this comment?',
          id: 'Apis.Details.Comments.CommentReply.are.you.sure'
        }),
        labelOk: "Yes",
        callback: this.handleConfirmDialog,
        open: openDialog
      })];
    }
  }]);

  return CommentReply;
}(_react["default"].Component);

CommentReply.defaultProps = {
  api: null
};
CommentReply.propTypes = {
  classes: _propTypes["default"].instanceOf(Object).isRequired,
  apiId: _propTypes["default"].string.isRequired,
  allComments: _propTypes["default"].instanceOf(Array).isRequired,
  commentsUpdate: _propTypes["default"].func.isRequired,
  comments: _propTypes["default"].instanceOf(Array).isRequired,
  intl: _propTypes["default"].shape({
    formatMessage: _propTypes["default"].func
  }).isRequired
};

var _default = (0, _reactIntl.injectIntl)((0, _styles.withStyles)(styles)(CommentReply));

exports["default"] = _default;