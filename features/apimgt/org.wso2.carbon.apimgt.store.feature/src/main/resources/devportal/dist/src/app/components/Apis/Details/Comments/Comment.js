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

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _reactIntl = require("react-intl");

var _classnames = _interopRequireDefault(require("classnames"));

var _Alert = _interopRequireDefault(require("AppComponents/Shared/Alert"));

var _ConfirmDialog = _interopRequireDefault(require("AppComponents/Shared/ConfirmDialog"));

var _api = _interopRequireDefault(require("AppData/api"));

var _CommentEdit = _interopRequireDefault(require("./CommentEdit"));

var _CommentOptions = _interopRequireDefault(require("./CommentOptions"));

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
      color: theme.palette.getContrastText(theme.palette.background["default"]),
      cursor: 'pointer'
    },
    commentIcon: {
      color: theme.palette.getContrastText(theme.palette.background["default"])
    },
    commentText: {
      color: theme.palette.getContrastText(theme.palette.background["default"]),
      marginTop: 0,
      width: '99%',
      whiteSpace: 'pre-wrap',
      overflowWrap: 'break-word',
      wordBreak: 'break-all'
    },
    root: {
      marginTop: theme.spacing(1)
    },
    contentWrapper: {
      paddingLeft: theme.spacing(2),
      paddingTop: theme.spacing(1)
    },
    contentWrapperOverview: {
      background: 'transparent',
      width: '100%'
    },
    divider: {
      marginTop: theme.spacing(1)
    },
    paper: {
      margin: 0,
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(3),
      paddingBottom: theme.spacing(3)
    },
    cleanBack: {
      background: 'transparent',
      width: '100%',
      boxShadow: 'none'
    }
  };
};
/**
 * Display a particular comment and details
 * @class Comment
 * @extends {React.Component}
 */


var Comment = /*#__PURE__*/function (_React$Component) {
  _inherits(Comment, _React$Component);

  var _super = _createSuper(Comment);

  /**
   * Creates an instance of Comment
   * @param {*} props properies passed by the parent element
   * @memberof Comment
   */
  function Comment(props) {
    var _this;

    _classCallCheck(this, Comment);

    _this = _super.call(this, props);
    _this.state = {
      openDialog: false,
      replyIndex: -1,
      editIndex: -1,
      deleteComment: null
    };
    _this.handleClickDeleteComment = _this.handleClickDeleteComment.bind(_assertThisInitialized(_this));
    _this.handleShowEdit = _this.handleShowEdit.bind(_assertThisInitialized(_this));
    _this.handleShowReply = _this.handleShowReply.bind(_assertThisInitialized(_this));
    _this.handleClickOpen = _this.handleClickOpen.bind(_assertThisInitialized(_this));
    _this.showAddComment = _this.showAddComment.bind(_assertThisInitialized(_this));
    _this.showEditComment = _this.showEditComment.bind(_assertThisInitialized(_this));
    _this.handleConfirmDialog = _this.handleConfirmDialog.bind(_assertThisInitialized(_this));
    _this.handleClose = _this.handleClose.bind(_assertThisInitialized(_this));
    _this.filterRemainingComments = _this.filterRemainingComments.bind(_assertThisInitialized(_this));
    _this.filterCommentToDelete = _this.filterCommentToDelete.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * Add two numbers.
   * @param {string} commentToFilter comment to filter.
   * @returns {boolean} filtering needed or not.
   */


  _createClass(Comment, [{
    key: "filterRemainingComments",
    value: function filterRemainingComments(commentToFilter) {
      var deleteComment = this.state.deleteComment;
      return commentToFilter.id !== deleteComment.id;
    }
    /**
     * Add two numbers.
     * @param {JSON} commentToFilter comment to filter.
     * @returns {string} id of the comment.
     */

  }, {
    key: "filterCommentToDelete",
    value: function filterCommentToDelete(commentToFilter) {
      // const { deleteComment } = this.state;
      // return commentToFilter.id === deleteComment.parentCommentId;
      return commentToFilter.id;
    }
    /**
     * Shows the component to add a new comment
     * @param {any} index Index of comment in the array
     * @memberof Comment
     */

  }, {
    key: "showAddComment",
    value: function showAddComment(index) {
      var editIndex = this.state.editIndex;

      if (editIndex === -1) {
        this.setState({
          replyIndex: index
        });
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
     * @memberof Comment
     */

  }, {
    key: "handleShowEdit",
    value: function handleShowEdit() {
      this.setState({
        editIndex: -1
      });
    }
    /**
     * Hides the component to add a new comment
     * @param {any} index Index of comment in the array
     * @memberof Comment
     */

  }, {
    key: "handleShowReply",
    value: function handleShowReply() {
      this.setState({
        replyIndex: -1
      });
    }
    /**
     * Shows the confimation dialog to delete a comment
     * @param {Object} comment Comment that has to be deleted
     * @memberof Comment
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
     * @memberof Comment
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
     * @param {*} message properies passed by the Confirm Dialog
     * @memberof Comment
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
     * @memberof Comment
     */

  }, {
    key: "handleClickDeleteComment",
    value: function handleClickDeleteComment() {
      var _this2 = this;

      var apiClient = new _api["default"]();
      var deleteComment = this.state.deleteComment;
      var _this$props = this.props,
          apiId = _this$props.apiId,
          allComments = _this$props.allComments,
          commentsUpdate = _this$props.commentsUpdate,
          intl = _this$props.intl;
      var commentIdOfCommentToDelete = deleteComment.id; // const parentCommentIdOfCommentToDelete = deleteComment.parentCommentId;

      this.handleClose();
      apiClient.deleteComment(apiId, commentIdOfCommentToDelete).then(function () {
        // if (parentCommentIdOfCommentToDelete === undefined) {
        var remainingComments = allComments.filter(_this2.filterRemainingComments);
        commentsUpdate(remainingComments);

        _Alert["default"].message('Comment' + commentIdOfCommentToDelete + 'has been successfully deleted'); // } else {
        //     const index = allComments.findIndex(this.filterCommentToDelete);
        //     const remainingReplies = allComments[index].replies.filter(this.filterRemainingComments);
        //     allComments[index].replies = remainingReplies;
        //     commentsUpdate(allComments);
        // }

      })["catch"](function (error) {
        console.error(error);

        if (error.response) {
          _Alert["default"].error(error.response.body.message);
        } // else {
        //     Alert.error(
        //         intl.formatMessage({
        //             defaultMessage: 'Something went wrong while deleting comment',
        //             id: 'Apis.Details.Comments.Comment.something.went.wrong',
        //         })
        //         + ' - '
        //         + commentIdOfCommentToDelete,
        //     );
        // }

      });
    }
    /**
     * Render method of the component
     * @returns {React.Component} Comment html component
     * @memberof Comment
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
          isOverview = _this$props2.isOverview;
      var _this$state = this.state,
          editIndex = _this$state.editIndex,
          openDialog = _this$state.openDialog;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Paper["default"], {
        className: (0, _classnames["default"])(_defineProperty({}, classes.paper, !isOverview && comments.length > 0), _defineProperty({}, classes.cleanBack, isOverview))
      }, comments && comments.slice(0).reverse().map(function (comment, index) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          // eslint-disable-next-line react/no-array-index-key
          key: comment.commentId + '-' + index,
          className: (0, _classnames["default"])(_defineProperty({}, classes.contentWrapper, !isOverview), _defineProperty({}, classes.contentWrapperOverview, isOverview))
        }, index !== 0 && /*#__PURE__*/_react["default"].createElement(_Divider["default"], {
          className: classes.divider
        }), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
          container: true,
          spacing: 1,
          className: (0, _classnames["default"])(_defineProperty({}, classes.root, !isOverview))
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
          className: classes.commentText
        }, comment.createdBy), index !== editIndex && /*#__PURE__*/_react["default"].createElement(_core.Typography, {
          className: classes.commentText
        }, comment.content), index === editIndex && /*#__PURE__*/_react["default"].createElement(_CommentEdit["default"], {
          apiId: apiId,
          allComments: allComments,
          commentsUpdate: commentsUpdate,
          comment: comment,
          toggleShowEdit: _this3.handleShowEdit
        }), /*#__PURE__*/_react["default"].createElement(_CommentOptions["default"], {
          comment: comment,
          editIndex: editIndex,
          index: index,
          showAddComment: _this3.showAddComment,
          handleClickOpen: _this3.handleClickOpen,
          showEditComment: _this3.showEditComment
        }))));
      })), /*#__PURE__*/_react["default"].createElement(_ConfirmDialog["default"], {
        key: "key-dialog",
        labelCancel: "Cancel",
        title: "Confirm Delete",
        message: "Are you sure you want to delete this comment?",
        labelOk: "Yes",
        callback: this.handleConfirmDialog,
        open: openDialog
      }));
    }
  }]);

  return Comment;
}(_react["default"].Component);

Comment.defaultProps = {
  isOverview: false
};
Comment.propTypes = {
  classes: _propTypes["default"].shape({}).isRequired,
  apiId: _propTypes["default"].string.isRequired,
  allComments: _propTypes["default"].instanceOf(Array).isRequired,
  commentsUpdate: _propTypes["default"].func.isRequired,
  comments: _propTypes["default"].instanceOf(Array).isRequired,
  isOverview: _propTypes["default"].bool
};

var _default = (0, _reactIntl.injectIntl)((0, _styles.withStyles)(styles)(Comment));

exports["default"] = _default;