"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _core = require("@material-ui/core");

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid/Grid"));

var _reactIntl = require("react-intl");

var _classnames = _interopRequireDefault(require("classnames"));

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

var _InlineMessage = _interopRequireDefault(require("AppComponents/Shared/InlineMessage"));

var _Comment = _interopRequireDefault(require("./Comment"));

var _CommentAdd = _interopRequireDefault(require("./CommentAdd"));

var _api = _interopRequireDefault(require("../../../../data/api"));

var _ApiContext = require("../ApiContext");

var _AuthManager = _interopRequireDefault(require("../../../../data/AuthManager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    },
    paper: {
      marginRight: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      paddingRight: theme.spacing(2),
      '& span, & h5, & label, & td, & li, & div, & input': {
        color: theme.palette.getContrastText(theme.palette.background.paper)
      }
    },
    contentWrapper: {
      paddingLeft: theme.spacing(3),
      marginTop: theme.spacing(1),
      '& span, & h5, & label, & td, & li, & div, & input': {
        color: theme.palette.getContrastText(theme.palette.background.paper)
      }
    },
    contentWrapperOverview: {
      padding: 0,
      width: '100%',
      boxShadow: 'none'
    },
    titleSub: {
      cursor: 'pointer',
      color: theme.palette.getContrastText(theme.palette.background["default"])
    },
    link: {
      color: theme.palette.getContrastText(theme.palette.background["default"]),
      cursor: 'pointer'
    },
    verticalSpace: {
      marginTop: theme.spacing(0.2)
    },
    loadMoreLink: {
      textDecoration: 'underline'
    },
    genericMessageWrapper: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      marginRight: theme.spacing(3)
    },
    paperProgress: {
      padding: theme.spacing(3),
      marginTop: theme.spacing(2)
    }
  };
};
/**
 * Display a comment list
 * @class Comments
 * @extends {React.Component}
 */


var Comments = /*#__PURE__*/function (_Component) {
  _inherits(Comments, _Component);

  var _super = _createSuper(Comments);

  /**
   * Creates an instance of Comments
   * @param {*} props properies passed by the parent element
   * @memberof Comments
   */
  function Comments(props) {
    var _this;

    _classCallCheck(this, Comments);

    _this = _super.call(this, props);
    _this.state = {
      expanded: true,
      allComments: null,
      comments: [],
      totalComments: 0,
      startCommentsToDisplay: 0
    };
    _this.updateCommentList = _this.updateCommentList.bind(_assertThisInitialized(_this));
    _this.handleExpandClick = _this.handleExpandClick.bind(_assertThisInitialized(_this));
    _this.handleLoadMoreComments = _this.handleLoadMoreComments.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * Gets all the comments for a particular API, when component mounts
   * @memberof Comments
   */


  _createClass(Comments, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props = this.props,
          apiId = _this$props.apiId,
          theme = _this$props.theme,
          match = _this$props.match,
          intl = _this$props.intl,
          isOverview = _this$props.isOverview,
          setCount = _this$props.setCount;
      if (match) apiId = match.params.apiUuid;
      var restApi = new _api["default"]();
      restApi.getAllComments(apiId).then(function (result) {
        var commentList = result.body.list;

        if (isOverview) {
          setCount(commentList.length);

          if (commentList.length > 2) {
            commentList = commentList.slice(commentList.length - 3, commentList.length);
          }
        }

        _this2.setState({
          allComments: commentList,
          totalComments: commentList.length
        });

        if (commentList.length < theme.custom.commentsLimit) {
          _this2.setState({
            startCommentsToDisplay: 0,
            comments: commentList.slice(0, commentList.length)
          });
        } else {
          _this2.setState({
            startCommentsToDisplay: commentList.length - theme.custom.commentsLimit,
            comments: commentList.slice(commentList.length - theme.custom.commentsLimit, commentList.length)
          });
        }
      })["catch"](function (error) {
        if (process.env.NODE_ENV !== 'production') {
          console.log(error);
        }
      });
    }
    /**
     * Handles loading the previous comments
     * @memberof Comments
     */

  }, {
    key: "handleLoadMoreComments",
    value: function handleLoadMoreComments() {
      var _this$state = this.state,
          totalComments = _this$state.totalComments,
          startCommentsToDisplay = _this$state.startCommentsToDisplay,
          allComments = _this$state.allComments;
      var theme = this.props.theme;

      if (startCommentsToDisplay - theme.custom.commentsLimit <= 0) {
        this.setState({
          startCommentsToDisplay: 0,
          comments: allComments.slice(0, totalComments)
        });
      } else {
        this.setState({
          startCommentsToDisplay: startCommentsToDisplay - theme.custom.commentsLimit,
          comments: allComments.slice(startCommentsToDisplay - theme.custom.commentsLimit, totalComments)
        });
      }
    }
    /**
     * Handles expanding the comment section
     * @memberof Comments
     */

  }, {
    key: "handleExpandClick",
    value: function handleExpandClick() {
      var expanded = this.state.expanded;
      this.setState({
        expanded: !expanded
      });
    }
    /**
     * Updates the comment list, This is passed through props to child component
     * @param {any} comments Updated comment list
     * @memberof Comments
     */

  }, {
    key: "updateCommentList",
    value: function updateCommentList(comments) {
      var _this$state2 = this.state,
          startCommentsToDisplay = _this$state2.startCommentsToDisplay,
          totalComments = _this$state2.totalComments;
      var theme = this.props.theme;
      var newStart;
      var difference;
      var newTotal;
      this.setState({
        allComments: comments
      });

      if (totalComments < theme.custom.commentsLimit) {
        newTotal = comments.length;
        this.setState({
          startCommentsToDisplay: 0,
          totalComments: newTotal,
          comments: comments
        });
      } else if (totalComments <= comments.length) {
        difference = comments.length - totalComments;
        newStart = startCommentsToDisplay + difference;
        newTotal = comments.length;
        this.setState({
          startCommentsToDisplay: newStart,
          totalComments: newTotal,
          comments: comments.slice(newStart, newTotal)
        });
      } else {
        difference = totalComments - comments.length;

        if (startCommentsToDisplay === 0) {
          newStart = startCommentsToDisplay;
        } else {
          newStart = startCommentsToDisplay - difference;
        }

        newTotal = comments.length;
        this.setState({
          startCommentsToDisplay: newStart,
          totalComments: newTotal,
          comments: comments.slice(newStart, newTotal)
        });
      }
    }
    /**
     * Method to compare the tenant domains
     * @param {*} advertiseInfo advertiseInfo object for the API
     * @param {*} currentUser current logged in user
     * @returns {boolean} true or false
     */

  }, {
    key: "isCrossTenant",
    value: function isCrossTenant(apiProvider, currentUser) {
      var tenantDomain = null;
      var loggedInUserDomain = null;
      var loggedInUser = currentUser.name;

      if (apiProvider.includes('@')) {
        var splitDomain = apiProvider.split('@');
        tenantDomain = splitDomain[splitDomain.length - 1];
      } else {
        tenantDomain = 'carbon.super';
      }

      if (loggedInUser.includes('@')) {
        var splitLoggedInUser = loggedInUser.split('@');
        loggedInUserDomain = splitLoggedInUser[splitLoggedInUser.length - 1];
      } else {
        loggedInUserDomain = 'carbon.super';
      }

      if (tenantDomain !== loggedInUserDomain) {
        return true;
      } else {
        return false;
      }
    }
    /**
     * Render method of the component
     * @returns {React.Component} Comment html component
     * @memberof Comments
     */

  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          classes = _this$props2.classes,
          showLatest = _this$props2.showLatest,
          isOverview = _this$props2.isOverview;
      var _this$state3 = this.state,
          comments = _this$state3.comments,
          expanded = _this$state3.expanded,
          allComments = _this$state3.allComments,
          startCommentsToDisplay = _this$state3.startCommentsToDisplay,
          totalComments = _this$state3.totalComments,
          commentsUpdate = _this$state3.commentsUpdate;
      return /*#__PURE__*/_react["default"].createElement(_ApiContext.ApiContext.Consumer, null, function (_ref) {
        var api = _ref.api;
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: (0, _classnames["default"])(_defineProperty({}, classes.contentWrapper, !isOverview), _defineProperty({}, classes.contentWrapperOverview, isOverview))
        }, !showLatest && /*#__PURE__*/_react["default"].createElement("div", {
          className: classes.root
        }, /*#__PURE__*/_react["default"].createElement(_core.Typography, {
          variant: "h4",
          className: classes.titleSub
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Apis.Details.Comments.title",
          defaultMessage: "Comments"
        }))), !showLatest && _AuthManager["default"].getUser() && !_this3.isCrossTenant(api.provider, _AuthManager["default"].getUser()) && /*#__PURE__*/_react["default"].createElement(_Paper["default"], {
          className: classes.paper
        }, /*#__PURE__*/_react["default"].createElement(_CommentAdd["default"], {
          apiId: api.id,
          commentsUpdate: _this3.updateCommentList,
          allComments: allComments,
          parentCommentId: null,
          cancelButton: true
        })), !allComments && /*#__PURE__*/_react["default"].createElement(_Paper["default"], {
          className: classes.paperProgress
        }, /*#__PURE__*/_react["default"].createElement(_CircularProgress["default"], {
          size: 24
        })), allComments && totalComments === 0 && !isOverview && /*#__PURE__*/_react["default"].createElement("div", {
          className: classes.genericMessageWrapper
        }, /*#__PURE__*/_react["default"].createElement(_InlineMessage["default"], {
          type: "info",
          className: classes.dialogContainer
        }, /*#__PURE__*/_react["default"].createElement(_core.Typography, {
          variant: "h5",
          component: "h3"
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Apis.Details.Comments.no.comments",
          defaultMessage: "No Comments Yet"
        })), /*#__PURE__*/_react["default"].createElement(_core.Typography, {
          component: "p"
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Apis.Details.Comments.no.comments.content",
          defaultMessage: "No comments available for this API yet"
        })))), /*#__PURE__*/_react["default"].createElement(_Comment["default"], {
          comments: comments,
          apiId: api.id,
          commentsUpdate: _this3.updateCommentList,
          allComments: allComments,
          isOverview: isOverview
        }), startCommentsToDisplay !== 0 && /*#__PURE__*/_react["default"].createElement("div", {
          className: classes.contentWrapper
        }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
          container: true,
          spacing: 4,
          className: classes.root
        }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
          item: true
        }, /*#__PURE__*/_react["default"].createElement(_core.Typography, {
          className: classes.verticalSpace,
          variant: "body1"
        }, /*#__PURE__*/_react["default"].createElement("a", {
          className: classes.link + ' ' + classes.loadMoreLink,
          onClick: _this3.handleLoadMoreComments
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Apis.Details.Comments.load.previous.comments",
          defaultMessage: "Load Previous Comments"
        })))), /*#__PURE__*/_react["default"].createElement(_Grid["default"], null, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
          onClick: _this3.handleLoadMoreComments,
          className: classes.link + ' ' + classes.verticalSpace
        }, "arrow_drop_down")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
          item: true
        }, /*#__PURE__*/_react["default"].createElement(_core.Typography, {
          className: classes.verticalSpace,
          variant: "body1"
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Apis.Details.Comments.showing.comments",
          defaultMessage: "Showing comments "
        }), totalComments - startCommentsToDisplay + ' of ' + totalComments)))));
      });
    }
  }]);

  return Comments;
}(_react.Component);

_defineProperty(Comments, "contextType", _ApiContext.ApiContext);

Comments.propTypes = {
  classes: _propTypes["default"].instanceOf(Object).isRequired
};

var _default = (0, _reactIntl.injectIntl)((0, _styles.withStyles)(styles, {
  withTheme: true
})(Comments));

exports["default"] = _default;