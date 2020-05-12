"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _CardMedia = _interopRequireDefault(require("@material-ui/core/CardMedia"));

var _CardContent = _interopRequireDefault(require("@material-ui/core/CardContent"));

var _styles = require("@material-ui/core/styles");

var _Chip = _interopRequireDefault(require("@material-ui/core/Chip"));

var _reactRouterDom = require("react-router-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIntl = require("react-intl");

var _MaterialIcons = _interopRequireDefault(require("MaterialIcons"));

var _StarRatingBar = _interopRequireDefault(require("AppComponents/Apis/Listing/StarRatingBar"));

var _Settings = require("Settings");

var _ImageGenerator = _interopRequireDefault(require("./ImageGenerator"));

var _api = _interopRequireDefault(require("../../../data/api"));

var _ApiContext = require("../Details/ApiContext");

var _classnames = _interopRequireDefault(require("classnames"));

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 *
 *
 * @param {*} theme
 */
var styles = function styles(theme) {
  var _apiDetails;

  return {
    card: {
      margin: theme.spacing(3 / 2),
      maxWidth: theme.custom.thumbnail.width,
      transition: 'box-shadow 0.3s ease-in-out',
      position: 'relative'
    },
    apiDetails: (_apiDetails = {
      padding: theme.spacing(1),
      background: theme.custom.thumbnail.contentBackgroundColor
    }, _defineProperty(_apiDetails, "padding", theme.spacing(1)), _defineProperty(_apiDetails, "color", theme.palette.getContrastText(theme.custom.thumbnail.contentBackgroundColor)), _defineProperty(_apiDetails, '& a', {
      color: theme.palette.getContrastText(theme.custom.thumbnail.contentBackgroundColor)
    }), _defineProperty(_apiDetails, "position", theme.custom.thumbnail.contentPictureOverlap ? 'absolute' : 'relative'), _defineProperty(_apiDetails, "top", 0), _apiDetails),
    suppressLinkStyles: {
      textDecoration: 'none',
      color: theme.palette.text.disabled
    },
    row: {
      display: 'inline-block'
    },
    thumbBy: {
      'padding-left': '5px'
    },
    media: {
      // ⚠️ object-fit is not supported by IE11.
      objectFit: 'cover'
    },
    thumbContent: {
      width: theme.custom.thumbnail.width - theme.spacing(2)
    },
    thumbLeft: {
      alignSelf: 'flex-start',
      flex: 1,
      width: '25%',
      'padding-left': '5px',
      'padding-right': '65px'
    },
    thumbLeftAction: {
      alignSelf: 'flex-start',
      flex: 1,
      width: '25%',
      'padding-left': '5px',
      'padding-right': '10px'
    },
    thumbRight: {
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'column'
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
      margin: 0,
      'padding-left': '5px'
    },
    contextBox: {
      width: parseInt((theme.custom.thumbnail.width - theme.spacing(1)) / 2, 10),
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      cursor: 'pointer',
      margin: 0,
      display: 'inline-block',
      lineHeight: '1em',
      'padding-top': 5,
      'padding-right': 5,
      'padding-bottom': 1.5,
      textAlign: 'left'
    },
    context: {
      marginTop: 5
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
      color: theme.custom.thumbnail.iconColor,
      width: theme.custom.thumbnail.width,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    imageOverlap: {
      position: 'absolute',
      bottom: 1
    },
    chipWrapper: {
      marginTop: '15px'
    },
    ratingWrapper: {
      marginTop: '20px'
    },
    textblock: {
      color: theme.palette.text.secondary,
      position: 'absolute',
      bottom: '35px',
      right: '10px',
      background: theme.custom.thumbnail.contentBackgroundColor,
      'padding-left': '10px',
      'padding-right': '10px'
    }
  };
};

var windowURL = window.URL || window.webkitURL;
/**
 *
 * Render API Card component in API listing card view,containing essential API information like name , version ect
 * @class APIThumb
 * @extends {Component}
 */

var ApiThumb = /*#__PURE__*/function (_React$Component) {
  _inherits(ApiThumb, _React$Component);

  var _super = _createSuper(ApiThumb);

  /**
   *Creates an instance of APIThumb.
   * @param {*} props
   * @memberof APIThumb
   */
  function ApiThumb(props) {
    var _this;

    _classCallCheck(this, ApiThumb);

    _this = _super.call(this, props);
    _this.state = {
      category: _MaterialIcons["default"].categories[0].name,
      selectedIcon: null,
      color: null,
      backgroundIndex: null,
      imageObj: null,
      isHover: false,
      imageLoaded: false
    };
    _this.toggleMouseOver = _this.toggleMouseOver.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   *
   *
   * @memberof ApiThumb
   */


  _createClass(ApiThumb, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var api = this.props.api;
      var restApi = new _api["default"]();
      var promisedThumbnail = restApi.getAPIThumbnail(api.id);
      promisedThumbnail.then(function (response) {
        if (response && response.data) {
          if (response.headers['content-type'] === 'application/json') {
            var iconJson = JSON.parse(response.data);

            _this2.setState({
              selectedIcon: iconJson.key,
              category: iconJson.category,
              color: iconJson.color,
              backgroundIndex: iconJson.backgroundIndex
            });
          } else if (response && response.data.size > 0) {
            var url = windowURL.createObjectURL(response.data);

            _this2.setState({
              imageObj: url
            });
          }
        }
      })["finally"](function () {
        _this2.setState({
          imageLoaded: true
        });
      });
    }
    /**
     * Clean up resource
     */

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.state.thumbnail) {
        windowURL.revokeObjectURL(this.state.imageObj);
      }
    }
    /**
     * Get Path Prefix depedning on the respective API Type being rendered
     *
     * @returns {String} path
     * @memberof ApiThumb
     */

  }, {
    key: "getPathPrefix",
    value: function getPathPrefix() {
      var path = '/apis/';
      return path;
    }
    /**
     * Toggle mouse Hover state to set the card `raised` property
     *
     * @param {React.SyntheticEvent} event mouseover and mouseout
     * @memberof APIThumb
     */

  }, {
    key: "toggleMouseOver",
    value: function toggleMouseOver(event) {
      this.setState({
        isHover: event.type === 'mouseover'
      });
    }
    /**
     * @inheritdoc
     * @returns {React.Component} @inheritdoc
     * @memberof APIThumb
     */

  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          imageObj = _this$state.imageObj,
          selectedIcon = _this$state.selectedIcon,
          color = _this$state.color,
          backgroundIndex = _this$state.backgroundIndex,
          category = _this$state.category,
          isHover = _this$state.isHover,
          imageLoaded = _this$state.imageLoaded;
      var path = this.getPathPrefix();
      var isMonetizationEnabled = this.context.isMonetizationEnabled;
      var detailsLink = path + this.props.api.id;
      var _this$props = this.props,
          api = _this$props.api,
          classes = _this$props.classes,
          theme = _this$props.theme,
          customWidth = _this$props.customWidth,
          customHeight = _this$props.customHeight,
          showInfo = _this$props.showInfo;
      var _theme$custom = theme.custom,
          thumbnail = _theme$custom.thumbnail,
          showRating = _theme$custom.social.showRating;
      var name = api.name,
          version = api.version,
          context = api.context;
      var provider = api.provider;

      if (api.businessInformation && api.businessInformation.businessOwner && api.businessInformation.businessOwner.trim() !== '') {
        provider = api.businessInformation.businessOwner;
      }

      if (!api.lifeCycleStatus) {
        api.lifeCycleStatus = api.status;
      }

      var imageWidth = customWidth || thumbnail.width;
      var imageHeight = customHeight || 140;
      var defaultImage = thumbnail.defaultApiImage;
      var ImageView;

      if (!imageLoaded) {
        ImageView = /*#__PURE__*/_react["default"].createElement("div", {
          "class": "image-load-frame"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          "class": "image-load-animation1"
        }), /*#__PURE__*/_react["default"].createElement("div", {
          "class": "image-load-animation2"
        }));
      } else if (imageObj) {
        ImageView = /*#__PURE__*/_react["default"].createElement("img", {
          height: imageHeight,
          width: imageWidth,
          src: imageObj,
          alt: "API Thumbnail",
          className: classes.media
        });
      } else {
        ImageView = /*#__PURE__*/_react["default"].createElement(_ImageGenerator["default"], {
          width: imageWidth,
          height: imageHeight,
          api: api,
          fixedIcon: {
            key: selectedIcon,
            color: color || thumbnail.iconColor,
            backgroundIndex: backgroundIndex,
            category: category,
            api: api
          }
        });
      }

      return /*#__PURE__*/_react["default"].createElement(_Card["default"], {
        onMouseOver: this.toggleMouseOver,
        onFocus: this.toggleMouseOver,
        onMouseOut: this.toggleMouseOver,
        onBlur: this.toggleMouseOver,
        raised: isHover,
        className: (0, _classnames["default"])('image-thumbnail', classes.card)
      }, isMonetizationEnabled && /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.textblock
      }, api.monetizationLabel), /*#__PURE__*/_react["default"].createElement(_CardMedia["default"], null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
        to: detailsLink,
        className: classes.suppressLinkStyles
      }, !defaultImage && ImageView, defaultImage && /*#__PURE__*/_react["default"].createElement("img", {
        src: _Settings.app.context + defaultImage,
        alt: "img"
      }))), showInfo && /*#__PURE__*/_react["default"].createElement(_CardContent["default"], {
        classes: {
          root: classes.apiDetails
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
        to: detailsLink,
        className: classes.textWrapper
      }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        className: classes.thumbHeader,
        variant: "h5",
        gutterBottom: true,
        onClick: this.handleRedirectToAPIOverview,
        title: name
      }, name)), /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.row
      }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "caption",
        gutterBottom: true,
        align: "left",
        className: classes.thumbBy
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        defaultMessage: "By",
        id: "Apis.Listing.ApiThumb.by"
      }), /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        defaultMessage: " : ",
        id: "Apis.Listing.ApiThumb.by.colon"
      }), provider)), /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.thumbInfo
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.row
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.thumbLeft
      }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "subtitle1"
      }, version), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "caption",
        gutterBottom: true,
        align: "left"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        defaultMessage: "Version",
        id: "Apis.Listing.ApiThumb.version"
      })))), /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.row
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.thumbRight
      }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "subtitle1",
        align: "right",
        className: classes.contextBox
      }, context), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "caption",
        gutterBottom: true,
        align: "right",
        className: classes.context,
        Component: "div"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        defaultMessage: "Context",
        id: "Apis.Listing.ApiThumb.context"
      }))))), /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.thumbInfo
      }, showRating && /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.thumbLeftAction
      }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "subtitle1",
        gutterBottom: true,
        align: "left",
        className: (0, _classnames["default"])('api-thumb-rating', classes.ratingWrapper)
      }, /*#__PURE__*/_react["default"].createElement(_StarRatingBar["default"], {
        apiRating: api.avgRating,
        apiId: api.id,
        isEditable: false,
        showSummary: false
      }))), /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.thumbRight
      }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "subtitle1",
        gutterBottom: true,
        align: "right",
        className: classes.chipWrapper
      }, (api.type === 'GRAPHQL' || api.transportType === 'GRAPHQL') && /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
        label: api.transportType === undefined ? api.type : api.transportType,
        color: "primary"
      }), api.lifeCycleStatus === 'PROTOTYPED' && /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
        label: api.apiType === 'APIProduct' ? api.state : api.lifeCycleStatus,
        color: "default"
      }))))));
    }
  }]);

  return ApiThumb;
}(_react["default"].Component);

ApiThumb.defaultProps = {
  customWidth: null,
  customHeight: null,
  showInfo: true
};
ApiThumb.propTypes = {
  classes: _propTypes["default"].shape({}).isRequired,
  theme: _propTypes["default"].shape({}).isRequired,
  customWidth: _propTypes["default"].number,
  customHeight: _propTypes["default"].number,
  showInfo: _propTypes["default"].bool
};
ApiThumb.contextType = _ApiContext.ApiContext;

var _default = (0, _styles.withStyles)(styles, {
  withTheme: true
})(ApiThumb);

exports["default"] = _default;