"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _styles = require("@material-ui/core/styles");

var _muiDatatables = _interopRequireDefault(require("mui-datatables"));

var _reactIntl = require("react-intl");

var _lodash = _interopRequireDefault(require("lodash.merge"));

var _lodash2 = _interopRequireDefault(require("lodash.clonedeep"));

var _queryString = _interopRequireDefault(require("query-string"));

var _api = _interopRequireDefault(require("AppData/api"));

var _styles2 = require("@material-ui/styles");

var _Config = _interopRequireDefault(require("Config"));

var _StarRatingBar = _interopRequireDefault(require("AppComponents/Apis/Listing/StarRatingBar"));

var _withSettingsContext = _interopRequireDefault(require("AppComponents/Shared/withSettingsContext"));

var _Loading = _interopRequireDefault(require("AppComponents/Base/Loading/Loading"));

var _Alert = _interopRequireDefault(require("AppComponents/Shared/Alert"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _CustomIcon = _interopRequireDefault(require("AppComponents/Shared/CustomIcon"));

var _defaultTheme = _interopRequireDefault(require("../../../../defaultTheme"));

var _ImageGenerator = _interopRequireDefault(require("./ImageGenerator"));

var _ApiThumb = _interopRequireDefault(require("./ApiThumb"));

var _DocThumb = _interopRequireDefault(require("./DocThumb"));

var _ApiContext = require("../Details/ApiContext");

var _NoApi = _interopRequireDefault(require("./NoApi"));

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

var styles = function styles(theme) {
  return {
    rowImageOverride: {
      '& .material-icons': {
        marginTop: 5,
        color: "".concat(theme.custom.thumbnail.iconColor, " !important"),
        fontSize: "".concat(theme.custom.thumbnail.listViewIconSize, "px !important")
      }
    },
    apiNameLink: {
      display: 'flex',
      alignItems: 'center',
      '& span': {
        marginLeft: theme.spacing(1)
      },
      color: theme.palette.getContrastText(theme.custom.listView.tableBodyEvenBackgrund)
    }
  };
};
/**
 * Table view for api listing
 *
 * @class ApiTableView
 * @extends {React.Component}
 */


var ApiTableView = /*#__PURE__*/function (_React$Component) {
  _inherits(ApiTableView, _React$Component);

  var _super = _createSuper(ApiTableView);

  /**
   * @inheritdoc
   * @param {*} props properties
   * @memberof ApiTableView
   */
  function ApiTableView(props) {
    var _this;

    _classCallCheck(this, ApiTableView);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "getMuiTheme", function () {
      var _this$props = _this.props,
          gridView = _this$props.gridView,
          theme = _this$props.theme;
      var themeAdditions = {};
      var muiTheme = {
        overrides: {
          MUIDataTable: {
            root: {
              backgroundColor: 'transparent',
              marginLeft: 40,
              marginBottom: 20,
              width: '100%'
            },
            paper: {
              boxShadow: 'none',
              backgroundColor: 'transparent',
              width: '100%'
            },
            tableRoot: {
              border: 'solid 1px #fff',
              '& a': {
                display: 'flex',
                alignItems: 'center'
              },
              '& a > div': {
                paddingRight: 10
              },
              '& td': {
                whiteSpace: 'nowrap'
              },
              '& tr:nth-child(even)': {
                backgroundColor: theme.custom.listView.tableBodyEvenBackgrund,
                '& td': {
                  color: theme.palette.getContrastText(theme.custom.listView.tableBodyEvenBackgrund)
                }
              },
              '& tr:nth-child(odd)': {
                backgroundColor: theme.custom.listView.tableBodyOddBackgrund,
                '& td': {
                  color: theme.palette.getContrastText(theme.custom.listView.tableBodyOddBackgrund)
                }
              },
              '& th': {
                backgroundColor: theme.custom.listView.tableHeadBackground,
                color: theme.palette.getContrastText(theme.custom.listView.tableHeadBackground)
              }
            }
          },
          MUIDataTableBodyCell: {
            root: {
              backgroundColor: 'transparent',
              width: '100%'
            }
          },
          MUIDataTablePagination: {
            root: {
              color: theme.palette.getContrastText(theme.palette.background["default"])
            }
          },
          MuiMenuItem: {
            root: {
              color: theme.palette.getContrastText(theme.palette.background["default"])
            }
          },
          MUIDataTableToolbar: {
            root: {
              '& svg': {
                color: theme.palette.getContrastText(theme.palette.background["default"])
              }
            }
          }
        }
      };

      if (gridView) {
        themeAdditions = {
          overrides: {
            MUIDataTable: {
              tableRoot: {
                display: 'block',
                border: 'none',
                '& tbody': {
                  display: 'flex',
                  flexWrap: 'wrap',
                  marginLeft: 0
                },
                '& thead': {
                  display: 'none'
                },
                '& tr:nth-child(odd),& tr:nth-child(even)': {
                  display: 'block',
                  marginRight: 5,
                  marginBottom: 5,
                  backgroundColor: 'transparent'
                },
                '& td': {
                  display: 'block',
                  backgroundColor: 'transparent'
                }
              },
              paper: {
                boxShadow: 'none',
                backgroundColor: 'transparent'
              }
            }
          }
        };
      }

      var systemTheme = (0, _lodash["default"])({}, _defaultTheme["default"], _Config["default"], {
        custom: (0, _lodash2["default"])(theme.custom)
      });
      var dataTableTheme = (0, _lodash["default"])({}, muiTheme, systemTheme, themeAdditions);
      return (0, _styles.createMuiTheme)(dataTableTheme);
    });

    _defineProperty(_assertThisInitialized(_this), "getData", function () {
      var intl = _this.props.intl;

      _this.xhrRequest().then(function (data) {
        var body = data.body;
        var list = body.list,
            pagination = body.pagination;
        var total = pagination.total;
        _this.count = total;

        _this.setState({
          data: list
        });
      })["catch"](function (error) {
        var response = error.response;
        var setTenantDomain = _this.props.setTenantDomain;

        if (response && response.body.code === 901300) {
          setTenantDomain('INVALID');

          _Alert["default"].error(intl.formatMessage({
            defaultMessage: 'Invalid tenant domain',
            id: 'Apis.Listing.ApiTableView.invalid.tenant.domain'
          }));
        } else {
          _Alert["default"].error(intl.formatMessage({
            defaultMessage: 'Error While Loading APIs',
            id: 'Apis.Listing.ApiTableView.error.loading'
          }));
        }
      })["finally"](function () {
        _this.setState({
          loading: false
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "xhrRequest", function () {
      var _this$props2 = _this.props,
          query = _this$props2.query,
          selectedTag = _this$props2.selectedTag;

      var _assertThisInitialize = _assertThisInitialized(_this),
          page = _assertThisInitialize.page,
          rowsPerPage = _assertThisInitialize.rowsPerPage;

      var apiType = _this.context.apiType;
      var api = new _api["default"]();
      var searchParam = new URLSearchParams(query);
      var searchQuery = searchParam.get('query');

      if (query && searchQuery !== null) {
        var composeQuery = _queryString["default"].parse(query);

        composeQuery.limit = _this.rowsPerPage;
        composeQuery.offset = page * rowsPerPage;
        return api.search(composeQuery);
      }

      if (selectedTag) {
        return api.getAllAPIs({
          query: 'tag:' + selectedTag,
          limit: _this.rowsPerPage,
          offset: page * rowsPerPage
        });
      } else {
        return api.getAllAPIs({
          limit: _this.rowsPerPage,
          offset: page * rowsPerPage
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "changePage", function (page) {
      var intl = _this.props.intl;
      _this.page = page;

      _this.setState({
        loading: true
      });

      _this.xhrRequest().then(function (data) {
        var body = data.body;
        var list = body.list;

        _this.setState({
          data: list
        });
      })["catch"](function (e) {
        _Alert["default"].error(intl.formatMessage({
          defaultMessage: 'Error While Loading APIs',
          id: 'Apis.Listing.ApiTableView.error.loading'
        }));
      })["finally"](function () {
        _this.setState({
          loading: false
        });
      });
    });

    _this.state = {
      data: null,
      loading: true
    };
    _this.page = 0;
    _this.count = 100;
    _this.rowsPerPage = 10;
    _this.pageType = null;
    return _this;
  }

  _createClass(ApiTableView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.apiType = this.context.apiType;
      this.getData();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props3 = this.props,
          query = _this$props3.query,
          selectedTag = _this$props3.selectedTag;

      if (this.apiType !== this.context.apiType || query !== prevProps.query || prevProps.selectedTag !== selectedTag) {
        this.apiType = this.context.apiType;
        this.getData();
      }
    } // get data

  }, {
    key: "render",

    /**
     * @inheritdoc
     * @returns {Component}x
     * @memberof ApiTableView
     */
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          intl = _this$props4.intl,
          gridView = _this$props4.gridView,
          theme = _this$props4.theme;
      var showRating = theme.custom.social.showRating;
      var loading = this.state.loading;
      var columns = [{
        name: 'id',
        options: {
          display: 'excluded',
          filter: false
        }
      }, {
        name: 'name',
        options: {
          customBodyRender: function customBodyRender(value, tableMeta, updateValue) {
            var tableViewObj = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _this2;

            if (tableMeta.rowData) {
              var artifact = tableViewObj.state.data[tableMeta.rowIndex];
              return /*#__PURE__*/_react["default"].createElement(_ImageGenerator["default"], {
                api: artifact,
                width: 30,
                height: 30
              });
            }
          },
          sort: false,
          filter: false,
          display: 'excluded'
        }
      }, {
        name: 'name',
        label: intl.formatMessage({
          id: 'Apis.Listing.ApiTableView.name',
          defaultMessage: 'Name'
        }),
        options: {
          customBodyRender: function customBodyRender(value, tableMeta, updateValue) {
            var tableViewObj = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _this2;

            if (tableMeta.rowData) {
              var artifact = tableViewObj.state.data[tableMeta.rowIndex];
              var apiName = tableMeta.rowData[2];
              var apiId = tableMeta.rowData[0];
              var classes = _this2.props.classes;

              if (artifact) {
                if (artifact.type === 'DOC') {
                  return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
                    to: '/apis/' + artifact.apiUUID + '/documents',
                    className: classes.apiNameLink
                  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], null, "library_books"), /*#__PURE__*/_react["default"].createElement("span", null, ' ', /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
                    id: "Apis.Listing.TableView.TableView.doc.flag",
                    defaultMessage: "[Doc] "
                  }), ' ', apiName));
                }

                var strokeColor = theme.palette.getContrastText(theme.custom.listView.tableBodyEvenBackgrund);
                return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, _defineProperty({
                  to: '/apis/' + apiId + '/overview',
                  className: classes.rowImageOverride
                }, "className", classes.apiNameLink), /*#__PURE__*/_react["default"].createElement(_CustomIcon["default"], {
                  width: 16,
                  height: 16,
                  icon: "api",
                  strokeColor: strokeColor
                }), /*#__PURE__*/_react["default"].createElement("span", null, apiName));
              }
            }
          },
          sort: false,
          filter: false
        }
      }, {
        name: 'version',
        label: intl.formatMessage({
          id: 'Apis.Listing.ApiTableView.version',
          defaultMessage: 'Version'
        }),
        options: {
          sort: false
        }
      }, {
        name: 'context',
        label: intl.formatMessage({
          id: 'Apis.Listing.ApiTableView.context',
          defaultMessage: 'Context'
        }),
        options: {
          sort: false
        }
      }, {
        name: 'provider',
        label: intl.formatMessage({
          id: 'Apis.Listing.ApiTableView.provider',
          defaultMessage: 'Provider'
        }),
        options: {
          sort: false
        }
      }, {
        name: 'type',
        label: intl.formatMessage({
          id: 'Apis.Listing.ApiTableView.type',
          defaultMessage: 'Type'
        }),
        options: {
          sort: false
        }
      }, {
        name: 'rating',
        label: intl.formatMessage({
          id: 'Apis.Listing.ApiTableView.rating',
          defaultMessage: 'Rating'
        }),
        options: {
          customBodyRender: function customBodyRender(value, tableMeta, updateValue) {
            var tableViewObj = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _this2;

            if (tableMeta.rowData) {
              var artifact = tableViewObj.state.data[tableMeta.rowIndex];

              if (artifact) {
                if (artifact.type !== 'DOC') {
                  var apiId = tableMeta.rowData[0];
                  var avgRating = tableMeta.rowData[8];
                  return /*#__PURE__*/_react["default"].createElement(_StarRatingBar["default"], {
                    apiRating: avgRating,
                    apiId: apiId,
                    isEditable: false,
                    showSummary: false
                  });
                }
              }
            }
          },
          sort: false,
          display: showRating ? 'true' : 'excluded'
        }
      }, {
        name: 'avgRating',
        options: {
          display: 'excluded',
          filter: false
        }
      }];
      var page = this.page,
          count = this.count,
          rowsPerPage = this.rowsPerPage;
      var data = this.state.data;
      var options = {
        filterType: 'dropdown',
        responsive: 'stacked',
        serverSide: true,
        search: false,
        count: count,
        page: page,
        onTableChange: function onTableChange(action, tableState) {
          switch (action) {
            case 'changePage':
              _this2.changePage(tableState.page);

              break;
          }
        },
        selectableRows: 'none',
        rowsPerPage: rowsPerPage,
        onChangeRowsPerPage: function onChangeRowsPerPage(numberOfRows) {
          var page = _this2.page,
              count = _this2.count;

          if (page * numberOfRows > count) {
            _this2.page = 0;
          }

          _this2.rowsPerPage = numberOfRows;

          _this2.getData();
        }
      };

      if (gridView) {
        options.customRowRender = function (data, dataIndex, rowIndex) {
          var tableViewObj = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _this2;
          var artifact = tableViewObj.state.data[dataIndex];

          if (artifact) {
            if (artifact.type === 'DOC') {
              return /*#__PURE__*/_react["default"].createElement("tr", {
                key: rowIndex
              }, /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(_DocThumb["default"], {
                doc: artifact
              })));
            } else {
              return /*#__PURE__*/_react["default"].createElement("tr", {
                key: rowIndex
              }, /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(_ApiThumb["default"], {
                api: artifact
              })));
            }
          }

          return /*#__PURE__*/_react["default"].createElement("span", null);
        };

        options.title = false;
        options.filter = false;
        options.print = false;
        options.download = false;
        options.viewColumns = false;
        options.customToolbar = false;
      } else {
        options.filter = false;
      }

      if (page === 0 && this.count <= rowsPerPage) {
        options.pagination = false;
      } else {
        options.pagination = true;
      }

      if (loading) {
        return /*#__PURE__*/_react["default"].createElement(_Loading["default"], null);
      }

      if (data && data.length === 0 || !data) {
        return /*#__PURE__*/_react["default"].createElement(_NoApi["default"], null);
      }

      return /*#__PURE__*/_react["default"].createElement(_styles.MuiThemeProvider, {
        theme: this.getMuiTheme()
      }, /*#__PURE__*/_react["default"].createElement(_muiDatatables["default"], {
        title: "",
        data: data,
        columns: columns,
        options: options
      }));
    }
  }]);

  return ApiTableView;
}(_react["default"].Component);

ApiTableView.contextType = _ApiContext.ApiContext;

var _default = (0, _withSettingsContext["default"])((0, _reactIntl.injectIntl)((0, _styles2.withTheme)((0, _styles.withStyles)(styles)(ApiTableView))));

exports["default"] = _default;