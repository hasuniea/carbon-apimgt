"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _reactIntl = require("react-intl");

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _styles = require("@material-ui/core/styles");

var _classnames = _interopRequireDefault(require("classnames"));

var _CustomIcon = _interopRequireDefault(require("AppComponents/Shared/CustomIcon"));

var _SettingsContext = _interopRequireDefault(require("AppComponents/Shared/SettingsContext"));

var _api = _interopRequireDefault(require("AppData/api"));

var _ApiBreadcrumbs = _interopRequireDefault(require("./ApiBreadcrumbs"));

var _ApiTableView = _interopRequireDefault(require("./ApiTableView"));

var _ApiContext = require("../Details/ApiContext");

var _TagCloudListingTags = _interopRequireDefault(require("./TagCloudListingTags"));

var _CategoryListingCategories = _interopRequireDefault(require("./CategoryListingCategories"));

var _ApiTagCloud = _interopRequireDefault(require("./ApiTagCloud"));

var _Recommendations = _interopRequireDefault(require("./Recommendations"));

var _AuthManager = _interopRequireDefault(require("../../../data/AuthManager"));

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

var styles = function styles(theme) {
  return {
    rightIcon: {
      marginLeft: theme.spacing(1)
    },
    button: {
      margin: theme.spacing(1),
      marginBottom: 0
    },
    buttonRight: {
      alignSelf: 'flex-end',
      display: 'flex'
    },
    ListingWrapper: {
      paddingTop: 10,
      paddingLeft: 35,
      maxWidth: theme.custom.contentAreaWidth
    },
    appBar: {
      height: 70,
      background: theme.custom.infoBar.background,
      color: theme.palette.getContrastText(theme.custom.infoBar.background),
      borderBottom: 'solid 1px ' + theme.palette.grey.A200,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    mainIconWrapper: {
      paddingTop: 13,
      paddingLeft: 20,
      paddingRight: 20
    },
    mainTitle: {
      paddingTop: 10
    },
    mainTitleWrapper: {
      flexGrow: 1
    },
    listContentWrapper: {
      padding: "0 ".concat(theme.spacing(3), "px"),
      display: 'flex'
    },
    iconDefault: {
      color: theme.palette.getContrastText(theme.custom.infoBar.background)
    },
    iconSelected: {
      color: theme.custom.infoBar.listGridSelectedColor
    },
    content: {
      flexGrow: 1,
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      paddingBottom: theme.spacing(3)
    },
    contentWithTags: {
      marginLeft: theme.custom.tagCloud.leftMenu.width
    },
    contentWithoutTags: {
      marginLeft: -4
    },
    contentWithTagsHidden: {
      marginLeft: theme.custom.tagCloud.leftMenu.sliderWidth
    },
    LeftMenu: {
      backgroundColor: theme.custom.tagCloud.leftMenu.background,
      color: theme.custom.tagCloud.leftMenu.color,
      textAlign: 'left',
      fontFamily: theme.typography.fontFamily,
      position: 'absolute',
      bottom: 0,
      paddingLeft: 0,
      width: theme.custom.tagCloud.leftMenu.width,
      top: 0,
      left: 0,
      overflowY: 'auto'
    },
    LeftMenuForSlider: {
      backgroundColor: theme.custom.tagCloud.leftMenu.background,
      color: theme.custom.tagCloud.leftMenu.color,
      textAlign: 'left',
      fontFamily: theme.typography.fontFamily,
      position: 'absolute',
      bottom: 0,
      paddingLeft: 0,
      width: theme.custom.tagCloud.leftMenu.sliderWidth,
      top: 0,
      left: 0,
      overflowY: 'auto',
      display: 'flex'
    },
    sliderButton: {
      fontWeight: 200,
      background: theme.custom.tagCloud.leftMenu.sliderBackground,
      color: theme.palette.getContrastText(theme.custom.tagCloud.leftMenu.sliderBackground),
      height: theme.custom.infoBar.height,
      alignItems: 'center',
      display: 'flex',
      position: 'absolute',
      right: 0,
      cursor: 'pointer'
    },
    rotatedText: {
      transform: 'rotate(270deg)',
      transformOrigin: 'left bottom 0',
      position: 'absolute',
      whiteSpace: 'nowrap',
      top: theme.custom.infoBar.height * 2,
      marginLeft: 23,
      cursor: 'pointer'
    },
    recommendationsBar: {
      height: 60,
      background: theme.custom.infoBar.background,
      color: theme.palette.getContrastText(theme.custom.infoBar.background),
      borderBottom: 'solid 1px ' + theme.palette.grey.A200,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  };
};
/**
 * Shared listing page
 *
 * @class CommonListing
 * @extends {Component}
 */


var CommonListing = /*#__PURE__*/function (_React$Component) {
  _inherits(CommonListing, _React$Component);

  var _super = _createSuper(CommonListing);

  /**
   * Constructor
   *
   * @param {*} props Properties
   */
  function CommonListing(props) {
    var _this;

    _classCallCheck(this, CommonListing);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "setListType", function (value) {
      _this.setState({
        listType: value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggleLeftMenu", function () {
      _this.setState(function (prevState) {
        return {
          showLeftMenu: !prevState.showLeftMenu
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "isMonetizationEnabled", function () {
      var settingsContext = _this.context;
      var enabled = settingsContext.settings.monetizationEnabled;

      _this.setState({
        isMonetizationEnabled: enabled
      });
    });

    _defineProperty(_assertThisInitialized(_this), "isRecommendationEnabled", function () {
      var settingsContext = _this.context;
      var enabled = settingsContext.settings.recommendationEnabled;

      _this.setState({
        isRecommendationEnabled: enabled
      });
    });

    _this.state = {
      listType: props.theme.custom.defaultApiView,
      allTags: null,
      showLeftMenu: false,
      isMonetizationEnabled: false,
      isRecommendationEnabled: false
    };
    return _this;
  }
  /**
   *
   * Switch the view between grid and list view
   * @param {String} value view type
   * @memberof CommonListing
   */


  _createClass(CommonListing, [{
    key: "componentDidMount",

    /**
     *
     * Get all tags
     * @memberof CommonListing
     */
    value: function componentDidMount() {
      var _this2 = this;

      var restApiClient = new _api["default"]();
      var promisedTags = restApiClient.getAllTags();
      promisedTags.then(function (response) {
        _this2.setState({
          allTags: response.body.list
        });
      })["catch"](function (error) {
        console.log(error);
      });
      var promisedCategories = restApiClient.apiCategories();
      promisedCategories.then(function (response) {
        _this2.setState({
          allCategories: response.body.list
        });
      })["catch"](function (error) {
        console.log(error);
      });
      this.isMonetizationEnabled();
      this.isRecommendationEnabled();
    }
  }, {
    key: "render",

    /**
     *
     * @inheritdoctheme
     * @returns {React.Component} @inheritdoc
     * @memberof CommonListing
     */
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          theme = _this$props.theme,
          classes = _this$props.classes,
          search = _this$props.location.search;

      var user = _AuthManager["default"].getUser();

      var _theme$custom = theme.custom,
          _theme$custom$tagWise = _theme$custom.tagWise,
          key = _theme$custom$tagWise.key,
          active = _theme$custom$tagWise.active,
          style = _theme$custom$tagWise.style,
          tagCloudActive = _theme$custom.tagCloud.active;
      var _this$state = this.state,
          listType = _this$state.listType,
          allTags = _this$state.allTags,
          showLeftMenu = _this$state.showLeftMenu,
          isMonetizationEnabled = _this$state.isMonetizationEnabled,
          allCategories = _this$state.allCategories,
          isRecommendationEnabled = _this$state.isRecommendationEnabled;
      var strokeColorMain = theme.palette.getContrastText(theme.custom.infoBar.background);
      var searchParam = new URLSearchParams(search);
      var searchQuery = searchParam.get('query');
      var selectedTag = null;

      if (search && searchQuery !== null) {
        // For the tagWise search
        if (active && key) {
          var splits = searchQuery.split(':');

          if (splits.length > 1 && splits[1].search(key) != -1) {
            var splitTagArray = splits[1].split(key);

            if (splitTagArray.length > 0) {
              selectedTag = splitTagArray[0];
            }
          } else if (splits.length > 1 && splits[0] === 'tag') {
            selectedTag = splits[1];
          }
        }
      }

      var tagPaneVisible = allTags && allTags.length > 0 && (tagCloudActive || active);
      var categoryPaneVisible = allCategories && allCategories.length > 0;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, (categoryPaneVisible || tagPaneVisible) && showLeftMenu && /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.LeftMenu
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.sliderButton,
        onClick: this.toggleLeftMenu
      }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], null, "keyboard_arrow_left")), categoryPaneVisible && /*#__PURE__*/_react["default"].createElement(_CategoryListingCategories["default"], {
        allCategories: allCategories
      }), tagPaneVisible && active && /*#__PURE__*/_react["default"].createElement(_TagCloudListingTags["default"], {
        allTags: allTags
      }), tagPaneVisible && tagCloudActive && /*#__PURE__*/_react["default"].createElement(_ApiTagCloud["default"], {
        allTags: allTags
      })), (categoryPaneVisible || tagPaneVisible) && !showLeftMenu && /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.LeftMenuForSlider
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.sliderButton,
        onClick: this.toggleLeftMenu
      }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], null, "keyboard_arrow_right")), /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.rotatedText,
        onClick: this.toggleLeftMenu
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        defaultMessage: "Tag Cloud",
        id: "Apis.Listing.Listing.ApiTagCloud.title"
      }))), /*#__PURE__*/_react["default"].createElement("main", {
        className: (0, _classnames["default"])(classes.content, _defineProperty({}, classes.contentWithoutTags, !(tagPaneVisible || categoryPaneVisible) || !showLeftMenu), _defineProperty({}, classes.contentWithTagsHidden, (tagPaneVisible || categoryPaneVisible) && !showLeftMenu), _defineProperty({}, classes.contentWithTags, (tagPaneVisible || categoryPaneVisible) && showLeftMenu)),
        id: "commonListing"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.appBar,
        id: "commonListingAppBar"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.mainIconWrapper
      }, /*#__PURE__*/_react["default"].createElement(_CustomIcon["default"], {
        strokeColor: strokeColorMain,
        width: 42,
        height: 42,
        icon: "api"
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.mainTitleWrapper,
        id: "mainTitleWrapper"
      }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "h4",
        className: classes.mainTitle
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        defaultMessage: "APIs",
        id: "Apis.Listing.Listing.apis.main"
      }))), /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.buttonRight,
        id: "listGridWrapper"
      }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
        className: classes.button,
        onClick: function onClick() {
          return _this3.setListType('list');
        }
      }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        className: (0, _classnames["default"])(_defineProperty({}, classes.iconSelected, listType === 'list'), _defineProperty({}, classes.iconDefault, listType === 'grid'))
      }, "list")), /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
        className: classes.button,
        onClick: function onClick() {
          return _this3.setListType('grid');
        }
      }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        className: (0, _classnames["default"])(_defineProperty({}, classes.iconSelected, listType === 'grid'), _defineProperty({}, classes.iconDefault, listType === 'list'))
      }, "grid_on")))), active && allTags && allTags.length > 0 && /*#__PURE__*/_react["default"].createElement(_ApiBreadcrumbs["default"], {
        selectedTag: selectedTag
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.listContentWrapper
      }, listType === 'grid' && /*#__PURE__*/_react["default"].createElement(_ApiContext.ApiContext.Provider, {
        value: {
          isMonetizationEnabled: isMonetizationEnabled
        }
      }, /*#__PURE__*/_react["default"].createElement(_ApiTableView["default"], {
        gridView: true,
        query: search
      })), listType === 'list' && /*#__PURE__*/_react["default"].createElement(_ApiContext.ApiContext.Provider, {
        value: {
          isMonetizationEnabled: isMonetizationEnabled
        }
      }, /*#__PURE__*/_react["default"].createElement(_ApiTableView["default"], {
        gridView: false,
        query: search
      }))), isRecommendationEnabled && user && /*#__PURE__*/_react["default"].createElement("div", null, active && allTags && allTags.length > 0 && /*#__PURE__*/_react["default"].createElement(_ApiBreadcrumbs["default"], {
        selectedTag: selectedTag
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.listContentWrapper
      }, listType === 'grid' && /*#__PURE__*/_react["default"].createElement(_ApiContext.ApiContext.Provider, {
        value: {
          isRecommendationEnabled: isRecommendationEnabled
        }
      }, /*#__PURE__*/_react["default"].createElement(_Recommendations["default"], {
        gridView: true,
        query: search
      })), listType === 'list' && /*#__PURE__*/_react["default"].createElement(_ApiContext.ApiContext.Provider, {
        value: {
          isRecommendationEnabled: isRecommendationEnabled
        }
      }, /*#__PURE__*/_react["default"].createElement(_Recommendations["default"], {
        gridView: true,
        query: search
      }))))));
    }
  }]);

  return CommonListing;
}(_react["default"].Component);

_defineProperty(CommonListing, "contextType", _SettingsContext["default"]);

CommonListing.propTypes = {
  classes: _propTypes["default"].shape({}).isRequired,
  theme: _propTypes["default"].shape({}).isRequired,
  location: _propTypes["default"].shape({
    search: _propTypes["default"].string
  })
};
CommonListing.defaultProps = {
  location: _propTypes["default"].shape({
    search: ''
  })
};

var _default = (0, _styles.withStyles)(styles, {
  withTheme: true
})(CommonListing);

exports["default"] = _default;