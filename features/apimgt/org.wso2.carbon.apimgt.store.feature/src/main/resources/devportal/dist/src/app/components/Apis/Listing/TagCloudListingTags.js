"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _reactRouterDom = require("react-router-dom");

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _reactIntl = require("react-intl");

var _ApiTagThumb = _interopRequireDefault(require("./ApiTagThumb"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    mainTitle: {
      paddingTop: 10
    },
    mainTitleWrapper: {
      flexGrow: 1
    },
    listContentWrapper: {
      padding: "0 ".concat(theme.spacing(3), "px")
    },
    textWrapper: {
      color: theme.custom.tagCloud.leftMenu.color,
      '& .material-icons': {
        color: theme.custom.tagCloud.leftMenu.color
      }
    },
    linkTextWrapper: {
      color: theme.palette.primary.main
    },
    tagWiseThumbWrapper: {
      display: 'flex'
    },
    filterTitle: {
      fontWeight: 200,
      paddingLeft: theme.spacing(2),
      background: theme.custom.tagCloud.leftMenu.titleBackground,
      color: theme.palette.getContrastText(theme.custom.tagCloud.leftMenu.titleBackground),
      height: theme.custom.infoBar.height,
      alignItems: 'center',
      display: 'flex'
    },
    mainPageList: {
      display: 'flex'
    },
    mainPageAllApis: {
      width: '100%'
    }
  };
});
/**
 * Shared listing page
 *
 * @class TagCloudListing
 * @extends {Component}
 */

function TagCloudListingTags(props) {
  var classes = useStyles();
  var theme = (0, _styles.useTheme)();
  var history = (0, _reactRouterDom.useHistory)();
  var _theme$custom$tagWise = theme.custom.tagWise,
      key = _theme$custom$tagWise.key,
      active = _theme$custom$tagWise.active,
      style = _theme$custom$tagWise.style,
      showAllApis = _theme$custom$tagWise.showAllApis;
  var tagWiseURL = '/apis?offset=0&query=tag';
  var allTags = props.allTags,
      mainPage = props.mainPage;
  var apisTagCloudGroup = null;

  if (allTags.count !== 0) {
    if (allTags !== null) {
      apisTagCloudGroup = allTags.filter(function (item) {
        return active === true && item.value.split(key).length > 1;
      });
    }

    if (apisTagCloudGroup && apisTagCloudGroup.length > 0) {// const tagLink = tagWiseURL + ':' + apisTagCloudGroup[0].value;
      // if (style === 'fixed-left') history.push(tagLink);
    }
  }
  /**
   *
   * @inheritdoctheme
   * @returns {React.Component} @inheritdoc
   * @memberof TagCloudListing
   */


  return apisTagCloudGroup && apisTagCloudGroup.length > 0 ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !mainPage && /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h6",
    gutterBottom: true,
    className: classes.filterTitle
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    defaultMessage: "Api Groups",
    id: "Apis.Listing.TagCloudListingTags.title"
  })), /*#__PURE__*/_react["default"].createElement(_List["default"], {
    component: "nav",
    "aria-label": "main mailbox folders",
    className: (0, _classnames["default"])(_defineProperty({}, classes.mainPageList, mainPage))
  }, Object.keys(apisTagCloudGroup).map(function (key) {
    return /*#__PURE__*/_react["default"].createElement(_ApiTagThumb["default"], {
      key: key,
      tag: apisTagCloudGroup[key],
      path: tagWiseURL,
      style: style,
      mainPage: mainPage
    });
  })), showAllApis && /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])(_defineProperty({}, classes.mainPageAllApis, mainPage))
  }, /*#__PURE__*/_react["default"].createElement(_Divider["default"], null), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "apis/",
    className: classes.textWrapper
  }, /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
    button: true
  }, /*#__PURE__*/_react["default"].createElement(_ListItemIcon["default"], null, /*#__PURE__*/_react["default"].createElement(_Icon["default"], null, "label")), /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
    primary: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      defaultMessage: "All Apis",
      id: "Apis.Listing.TagCloudListingTags.allApis"
    })
  }))))) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !mainPage && /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h6",
    gutterBottom: true,
    className: classes.filterTitle
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    defaultMessage: "Api Groups",
    id: "Apis.Listing.TagCloudListingTags.title"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.mainTitle
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "subtitle1",
    gutterBottom: true,
    align: "center"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    defaultMessage: "API groups cannot be found",
    id: "Apis.Listing.TagCloudListingTags.tagsNotFound"
  })), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "apis/",
    className: classes.linkTextWrapper
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "subtitle1",
    gutterBottom: true,
    align: "center"
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    defaultMessage: "All Apis",
    id: "Apis.Listing.TagCloudListingTags.allApis"
  })))));
}

TagCloudListingTags.propTypes = {
  classes: _propTypes["default"].shape({}).isRequired,
  theme: _propTypes["default"].shape({}).isRequired,
  allTags: _propTypes["default"].shape({}).isRequired
};
var _default = TagCloudListingTags;
exports["default"] = _default;