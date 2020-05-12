"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _Settings = require("Settings");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ConfigManager = /*#__PURE__*/function () {
  function ConfigManager() {
    _classCallCheck(this, ConfigManager);
  }

  _createClass(ConfigManager, null, [{
    key: "_getPromisedConfigs",

    /**
     * get promised config and update the configMap
     * @param configPath: Path to read configs from
     * @returns {Promise Object}: promised config
     * @private
     */
    value: function _getPromisedConfigs(configPath) {
      var promisedConfig = ConfigManager._promisedConfigMap.get(configPath);

      if (promisedConfig) {
        return promisedConfig;
      }

      var origin = window.location.origin;
      var requestUrl = origin + configPath;
      promisedConfig = _axios["default"].get(requestUrl);

      ConfigManager._promisedConfigMap.set(configPath, promisedConfig);

      return promisedConfig;
    }
    /**
     * get configurations from server: deployment.yaml
     * @returns {Object}: configuration object
     */

  }, {
    key: "getConfigs",
    value: function getConfigs() {
      return {
        environments: ConfigManager._getPromisedConfigs(ConfigManager.ConfigRequestPaths.ENVIRONMENT_CONFIG_PATH),
        features: ConfigManager._getPromisedConfigs(ConfigManager.ConfigRequestPaths.FEATURE_LIST_PATH)
      };
    }
  }]);

  return ConfigManager;
}();
/**
 * ConfigRequestPaths: Configuration requesting url paths
 * @type {Object}
 */


ConfigManager.ConfigRequestPaths = {
  ENVIRONMENT_CONFIG_PATH: _Settings.app.context + '/site/public/theme/temporary_environments_config.json',
  FEATURE_LIST_PATH: _Settings.app.context + '/site/public/theme/temporary_features_config.json'
};
/**
 * The map of single instance promised configs objects
 * {key}: ConfigRequestPaths
 * {value}: promised config
 * @type {Map}
 * @private
 */

ConfigManager._promisedConfigMap = new Map();
/* eslint-enable no-underscore-dangle */

var _default = ConfigManager;
exports["default"] = _default;