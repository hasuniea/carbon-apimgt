"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _VerticalDivider = _interopRequireDefault(require("./VerticalDivider"));

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
 * Main style object
 *
 * @param {*} theme
 */
var styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      height: 100,
      alignItems: 'center',
      paddingLeft: theme.spacing(2),
      borderRadius: theme.shape.borderRadius,
      border: 'none',
      '& span.material-icons': {
        fontSize: 60,
        color: theme.custom.info.color
      },
      '& span, & h5, & label, & input': {
        color: theme.palette.getContrastText(theme.palette.background.paper)
      }
    },
    iconItem: {
      paddingRight: theme.spacing(2),
      fontSize: 60
    },
    button: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    },
    content: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1)
    }
  };
};
/**
 *  Renders a inline massage
 *
 * @class InlineMessage
 * @extends {React.Component}
 */


var InlineMessage = /*#__PURE__*/function (_React$Component) {
  _inherits(InlineMessage, _React$Component);

  var _super = _createSuper(InlineMessage);

  function InlineMessage() {
    var _this;

    _classCallCheck(this, InlineMessage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      value: 0
    });

    _defineProperty(_assertThisInitialized(_this), "handleExpandClick", function () {
      _this.setState(function (state) {
        return {
          expanded: !state.expanded
        };
      });
    });

    return _this;
  }

  _createClass(InlineMessage, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          type = _this$props.type;
      var messgeType = type || 'info';
      return /*#__PURE__*/_react["default"].createElement(_Paper["default"], {
        className: classes.root,
        elevation: 1
      }, messgeType === 'info' && /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        className: classes.iconItem
      }, "info"), messgeType === 'warn' && /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        className: classes.iconItem
      }, "warning"), /*#__PURE__*/_react["default"].createElement(_VerticalDivider["default"], {
        height: 100
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.content
      }, this.props.children));
    }
  }]);

  return InlineMessage;
}(_react["default"].Component);

InlineMessage.propTypes = {
  classes: _propTypes["default"].shape({}).isRequired,
  type: _propTypes["default"].string.isRequired
};

var _default = (0, _styles.withStyles)(styles)(InlineMessage);

exports["default"] = _default;