"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIntl = require("react-intl");

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

var _CustomIcon = _interopRequireDefault(require("../../Shared/CustomIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * GlobalNavBar
 *
 * @param {*} props Properties
 * @returns {React.Component}
 */
function GlobalNavBar(props) {
  var _classNames, _classNames3, _classNames4, _classNames6, _classNames7, _classNames9;

  var classes = props.classes,
      theme = props.theme,
      intl = props.intl,
      drawerView = props.drawerView,
      selected = props.selected,
      iconWidth = props.iconWidth,
      strokeColorSelected = props.strokeColorSelected,
      strokeColor = props.strokeColor;
  return /*#__PURE__*/_react["default"].createElement(_core.List, {
    className: classes.listRoot
  }, theme.custom.landingPage.active && /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "/home",
    className: (0, _classnames["default"])((_classNames = {}, _defineProperty(_classNames, classes.selected, selected === 'home'), _defineProperty(_classNames, classes.links, true), _classNames))
  }, /*#__PURE__*/_react["default"].createElement(_core.ListItem, {
    button: true,
    classes: {
      root: classes.listItemRoot
    }
  }, /*#__PURE__*/_react["default"].createElement(_core.ListItemIcon, {
    classes: {
      root: (0, _classnames["default"])(_defineProperty({}, classes.smallIcon, !drawerView))
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    style: {
      fontSize: iconWidth,
      color: selected === 'home' ? strokeColorSelected : strokeColor
    },
    className: classes.listText
  }, "home")), /*#__PURE__*/_react["default"].createElement(_core.ListItemText, {
    classes: {
      root: classes.listItemTextRoot,
      primary: (0, _classnames["default"])((_classNames3 = {}, _defineProperty(_classNames3, classes.selectedText, selected === 'home'), _defineProperty(_classNames3, classes.listText, selected !== 'home'), _classNames3))
    },
    primary: intl.formatMessage({
      id: 'Base.Header.GlobalNavbar.menu.home',
      defaultMessage: 'Home'
    })
  })), selected === 'home' && !drawerView && /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.triangleDown
  })), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: theme.custom.tagWise.active && theme.custom.tagWise.style === 'page' ? '/api-groups' : '/apis',
    className: (0, _classnames["default"])((_classNames4 = {}, _defineProperty(_classNames4, classes.selected, selected === 'apis'), _defineProperty(_classNames4, classes.links, true), _classNames4))
  }, /*#__PURE__*/_react["default"].createElement(_core.ListItem, {
    button: true,
    classes: {
      root: classes.listItemRoot
    }
  }, /*#__PURE__*/_react["default"].createElement(_core.ListItemIcon, {
    classes: {
      root: (0, _classnames["default"])(_defineProperty({}, classes.smallIcon, !drawerView))
    }
  }, /*#__PURE__*/_react["default"].createElement(_CustomIcon["default"], {
    width: iconWidth,
    height: iconWidth,
    icon: "api",
    className: classes.listText,
    strokeColor: selected === 'apis' ? strokeColorSelected : strokeColor
  })), /*#__PURE__*/_react["default"].createElement(_core.ListItemText, {
    classes: {
      root: classes.listItemTextRoot,
      primary: (0, _classnames["default"])((_classNames6 = {}, _defineProperty(_classNames6, classes.selectedText, selected === 'apis'), _defineProperty(_classNames6, classes.listText, selected !== 'apis'), _classNames6))
    },
    primary: intl.formatMessage({
      id: 'Base.Header.GlobalNavbar.menu.apis',
      defaultMessage: 'APIs'
    })
  })), selected === 'apis' && !drawerView && /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.triangleDown
  })), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "/applications",
    className: (0, _classnames["default"])((_classNames7 = {}, _defineProperty(_classNames7, classes.selected, selected === 'applications'), _defineProperty(_classNames7, classes.links, true), _classNames7))
  }, /*#__PURE__*/_react["default"].createElement(_core.ListItem, {
    button: true,
    classes: {
      root: classes.listItemRoot
    }
  }, /*#__PURE__*/_react["default"].createElement(_core.ListItemIcon, {
    classes: {
      root: (0, _classnames["default"])(_defineProperty({}, classes.smallIcon, !drawerView))
    }
  }, /*#__PURE__*/_react["default"].createElement(_CustomIcon["default"], {
    width: iconWidth,
    height: iconWidth,
    icon: "applications",
    className: classes.listText,
    strokeColor: selected === 'applications' ? strokeColorSelected : strokeColor
  })), /*#__PURE__*/_react["default"].createElement(_core.ListItemText, {
    classes: {
      root: classes.listItemTextRoot,
      primary: (0, _classnames["default"])((_classNames9 = {}, _defineProperty(_classNames9, classes.selectedText, selected === 'applications'), _defineProperty(_classNames9, classes.listText, selected !== 'applications'), _classNames9))
    },
    primary: intl.formatMessage({
      id: 'Base.Header.GlobalNavbar.menu.applications',
      defaultMessage: 'Applications'
    })
  })), selected === 'applications' && !drawerView && /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.triangleDown
  })));
}

GlobalNavBar.propTypes = {
  intl: _propTypes["default"].shape({}).isRequired,
  theme: _propTypes["default"].shape({}).isRequired
};

var _default = (0, _reactRouterDom.withRouter)((0, _styles.withTheme)((0, _reactIntl.injectIntl)(GlobalNavBar)));

exports["default"] = _default;