"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _muiDatatables = _interopRequireDefault(require("mui-datatables"));

var _reactIntl = require("react-intl");

var _api = _interopRequireDefault(require("AppData/api"));

var _NoApi = _interopRequireDefault(require("AppComponents/Apis/Listing/NoApi"));

var _Loading = _interopRequireDefault(require("AppComponents/Base/Loading/Loading"));

var _ResourceNotFound = _interopRequireDefault(require("../../Base/Errors/ResourceNotFound"));

var _SubscriptionPolicySelect = _interopRequireDefault(require("./SubscriptionPolicySelect"));

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
 *
 *
 * @param {*} theme
 */
var styles = function styles(theme) {
  return {
    root: {
      display: 'flex'
    },
    buttonGap: {
      marginRight: 10
    }
  };
};
/**
 *
 *
 * @class APICardView
 * @extends {React.Component}
 */


var APICardView = /*#__PURE__*/function (_React$Component) {
  _inherits(APICardView, _React$Component);

  var _super = _createSuper(APICardView);

  function APICardView(props) {
    var _this;

    _classCallCheck(this, APICardView);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "getData", function () {
      var intl = _this.props.intl;

      _this.xhrRequest().then(function (data) {
        var body = data.body;
        var list = body.list,
            pagination = body.pagination;
        var total = pagination.total;
        _this.count = total;

        _this.setState({
          data: _this.updateUnsubscribedAPIsList(list)
        });
      })["catch"](function (error) {
        var response = error.response;
        var setTenantDomain = _this.props.setTenantDomain;

        if (response && response.body.code === 901300) {
          setTenantDomain('INVALID');
          Alert.error(intl.formatMessage({
            defaultMessage: 'Invalid tenant domain',
            id: 'Apis.Listing.ApiTableView.invalid.tenant.domain'
          }));
        } else {
          Alert.error(intl.formatMessage({
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
      var searchText = _this.props.searchText;

      var _assertThisInitialize = _assertThisInitialized(_this),
          page = _assertThisInitialize.page,
          rowsPerPage = _assertThisInitialize.rowsPerPage;

      var api = new _api["default"]();

      if (searchText && searchText !== '') {
        return api.getAllAPIs({
          query: searchText,
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
          data: _this.updateUnsubscribedAPIsList(list)
        });
      })["catch"](function (e) {
        Alert.error(intl.formatMessage({
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

  _createClass(APICardView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getData();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          subscriptions = _this$props.subscriptions,
          searchText = _this$props.searchText;

      if (subscriptions.length !== prevProps.subscriptions.length) {
        this.getData();
      } else if (searchText !== prevProps.searchText) {
        this.page = 0;
        this.getData();
      }
    } // get data

  }, {
    key: "getIdsOfSubscribedEntities",

    /**
        *
        * Get List of the Ids of all APIs that have been already subscribed
        *
        * @returns {*} Ids of respective APIs
        * @memberof APICardView
        */
    value: function getIdsOfSubscribedEntities() {
      var subscriptions = this.props.subscriptions; // Get arrays of the API Ids and remove all null/empty references by executing 'fliter(Boolean)'

      var subscribedAPIIds = subscriptions.map(function (sub) {
        return sub.apiId;
      }).filter(Boolean);
      return subscribedAPIIds;
    }
    /**
    *
    * Update list of unsubscribed APIs
    * @memberof APICardView
    */

  }, {
    key: "updateUnsubscribedAPIsList",
    value: function updateUnsubscribedAPIsList(list) {
      var subscribedIds = this.getIdsOfSubscribedEntities();

      for (var i = 0; i < list.length; i++) {
        if (!subscribedIds.includes(list[i].id) && !list[i].advertiseInfo.advertised && list[i].isSubscriptionAvailable) {} else {
          list[i].throttlingPolicies = null;
        }
      }

      return list; //return unsubscribedAPIList;
    }
    /**
     *
     *
     * @returns
     * @memberof APICardView
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var apisNotFound = this.props.apisNotFound;
      var _this$state = this.state,
          loading = _this$state.loading,
          data = _this$state.data;
      var page = this.page,
          count = this.count,
          rowsPerPage = this.rowsPerPage;

      if (apisNotFound) {
        return /*#__PURE__*/_react["default"].createElement(_ResourceNotFound["default"], null);
      }

      var _this$props2 = this.props,
          theme = _this$props2.theme,
          _handleSubscribe = _this$props2.handleSubscribe,
          applicationId = _this$props2.applicationId,
          intl = _this$props2.intl;
      var columns = [{
        name: 'id',
        label: intl.formatMessage({
          id: 'Apis.Listing.APIList.id',
          defaultMessage: 'Id'
        }),
        options: {
          display: 'excluded'
        }
      }, {
        name: 'name',
        label: intl.formatMessage({
          id: 'Apis.Listing.APIList.name',
          defaultMessage: 'Name'
        })
      }, {
        name: 'throttlingPolicies',
        label: intl.formatMessage({
          id: 'Apis.Listing.APIList.policy',
          defaultMessage: 'Policy'
        }),
        options: {
          customBodyRender: function customBodyRender(value, tableMeta, updateValue) {
            if (tableMeta.rowData) {
              var apiId = tableMeta.rowData[0];
              var policies = value;

              if (!policies) {
                return intl.formatMessage({
                  id: 'Apis.Listing.APICardView.already.subscribed',
                  defaultMessage: 'Subscribed'
                });
              }

              return /*#__PURE__*/_react["default"].createElement(_SubscriptionPolicySelect["default"], {
                key: apiId,
                policies: policies,
                apiId: apiId,
                handleSubscribe: function handleSubscribe(app, api, policy) {
                  return _handleSubscribe(app, api, policy);
                },
                applicationId: applicationId
              });
            }
          }
        }
      }];
      var options = {
        search: false,
        title: false,
        filter: false,
        print: false,
        download: false,
        viewColumns: false,
        customToolbar: false,
        responsive: 'stacked',
        serverSide: true,
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

      if (loading) {
        return /*#__PURE__*/_react["default"].createElement(_Loading["default"], null);
      }

      if (data && data.length === 0 || !data) {
        return /*#__PURE__*/_react["default"].createElement(_NoApi["default"], null);
      }

      return /*#__PURE__*/_react["default"].createElement(_muiDatatables["default"], {
        title: '',
        data: data,
        columns: columns,
        options: options
      });
    }
  }]);

  return APICardView;
}(_react["default"].Component);

APICardView.propTypes = {
  classes: _propTypes["default"].object.isRequired,
  theme: _propTypes["default"].object.isRequired,
  intl: _propTypes["default"].shape({
    formatMessage: _propTypes["default"].func
  }).isRequired
};

var _default = (0, _reactIntl.injectIntl)((0, _styles.withStyles)(styles, {
  withTheme: true
})(APICardView));

exports["default"] = _default;