"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _APIClientFactory = _interopRequireDefault(require("./APIClientFactory"));

var _Utils = _interopRequireDefault(require("./Utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * This class contains tenant related api requests
 */
var Tenants =
/**
 * @inheritdoc
 */
function Tenants() {
  var _this = this;

  _classCallCheck(this, Tenants);

  _defineProperty(this, "getTenantsByState", function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'active';
    return _this.client.then(function (client) {
      return client.apis.tenants.get_tenants({
        state: state
      });
    });
  });

  this.client = new _APIClientFactory["default"]().getAPIClient(_Utils["default"].getEnvironment().label).client;
}
/**
 * Gets tenants by state. If no state is passed it returns tenants who are active
 * @param {String} state tenant state either active or inactive
 * @memberof Tenants
 * @returns {promise} tenants
 */
;

var _default = Tenants;
exports["default"] = _default;