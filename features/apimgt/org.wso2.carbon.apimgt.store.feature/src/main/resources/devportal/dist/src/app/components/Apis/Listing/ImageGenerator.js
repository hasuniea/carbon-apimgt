"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _MaterialIcons = _interopRequireDefault(require("MaterialIcons"));

var _Background = _interopRequireDefault(require("./Background"));

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

var styles = {
  icon: {},
  iconWrapper: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    '& span': {
      position: 'absolute',
      right: 'auto'
    }
  }
};
/**
 * Generate dynamic API thumbnail image (SVG), Use PureComponent to avoid unnessasary re-rendering when hover ect
 *
 * @class ImageGenerator
 * @extends {PureComponent}
 */

var ImageGenerator = /*#__PURE__*/function (_PureComponent) {
  _inherits(ImageGenerator, _PureComponent);

  var _super = _createSuper(ImageGenerator);

  function ImageGenerator() {
    _classCallCheck(this, ImageGenerator);

    return _super.apply(this, arguments);
  }

  _createClass(ImageGenerator, [{
    key: "render",

    /**
     *
     * @inheritdoc
     * @returns {React.PureComponent} @inheritdoc
     * @memberof ImageGenerator
     */
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          api = _this$props.api,
          width = _this$props.width,
          height = _this$props.height,
          theme = _this$props.theme,
          fixedIcon = _this$props.fixedIcon;
      var category = fixedIcon.category,
          key = fixedIcon.key,
          color = fixedIcon.color,
          backgroundIndex = fixedIcon.backgroundIndex;
      var str = api;
      if (_typeof(api) === 'object') str = api.name;
      var count;
      var colorPair;
      var randomBackgroundIndex;
      var IconElement;
      var colorPairs = theme.custom.thumbnail.backgrounds; // Creating the icon

      if (key && category) {
        IconElement = key;
      } else if (api.type === 'DOC') {
        IconElement = theme.custom.thumbnail.document.icon;
      } else {
        count = _MaterialIcons["default"].categories[0].icons.length;
        var randomIconIndex = (str.charCodeAt(0) + str.charCodeAt(str.length - 1)) % count;
        IconElement = _MaterialIcons["default"].categories[0].icons[randomIconIndex].id;
      } // Obtain or generate background color pair


      if (api.type === 'DOC') {
        colorPair = theme.custom.thumbnail.document.backgrounds;
      } else if (backgroundIndex && colorPairs.length > backgroundIndex) {
        colorPair = colorPairs[backgroundIndex];
      } else {
        randomBackgroundIndex = (str.charCodeAt(0) + str.charCodeAt(str.length - 1)) % colorPairs.length;
        colorPair = colorPairs[randomBackgroundIndex];
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.iconWrapper,
        style: {
          width: width
        }
      }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        className: classes.icon,
        style: {
          fontSize: height + 'px',
          color: color
        }
      }, IconElement), /*#__PURE__*/_react["default"].createElement(_Background["default"], {
        width: width,
        height: height,
        colorPair: colorPair
      }));
    }
  }]);

  return ImageGenerator;
}(_react.PureComponent);

ImageGenerator.defaultProps = {
  height: 190,
  width: 250,
  fixedIcon: {
    category: null,
    key: null,
    color: '',
    backgroundIndex: null
  }
};
ImageGenerator.propTypes = {
  classes: _propTypes["default"].shape({}).isRequired,
  height: _propTypes["default"].number,
  width: _propTypes["default"].number,
  fixedIcon: _propTypes["default"].shape({}),
  api: _propTypes["default"].shape({}).isRequired,
  theme: _propTypes["default"].shape({}).isRequired
};

var _default = (0, _styles.withStyles)(styles, {
  withTheme: true
})(ImageGenerator);

exports["default"] = _default;