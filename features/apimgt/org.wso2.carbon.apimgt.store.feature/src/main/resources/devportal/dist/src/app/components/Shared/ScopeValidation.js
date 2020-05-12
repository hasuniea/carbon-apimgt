"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resourcePaths = exports.resourceMethods = exports.ScopeValidation = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _AuthManager = _interopRequireDefault(require("../../data/AuthManager"));

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

var resourcePaths = {
  APIS: '/apis',
  SINGLE_API: '/apis/{apiId}',
  API_SWAGGER: '/apis/{apiId}/swagger',
  API_WSDL: '/apis/{apiId}/wsdl',
  API_GW_CONFIG: '/apis/{apiId}/gateway-config',
  API_THUMBNAIL: '/apis/{apiId}/thumbnail',
  API_COPY: '/apis/copy-api',
  API_LC_HISTORY: '/apis/{apiId}/lifecycle-history',
  API_CHANGE_LC: '/apis/change-lifecycle',
  API_LC: '/apis/{apiId}/lifecycle',
  API_LC_PENDING_TASK: '/apis/{apiId}/lifecycle/lifecycle-pending-task',
  API_DEF: '/apis/import-definition',
  API_VALIDATE_DEF: '/apis/validate-definition',
  API_DOCS: '/apis/{apiId}/documents',
  API_DOC: "'/apis/{apiId}/documents/{documentId}'",
  API_DOC_CONTENT: "'/apis/{apiId}/documents/{documentId}/content'",
  APPLICATIONS: '/applications',
  SINGLE_APPLICATION: '/applications/{applicationId}',
  APPLICATION_GENERATE_KEYS: '/applications/{applicationId}/generate-keys',
  APPLICATION_GENERATE_KEY_TYPE: '/applications/{applicationId}/keys/{keyType}',
  EXPORT_APIS: '/export/apis',
  IMPORT_APIS: '/import/apis',
  SUBSCRIPTION: '/subscriptions',
  SINGLE_SUBSCRIPTION: '/subscriptions/{subscriptionId}',
  SUBSCRIPTIONS: '/subscriptions',
  BLOCK_SUBSCRIPTION: '/subscriptions/block-subscription:',
  UNBLOCK_SUBSCRIPTION: '/subscriptions/unblock-subscription',
  POLICIES: "'/policies/{tierLevel}'",
  POLICY: "'/policies/{tierLevel}/{tierName}'",
  ENDPOINTS: '/endpoints',
  ENDPOINT: '/endpoints/{endpointId}',
  LABLES: '/labels',
  WORKFLOW: '/workflows/{workflowReferenceId}',
  SERVICE_DISCOVERY: '/external-resources/services'
};
exports.resourcePaths = resourcePaths;
var resourceMethods = {
  POST: 'post',
  PUT: 'put',
  GET: 'get',
  DELETE: 'delete'
};
/**
 * Show element iff user has proper scope for the view/action
 * @class ScopeValidation
 * @extends {React.Component}
 */

exports.resourceMethods = resourceMethods;

var ScopeValidation = /*#__PURE__*/function (_React$Component) {
  _inherits(ScopeValidation, _React$Component);

  var _super = _createSuper(ScopeValidation);

  /**
   * Creates an instance of ScopeValidation.
   * @param {any} props @inheritDoc
   * @memberof ScopeValidation
   */
  function ScopeValidation(props) {
    var _this;

    _classCallCheck(this, ScopeValidation);

    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }
  /**
   * @inheritDoc
   * @memberof ScopeValidation
   */


  _createClass(ScopeValidation, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props = this.props,
          resourcePath = _this$props.resourcePath,
          resourceMethod = _this$props.resourceMethod;

      var hasScope = _AuthManager["default"].hasScopes(resourcePath, resourceMethod);

      if (hasScope) {
        hasScope.then(function (haveScope) {
          _this2.setState({
            haveScope: haveScope
          });
        });
      }
    }
    /**
     * @inheritDoc
     * @returns {React.Component} Return react component
     * @memberof ScopeValidation
     */

  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;

      if (this.state.haveScope) {
        return children || null;
      }

      return null;
    }
  }]);

  return ScopeValidation;
}(_react["default"].Component);

exports.ScopeValidation = ScopeValidation;
ScopeValidation.propTypes = {
  children: _propTypes["default"].node.isRequired,
  resourcePath: _propTypes["default"].string.isRequired,
  resourceMethod: _propTypes["default"].string.isRequired
};