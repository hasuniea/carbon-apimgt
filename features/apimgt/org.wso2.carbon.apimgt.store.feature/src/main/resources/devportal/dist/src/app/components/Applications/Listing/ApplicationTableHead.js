"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TableCell = _interopRequireDefault(require("@material-ui/core/TableCell"));

var _TableHead = _interopRequireDefault(require("@material-ui/core/TableHead"));

var _TableRow = _interopRequireDefault(require("@material-ui/core/TableRow"));

var _TableSortLabel = _interopRequireDefault(require("@material-ui/core/TableSortLabel"));

var _reactIntl = require("react-intl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @inheritdoc
 * @class ApplicationTableHead
 * @extends {Component}
 */
var applicationTableHead = function applicationTableHead(props) {
  var createSortHandler = function createSortHandler(property) {
    return function (event) {
      props.onRequestSort(event, property);
    };
  };

  var columnData = [{
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      id: "Applications.Listing.ApplicationTableHead.name",
      defaultMessage: "Name"
    }),
    sorting: true
  }, {
    id: 'owner',
    numeric: false,
    disablePadding: false,
    label: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      id: "Applications.Listing.ApplicationTableHead.owner",
      defaultMessage: "Owner"
    }),
    sorting: true
  }, {
    id: 'throttlingTier',
    numeric: false,
    disablePadding: false,
    label: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      id: "Applications.Listing.ApplicationTableHead.policy",
      defaultMessage: "Policy"
    }),
    sorting: true
  }, {
    id: 'workflowStatus',
    numeric: false,
    disablePadding: false,
    label: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      id: "Applications.Listing.ApplicationTableHead.workflow.status",
      defaultMessage: "Workflow Status"
    }),
    sorting: true
  }, {
    id: 'subscriptions',
    numeric: false,
    disablePadding: false,
    label: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      id: "Applications.Listing.ApplicationTableHead.subscriptions",
      defaultMessage: "Subscriptions"
    }),
    sorting: true
  }, {
    id: 'actions',
    numeric: false,
    disablePadding: false,
    label: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      id: "Applications.Listing.ApplicationTableHead.actions",
      defaultMessage: "Actions"
    }),
    sorting: false
  }];
  var order = props.order,
      orderBy = props.orderBy;
  return /*#__PURE__*/_react["default"].createElement(_TableHead["default"], null, /*#__PURE__*/_react["default"].createElement(_TableRow["default"], null, columnData.map(function (column) {
    return /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
      key: column.id,
      align: "left",
      sortDirection: orderBy === column.id ? order : false
    }, column.sorting ? /*#__PURE__*/_react["default"].createElement(_TableSortLabel["default"], {
      active: orderBy === column.id,
      direction: order,
      onClick: createSortHandler(column.id)
    }, column.label) : column.label);
  })));
};

applicationTableHead.propTypes = {
  onRequestSort: _propTypes["default"].func.isRequired,
  order: _propTypes["default"].string.isRequired,
  orderBy: _propTypes["default"].string.isRequired
};
var _default = applicationTableHead;
exports["default"] = _default;