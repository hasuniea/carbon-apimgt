"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _styles = require("@material-ui/core/styles");

var _CustomIcon = _interopRequireDefault(require("./CustomIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var styles = function styles(theme) {
  return {
    leftLInkText: {
      color: theme.palette.getContrastText(theme.custom.leftMenu.background),
      textTransform: 'capitalize',
      width: '100%',
      textAlign: 'left',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },
    leftLInkText_IconLeft: {
      paddingLeft: 10
    },
    LeftMenu: {
      backgroundColor: theme.custom.leftMenu.background,
      width: theme.custom.leftMenu.width,
      textAlign: 'center',
      fontFamily: theme.typography.fontFamily,
      position: 'absolute',
      bottom: 0,
      left: 0,
      top: 0
    },
    leftLInk: {
      paddingTop: theme.spacing(0.6),
      paddingBottom: theme.spacing(0.6),
      paddingLeft: theme.spacing(1),
      paddingRight: 0,
      fontSize: theme.typography.caption.fontSize,
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    leftLink_Icon: {
      color: theme.palette.getContrastText(theme.custom.leftMenu.background),
      fontSize: theme.custom.leftMenu.iconSize + 'px'
    },
    leftLink_IconLeft: {
      display: 'flex',
      alignItems: 'center'
    },
    noIcon: {
      display: 'none'
    },
    leftLInkText_NoText: {
      display: 'none'
    },
    submenu: {
      paddingLeft: theme.spacing(4)
    }
  };
};
/**
 * Renders the left menu section.
 * @param {JSON} props props passed from parent
 * @returns {JSX} Leftmenu element.
 */


function LeftMenuItem(props) {
  var _classNames, _classNames2, _classNames4;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  var classes = props.classes,
      theme = props.theme,
      Icon = props.Icon,
      to = props.to,
      history = props.history,
      text = props.text,
      route = props.route,
      submenu = props.submenu;
  var routeToCheck = route || text;
  var leftMenu = theme.custom.leftMenu;
  var strokeColor = theme.palette.getContrastText(leftMenu.background);
  var iconSize = leftMenu.iconSize;

  var ditectCurrentMenu = function ditectCurrentMenu() {
    var location = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    if (!location) {
      location = window.location;
    }

    var _location = location,
        pathname = _location.pathname;
    var test1 = new RegExp('/' + routeToCheck + '$', 'g');
    var test2 = new RegExp('/' + routeToCheck + '/', 'g');

    if (pathname.match(test1) || pathname.match(test2)) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  };

  (0, _react.useEffect)(function () {
    ditectCurrentMenu();
  }, []);
  history.listen(function (location) {
    ditectCurrentMenu(location);
  });
  var activeBackground = '';

  if (selected && !submenu) {
    activeBackground = leftMenu.leftMenuActive;
  } else if (selected && submenu) {
    activeBackground = leftMenu.leftMenuActiveSubmenu;
  }

  return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    className: (0, _classnames["default"])(classes.leftLInk, (_classNames = {}, _defineProperty(_classNames, classes.leftLink_IconLeft, leftMenu === 'icon left'), _defineProperty(_classNames, classes.submenu, submenu), _classNames), 'leftLInk'),
    to: to,
    style: {
      backgroundColor: activeBackground
    }
  }, !submenu && ( // If the icon pro ( which is comming from the React Material library )
  // is coming we add css class and render.
  // If leftMenu='no icon' at the theme object we hide the icon. Also we add static classes to
  // allow customers theme
  // the product without compiling.
  Icon ? _react["default"].cloneElement(Icon, {
    className: (0, _classnames["default"])(classes.leftLink_Icon, (_classNames2 = {}, _defineProperty(_classNames2, classes.noIcon, leftMenu.style === 'no icon'), _defineProperty(_classNames2, classes.submenu, submenu), _classNames2), 'leftLink_Icon')
  }) :
  /*#__PURE__*/
  // We can also add custom icons
  _react["default"].createElement(_CustomIcon["default"], {
    strokeColor: strokeColor,
    width: iconSize,
    height: iconSize,
    icon: props.iconText,
    className: (0, _classnames["default"])(classes.leftLInk, _defineProperty({}, classes.noIcon, leftMenu.style === 'no icon'), 'leftLink_Icon')
  })), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    className: (0, _classnames["default"])(classes.leftLInkText, (_classNames4 = {}, _defineProperty(_classNames4, classes.leftLInkText_IconLeft, leftMenu.style === 'icon left'), _defineProperty(_classNames4, classes.leftLInkText_NoText, leftMenu.style === 'no text'), _classNames4), 'leftLInkText')
  }, props.text));
}

LeftMenuItem.defaultProps = {
  route: null,
  iconText: null,
  Icon: null,
  submenu: false
};
LeftMenuItem.propTypes = {
  classes: _propTypes["default"].shape({}).isRequired,
  theme: _propTypes["default"].shape({}).isRequired,
  Icon: _propTypes["default"].element,
  text: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].shape({})]).isRequired,
  to: _propTypes["default"].string.isRequired,
  route: _propTypes["default"].string,
  iconText: _propTypes["default"].string,
  history: _propTypes["default"].shape({
    location: _propTypes["default"].shape({}).isRequired
  }).isRequired,
  submenu: _propTypes["default"].bool
};

var _default = (0, _reactRouterDom.withRouter)((0, _styles.withStyles)(styles, {
  withTheme: true
})(LeftMenuItem));

exports["default"] = _default;