"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _Slide = _interopRequireDefault(require("@material-ui/core/Slide"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactSafeHtml = _interopRequireDefault(require("react-safe-html"));

var _Settings = require("Settings");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var styles = function styles(theme) {
  return {
    root: {
      position: 'relative',
      display: 'flex'
    },
    imageBox: {
      width: '100%',
      height: 'auto'
    },
    arrows: {
      position: 'absolute',
      zIndex: 2,
      display: 'flex',
      flex: 1,
      height: '100%',
      background: '#00000044',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      '& span': {
        fontSize: 60,
        color: theme.palette.getContrastText('#000000')
      }
    },
    arrowLeft: {
      left: 0
    },
    arrowRight: {
      right: 0
    },
    slideContainer: {
      width: '100%',
      zIndex: 1,
      display: 'flex',
      flex: 1,
      justifyContent: 'center'
    },
    slideContentWrapper: {
      position: 'absolute',
      background: '#00000044',
      color: theme.palette.getContrastText('#000000'),
      bottom: 0,
      padding: theme.spacing(2)
    },
    slideContentTitle: {
      fontWeight: theme.typography.fontWeightLight,
      fontSize: theme.typography.h3.fontSize
    },
    slideContentContent: {
      fontWeight: theme.typography.fontWeightLight,
      fontSize: theme.typography.body1.fontSize
    }
  };
};

function Carousel(props) {
  var theme = props.theme;

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      counter = _useState2[0],
      setCounter = _useState2[1];

  var _useState3 = (0, _react.useState)('left'),
      _useState4 = _slicedToArray(_useState3, 2),
      slideDirection = _useState4[0],
      setSlideDirection = _useState4[1];

  var content = theme.custom.landingPage.carousel.slides;

  var handleLeftArrow = function handleLeftArrow() {
    setSlideDirection('right');

    if (counter === 0) {
      setCounter(content.length - 1);
    } else {
      setCounter(counter - 1);
    }
  };

  var handleRightArrow = function handleRightArrow() {
    setSlideDirection('left');

    if (counter === content.length - 1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  };

  var classes = props.classes;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])(classes.arrowLeft, classes.arrows),
    onClick: handleLeftArrow
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], null, "chevron_left")), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])(classes.arrowRight, classes.arrows),
    onClick: handleRightArrow
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], null, "chevron_right")), content.map(function (slide, index) {
    return /*#__PURE__*/_react["default"].createElement(_Slide["default"], {
      direction: slideDirection,
      "in": counter === index,
      timeout: {
        enter: 500,
        exit: 0
      },
      key: index,
      mountOnEnter: true,
      unmountOnExit: true
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: classes.slideContainer
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _classnames["default"])(classes.slideContentWrapper, 'slideContentWrapper')
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _classnames["default"])(classes.slideContentTitle, 'slideContentTitle')
    }, /*#__PURE__*/_react["default"].createElement(_reactSafeHtml["default"], {
      html: slide.title
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: classes.slideContentContent
    }, /*#__PURE__*/_react["default"].createElement(_reactSafeHtml["default"], {
      html: slide.content
    }))), /*#__PURE__*/_react["default"].createElement("img", {
      className: classes.imageBox,
      src: _Settings.app.context + slide.src
    })));
  }));
}

Carousel.propTypes = {
  classes: _propTypes["default"].object.isRequired,
  theme: _propTypes["default"].object.isRequired
};

var _default = (0, _styles.withStyles)(styles, {
  withTheme: true
})(Carousel);

exports["default"] = _default;