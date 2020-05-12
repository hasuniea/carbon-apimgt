"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

var _styles = require("@material-ui/core/styles");

var _Cancel = _interopRequireDefault(require("@material-ui/icons/Cancel"));

var _icons = require("@material-ui/icons");

var _Alert = _interopRequireDefault(require("AppComponents/Shared/Alert"));

var _api = _interopRequireDefault(require("AppData/api"));

var _AuthManager = _interopRequireDefault(require("AppData/AuthManager"));

var _StarRatingSummary = _interopRequireDefault(require("AppComponents/Apis/Details/StarRatingSummary"));

var _Rating = _interopRequireDefault(require("@material-ui/lab/Rating"));

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
 * @param {*} theme
 */
var styles = function styles(theme) {
  return {
    starRate: {
      fontSize: 30,
      color: theme.custom.infoBar.starColor
    },
    noStarRate: {
      fontSize: 30,
      color: theme.palette.grey.A200
    },
    iconFilled: {
      color: theme.custom.infoBar.starColor
    },
    iconEmpty: {
      color: theme.palette.getContrastText(theme.custom.thumbnail.contentBackgroundColor)
    },
    removeRating: {
      fontSize: 20,
      color: theme.palette.getContrastText(theme.custom.infoBar.background)
    },
    userRating: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      cursor: 'pointer'
    }
  };
};
/**
 *
 *
 * @class StarRatingBar
 * @extends {React.Component}
 */


var StarRatingBar = /*#__PURE__*/function (_React$Component) {
  _inherits(StarRatingBar, _React$Component);

  var _super = _createSuper(StarRatingBar);

  function StarRatingBar(props) {
    var _this;

    _classCallCheck(this, StarRatingBar);

    _this = _super.call(this, props);
    _this.state = {
      avgRating: 0,
      userRating: 0,
      count: 0,
      total: 0
    };
    _this.getApiRating = _this.getApiRating.bind(_assertThisInitialized(_this));
    _this.removeUserRating = _this.removeUserRating.bind(_assertThisInitialized(_this));
    _this.doRate = _this.doRate.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(StarRatingBar, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // Typical usage (don't forget to compare props):
      if (this.props.ratingUpdate !== prevProps.ratingUpdate) {
        this.getApiRating();
      }
    }
    /**
     *
     *
     * @memberof StarRatingBar
     */

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getApiRating();
    }
    /**
     *
     *
     * @memberof StarRatingBar
     */

  }, {
    key: "getApiRating",
    value: function getApiRating() {
      var _this2 = this;

      var _this$props = this.props,
          apiId = _this$props.apiId,
          setRatingUpdate = _this$props.setRatingUpdate;

      var user = _AuthManager["default"].getUser();

      var api = new _api["default"](); // get api rating

      if (user != null) {
        var promisedRating = api.getRatingFromUser(apiId, null);
        promisedRating.then(function (response) {
          _this2.setState({
            avgRating: response.body.avgRating,
            userRating: response.body.userRating,
            count: response.body.count,
            total: response.body.pagination.total
          });

          if (setRatingUpdate) setRatingUpdate({
            avgRating: response.body.avgRating,
            count: response.body.count,
            total: response.body.pagination.total
          });
        });
      }
    }
    /**
     *
     *
     * @param {*} rateIndex
     * @memberof StarRatingBar
     */

  }, {
    key: "doRate",
    value: function doRate(rateIndex) {
      var _this3 = this;

      var apiId = this.props.apiId;
      var api = new _api["default"]();
      var ratingInfo = {
        rating: rateIndex
      };
      var promise = api.addRating(apiId, ratingInfo);
      promise.then(function () {
        _this3.getApiRating();
      })["catch"](function (error) {
        _Alert["default"].error('Error occured while adding ratings');

        if (process.env.NODE_ENV !== 'production') {
          console.log(error);
        }
      });
    }
    /**
     *
     *
     * @memberof StarRatingBar
     */

  }, {
    key: "removeUserRating",
    value: function removeUserRating() {
      var _this4 = this;

      var _this$props2 = this.props,
          apiId = _this$props2.apiId,
          setRatingUpdate = _this$props2.setRatingUpdate;
      var api = new _api["default"](); // remove user rating

      api.removeRatingOfUser(apiId, null).then(function () {
        _this4.getApiRating();

        setRatingUpdate();
      })["catch"](function (error) {
        _Alert["default"].error('Error occured while removing ratings');

        if (process.env.NODE_ENV !== 'production') {
          console.log(error);
        }
      });
    }
    /**
     *
     *
     * @returns
     * @memberof StarRatingBar
     */

  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$state = this.state,
          avgRating = _this$state.avgRating,
          userRating = _this$state.userRating,
          count = _this$state.count,
          total = _this$state.total;
      var _this$props3 = this.props,
          classes = _this$props3.classes,
          isEditable = _this$props3.isEditable,
          showSummary = _this$props3.showSummary,
          apiRating = _this$props3.apiRating;
      var apiRatingNumber = parseFloat(apiRating);
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, showSummary ? /*#__PURE__*/_react["default"].createElement(_StarRatingSummary["default"], {
        avgRating: avgRating,
        reviewCount: total,
        returnCount: count
      }) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, isEditable ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.userRating
      }, [1, 2, 3, 4, 5].map(function (i) {
        return /*#__PURE__*/_react["default"].createElement(_icons.StarRate, {
          key: i,
          className: userRating >= i ? classes.starRate : classes.noStarRate,
          onClick: function onClick() {
            return _this5.doRate(i);
          }
        });
      }), /*#__PURE__*/_react["default"].createElement(_Cancel["default"], {
        className: classes.removeRating,
        onClick: function onClick() {
          return _this5.removeUserRating();
        }
      }))) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Rating["default"], {
        name: "half-rating",
        value: apiRatingNumber,
        precision: 0.1,
        readOnly: true,
        classes: {
          iconEmpty: classes.iconEmpty,
          iconFilled: classes.iconFilled
        }
      }))));
    }
  }]);

  return StarRatingBar;
}(_react["default"].Component);

StarRatingBar.defaultProps = {
  apiRating: 0,
  ratingUpdate: 0,
  setRatingUpdate: function setRatingUpdate() {}
};
StarRatingBar.propTypes = {
  classes: _propTypes["default"].shape({}).isRequired,
  theme: _propTypes["default"].shape({}).isRequired,
  apiId: _propTypes["default"].string.isRequired,
  isEditable: _propTypes["default"].bool.isRequired,
  showSummary: _propTypes["default"].bool.isRequired,
  apiRating: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  ratingUpdate: _propTypes["default"].number,
  setRatingUpdate: _propTypes["default"].func
};

var _default = (0, _styles.withStyles)(styles, {
  withTheme: true
})(StarRatingBar);

exports["default"] = _default;