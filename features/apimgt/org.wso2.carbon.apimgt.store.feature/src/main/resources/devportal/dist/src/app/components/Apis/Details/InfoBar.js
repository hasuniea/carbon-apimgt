"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _reactRouterDom = require("react-router-dom");

var _Collapse = _interopRequireDefault(require("@material-ui/core/Collapse"));

var _Table = _interopRequireDefault(require("@material-ui/core/Table"));

var _TableBody = _interopRequireDefault(require("@material-ui/core/TableBody"));

var _TableCell = _interopRequireDefault(require("@material-ui/core/TableCell"));

var _TableRow = _interopRequireDefault(require("@material-ui/core/TableRow"));

var _Grade = _interopRequireDefault(require("@material-ui/icons/Grade"));

var _Chip = _interopRequireDefault(require("@material-ui/core/Chip"));

var _Launch = _interopRequireDefault(require("@material-ui/icons/Launch"));

var _reactIntl = require("react-intl");

var _api = _interopRequireDefault(require("AppData/api"));

var _StarRatingBar = _interopRequireDefault(require("AppComponents/Apis/Listing/StarRatingBar"));

var _StarRatingSummary = _interopRequireDefault(require("AppComponents/Apis/Details/StarRatingSummary"));

var _ApiContext = require("AppComponents/Apis/Details/ApiContext");

var _Social = _interopRequireDefault(require("AppComponents/Apis/Details/Social/Social"));

var _VerticalDivider = _interopRequireDefault(require("../../Shared/VerticalDivider"));

var _ApiThumb = _interopRequireDefault(require("../Listing/ApiThumb"));

var _ResourceNotFound = _interopRequireDefault(require("../../Base/Errors/ResourceNotFound"));

var _AuthManager = _interopRequireDefault(require("../../../data/AuthManager"));

var _Environments = _interopRequireDefault(require("./Environments"));

var _Labels = _interopRequireDefault(require("./Labels"));

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
  var mainBack = theme.custom.infoBar.background || '#ffffff';
  var infoBarHeight = theme.custom.infoBar.height || 70;
  var starColor = theme.custom.infoBar.starColor || theme.palette.getContrastText(mainBack);
  return {
    table: {
      minWidth: '100%'
    },
    root: {
      height: infoBarHeight,
      background: mainBack,
      color: theme.palette.getContrastText(mainBack),
      borderBottom: 'solid 1px ' + theme.palette.grey.A200,
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(2)
    },
    backIcon: {
      color: theme.palette.primary.main,
      fontSize: 56,
      cursor: 'pointer'
    },
    backText: {
      color: theme.palette.primary.main,
      cursor: 'pointer',
      fontFamily: theme.typography.fontFamily
    },
    starRate: {
      fontSize: 40,
      color: starColor
    },
    infoContent: {
      color: theme.palette.getContrastText(mainBack),
      background: mainBack,
      padding: theme.spacing(3),
      '& td, & th': {
        color: theme.palette.getContrastText(mainBack)
      }
    },
    infoContentBottom: {
      background: theme.custom.infoBar.sliderBackground,
      color: theme.palette.getContrastText(theme.custom.infoBar.sliderBackground),
      borderBottom: 'solid 1px ' + theme.palette.grey.A200
    },
    contentWrapper: {
      maxWidth: theme.custom.contentAreaWidth - theme.custom.leftMenu.width,
      alignItems: 'center'
    },
    infoBarMain: {
      width: '100%',
      zIndex: 100
    },
    buttonView: {
      textAlign: 'left',
      justifyContent: 'left',
      display: 'flex',
      paddingLeft: theme.spacing(3),
      cursor: 'pointer'
    },
    buttonOverviewText: {
      display: 'inline-block',
      paddingTop: 3
    },
    paper: {
      margin: theme.spacing(1)
    },
    leftCol: {
      width: 200
    },
    iconAligner: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    iconTextWrapper: {
      display: 'inline-block',
      paddingLeft: 20
    },
    iconEven: {
      color: theme.custom.infoBar.iconEvenColor,
      width: theme.spacing(3)
    },
    iconOdd: {
      color: theme.custom.infoBar.iconOddColor,
      width: theme.spacing(3)
    },
    margin: {
      marginLeft: 30
    },
    contentToTop: {
      verticlaAlign: 'top'
    },
    viewInPubStoreLauncher: {
      display: 'flex',
      flexDirection: 'column',
      color: theme.palette.getContrastText(mainBack),
      textAlign: 'center',
      textDecoration: 'none'
    },
    linkText: {
      fontSize: theme.typography.fontSize
    },
    chip: {
      background: theme.custom.infoBar.tagChipBackground,
      color: theme.palette.getContrastText(theme.custom.infoBar.tagChipBackground),
      marginRight: theme.spacing(1)
    },
    expandWrapper: {
      cursor: 'pointer',
      display: 'block'
    },
    linkTitle: {
      color: theme.palette.getContrastText(theme.custom.infoBar.background)
    },
    leftMenu: {},
    leftMenuHorizontal: {},
    leftMenuVerticalLeft: {},
    leftMenuVerticalRight: {},
    leftLInkMain: {},
    leftLInkMainText: {},
    detailsContent: {},
    content: {},
    contentLoader: {},
    contentLoaderRightMenu: {}
  };
};
/**
 *
 *
 * @class InfoBar
 * @extends {React.Component}
 */


var InfoBar = /*#__PURE__*/function (_React$Component) {
  _inherits(InfoBar, _React$Component);

  var _super = _createSuper(InfoBar);

  function InfoBar(props) {
    var _this;

    _classCallCheck(this, InfoBar);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "ditectCurrentMenu", function (location) {
      var routeToCheck = 'overview';
      var pathname = location.pathname;
      var test1 = new RegExp('/' + routeToCheck + '$', 'g');
      var test2 = new RegExp('/' + routeToCheck + '/', 'g');

      if (pathname.match(test1) || pathname.match(test2)) {
        _this.setState({
          showOverview: true
        });
      } else {
        _this.setState({
          showOverview: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "toggleOverview", function (todo) {
      if (typeof todo === 'boolean') {
        _this.setState({
          showOverview: todo
        });
      } else {
        _this.setState(function (state) {
          return {
            showOverview: !state.showOverview
          };
        });
      }
    });

    _this.state = {
      api: null,
      applications: null,
      policies: null,
      dropDownApplications: null,
      dropDownPolicies: null,
      notFound: false,
      tabValue: 'Social Sites',
      comment: '',
      commentList: null,
      showOverview: true,
      checked: false,
      avgRating: 0,
      total: 0,
      count: 0
    };
    _this.getSchema = _this.getSchema.bind(_assertThisInitialized(_this));
    _this.getProvider = _this.getProvider.bind(_assertThisInitialized(_this));
    _this.setRatingUpdate = _this.setRatingUpdate.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(InfoBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var history = this.props.history;
      this.ditectCurrentMenu(history.location);
      history.listen(function (location) {
        _this2.ditectCurrentMenu(location);
      });
    }
    /**
     *
     *
     * @memberof InfoBar
     */

  }, {
    key: "getProvider",
    value: function getProvider(api) {
      var provider = api.provider;

      if (api.businessInformation && api.businessInformation.businessOwner && api.businessInformation.businessOwner.trim() !== '') {
        provider = api.businessInformation.businessOwner;
      }

      return provider;
    }
  }, {
    key: "getProviderMail",
    value: function getProviderMail(api) {
      var mail;

      if (api.businessInformation && api.businessInformation.businessOwnerEmail && api.businessInformation.businessOwnerEmail.trim() !== '') {
        mail = '(' + api.businessInformation.businessOwnerEmail + ')';
      }

      return mail;
    }
  }, {
    key: "getTechnical",
    value: function getTechnical(api) {
      var owner;

      if (api.businessInformation && api.businessInformation.technicalOwner && api.businessInformation.technicalOwner.trim() !== '') {
        owner = api.businessInformation.technicalOwner;
      }

      return owner;
    }
  }, {
    key: "getTechnicalMail",
    value: function getTechnicalMail(api) {
      var mail;

      if (api.businessInformation && api.businessInformation.technicalOwnerEmail && api.businessInformation.technicalOwnerEmail.trim() !== '') {
        mail = '(' + api.businessInformation.technicalOwnerEmail + ')';
      }

      return mail;
    }
  }, {
    key: "getSchema",
    value: function getSchema() {
      var _this3 = this;

      var newAPI = new _api["default"]();
      var api = this.context.api;
      var promisedGraphQL = newAPI.getGraphQLSchemaByAPIId(api.id);
      promisedGraphQL.then(function (response) {
        var windowUrl = window.URL || window.webkitURL;
        var binary = new Blob([response.data]);
        var url = windowUrl.createObjectURL(binary);
        var anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = _this3.getProvider(api) + '-' + api.name + '-' + api.version + '.graphql';
        anchor.click();
        windowUrl.revokeObjectURL(url);
      });
    }
  }, {
    key: "setRatingUpdate",
    value: function setRatingUpdate(ratings) {
      if (ratings) {
        var avgRating = ratings.avgRating,
            total = ratings.total,
            count = ratings.count;
        this.setState({
          avgRating: avgRating,
          total: total,
          count: count
        });
      }
    }
    /**
     *
     *
     * @returns
     * @memberof InfoBar
     */

  }, {
    key: "render",
    value: function render() {
      var api = this.context.api;
      var _this$props = this.props,
          classes = _this$props.classes,
          theme = _this$props.theme,
          intl = _this$props.intl;
      var _this$state = this.state,
          notFound = _this$state.notFound,
          showOverview = _this$state.showOverview,
          prodUrlCopied = _this$state.prodUrlCopied,
          sandboxUrlCopied = _this$state.sandboxUrlCopied,
          epUrl = _this$state.epUrl,
          avgRating = _this$state.avgRating,
          total = _this$state.total,
          count = _this$state.count;
      var _theme$custom = theme.custom,
          position = _theme$custom.leftMenu.position,
          _theme$custom$infoBar = _theme$custom.infoBar,
          showThumbnail = _theme$custom$infoBar.showThumbnail,
          height = _theme$custom$infoBar.height,
          _theme$custom$tagWise = _theme$custom.tagWise,
          key = _theme$custom$tagWise.key,
          active = _theme$custom$tagWise.active,
          showRating = _theme$custom.social.showRating; // Remve the tags with a sufix '-group' from tags

      var apisTagsWithoutGroups = [];

      if (!active) {
        apisTagsWithoutGroups = api.tags;
      }

      if (active && api.tags && api.tags.length > 0) {
        for (var i = 0; i < api.tags.length; i++) {
          if (api.tags[i].search(key) != -1 && api.tags[i].split(key).length > 0) {
            apisTagsWithoutGroups.push(api.tags[i].split(key)[0]);
          } else {
            apisTagsWithoutGroups.push(api.tags[i]);
          }
        }
      }

      var resourceNotFountMessage = this.props.resourceNotFountMessage;

      var user = _AuthManager["default"].getUser();

      if (notFound) {
        return /*#__PURE__*/_react["default"].createElement(_ResourceNotFound["default"], {
          message: resourceNotFountMessage
        });
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.infoBarMain,
        id: "infoBar"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.root
      }, showThumbnail && /*#__PURE__*/_react["default"].createElement(_ApiThumb["default"], {
        api: api,
        customWidth: 70,
        customHeight: 50,
        showInfo: false
      }), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          marginLeft: theme.spacing(1)
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
        to: '/apis/' + api.id + '/overview',
        className: classes.linkTitle
      }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "h4"
      }, api.name)), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        variant: "caption",
        gutterBottom: true,
        align: "left"
      }, this.getProvider(api))), /*#__PURE__*/_react["default"].createElement(_VerticalDivider["default"], {
        height: 70
      }), !api.advertiseInfo.advertised && user && showRating && /*#__PURE__*/_react["default"].createElement(_StarRatingSummary["default"], {
        avgRating: avgRating,
        reviewCount: total,
        returnCount: count
      }), api.advertiseInfo.advertised && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: api.advertiseInfo.originalStoreUrl,
        className: classes.viewInPubStoreLauncher
      }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Launch["default"], null)), /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.linkText
      }, "Visit Publisher Dev Portal")), /*#__PURE__*/_react["default"].createElement(_VerticalDivider["default"], {
        height: 70
      })), /*#__PURE__*/_react["default"].createElement(_Social["default"], null)), position === 'horizontal' && /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          height: 60
        }
      }), showOverview && /*#__PURE__*/_react["default"].createElement(_Collapse["default"], {
        "in": showOverview
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.infoContent
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.contentWrapper
      }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], null, api.description), /*#__PURE__*/_react["default"].createElement(_Table["default"], {
        className: classes.table
      }, /*#__PURE__*/_react["default"].createElement(_TableBody["default"], null, /*#__PURE__*/_react["default"].createElement(_TableRow["default"], null, /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
        component: "th",
        scope: "row",
        className: classes.leftCol
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.iconAligner
      }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        className: classes.iconOdd
      }, "settings_input_component"), /*#__PURE__*/_react["default"].createElement("span", {
        className: classes.iconTextWrapper
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Apis.Details.InfoBar.list.version",
        defaultMessage: "Version"
      })))), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, api.version)), /*#__PURE__*/_react["default"].createElement(_TableRow["default"], null, /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
        component: "th",
        scope: "row"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.iconAligner
      }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        className: classes.iconOdd
      }, "account_balance_wallet"), /*#__PURE__*/_react["default"].createElement("span", {
        className: classes.iconTextWrapper
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Apis.Details.InfoBar.list.context",
        defaultMessage: "Context"
      })))), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, api.context)), /*#__PURE__*/_react["default"].createElement(_TableRow["default"], null, /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
        component: "th",
        scope: "row"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.iconAligner
      }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        className: classes.iconOdd
      }, "account_circle"), /*#__PURE__*/_react["default"].createElement("span", {
        className: classes.iconTextWrapper
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Apis.Details.InfoBar.provider",
        defaultMessage: "Provider"
      })))), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, this.getProvider(api), " ", this.getProviderMail(api))), /*#__PURE__*/_react["default"].createElement(_TableRow["default"], null, /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
        component: "th",
        scope: "row"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.iconAligner
      }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        className: classes.iconOdd
      }, "account_box"), /*#__PURE__*/_react["default"].createElement("span", {
        className: classes.iconTextWrapper
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Apis.Details.InfoBar.technical",
        defaultMessage: "Technical Owner"
      })))), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, this.getTechnical(api), " ", this.getTechnicalMail(api))), user && !api.advertiseInfo.advertised && showRating && /*#__PURE__*/_react["default"].createElement(_TableRow["default"], null, /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
        component: "th",
        scope: "row"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.iconAligner
      }, /*#__PURE__*/_react["default"].createElement(_Grade["default"], {
        className: classes.iconOdd
      }), /*#__PURE__*/_react["default"].createElement("span", {
        className: classes.iconTextWrapper
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Apis.Details.InfoBar.list.context.rating",
        defaultMessage: "Rating"
      })))), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, /*#__PURE__*/_react["default"].createElement(_StarRatingBar["default"], {
        apiId: api.id,
        isEditable: true,
        showSummary: false,
        setRatingUpdate: this.setRatingUpdate
      }))), api.type === 'GRAPHQL' && /*#__PURE__*/_react["default"].createElement(_TableRow["default"], null, /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
        component: "th",
        scope: "row"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.iconAligner
      }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        className: classes.iconOdd
      }, "cloud_download"), /*#__PURE__*/_react["default"].createElement("span", {
        className: classes.iconTextWrapper
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Apis.Details.InfoBar.download.Schema",
        defaultMessage: "Download Schema"
      })))), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        onClick: this.getSchema,
        size: "small",
        fontSize: "small",
        variant: "outlined"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Apis.Details.InfoBar.graphQL.schema",
        defaultMessage: "GraphQL Schema"
      })))), !api.advertiseInfo.advertised ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_TableRow["default"], null, /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
        component: "th",
        scope: "row",
        className: classes.contentToTop
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.iconAligner
      }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        className: classes.iconOdd
      }, "desktop_windows"), /*#__PURE__*/_react["default"].createElement("span", {
        className: classes.iconTextWrapper
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Apis.Details.InfoBar.gateway.environments",
        defaultMessage: "Gateway Environments"
      })))), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, /*#__PURE__*/_react["default"].createElement(_Environments["default"], null))), api.labels.length !== 0 && /*#__PURE__*/_react["default"].createElement(_TableRow["default"], null, /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
        component: "th",
        scope: "row",
        className: classes.contentToTop
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.iconAligner
      }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        className: classes.iconOdd
      }, "games"), /*#__PURE__*/_react["default"].createElement("span", {
        className: classes.iconTextWrapper
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Apis.Details.InfoBar.available.mgLabels",
        defaultMessage: "Available Microgateways"
      })))), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, /*#__PURE__*/_react["default"].createElement(_Labels["default"], null)))) : /*#__PURE__*/_react["default"].createElement(_TableRow["default"], null, /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
        component: "th",
        scope: "row"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.iconAligner
      }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        className: classes.iconOdd
      }, "account_circle"), /*#__PURE__*/_react["default"].createElement("span", {
        className: classes.iconTextWrapper
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Apis.Details.InfoBar.owner",
        defaultMessage: "Owner"
      })))), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, api.advertiseInfo.apiOwner)), apisTagsWithoutGroups && apisTagsWithoutGroups.length > 0 && /*#__PURE__*/_react["default"].createElement(_TableRow["default"], null, /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
        component: "th",
        scope: "row"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.iconAligner
      }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        className: classes.iconOdd
      }, "bookmark"), /*#__PURE__*/_react["default"].createElement("span", {
        className: classes.iconTextWrapper
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Apis.Details.InfoBar.list.tags",
        defaultMessage: "Tags"
      })))), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, apisTagsWithoutGroups.map(function (tag) {
        return /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
          label: tag,
          className: classes.chip,
          key: tag
        });
      })))))))), /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.infoContentBottom
      }, /*#__PURE__*/_react["default"].createElement("a", {
        className: classes.expandWrapper,
        onClick: this.toggleOverview
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.buttonView
      }, showOverview ? /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        className: classes.buttonOverviewText
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Apis.Details.InfoBar.less",
        defaultMessage: "LESS"
      })) : /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        className: classes.buttonOverviewText
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Apis.Details.InfoBar.more",
        defaultMessage: "MORE"
      })), showOverview ? /*#__PURE__*/_react["default"].createElement(_Icon["default"], null, "arrow_drop_up") : /*#__PURE__*/_react["default"].createElement(_Icon["default"], null, "arrow_drop_down")))));
    }
  }]);

  return InfoBar;
}(_react["default"].Component);

InfoBar.defaultProps = {
  classes: {
    leftMenu: {},
    leftMenuHorizontal: {},
    leftMenuVerticalLeft: {},
    leftMenuVerticalRight: {},
    leftLInkMain: {},
    leftLInkMainText: {},
    detailsContent: {},
    content: {},
    contentLoader: {},
    contentLoaderRightMenu: {}
  }
};
InfoBar.propTypes = {
  classes: _propTypes["default"].shape({}),
  theme: _propTypes["default"].object.isRequired,
  intl: _propTypes["default"].shape({
    formatMessage: _propTypes["default"].func
  }).isRequired
};
InfoBar.contextType = _ApiContext.ApiContext;

var _default = (0, _reactIntl.injectIntl)((0, _reactRouterDom.withRouter)((0, _styles.withStyles)(styles, {
  withTheme: true
})(InfoBar)));

exports["default"] = _default;