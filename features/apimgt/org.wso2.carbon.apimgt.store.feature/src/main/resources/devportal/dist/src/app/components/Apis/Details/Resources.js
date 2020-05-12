"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _styles = require("@material-ui/core/styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Chip = _interopRequireDefault(require("@material-ui/core/Chip"));

var _reactIntl = require("react-intl");

var _Constants = _interopRequireDefault(require("AppData/Constants"));

var _api = _interopRequireDefault(require("AppData/api"));

var _ApiContext = require("./ApiContext");

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
  var chipColor = theme.custom.resourceChipColors ? theme.custom.resourceChipColors[method] : null;
  var chipTextColor = '#000000';

  if (!chipColor) {
    console.log('Check the theme settings. The resourceChipColors is not populated properly');
    chipColor = '#cccccc';
  } else {
    chipTextColor = theme.palette.getContrastText(theme.custom.resourceChipColors[method]);
  }

  return /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: method.toUpperCase(),
    style: {
      backgroundColor: chipColor,
      color: chipTextColor,
      height: 20,
      margin: '5px'
    }
  });
}

RenderMethodBase.propTypes = {
  theme: _propTypes["default"].shape({}).isRequired,
  method: _propTypes["default"].string.isRequired
};
var RenderMethod = (0, _styles.withTheme)(RenderMethodBase);
/**
 *
 *
 * @param {*} theme
 */

var styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10
    },
    heading: {
      marginRight: 20,
      color: theme.palette.getContrastText(theme.custom.infoBar.sliderBackground)
    }
  };
};
/**
 *
 *
 * @class Resources
 * @extends {React.Component}
 */


var Resources = /*#__PURE__*/function (_React$Component) {
  _inherits(Resources, _React$Component);

  var _super = _createSuper(Resources);

  /**
   *Creates an instance of Resources.
   * @param {*} props
   * @memberof Resources
   */
  function Resources(props) {
    var _this;

    _classCallCheck(this, Resources);

    _this = _super.call(this, props);
    _this.state = {
      paths: null,
      swagger: {}
    };
    _this.api = new _api["default"]();
    return _this;
  }
  /**
   *
   *
   * @memberof Resources
   */


  _createClass(Resources, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var api = this.props.api;
      var promisedApi = null;
      var apiClient = new _api["default"]();
      promisedApi = apiClient.getSwaggerByAPIId(api.id);
      promisedApi.then(function (response) {
        if (response.obj.paths !== undefined) {
          _this2.setState({
            paths: response.obj.paths
          });
        }
      })["catch"](function (error) {
        if (process.env.NODE_ENV !== 'production') console.log(error);
        var status = error.status;

        if (status === 404) {
          _this2.setState({
            notFound: true
          });
        } else if (status === 401) {
          _this2.setState({
            isAuthorize: false
          });

          var params = qs.stringify({
            reference: _this2.props.location.pathname
          });

          _this2.props.history.push({
            pathname: '/login',
            search: params
          });
        }
      });
    }
    /**
     *
     *
     * @returns
     * @memberof Resources
     */

  }, {
    key: "render",
    value: function render() {
      var paths = this.state.paths;

      if (this.state.notFound) {
        return /*#__PURE__*/_react["default"].createElement("div", null, "resource not found...");
      }

      if (!paths) {
        return /*#__PURE__*/_react["default"].createElement("div", null, "loading...");
      }

      var classes = this.props.classes;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.root
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.contentWrapper
      }, Object.keys(paths).map(function (key) {
        var path = paths[key];
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: classes.root,
          key: key
        }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
          className: classes.heading,
          variant: "body1"
        }, key), Object.keys(path).map(function (innerKey) {
          return _Constants["default"].HTTP_METHODS.includes(innerKey) ? /*#__PURE__*/_react["default"].createElement(RenderMethod, {
            method: innerKey,
            key: innerKey
          }) : null;
        }));
      })));
    }
  }]);

  return Resources;
}(_react["default"].Component);

Resources.contextType = _ApiContext.ApiContext;
Resources.propTypes = {
  classes: _propTypes["default"].object.isRequired,
  intl: _propTypes["default"].shape({
    formatMessage: _propTypes["default"].func
  }).isRequired
};

var _default = (0, _reactIntl.injectIntl)((0, _styles.withStyles)(styles)(Resources));

exports["default"] = _default;