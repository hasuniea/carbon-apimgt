"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _downshift = _interopRequireDefault(require("downshift"));

var _styles = require("@material-ui/core/styles");

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _InputAdornment = _interopRequireDefault(require("@material-ui/core/InputAdornment"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _reactIntl = require("react-intl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var suggestions = [{
  label: ''
}];
/**
 *
 *
 * @param {*} inputProps
 * @returns
 */

function renderInput(inputProps) {
  var InputProps = inputProps.InputProps,
      classes = inputProps.classes,
      ref = inputProps.ref,
      other = _objectWithoutProperties(inputProps, ["InputProps", "classes", "ref"]);

  return /*#__PURE__*/_react["default"].createElement(_TextField["default"], _extends({
    InputProps: _objectSpread({
      startAdornment: /*#__PURE__*/_react["default"].createElement(_InputAdornment["default"], {
        position: "start"
      }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        className: classes.searchIcon
      }, "search")),
      inputRef: ref,
      classes: {
        root: classes.inputRoot
      }
    }, InputProps)
  }, other));
}
/**
 *
 *
 * @param {*} { suggestion, index, itemProps, highlightedIndex, selectedItem }
 * @returns
 */


function renderSuggestion(_ref) {
  var suggestion = _ref.suggestion,
      index = _ref.index,
      itemProps = _ref.itemProps,
      highlightedIndex = _ref.highlightedIndex,
      selectedItem = _ref.selectedItem;
  var isHighlighted = highlightedIndex === index;
  var isSelected = (selectedItem || '').indexOf(suggestion.label) > -1;
  return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], _extends({}, itemProps, {
    key: suggestion.label,
    selected: isHighlighted,
    component: "div",
    style: {
      fontWeight: isSelected ? 500 : 400
    }
  }), suggestion.label);
}

renderSuggestion.propTypes = {
  highlightedIndex: _propTypes["default"].number,
  index: _propTypes["default"].number,
  itemProps: _propTypes["default"].object,
  selectedItem: _propTypes["default"].string,
  suggestion: _propTypes["default"].shape({
    label: _propTypes["default"].string
  }).isRequired
};
/**
 *
 *
 * @param {*} inputValue
 * @returns
 */

function getSuggestions(inputValue) {
  var count = 0;
  return suggestions.filter(function (suggestion) {
    var keep = (!inputValue || suggestion.label.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1) && count < 5;

    if (keep) {
      count += 1;
    }

    return keep;
  });
}
/**
 *
 *
 * @param {*} theme
 */


var styles = function styles(theme) {
  var _searchIcon;

  return {
    root: {
      flexGrow: 1,
      height: 'auto'
    },
    container: {
      flexGrow: 1,
      position: 'relative'
    },
    paper: {
      position: 'absolute',
      zIndex: 1,
      marginTop: theme.spacing(1),
      left: 0,
      right: 0
    },
    chip: {
      margin: "".concat(theme.spacing(1) / 2, "px ").concat(theme.spacing(1) / 4, "px")
    },
    inputRoot: {
      flexWrap: 'wrap',
      paddingLeft: 10,
      '&:before': {
        borderBottom: 'none'
      }
    },
    divider: {
      height: theme.spacing(2)
    },
    searchWrapper: {
      width: 300,
      flexGrow: 1
    },
    searchIcon: (_searchIcon = {
      paddingLeft: 5,
      position: 'absolute',
      right: 0,
      top: 5
    }, _defineProperty(_searchIcon, "right", 12), _defineProperty(_searchIcon, "cursor", 'pointer'), _searchIcon)
  };
};
/**
 *
 *
 * @class GenericSearch
 * @extends {React.Component}
 */


var GenericSearch = /*#__PURE__*/function (_React$Component) {
  _inherits(GenericSearch, _React$Component);

  var _super = _createSuper(GenericSearch);

  function GenericSearch() {
    var _this;

    _classCallCheck(this, GenericSearch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      inputValue: '',
      selectedItem: []
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
      var _this$state = _this.state,
          inputValue = _this$state.inputValue,
          selectedItem = _this$state.selectedItem;

      if (selectedItem.length && !inputValue.length && event.keyCode === 8) {
        _this.setState({
          selectedItem: selectedItem.slice(0, selectedItem.length - 1)
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputChange", function (event) {
      _this.setState({
        inputValue: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (item) {
      var selectedItem = _this.state.selectedItem;

      if (selectedItem.indexOf(item) === -1) {
        selectedItem = [].concat(_toConsumableArray(selectedItem), [item]);
      }

      _this.setState({
        inputValue: '',
        selectedItem: selectedItem
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDelete", function (item) {
      return function () {
        _this.setState(function (state) {
          var selectedItem = _toConsumableArray(state.selectedItem);

          selectedItem.splice(selectedItem.indexOf(item), 1);
          return {
            selectedItem: selectedItem
          };
        });
      };
    });

    return _this;
  }

  _createClass(GenericSearch, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          intl = _this$props.intl;
      var _this$state2 = this.state,
          inputValue = _this$state2.inputValue,
          selectedItem = _this$state2.selectedItem;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.searchWrapper
      }, /*#__PURE__*/_react["default"].createElement(_downshift["default"], {
        id: "downshift-simple"
      }, function (_ref2) {
        var getInputProps = _ref2.getInputProps,
            getItemProps = _ref2.getItemProps,
            isOpen = _ref2.isOpen,
            inputValue = _ref2.inputValue,
            selectedItem = _ref2.selectedItem,
            highlightedIndex = _ref2.highlightedIndex;
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: classes.container
        }, renderInput({
          fullWidth: true,
          classes: classes,
          InputProps: getInputProps({
            placeholder: intl.formatMessage({
              id: 'Base.Generic.GenericSearch.search.apis',
              defaultMessage: 'Search APIs'
            })
          })
        }), isOpen ? /*#__PURE__*/_react["default"].createElement(_Paper["default"], {
          className: classes.paper,
          square: true
        }, getSuggestions(inputValue).map(function (suggestion, index) {
          return renderSuggestion({
            suggestion: suggestion,
            index: index,
            itemProps: getItemProps({
              item: suggestion.label
            }),
            highlightedIndex: highlightedIndex,
            selectedItem: selectedItem
          });
        })) : null);
      }));
    }
  }]);

  return GenericSearch;
}(_react["default"].Component);

GenericSearch.propTypes = {
  classes: _propTypes["default"].shape({}).isRequired,
  intl: _propTypes["default"].shape({}).isRequired
};

var _default = (0, _reactIntl.injectIntl)((0, _styles.withStyles)(styles)(GenericSearch));

exports["default"] = _default;