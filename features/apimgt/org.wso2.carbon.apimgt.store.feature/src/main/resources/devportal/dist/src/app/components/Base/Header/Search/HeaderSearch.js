"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactAutosuggest = _interopRequireDefault(require("react-autosuggest"));

var _styles = require("@material-ui/core/styles");

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _InfoOutlined = _interopRequireDefault(require("@material-ui/icons/InfoOutlined"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _reactIntl = require("react-intl");

var _SearchUtils = require("./SearchUtils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var styles = function styles(theme) {
  var _selectRoot;

  return {
    container: {
      flexGrow: 0
    },
    smContainer: {
      position: 'absolute'
    },
    suggestionsContainerOpen: {
      display: 'block',
      position: 'absolute',
      width: '517px',
      zIndex: theme.zIndex.modal + 1,
      backgroundColor: theme.custom.appBar.searchInputActiveBackground
    },
    suggestion: {
      display: 'block'
    },
    suggestionsList: {
      margin: 0,
      padding: 0,
      listStyleType: 'none',
      '& span, & p, & svg': {
        color: theme.palette.getContrastText(theme.custom.appBar.searchInputBackground)
      }
    },
    inputRoot: {
      flexDirection: 'row'
    },
    searchBoxWrap: {
      display: 'flex'
    },
    input: {
      width: '280px',
      background: theme.custom.appBar.searchInputBackground,
      color: theme.palette.getContrastText(theme.custom.appBar.searchInputBackground),
      '-webkit-transition': 'all .35s ease-in-out',
      transition: 'all .35s ease-in-out',
      padding: '5px 5px 5px 5px',
      minHeight: '40px'
    },
    inputFocused: {
      width: '400px',
      background: theme.custom.appBar.searchInputActiveBackground,
      color: theme.palette.getContrastText(theme.custom.appBar.searchInputActiveBackground),
      padding: '5px 5px 5px 5px'
    },
    searchBox: {
      padding: '5px 5px 5px 5px'
    },
    selectRoot: (_selectRoot = {
      background: theme.custom.appBar.searchInputBackground,
      borderRight: '1px solid rgba(0, 0, 0, 0.42)',
      minHeight: '40px',
      padding: '5px 5px 5px 15px'
    }, _defineProperty(_selectRoot, "background", theme.custom.appBar.searchInputBackground), _defineProperty(_selectRoot, "color", theme.palette.getContrastText(theme.custom.appBar.searchInputBackground)), _selectRoot),
    infoButton: {
      margin: theme.spacing(1),
      color: theme.palette.getContrastText(theme.custom.appBar.background)
    },
    emptyContainer: {
      flexGrow: 1
    },
    InfoToolTip: {
      backgroundColor: theme.custom.appBar.searchInputBackground,
      color: theme.palette.getContrastText(theme.custom.appBar.searchInputBackground),
      maxWidth: 249,
      fontSize: theme.typography.pxToRem(14),
      fontWeight: '400',
      border: '1px solid #dadde9',
      borderRadius: '5px',
      padding: '15px 10px 0 18px'
    }
  };
};
/**
 * Render search bar in top AppBar
 *
 * @class HeaderSearch
 * @extends {React.Component}
 */


var HeaderSearch = /*#__PURE__*/function (_React$Component) {
  _inherits(HeaderSearch, _React$Component);

  var _super = _createSuper(HeaderSearch);

  /**
   *Creates an instance of HeaderSearch.
   * @param {Object} props @ignore
   * @memberof HeaderSearch
   */
  function HeaderSearch(props) {
    var _this;

    _classCallCheck(this, HeaderSearch);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "suggestionSelected", false);

    _this.state = {
      searchText: '',
      lcstate: '',
      suggestions: [],
      isLoading: false
    };
    _this.handleSuggestionsFetchRequested = _this.handleSuggestionsFetchRequested.bind(_assertThisInitialized(_this));
    _this.handleSuggestionsClearRequested = _this.handleSuggestionsClearRequested.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleDropDownChange = _this.handleDropDownChange.bind(_assertThisInitialized(_this));
    _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_this));
    _this.clearOnBlur = _this.clearOnBlur.bind(_assertThisInitialized(_this));
    _this.renderSuggestionsContainer = _this.renderSuggestionsContainer.bind(_assertThisInitialized(_this));
    _this.onSuggestionSelected = _this.onSuggestionSelected.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * To provide accessibility for Enter key upon suggestion selection
   * @param {React.SyntheticEvent} event event
   * @param {Object} suggestion This is either API object or document coming from search API call
   */


  _createClass(HeaderSearch, [{
    key: "onSuggestionSelected",
    value: function onSuggestionSelected(event, _ref) {
      var suggestion = _ref.suggestion;
      this.suggestionSelected = true;
      var history = this.props.history;

      if (event.key === 'Enter') {
        var path = suggestion.type === 'API' ? "/apis/".concat(suggestion.id, "/overview") : "/apis/".concat(suggestion.apiUUID, "/documents/").concat(suggestion.id, "/details");
        history.push(path);
      }
    }
    /**
     * On enter pressed after giving a search text
     * @param event
     */

  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      if (event.key === 'Enter' && !this.suggestionSelected) {
        var history = this.props.history;
        var lcstate = this.state.lcstate;
        history.push('/apis/search?query=' + (0, _SearchUtils.buildSearchQuery)(event.target.value, lcstate));
      }

      this.suggestionSelected = false;
    }
  }, {
    key: "handleSuggestionsFetchRequested",

    /**
     * Fetch suggestions list for the user entered input value
     *
     * @param {String} { value }
     * @memberof HeaderSearch
     */
    value: function handleSuggestionsFetchRequested(_ref2) {
      var _this2 = this;

      var value = _ref2.value;
      var lcstate = this.state.lcstate;
      this.setState({
        isLoading: true
      });
      (0, _SearchUtils.getSuggestions)(value, lcstate).then(function (body) {
        _this2.setState({
          isLoading: false,
          suggestions: body.obj.list
        });
      });
    }
    /**
     * Handle the suggestions clear Synthetic event
     *
     * @memberof HeaderSearch
     */

  }, {
    key: "handleSuggestionsClearRequested",
    value: function handleSuggestionsClearRequested() {
      this.setState({
        suggestions: []
      });
    }
    /**
     * On change search input element
     *
     * @param {React.SyntheticEvent} event ReactDOM event
     * @param {String} { newValue } Changed value
     * @memberof HeaderSearch
     */

  }, {
    key: "handleChange",
    value: function handleChange(event, _ref3) {
      var newValue = _ref3.newValue;
      this.setState({
        searchText: newValue
      });
    }
    /**
     * On change of lcstate drop down
     *
     * @param {React.SyntheticEvent} event ReactDOM event
     * @param {String} { newValue } Changed value
     * @memberof HeaderSearch
     */

  }, {
    key: "handleDropDownChange",
    value: function handleDropDownChange(event) {
      var searchText = this.state.searchText;
      this.setState({
        lcstate: event.target.value
      });
      var history = this.props.history;

      if (event.target.value) {
        history.push('/apis/search?query=' + (0, _SearchUtils.buildSearchQuery)(searchText, event.target.value));
      } else {
        history.push('/apis/');
      }
    }
    /**
     *
     * When search input is focus out (Blur), Clear the input text to accept brand new search
     * If Search input is show in responsive mode, On blur search input, hide the input element and show the search icon
     * @memberof HeaderSearch
     */

  }, {
    key: "clearOnBlur",
    value: function clearOnBlur() {
      var _this$props = this.props,
          smSearch = _this$props.smSearch,
          toggleSmSearch = _this$props.toggleSmSearch;

      if (smSearch) {
        toggleSmSearch();
      } else {
        this.setState({
          lcstate: '',
          searchText: ''
        });
      }
    }
    /**
     *
     *
     * @param {*} options
     * @returns
     * @memberof HeaderSearch
     */

  }, {
    key: "renderSuggestionsContainer",
    value: function renderSuggestionsContainer(options) {
      var containerProps = options.containerProps,
          children = options.children;
      var isLoading = this.state.isLoading;
      return isLoading ? null : /*#__PURE__*/_react["default"].createElement(_Paper["default"], _extends({}, containerProps, {
        square: true
      }), children);
    }
    /**
     *
     * @inheritdoc
     * @returns {React.Component} @inheritdoc
     * @memberof HeaderSearch
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          intl = _this$props2.intl,
          classes = _this$props2.classes,
          smSearch = _this$props2.smSearch;
      var _this$state = this.state,
          searchText = _this$state.searchText,
          lcstate = _this$state.lcstate,
          isLoading = _this$state.isLoading,
          suggestions = _this$state.suggestions;
      var autoFocus = false;
      var responsiveContainer = classes.container;

      if (smSearch) {
        autoFocus = true;
        responsiveContainer = classes.smContainer;
      }

      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactAutosuggest["default"], {
        theme: {
          container: responsiveContainer,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion
        },
        suggestions: suggestions,
        renderInputComponent: _SearchUtils.renderInput,
        onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
        onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
        getSuggestionValue: _SearchUtils.getSuggestionValue,
        renderSuggestion: _SearchUtils.renderSuggestion,
        renderSuggestionsContainer: this.renderSuggestionsContainer,
        onSuggestionSelected: this.onSuggestionSelected,
        inputProps: {
          autoFocus: autoFocus,
          classes: classes,
          placeholder: intl.formatMessage({
            id: 'Base.Header.headersearch.HeaderSearch.search_api.tooltip',
            defaultMessage: 'Search APIs'
          }),
          value: searchText,
          lcstate: lcstate,
          onChange: this.handleChange,
          onDropDownChange: this.handleDropDownChange,
          onKeyDown: this.onKeyDown,
          onBlur: this.clearOnBlur,
          isLoading: isLoading
        }
      }), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
        interactive: true,
        placement: "top",
        classes: {
          tooltip: classes.InfoToolTip
        },
        title: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Base.Header.headersearch.HeaderSearch.tooltip.title",
          defaultMessage: "Search Options"
        }), /*#__PURE__*/_react["default"].createElement("ol", {
          style: {
            marginLeft: '-20px',
            marginTop: '5px'
          }
        }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Base.Header.headersearch.HeaderSearch.tooltip.option1",
          defaultMessage: "By API Name [Default]"
        })), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Base.Header.headersearch.HeaderSearch.tooltip.option2",
          defaultMessage: "By API Provider [ Syntax - provider:xxxx ]"
        })), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Base.Header.headersearch.HeaderSearch.tooltip.option3",
          defaultMessage: "By API Version [ Syntax - version:xxxx ]"
        })), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Base.Header.headersearch.HeaderSearch.tooltip.option4",
          defaultMessage: "By Context [ Syntax - context:xxxx ]"
        })), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Base.Header.headersearch.HeaderSearch.tooltip.option5",
          defaultMessage: "By Description [ Syntax - description:xxxx ]"
        })), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Base.Header.headersearch.HeaderSearch.tooltip.option6",
          defaultMessage: "By Tags [ Syntax - tags:xxxx ]"
        })), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Base.Header.headersearch.HeaderSearch.tooltip.option7",
          defaultMessage: "By Sub-Context [ Syntax - subcontext:xxxx ]"
        })), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Base.Header.headersearch.HeaderSearch.tooltip.option8",
          defaultMessage: "By Documentation Content [ Syntax - doc:xxxx ]"
        })), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Base.Header.headersearch.HeaderSearch.tooltip.option9",
          defaultMessage: "By Microgateway Label [ Syntax - label:xxxx ]"
        })), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "Base.Header.headersearch.HeaderSearch.tooltip.option10",
          defaultMessage: "By API Properties [Syntax - property_name:property_value]"
        }))))
      }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
        className: classes.infoButton
      }, /*#__PURE__*/_react["default"].createElement(_InfoOutlined["default"], null))), /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.emptyContainer
      }));
    }
  }]);

  return HeaderSearch;
}(_react["default"].Component);

HeaderSearch.defaultProps = {
  smSearch: false,
  toggleSmSearch: undefined
};
HeaderSearch.propTypes = {
  classes: _propTypes["default"].instanceOf(Object).isRequired,
  smSearch: _propTypes["default"].bool,
  toggleSmSearch: _propTypes["default"].func,
  history: _propTypes["default"].shape({
    push: _propTypes["default"].func
  }).isRequired,
  intl: _propTypes["default"].shape({
    formatMessage: _propTypes["default"].func
  }).isRequired
};

var _default = (0, _reactIntl.injectIntl)((0, _reactRouterDom.withRouter)((0, _styles.withStyles)(styles)(HeaderSearch)));

exports["default"] = _default;