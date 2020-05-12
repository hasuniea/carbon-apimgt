"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _rcNotification = _interopRequireDefault(require("rc-notification"));

var _Config = _interopRequireDefault(require("Config"));

var _lodash = _interopRequireDefault(require("lodash.merge"));

var _defaultTheme = _interopRequireDefault(require("../../../defaultTheme"));

var _MuiThemeProvider = _interopRequireDefault(require("@material-ui/core/styles/MuiThemeProvider"));

var _createMuiTheme = _interopRequireDefault(require("@material-ui/core/styles/createMuiTheme"));

var _Message = _interopRequireDefault(require("./Message"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var theme = (0, _createMuiTheme["default"])((0, _lodash["default"])(_defaultTheme["default"], _Config["default"]));
/**
 * Common alerting/message displaying component for Store application, Pre-set vertical: 'top',
 horizontal: 'center' and close action for consistent UX through out the app.
 Alert messages are mounted outside the app's root DOM element
 */

var Alert = /*#__PURE__*/function () {
  /**
   * Creates an instance of Alert.
   * @param {String} message Message which needs to be displayed
   * @param {any} type Message category, i:e Alert, Info, Error ect
   * @param {any} duration Duration of the massage needs to be visible on the page
   * @param {any} onClose Callback function to trigger when message get closed
   * @memberof Alert
   */
  function Alert(message, type, duration, onClose) {
    _classCallCheck(this, Alert);

    this.defaultTop = Alert.defaultTop;
    this.key = Alert.count++;
    this.type = type;
    this.message = message;
    this.onClose = onClose;
    this.duration = duration || Alert.defaultDuration;

    if (typeof duration === 'function') {
      this.onClose = duration;
      this.duration = Alert.defaultDuration;
    }

    this.remove = this.remove.bind(this);
  }
  /**
   * Show the alert message according to the parameters given in the constructor, Using the Alert.messageInstance
   */


  _createClass(Alert, [{
    key: "show",
    value: function show() {
      var _this = this;

      var promisedInstance = this._getMessageInstance();

      var onClose = this.onClose;
      promisedInstance.then(function (instance) {
        instance.notice({
          closable: true,
          onClose: onClose,
          key: _this.key,
          duration: _this.duration,
          content: /*#__PURE__*/_react["default"].createElement(_MuiThemeProvider["default"], {
            theme: theme
          }, /*#__PURE__*/_react["default"].createElement(_Message["default"], {
            handleClose: _this.remove,
            message: _this.message,
            type: _this.type
          }))
        });
      })["catch"](function (error) {
        return console.error('Error while showing alert' + error);
      });
      /* TODO: Remove above console error with logging library error method */
    }
    /**
     * Remove current message from view
     */

  }, {
    key: "remove",
    value: function remove() {
      var _this2 = this;

      var promisedInstance = this._getMessageInstance();

      promisedInstance.then(function (instance) {
        instance.removeNotice(_this2.key);
      });
    }
    /**
     * Return a promise resolving to an instance of RC-Notification which can be use to display a notification on screen
     * @returns {Promise} Promise object with new React component for alert
     * @private
     */

  }, {
    key: "_getMessageInstance",
    value: function _getMessageInstance() {
      return new Promise(function (resolve) {
        if (Alert.messageInstance) {
          resolve(Alert.messageInstance);
        } else {
          _rcNotification["default"].newInstance({
            transitionName: 'move-down',
            style: {
              zIndex: theme.zIndex.snackbar,
              top: 0,
              right: 0,
              marginLeft: '2%',
              position: 'fixed'
            }
          }, function (instance) {
            Alert.messageInstance = instance;
            resolve(Alert.messageInstance);
          });
        }
      });
    }
    /**
     * Can be used to configure the global Alert configurations, Currently support position top alignment and
     * message display duration in seconds
     * If set here , will use in all the places where Alert has been used
     * @param {Object} options i:e {top: '10px', duration: 30}
     */

  }], [{
    key: "config",
    value: function config(options) {
      var top = options.top,
          duration = options.duration;

      if (top !== undefined) {
        Alert.defaultTop = top;
        Alert.messageInstance = null; // delete messageInstance for new defaultTop
      }

      if (duration !== undefined) {
        Alert.defaultDuration = duration;
      }
    }
  }]);

  return Alert;
}();

Alert.messageInstance = null;
/* Class property to hold a RC-Notification instance */

Alert.count = 1;
/* Number of Notifications showed, This is used to generate unique key for each message */

Alert.defaultDuration = 5;
/* In seconds */

Alert.defaultTop = 0;
Alert.CONSTS = {
  INFO: 'info',
  SUCCESS: 'success',
  ERROR: 'error',
  WARN: 'warning',
  LOADING: 'loading'
};
Object.freeze(Alert.CONSTS);
var _default = {
  info: function info(message, duration, onClose) {
    var msg = new Alert(message, Alert.CONSTS.INFO, duration, onClose);
    msg.show();
    return msg;
  },
  success: function success(message, duration, onClose) {
    var msg = new Alert(message, Alert.CONSTS.SUCCESS, duration, onClose);
    msg.show();
    return msg;
  },
  error: function error(message, duration, onClose) {
    var msg = new Alert(message, Alert.CONSTS.ERROR, duration, onClose);
    msg.show();
    return msg;
  },
  warning: function warning(message, duration, onClose) {
    var msg = new Alert(message, Alert.CONSTS.WARN, duration, onClose);
    msg.show();
    return msg;
  },
  loading: function loading(message, duration, onClose) {
    var msg = new Alert(message, Alert.CONSTS.LOADING, duration, onClose);
    msg.show();
    return msg;
  },
  configs: Alert.config,
  CONSTS: Alert.CONSTS
};
exports["default"] = _default;