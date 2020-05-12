"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _styles = require("@material-ui/core/styles");

var _Chip = _interopRequireDefault(require("@material-ui/core/Chip"));

var _reactRouterDom = require("react-router-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactIntl = require("react-intl");

var _MaterialIcons = _interopRequireDefault(require("MaterialIcons"));

var _Constants = _interopRequireDefault(require("AppData/Constants"));

var _ImageGenerator = _interopRequireDefault(require("./ImageGenerator"));

var _api = _interopRequireDefault(require("../../../data/api"));

var _ApiContext = require("../Details/ApiContext");

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

/**
 *
 *
 * @param {*} theme
 */
var styles = function styles(theme) {
  return {
    thumbContent: {
      width: theme.custom.thumbnail.width - theme.spacing(1),
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(1),
      minHeight: 130
    },
    thumbLeft: {
      alignSelf: 'flex-start',
      flex: 1
    },
    thumbRight: {
      alignSelf: 'flex-end'
    },
    thumbInfo: {
      display: 'flex'
    },
    thumbHeader: {
      width: theme.custom.thumbnail.width - theme.spacing(1),
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      cursor: 'pointer',
      margin: 0
    },
    contextBox: {
      width: parseInt((theme.custom.thumbnail.width - theme.spacing(1)) / 2),
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      cursor: 'pointer',
      margin: 0,
      display: 'inline-block',
      lineHeight: '1em'
    },
    thumbWrapper: {
      position: 'relative',
      paddingTop: 20,
      marginRight: theme.spacing(2)
    },
    deleteIcon: {
      fill: 'red'
    },
    textWrapper: {
      color: theme.palette.text.secondary,
      textDecoration: 'none'
    },
    imageWrapper: {
      color: theme.palette.text.secondary,
      backgroundColor: theme.palette.background.paper,
      width: theme.custom.thumbnail.width + theme.spacing(1),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    imageOverlap: {
      position: 'absolute',
      bottom: 1,
      backgroundColor: theme.custom.thumbnail.contentBackgroundColor
    }
  };
};
/**
 *
 *
 * @class DocThumb
 * @extends {React.Component}
 */


var windowURL = window.URL || window.webkitURL;

var DocThumb = /*#__PURE__*/function (_React$Component) {
  _inherits(DocThumb, _React$Component);

  var _super = _createSuper(DocThumb);

  function DocThumb(props) {
    var _this;

    _classCallCheck(this, DocThumb);

    _this = _super.call(this, props);
    _this.state = {
      active: true,
      loading: false,
      open: false,
      overview_link: '',
      isRedirect: false,
      openMoreMenu: false,
      category: _MaterialIcons["default"].categories[0].name,
      selectedIcon: null,
      color: null,
      backgroundIndex: null,
      imageObj: null
    };
    return _this;
  }
  /**
   * Clean up resource
   */


  _createClass(DocThumb, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.state.thumbnail) {
        windowURL.revokeObjectURL(this.state.imageObj);
      }
    }
    /**
     *
     *
     * @returns
     * @memberof DocThumb
     */

  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          selectedIcon = _this$state.selectedIcon,
          color = _this$state.color,
          backgroundIndex = _this$state.backgroundIndex,
          category = _this$state.category;
      var _this$props = this.props,
          doc = _this$props.doc,
          classes = _this$props.classes,
          theme = _this$props.theme;
      var _this$props$doc = this.props.doc,
          name = _this$props$doc.name,
          sourceType = _this$props$doc.sourceType,
          apiName = _this$props$doc.apiName,
          apiVersion = _this$props$doc.apiVersion,
          id = _this$props$doc.id,
          apiUUID = _this$props$doc.apiUUID;
      var details_link = '/apis/' + apiUUID + '/documents/' + id + '/details';
      var thumbnail = theme.custom.thumbnail;
      var imageWidth = thumbnail.width;
      var defaultImage = thumbnail.defaultApiImage;

      var ImageView = /*#__PURE__*/_react["default"].createElement(_ImageGenerator["default"], {
        width: imageWidth,
        height: 140,
        api: doc,
        fixedIcon: {
          key: selectedIcon,
          color: color,
          backgroundIndex: backgroundIndex,
          category: category,
          doc: doc
        }
      });

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.thumbWrapper
      }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
        to: details_link,
        className: classes.imageWrapper
      }, !defaultImage && ImageView, defaultImage && /*#__PURE__*/_react["default"].createElement("img", {
        src: defaultImage
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])(classes.thumbContent, _defineProperty({}, classes.imageOverlap, thumbnail.contentPictureOverlap))
      }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
        to: details_link,
        className: classes.textWrapper
      }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        className: classes.thumbHeader,
        variant: "h4",
        gutterBottom: true,
        onClick: this.handleRedirectToAPIOverview,
        title: name
      }, name)), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "caption",
        gutterBottom: true,
        align: "left"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        defaultMessage: "Source Type:",
        id: "Apis.Listing.DocThumb.sourceType"
      }), sourceType), /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.thumbInfo
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.thumbLeft
      }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "subtitle1"
      }, apiName), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "caption",
        gutterBottom: true,
        align: "left"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        defaultMessage: "Api Name",
        id: "Apis.Listing.DocThumb.apiName"
      }))), /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.thumbRight
      }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "subtitle1",
        align: "right",
        className: classes.contextBox
      }, apiVersion), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "caption",
        gutterBottom: true,
        align: "right"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        defaultMessage: "Api Version",
        id: "Apis.Listing.DocThumb.apiVersion"
      }))))));
    }
  }]);

  return DocThumb;
}(_react["default"].Component);

DocThumb.propTypes = {
  classes: _propTypes["default"].shape({}).isRequired,
  theme: _propTypes["default"].shape({}).isRequired
};
DocThumb.contextType = _ApiContext.ApiContext;

var _default = (0, _styles.withStyles)(styles, {
  withTheme: true
})(DocThumb);

exports["default"] = _default;