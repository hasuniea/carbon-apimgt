"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactIntl = require("react-intl");

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Hidden = _interopRequireDefault(require("@material-ui/core/Hidden"));

var _core = require("@material-ui/core");

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _reactDom = require("react-dom");

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Popper = _interopRequireDefault(require("@material-ui/core/Popper"));

var _Grow = _interopRequireDefault(require("@material-ui/core/Grow"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _ClickAwayListener = _interopRequireDefault(require("@material-ui/core/ClickAwayListener"));

var _Drawer = _interopRequireDefault(require("@material-ui/core/Drawer"));

var _classnames = _interopRequireDefault(require("classnames"));

var _HeaderSearch = _interopRequireDefault(require("AppComponents/Base/Header/Search/HeaderSearch"));

var _SettingsContext = _interopRequireDefault(require("AppComponents/Shared/SettingsContext"));

var _Settings = require("Settings");

var _reactSafeHtml = _interopRequireDefault(require("react-safe-html"));

var _AuthManager = _interopRequireDefault(require("../../data/AuthManager"));

var _LanuageSelector = _interopRequireDefault(require("./Header/LanuageSelector"));

var _GlobalNavbar = _interopRequireDefault(require("./Header/GlobalNavbar"));

var _VerticalDivider = _interopRequireDefault(require("../Shared/VerticalDivider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
  var _toolbar;

  var pageMaxWidth = theme.custom.page.style === 'fluid' ? 'none' : theme.custom.page.width;
  return {
    appBar: {
      position: 'relative',
      backgroundColor: theme.custom.appBar.background,
      backgroundImage: "url(".concat(_Settings.app.context).concat(theme.custom.appBar.backgroundImage, ")"),
      backgroundRepeat: 'no-repeat'
    },
    icon: {
      marginRight: theme.spacing(2)
    },
    menuIcon: {
      color: theme.palette.getContrastText(theme.custom.appBar.background),
      fontSize: 35
    },
    userLink: {
      color: theme.palette.getContrastText(theme.custom.appBar.background)
    },
    publicStore: {
      color: theme.palette.getContrastText(theme.custom.appBar.background),
      minWidth: 'auto'
    },
    linkWrapper: {
      display: 'flex',
      marginLeft: 'auto'
    },
    // Page layout styles
    drawer: {
      top: 64
    },
    wrapper: {
      minHeight: '100%',
      marginBottom: -50,
      background: theme.palette.background["default"] + ' url(' + _Settings.app.context + theme.custom.backgroundImage + ') repeat left top'
    },
    contentWrapper: {
      display: 'flex',
      flexDirection: 'row',
      overflowY: 'hidden',
      position: 'relative',
      minHeight: 'calc(100vh - 114px)',
      marginLeft: -4
    },
    push: {
      height: 50
    },
    footer: {
      background: theme.custom.footer.background,
      color: theme.custom.footer.color,
      paddingLeft: theme.spacing(3),
      height: theme.custom.footer.height || 50,
      alignItems: 'center',
      display: 'flex'
    },
    toolbar: (_toolbar = {
      minHeight: 56
    }, _defineProperty(_toolbar, "".concat(theme.breakpoints.up('xs'), " and (orientation: landscape)"), {
      minHeight: 48
    }), _defineProperty(_toolbar, theme.breakpoints.up('sm'), {
      minHeight: 64
    }), _toolbar),
    list: {
      width: theme.custom.appBar.drawerWidth
    },
    drawerStyles: {
      top: theme.mixins.toolbar['@media (min-width:600px)'].minHeight
    },
    listInline: {
      '& ul': {
        display: 'flex',
        flexDirection: 'row'
      }
    },
    reactRoot: {
      maxWidth: pageMaxWidth,
      margin: 'auto',
      borderLeft: theme.custom.page.border,
      borderRight: theme.custom.page.border
    },
    icons: {
      marginRight: theme.spacing(),
      '&.material-icons': {
        fontSize: theme.spacing(2)
      }
    },
    banner: {
      color: theme.custom.banner.color,
      background: theme.custom.banner.background,
      padding: theme.custom.banner.padding,
      margin: theme.custom.banner.margin,
      fontSize: theme.custom.banner.fontSize,
      display: 'flex',
      distributeContent: theme.custom.banner.textAlign,
      justifyContent: theme.custom.banner.textAlign
    },
    listRoot: {
      padding: 0
    },
    listItemTextRoot: {
      padding: 0
    },
    listText: {
      color: theme.palette.getContrastText(theme.custom.appBar.background)
    },
    listTextSmall: {
      color: theme.palette.getContrastText(theme.custom.appBar.background)
    },
    smallIcon: {
      marginRight: 5,
      minWidth: 'auto'
    },
    links: {
      display: 'flex',
      justifyContent: 'center'
    },
    selected: {
      background: theme.custom.appBar.activeBackground,
      alignItems: 'center',
      textDecoration: 'none',
      color: theme.palette.getContrastText(theme.custom.appBar.activeBackground)
    },
    selectedText: {
      color: theme.palette.getContrastText(theme.custom.appBar.activeBackground)
    },
    triangleDown: {
      width: 0,
      height: 0,
      borderLeft: '6px solid transparent',
      borderRight: '6px solid transparent',
      borderTop: "6px solid ".concat(theme.custom.appBar.activeBackground),
      fontSize: 0,
      lineHeight: 0,
      position: 'absolute',
      bottom: -5
    },
    listIconRoot: {
      minWidth: 'auto'
    },
    listItemRoot: {
      padding: "0 ".concat(theme.spacing(1), "px 0 ").concat(theme.spacing(1), "px "),
      height: 30
    },
    logoutLink: {
      color: theme.palette.getContrastText(theme.palette.background.paper)
    }
  };
};
/**
 *
 * @class Layout
 * @extends {React.Component}
 */


var Layout = /*#__PURE__*/function (_React$Component) {
  _inherits(Layout, _React$Component);

  var _super = _createSuper(Layout);

  /**
   * @inheritdoc
   * @param {*} props
   * @memberof Layout
   */
  function Layout(props) {
    var _this;

    _classCallCheck(this, Layout);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "state", {
      nightMode: false,
      themeIndex: 0,
      left: false,
      openNavBar: false,
      openUserMenu: false,
      selected: 'home'
    });

    _defineProperty(_assertThisInitialized(_this), "ditectCurrentMenu", function (location) {
      var pathname = location.pathname;

      if (/\/apis$/g.test(pathname) || /\/apis\//g.test(pathname)) {
        _this.setState({
          selected: 'apis'
        });
      } else if (/\/home$/g.test(pathname) || /\/home\//g.test(pathname)) {
        _this.setState({
          selected: 'home'
        });
      } else if (/\/applications$/g.test(pathname) || /\/applications\//g.test(pathname)) {
        _this.setState({
          selected: 'applications'
        });
      } else if (/\/settings$/g.test(pathname) || /\/settings\//g.test(pathname)) {
        _this.setState({
          selected: 'settings'
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleRequestCloseUserMenu", function () {
      _this.setState({
        openUserMenu: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "doOIDCLogout", function (e) {
      e.preventDefault();
      window.location = _Settings.app.context + '/services/logout';
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickButton", function (key) {
      var _this$setState;

      _this.setState((_this$setState = {}, _defineProperty(_this$setState, key, true), _defineProperty(_this$setState, "anchorEl", (0, _reactDom.findDOMNode)(_this.button)), _this$setState));
    });

    _defineProperty(_assertThisInitialized(_this), "handleRequestClose", function (key) {
      _this.setState(_defineProperty({}, key, false));
    });

    _defineProperty(_assertThisInitialized(_this), "handleToggleUserMenu", function () {
      _this.setState(function (state) {
        return {
          openUserMenu: !state.openUserMenu
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleCloseUserMenu", function (event) {
      if (_this.anchorEl.contains(event.target)) {
        return;
      }

      _this.setState({
        openUserMenu: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getLogoPath", function () {
      var settingsContext = _this.context;
      var tenantDomain = settingsContext.tenantDomain;
      var theme = _this.props.theme;
      var logo = theme.custom.appBar.logo;
      var logoWithTenant = logo;

      if (logo && logoWithTenant) {
        logoWithTenant = logo.replace('<tenant-domain>', tenantDomain);
      }

      if (logoWithTenant && /^(ftp|http|https):\/\/[^ "]+$/.test(logoWithTenant)) {
        return logoWithTenant;
      } else {
        return _Settings.app.context + logoWithTenant;
      }
    });

    _this.toggleGlobalNavBar = _this.toggleGlobalNavBar.bind(_assertThisInitialized(_this));
    var history = props.history;
    history.listen(function (location) {
      _this.ditectCurrentMenu(location);
    });
    return _this;
  }

  _createClass(Layout, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var theme = this.props.theme;
      document.body.style.backgroundColor = theme.custom.page.emptyAreadBackground || '#ffffff';
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var location = this.props.history.location;
      this.ditectCurrentMenu(location);
    }
  }, {
    key: "toggleGlobalNavBar",
    value: function toggleGlobalNavBar(event) {
      this.setState({
        openNavBar: !this.state.openNavBar
      });
    }
  }, {
    key: "render",

    /**
     * @inheritdoc
     * @returns {Component}
     * @memberof Layout
     */
    value: function render() {
      var _classNames,
          _classNames2,
          _this2 = this;

      var _this$props = this.props,
          classes = _this$props.classes,
          theme = _this$props.theme,
          children = _this$props.children,
          intl = _this$props.intl;
      var _theme$custom = theme.custom,
          _theme$custom$banner = _theme$custom.banner,
          style = _theme$custom$banner.style,
          text = _theme$custom$banner.text,
          image = _theme$custom$banner.image,
          active = _theme$custom$banner.active,
          showSearch = _theme$custom.appBar.showSearch,
          _theme$custom$footer = _theme$custom.footer,
          footerActive = _theme$custom$footer.active,
          footerText = _theme$custom$footer.text,
          footerHTML = _theme$custom$footer.footerHTML,
          languageSwitchActive = _theme$custom.languageSwitch.active;
      var _this$state = this.state,
          openNavBar = _this$state.openNavBar,
          selected = _this$state.selected;
      var _this$context = this.context,
          tenantDomain = _this$context.tenantDomain,
          setTenantDomain = _this$context.setTenantDomain;
      var _app$customUrl = _Settings.app.customUrl,
          customUrlEnabled = _app$customUrl.enabled,
          customUrlEnabledDomain = _app$customUrl.tenantDomain;

      var user = _AuthManager["default"].getUser(); // TODO: Refer to fix: https://github.com/mui-org/material-ui/issues/10076#issuecomment-361232810 ~tmkb


      var commonStyle = {
        style: {
          top: 64
        }
      };
      var paperStyles = {
        style: {
          top: 64,
          backgroundColor: theme.custom.appBar.background
        }
      };
      var strokeColor = theme.palette.getContrastText(theme.custom.appBar.background);
      var strokeColorSelected = theme.palette.getContrastText(theme.custom.appBar.activeBackground);
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, active && /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.banner
      }, style === 'text' ? text : /*#__PURE__*/_react["default"].createElement("img", {
        alt: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Base.index.banner.alt",
          defaultMessage: "Dev Portal Banner"
        }),
        src: "".concat(_Settings.app.context, "/").concat(image)
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.reactRoot,
        id: "pageRoot"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.wrapper
      }, /*#__PURE__*/_react["default"].createElement(_AppBar["default"], {
        position: "fixed",
        className: classes.appBar,
        id: "appBar"
      }, /*#__PURE__*/_react["default"].createElement(_Toolbar["default"], {
        className: classes.toolbar,
        id: "toolBar"
      }, /*#__PURE__*/_react["default"].createElement(_Hidden["default"], {
        mdUp: true
      }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
        onClick: this.toggleGlobalNavBar,
        color: "inherit"
      }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        className: classes.menuIcon
      }, "menu"))), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
        to: "/",
        id: "logoLink"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        alt: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Base.index.logo.alt",
          defaultMessage: "Dev Portal"
        }),
        src: this.getLogoPath(),
        style: {
          height: theme.custom.appBar.logoHeight,
          width: theme.custom.appBar.logoWidth
        }
      })), /*#__PURE__*/_react["default"].createElement(_Hidden["default"], {
        smDown: true
      }, /*#__PURE__*/_react["default"].createElement(_VerticalDivider["default"], {
        height: 32
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.listInline
      }, /*#__PURE__*/_react["default"].createElement(_GlobalNavbar["default"], {
        selected: selected,
        drawerView: false,
        iconWidth: 16,
        strokeColor: strokeColor,
        strokeColorSelected: strokeColorSelected,
        classes: classes
      }))), /*#__PURE__*/_react["default"].createElement(_Hidden["default"], {
        mdUp: true
      }, /*#__PURE__*/_react["default"].createElement(_Drawer["default"], {
        className: classes.drawerStyles,
        PaperProps: paperStyles,
        SlideProps: commonStyle,
        ModalProps: commonStyle,
        BackdropProps: commonStyle,
        open: openNavBar,
        onClose: this.toggleGlobalNavBar
      }, /*#__PURE__*/_react["default"].createElement("div", {
        tabIndex: 0,
        role: "button",
        onClick: this.toggleGlobalNavBar,
        onKeyDown: this.toggleGlobalNavBar
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.list
      }, /*#__PURE__*/_react["default"].createElement(_GlobalNavbar["default"], {
        selected: selected,
        drawerView: true,
        iconWidth: 24,
        strokeColor: strokeColor,
        strokeColorSelected: strokeColorSelected,
        classes: classes
      }))))), /*#__PURE__*/_react["default"].createElement(_VerticalDivider["default"], {
        height: 32
      }), showSearch && /*#__PURE__*/_react["default"].createElement(_HeaderSearch["default"], {
        id: "headerSearch"
      }), tenantDomain && customUrlEnabledDomain === 'null' && tenantDomain !== 'INVALID' && /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
        style: {
          textDecoration: 'none',
          color: '#ffffff'
        },
        to: "/",
        onClick: function onClick() {
          return setTenantDomain('INVALID');
        },
        id: "gotoPubulicDevPortal"
      }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        className: classes.publicStore
      }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        className: classes.icons
      }, "public"), /*#__PURE__*/_react["default"].createElement(_Hidden["default"], {
        mdDown: true
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Base.index.go.to.public.store",
        defaultMessage: "Go to public Dev Portal"
      })))), /*#__PURE__*/_react["default"].createElement(_VerticalDivider["default"], {
        height: 64
      }), languageSwitchActive && /*#__PURE__*/_react["default"].createElement(_LanuageSelector["default"], null), user ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.linkWrapper
      }, /*#__PURE__*/_react["default"].createElement(_core.List, {
        className: classes.listRoot
      }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
        to: "/settings",
        id: "settingsLink",
        className: (0, _classnames["default"])((_classNames = {}, _defineProperty(_classNames, classes.selected, selected === 'settings'), _defineProperty(_classNames, classes.links, true), _classNames))
      }, /*#__PURE__*/_react["default"].createElement(_core.ListItem, {
        button: true
      }, /*#__PURE__*/_react["default"].createElement(_core.ListItemIcon, {
        classes: {
          root: classes.listIconRoot
        }
      }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        className: classes.icons,
        style: {
          color: selected === 'settings' ? strokeColorSelected : strokeColor
        }
      }, "settings")), /*#__PURE__*/_react["default"].createElement(_Hidden["default"], {
        mdDown: true
      }, /*#__PURE__*/_react["default"].createElement(_core.ListItemText, {
        classes: {
          root: classes.listItemTextRoot,
          primary: (0, _classnames["default"])((_classNames2 = {}, _defineProperty(_classNames2, classes.selectedText, selected === 'settings'), _defineProperty(_classNames2, classes.listText, selected !== 'settings'), _classNames2))
        },
        primary: intl.formatMessage({
          id: 'Base.Header.GlobalNavbar.menu.settings',
          defaultMessage: 'Settings'
        })
      }))), selected === 'settings' && /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.triangleDown
      }))), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        buttonRef: function buttonRef(node) {
          _this2.anchorEl = node;
        },
        "aria-owns": open ? 'menu-list-grow' : null,
        "aria-haspopup": "true",
        onClick: this.handleToggleUserMenu,
        className: classes.userLink,
        id: "userToggleButton"
      }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        className: classes.icons
      }, "person"), user.name), /*#__PURE__*/_react["default"].createElement(_Popper["default"], {
        id: "userPopup",
        open: this.state.openUserMenu,
        anchorEl: this.anchorEl,
        transition: true,
        disablePortal: true,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center'
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: 'center'
        }
      }, function (_ref) {
        var TransitionProps = _ref.TransitionProps,
            placement = _ref.placement;
        return /*#__PURE__*/_react["default"].createElement(_Grow["default"], _extends({}, TransitionProps, {
          id: "menu-list-grow",
          style: {
            transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
          }
        }), /*#__PURE__*/_react["default"].createElement(_Paper["default"], null, /*#__PURE__*/_react["default"].createElement(_ClickAwayListener["default"], {
          onClickAway: _this2.handleCloseUserMenu
        }, /*#__PURE__*/_react["default"].createElement(_core.MenuList, null, /*#__PURE__*/_react["default"].createElement(_core.MenuItem, {
          onClick: _this2.doOIDCLogout,
          className: classes.logoutLink
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Base.index.logout",
          defaultMessage: "Logout"
        }))))));
      }))) : /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.linkWrapper
      }, /*#__PURE__*/_react["default"].createElement("a", {
        href: _Settings.app.context + '/services/configs'
      }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        className: classes.userLink
      }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], null, "person"), /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Base.index.sign.in",
        defaultMessage: " Sign-in"
      })))))), /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.contentWrapper
      }, children), footerActive && /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.push
      })), footerActive && /*#__PURE__*/_react["default"].createElement("footer", {
        className: classes.footer,
        id: "footer"
      }, footerHTML && footerHTML !== '' ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactSafeHtml["default"], {
        html: footerHTML
      })) : /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        noWrap: true
      }, footerText && footerText !== '' ? /*#__PURE__*/_react["default"].createElement("span", null, footerText) : /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "Base.index.copyright.text",
        defaultMessage: "WSO2 API-M v3.1.0 | \xA9 2020 WSO2 Inc"
      })))));
    }
  }]);

  return Layout;
}(_react["default"].Component);

_defineProperty(Layout, "contextType", _SettingsContext["default"]);

Layout.propTypes = {
  classes: _propTypes["default"].shape({}).isRequired,
  theme: _propTypes["default"].shape({}).isRequired
};

var _default = (0, _reactIntl.injectIntl)((0, _reactRouterDom.withRouter)((0, _styles.withStyles)(styles, {
  withTheme: true
})(Layout)));

exports["default"] = _default;