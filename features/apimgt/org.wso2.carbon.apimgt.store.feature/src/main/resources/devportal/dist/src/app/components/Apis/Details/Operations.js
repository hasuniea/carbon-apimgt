"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _styles = require("@material-ui/core/styles");

var _reactIntl = require("react-intl");

var _Table = _interopRequireDefault(require("@material-ui/core/Table"));

var _TableCell = _interopRequireDefault(require("@material-ui/core/TableCell"));

var _TableRow = _interopRequireDefault(require("@material-ui/core/TableRow"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Chip = _interopRequireDefault(require("@material-ui/core/Chip"));

var _api = _interopRequireDefault(require("AppData/api"));

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

/**
 *
 *
 * @param {*} props
 * @returns
 */
function RenderMethodBase(props) {
  var theme = props.theme,
      method = props.method;
  var chipColor = theme.custom.operationChipColor ? theme.custom.operationChipColor[method] : null;
  var chipTextColor = '#000000';

  if (!chipColor) {
    console.log('Check the theme settings. The resourceChipColors is not populated properlly');
    chipColor = '#cccccc';
  } else {
    chipTextColor = theme.palette.getContrastText(theme.custom.operationChipColor[method]);
  }

  return /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: method,
    style: {
      backgroundColor: chipColor,
      color: chipTextColor,
      height: 20
    }
  });
}

RenderMethodBase.propTypes = {
  theme: _propTypes["default"].object.isRequired,
  method: _propTypes["default"].object.isRequired
};
var RenderMethod = (0, _styles.withTheme)(RenderMethodBase);
/**
 *
 *
 * @param {*} theme
 */

var styles = {
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  heading: {
    marginRight: 20
  }
};
/**
 *
 *
 * @class Operations
 * @extends {React.Component}
 */

var Operations = /*#__PURE__*/function (_React$Component) {
  _inherits(Operations, _React$Component);

  var _super = _createSuper(Operations);

  /**
   *Creates an instance of Operations.
   * @param {*} props
   * @memberof Operations
   */
  function Operations(props) {
    var _this;

    _classCallCheck(this, Operations);

    _this = _super.call(this, props);
    _this.state = {
      operations: null
    };
    _this.api = new _api["default"]();
    return _this;
  }
  /**
   *
   *
   * @memberof Operations
   */


  _createClass(Operations, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var api = this.props.api;
      this.setState({
        operations: api.operations
      });
    }
    /**
     *
     *
     * @returns
     * @memberof Operations
     */

  }, {
    key: "render",
    value: function render() {
      var operations = this.state.operations;

      if (!operations) {
        return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Apis.Details.Operations.notFound",
          defaultMessage: "Operations Not Found"
        }));
      }

      var classes = this.props.classes;
      return /*#__PURE__*/_react["default"].createElement(_Table["default"], null, operations && operations.length !== 0 && operations.map(function (item) {
        return /*#__PURE__*/_react["default"].createElement(_TableRow["default"], {
          style: {
            borderStyle: 'hidden'
          },
          key: item.target + '_' + item.verb
        }, /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
          className: classes.heading,
          component: "p",
          variant: "body1"
        }, item.target)), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], null, /*#__PURE__*/_react["default"].createElement(RenderMethod, {
          method: item.verb.toLowerCase()
        })));
      }));
    }
  }]);

  return Operations;
}(_react["default"].Component);

Operations.propTypes = {
  classes: _propTypes["default"].object.isRequired,
  intl: _propTypes["default"].shape({
    formatMessage: _propTypes["default"].func
  }).isRequired
};

var _default = (0, _reactIntl.injectIntl)((0, _styles.withStyles)(styles)(Operations));

exports["default"] = _default;