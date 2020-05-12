"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _reactIntl = require("react-intl");

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
    commentIcon: {
      color: theme.palette.getContrastText(theme.palette.background["default"])
    },
    content: {
      color: theme.palette.getContrastText(theme.palette.background["default"])
    },
    contentWrapper: {
      maxWidth: theme.custom.contentAreaWidth,
      paddingLeft: theme.spacing(2),
      paddingTop: theme.spacing.unig,
      marginTop: theme.spacing(2)
    },
    textField: {
      marginTop: 0,
      marginRight: 5,
      width: '100%'
    },
    commentAddWrapper: {
      display: 'flex',
      alignItems: 'top'
    },
    commentAddButton: {
      '& span.MuiButton-label span': {
        color: theme.palette.getContrastText(theme.palette.primary.main)
      }
    }
  };
};
/**
 * Display a component to add a new comment
 * @class CommmentAdd
 * @extends {React.Component}
 */


var CommentAdd = /*#__PURE__*/function (_React$Component) {
  _inherits(CommentAdd, _React$Component);

  var _super = _createSuper(CommentAdd);

  /**
   * Creates an instance of CommentAdd
   * @param {*} props properies passed by the parent element
   * @memberof CommentAdd
   */
  function CommentAdd(props) {
    var _this;

    _classCallCheck(this, CommentAdd);

    _this = _super.call(this, props);
    _this.state = {
      content: '',
      currentLength: 0
    };
    _this.inputChange = _this.inputChange.bind(_assertThisInitialized(_this));
    _this.handleClickAddComment = _this.handleClickAddComment.bind(_assertThisInitialized(_this));
    _this.handleClickCancel = _this.handleClickCancel.bind(_assertThisInitialized(_this)); // this.handleCategoryChange = this.handleCategoryChange.bind(this);
    // this.filterCommentToAddReply = this.filterCommentToAddReply.bind(this);

    return _this;
  }
  /**
   * Handles the comment text when input changes
   * @param {Object} {target} target element
   * @memberof CommentAdd
   */


  _createClass(CommentAdd, [{
    key: "inputChange",
    value: function inputChange(_ref) {
      var target = _ref.target;
      this.setState({
        content: target.value,
        currentLength: target.value.length
      });
    }
    /**
     * Hides the component to add a new comment when cancelled
     * @memberof CommentAdd
     */

  }, {
    key: "handleClickCancel",
    value: function handleClickCancel() {
      this.setState({
        content: ''
      }); // const { toggleShowReply } = this.props;
      // toggleShowReply();
    } // /**
    //  * Filters the comment to add the reply
    //  * @memberof CommentAdd
    //  */
    // filterCommentToAddReply(commentToFilter) {
    //     const { parentCommentId } = this.props;
    //     return commentToFilter.commentId === parentCommentId;
    // }

    /**
     * Handles adding a new comment
     * @memberof CommentAdd
     */

  }, {
    key: "handleClickAddComment",
    value: function handleClickAddComment() {
      var _this2 = this;

      var _this$props = this.props,
          apiId = _this$props.apiId,
          allComments = _this$props.allComments,
          commentsUpdate = _this$props.commentsUpdate,
          intl = _this$props.intl;
      var content = this.state.content;
      var Api = new _api["default"]();
      var comment = {
        content: content.trim()
      }; // to check whether a string does not contain only white spaces

      if (comment.content.replace(/\s/g, '').length) {
        Api.addComment(apiId, comment).then(function (newComment) {
          _this2.setState({
            content: ''
          });

          var addedComment = newComment.body; // if (parentCommentId === null) {
          //     allComments.push(addedComment);
          // } else {
          //     const index = allComments.findIndex(this.filterCommentToAddReply);
          //     allComments[index].replies.push(addedComment);
          //     toggleShowReply();
          // }

          allComments.push(addedComment);
          commentsUpdate(allComments);
        })["catch"](function (error) {
          console.error(error);

          if (error.response && error.response.body && error.response.body.message) {
            _Alert["default"].error(error.response.body.message);
          } else {
            _Alert["default"].error(intl.formatMessage({
              defaultMessage: 'Something went wrong while adding the comment',
              id: 'Apis.Details.Comments.CommentAdd.something.went.wrong'
            }));
          }
        });
      } else {
        _Alert["default"].error(intl.formatMessage({
          defaultMessage: 'You cannot enter a blank comment',
          id: 'Apis.Details.Comments.CommentAdd.error.blank.comment'
        }));
      }

      this.setState({
        currentLength: 0
      });
    }
    /**
     * Render method of the component
     * @returns {React.Component} Comment html component
     * @memberof CommentAdd
     */

  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          classes = _this$props2.classes,
          cancelButton = _this$props2.cancelButton,
          theme = _this$props2.theme,
          intl = _this$props2.intl;
      var _this$state = this.state,
          content = _this$state.content,
          currentLength = _this$state.currentLength;
      return /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        container: true,
        spacing: 3,
        className: classes.contentWrapper
      }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true,
        xs: true,
        zeroMinWidth: true
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.commentAddWrapper
      }, /*#__PURE__*/_react["default"].createElement(_core.TextField, {
        id: "standard-multiline-flexible",
        autoFocus: true,
        multiline: true,
        className: classes.textField,
        margin: "normal",
        placeholder: intl.formatMessage({
          defaultMessage: 'Write a comment',
          id: 'Apis.Details.Comments.CommentAdd.write.comment.help'
        }),
        inputProps: {
          maxLength: theme.custom.maxCommentLength
        },
        value: content,
        onChange: this.inputChange,
        variant: "outlined"
      }), /*#__PURE__*/_react["default"].createElement(_core.Typography, {
        className: classes.content,
        align: "left"
      }, currentLength + '/' + theme.custom.maxCommentLength)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        container: true,
        spacing: 1
      }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true
      }, /*#__PURE__*/_react["default"].createElement(_core.Button, {
        variant: "contained",
        color: "primary",
        disabled: currentLength === 0,
        onClick: function onClick() {
          return _this3.handleClickAddComment();
        },
        className: classes.commentAddButton
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Apis.Details.Comments.CommentAdd.btn.add.comment",
        defaultMessage: "Add Comment"
      }))), cancelButton && /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true
      }, /*#__PURE__*/_react["default"].createElement(_core.Button, {
        onClick: function onClick() {
          return _this3.handleClickCancel();
        },
        className: classes.button
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Apis.Details.Comments.CommentAdd.btn.cancel",
        defaultMessage: "Cancel"
      }))))));
    }
  }]);

  return CommentAdd;
}(_react["default"].Component);

CommentAdd.defaultProps = {
  parentCommentId: null,
  toggleShowReply: null,
  commentsUpdate: null
};
CommentAdd.propTypes = {
  classes: _propTypes["default"].instanceOf(Object).isRequired,
  cancelButton: _propTypes["default"].bool.isRequired,
  apiId: _propTypes["default"].string.isRequired,
  parentCommentId: _propTypes["default"].string,
  toggleShowReply: _propTypes["default"].func,
  commentsUpdate: _propTypes["default"].func,
  allComments: _propTypes["default"].instanceOf(Array).isRequired,
  intl: _propTypes["default"].shape({
    formatMessage: _propTypes["default"].func
  }).isRequired
};

var _default = (0, _reactIntl.injectIntl)((0, _styles.withStyles)(styles, {
  withTheme: true
})(CommentAdd));

exports["default"] = _default;