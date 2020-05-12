"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = LanuageSelector;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _Settings = require("Settings");

var _Hidden = _interopRequireDefault(require("@material-ui/core/Hidden"));

var _Utils = _interopRequireDefault(require("AppData/Utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    formControl: {
      margin: theme.spacing(1),
      minWidth: theme.custom.languageSwitch.minWidth,
      '& > div:before': {
        borderBottom: 'none'
      }
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    },
    listTextSmall: {
      color: theme.palette.getContrastText(theme.custom.appBar.background)
    },
    langText: {
      textIndent: theme.spacing(1)
    }
  };
});

function LanuageSelector() {
  var classes = useStyles();
  var theme = (0, _styles.useTheme)();

  var _React$useState = _react["default"].useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      language = _React$useState2[0],
      setLanuage = _React$useState2[1];

  var _theme$custom$languag = theme.custom.languageSwitch,
      languages = _theme$custom$languag.languages,
      showFlag = _theme$custom$languag.showFlag,
      showText = _theme$custom$languag.showText;
  (0, _react.useEffect)(function () {
    var locale = _Utils["default"].getBrowserLocal();

    var selectedLanguage = localStorage.getItem('language');

    if (!selectedLanguage && languages && languages.length > 0) {
      selectedLanguage = locale;
    }

    setLanuage(selectedLanguage);
  }, []);

  var handleChange = function handleChange(event) {
    var selectedLanguage = event.target.value;
    setLanuage(selectedLanguage);
    localStorage.setItem('language', selectedLanguage);
    window.location.reload();
  };

  return /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    className: classes.formControl
  }, language && /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    value: language,
    onChange: handleChange,
    className: classes.listTextSmall
  }, languages.map(function (lang) {
    return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      value: lang.key
    }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
      display: "flex"
    }, showFlag && /*#__PURE__*/_react["default"].createElement("img", {
      src: "".concat(_Settings.app.context).concat(lang.image),
      alt: lang.key,
      width: "".concat(lang.imageWidth, "px")
    }), /*#__PURE__*/_react["default"].createElement(_Hidden["default"], {
      mdDown: true
    }, showText && /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      variant: "body1",
      className: classes.langText
    }, lang.text))));
  })));
}