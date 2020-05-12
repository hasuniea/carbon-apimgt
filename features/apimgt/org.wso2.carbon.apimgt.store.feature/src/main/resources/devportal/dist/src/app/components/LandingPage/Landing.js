"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Settings = require("Settings");

var _Carousel = _interopRequireDefault(require("./Carousel"));

var _ApisWithTag = _interopRequireDefault(require("./ApisWithTag"));

var _ParallaxScroll = _interopRequireDefault(require("./ParallaxScroll"));

var _Contact = _interopRequireDefault(require("./Contact"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1,
      margin: '0 100px',
      alignItem: 'center'
    },
    fullWidthBack: {},
    superRoot: {
      display: 'flex',
      flexDirection: 'column'
    }
  };
};

function Landing(props) {
  var classes = props.classes,
      theme = props.theme;
  var _theme$custom$landing = theme.custom.landingPage,
      carouselActive = _theme$custom$landing.carousel.active,
      _theme$custom$landing2 = _theme$custom$landing.listByTag,
      listByTagActive = _theme$custom$landing2.active,
      listByTagContent = _theme$custom$landing2.content,
      parallaxActive = _theme$custom$landing.parallax.active,
      contactActive = _theme$custom$landing.contact.active;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.superRoot
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 3
  }, carouselActive && /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_Carousel["default"], null)), listByTagActive && listByTagContent.length > 0 && /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h2",
    gutterBottom: true
  }, listByTagContent[0].title), listByTagContent[0].description && /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body1",
    gutterBottom: true
  }, listByTagContent[0].description), /*#__PURE__*/_react["default"].createElement(_ApisWithTag["default"], {
    tag: listByTagContent[0].tag,
    maxCount: listByTagContent[1].maxCount
  })))), parallaxActive && /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.fullWidthBack
  }, /*#__PURE__*/_react["default"].createElement(_ParallaxScroll["default"], {
    index: 0
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 3
  }, listByTagActive && listByTagContent.length > 1 && /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h2",
    gutterBottom: true
  }, listByTagContent[1].title), listByTagContent[1].description && /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body1",
    gutterBottom: true
  }, listByTagContent[1].description), /*#__PURE__*/_react["default"].createElement(_ApisWithTag["default"], {
    tag: listByTagContent[1].tag,
    maxCount: listByTagContent[1].maxCount
  })))), parallaxActive && /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.fullWidthBack
  }, /*#__PURE__*/_react["default"].createElement(_ParallaxScroll["default"], {
    index: 1
  })), contactActive && /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h2",
    gutterBottom: true
  }, "Contact Us"), /*#__PURE__*/_react["default"].createElement(_Contact["default"], null)));
}

Landing.propTypes = {
  classes: _propTypes["default"].object.isRequired,
  theme: _propTypes["default"].object.isRequired
};

var _default = (0, _styles.withStyles)(styles, {
  withTheme: true
})(Landing);

exports["default"] = _default;