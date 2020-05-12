"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Constants = _interopRequireDefault(require("AppData/Constants"));

var _APIClientFactory = _interopRequireDefault(require("./APIClientFactory"));

var _Resource2 = _interopRequireDefault(require("./Resource"));

var _Wsdl = _interopRequireDefault(require("./Wsdl"));

var _Utils = _interopRequireDefault(require("./Utils"));

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

/**
 * An abstract representation of an API
 */
var API = /*#__PURE__*/function (_Resource) {
  _inherits(API, _Resource);

  var _super = _createSuper(API);

  /**
   * @constructor
   * @param {string} access_key - Access key for invoking the backend REST API call.
   */
  function API() {
    var _this;

    _classCallCheck(this, API);

    _this = _super.call(this);
    _this.client = new _APIClientFactory["default"]().getAPIClient(_Utils["default"].getEnvironment().label).client;
    _this.wsdlClient = new _Wsdl["default"](_this.client);
    _this._requestMetaData = _Resource2["default"]._requestMetaData;
    return _this;
  }
  /**
   * (TODO: need to ask for fallback sequence as well tmkb)
   * Get list of all the available APIs, If the call back is given
   * It will be invoked upon receiving the response from REST service.Else will return a promise.
   * @param callback {function} A callback function to invoke after receiving successful response.
   * @returns {promise} With given callback attached to the success chain else API invoke promise.
   */


  _createClass(API, [{
    key: "getAllAPIs",
    value: function getAllAPIs() {
      var _this2 = this;

      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var promiseGetAll = this.client.then(function (client) {
        return client.apis.APIs.get_apis(params, _this2._requestMetaData());
      });

      if (callback) {
        return promiseGetAll.then(callback);
      } else {
        return promiseGetAll;
      }
    }
    /**
     * Get details of a given API
     * @param id {string} UUID of the api.
     * @param callback {function} A callback function to invoke after receiving successful response.
     * @returns {promise} With given callback attached to the success chain else API invoke promise.
     */

  }, {
    key: "getAPIById",
    value: function getAPIById(id) {
      var _this3 = this;

      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var promiseGet = this.client.then(function (client) {
        return client.apis.APIs.get_apis__apiId_({
          apiId: id
        }, _this3._requestMetaData());
      });

      if (callback) {
        return promiseGet.then(callback);
      } else {
        return promiseGet;
      }
    }
    /*
     Get the inline content of a given document
     */

  }, {
    key: "getInlineContentOfDocument",
    value: function getInlineContentOfDocument(api_id, docId) {
      var promised_getDocContent = this.client.then(function (client) {
        var payload = {
          apiId: api_id,
          documentId: docId
        };
        return client.apis['API Documents'].get_apis__apiId__documents__documentId__content(payload);
      });
      return promised_getDocContent;
    }
    /**
     * Get the Documents of an API
     * @param id {String} UUID of the API in which the documents needed
     * @param callback {function} Function which needs to be called upon success of getting documents
     * @returns {promise} With given callback attached to the success chain else API invoke promise.
     */

  }, {
    key: "getDocumentsByAPIId",
    value: function getDocumentsByAPIId(id) {
      var _this4 = this;

      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var promiseGet = this.client.then(function (client) {
        return client.apis['API Documents'].get_apis__apiId__documents({
          apiId: id
        }, _this4._requestMetaData());
      });

      if (callback) {
        return promiseGet.then(callback);
      } else {
        return promiseGet;
      }
    }
    /**
     * Get the Documents of an API
     * @param {string} apiId api id.
     * @param {string} documentId document id.
     * @returns {promise} promise to get the document.
     */

  }, {
    key: "getDocumentByDocId",
    value: function getDocumentByDocId(apiId, documentId) {
      var _this5 = this;

      var promiseGet = this.client.then(function (client) {
        var payload = {
          apiId: apiId,
          documentId: documentId
        };
        return client.apis['Documents'].get_apis__apiId__documents__documentId_(payload, _this5._requestMetaData());
      });
      return promiseGet;
    }
    /**
     * Get the Document content of an API by document Id
     * @param api_id {String} UUID of the API in which the document needed
     * @param docId {String} UUID of the Document need to view
     * @param callback {function} Function which needs to be called upon success of of getting document.
     * @returns {promise} With given callback attached to the success chain else API invoke promise.
     */

  }, {
    key: "getFileForDocument",
    value: function getFileForDocument(api_id, docId) {
      var _this6 = this;

      var promised_getDocContent = this.client.then(function (client) {
        var payload = {
          apiId: api_id,
          documentId: docId,
          Accept: 'application/octet-stream'
        };
        return client.apis['API Documents'].get_apis__apiId__documents__documentId__content(payload, _this6._requestMetaData({
          'Content-Type': 'multipart/form-data'
        }));
      });
      return promised_getDocContent;
    }
    /**
     * Get the swagger of an API
     * @param apiId {String} UUID of the API in which the swagger is needed
     * @param callback {function} Function which needs to be called upon success of the API deletion
     * @returns {promise} With given callback attached to the success chain else API invoke promise.
     */

  }, {
    key: "getSwaggerByAPIId",
    value: function getSwaggerByAPIId(apiId) {
      var _this7 = this;

      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var promiseGet = this.client.then(function (client) {
        return client.apis.APIs.get_apis__apiId__swagger({
          apiId: apiId
        }, _this7._requestMetaData());
      });

      if (callback) {
        return promiseGet.then(callback);
      } else {
        return promiseGet;
      }
    }
    /**
     * Get the schema of an GraphQL API
     * @param apiId {String} UUID of the API in which the schema is needed
     * @param callback {function} Function which needs to be called upon success of the retrieving schema
     * @returns {promise} With given callback attached to the success chain else API invoke promise.
     */

  }, {
    key: "getGraphQLSchemaByAPIId",
    value: function getGraphQLSchemaByAPIId(apiId) {
      var _this8 = this;

      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var promiseGet = this.client.then(function (client) {
        return client.apis.APIs.get_apis__apiId__graphql_schema({
          apiId: apiId
        }, _this8._requestMetaData());
      });

      if (callback) {
        return promiseGet.then(callback);
      } else {
        return promiseGet;
      }
    }
    /**
     * Get the swagger of an API
     * @param apiId {String} UUID of the API in which the swagger is needed
     * @param environmentName {String} API environment name
     * @param callback {function} Function which needs to be called upon success of the API deletion
     * @returns {promise} With given callback attached to the success chain else API invoke promise.
     */

  }, {
    key: "getSwaggerByAPIIdAndEnvironment",
    value: function getSwaggerByAPIIdAndEnvironment(apiId, environmentName) {
      var _this9 = this;

      var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var promiseGet = this.client.then(function (client) {
        return client.apis.APIs.get_apis__apiId__swagger({
          apiId: apiId,
          environmentName: environmentName
        }, _this9._requestMetaData());
      });

      if (callback) {
        return promiseGet.then(callback);
      } else {
        return promiseGet;
      }
    }
    /**
     * Get the swagger of an API
     * @param apiId {String} UUID of the API in which the swagger is needed
     * @param labelName {String} Micro gateway label
     * @param callback {function} Function which needs to be called upon success of the API deletion
     * @returns {promise} With given callback attached to the success chain else API invoke promise.
     */

  }, {
    key: "getSwaggerByAPIIdAndLabel",
    value: function getSwaggerByAPIIdAndLabel(apiId, labelName) {
      var _this10 = this;

      var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var promiseGet = this.client.then(function (client) {
        return client.apis.APIs.get_apis__apiId__swagger({
          apiId: apiId,
          labelName: labelName
        }, _this10._requestMetaData());
      });

      if (callback) {
        return promiseGet.then(callback);
      } else {
        return promiseGet;
      }
    }
    /**
     * Get application by id
     * @param id {String} UUID of the application
     * @param callback {function} Function which needs to be called upon success
     * @returns {promise} With given callback attached to the success chain else API invoke promise.
     */

  }, {
    key: "getApplication",
    value: function getApplication(id) {
      var _this11 = this;

      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var promiseGet = this.client.then(function (client) {
        return client.apis.Applications.get_applications__applicationId_({
          applicationId: id
        }, _this11._requestMetaData());
      });

      if (callback) {
        return promiseGet.then(callback);
      } else {
        return promiseGet;
      }
    }
    /**
     * Get application by id
     * @param callback {function} Function which needs to be called upon success
     * @returns {promise} With given callback attached to the success chain else API invoke promise.
     * @deprecated Use Application.all method instead
     */

  }, {
    key: "getAllApplications",
    value: function getAllApplications() {
      var _this12 = this;

      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var promiseGet = this.client.then(function (client) {
        return client.apis.Applications.get_applications({}, _this12._requestMetaData());
      });

      if (callback) {
        return promiseGet.then(callback);
      } else {
        return promiseGet;
      }
    }
    /**
     * Get application by id
     * @param policyLevel
     * @param callback {function} Function which needs to be called upon success
     * @returns {promise} With given callback attached to the success chain else API invoke promise.
     */

  }, {
    key: "getAllTiers",
    value: function getAllTiers(policyLevel) {
      var _this13 = this;

      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var promiseGetAll = this.client.then(function (client) {
        return client.apis['Throttling Policies'].get_throttling_policies__policyLevel_({
          policyLevel: policyLevel
        }, _this13._requestMetaData());
      });

      if (callback) {
        return promiseGetAll.then(callback);
      } else {
        return promiseGetAll;
      }
    }
    /**
     * Get all application attributes
     * @param {function} callback which needs to be called upon success
     * @returns {promise} With given callback attached to the success chain else API invoke promise.
     */

  }, {
    key: "getAllApplicationAttributes",
    value: function getAllApplicationAttributes() {
      var _this14 = this;

      return this.client.then(function (client) {
        return client.apis.Settings.get_settings_application_attributes(_this14._requestMetaData());
      });
    }
    /**
     * Create application
     * @param {object} application content of the application
     * @returns {promise} With given callback attached to the success chain else API invoke promise.
     */

  }, {
    key: "createApplication",
    value: function createApplication(application) {
      return this.client.then(function (client) {
        var payload = {
          body: application
        };
        var args = {
          'Content-Type': 'application/json'
        };
        return client.apis.Applications.post_applications(payload, args);
      });
    }
    /**
     * Update an application
     * @param application content that need to updated with the application id
     * @param callback {function} Function which needs to be called upon success
     * @returns {promise} With given callback attached to the success chain else API invoke promise.
     */

  }, {
    key: "updateApplication",
    value: function updateApplication(application) {
      var _this15 = this;

      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var promiseGet = this.client.then(function (client) {
        var payload = {
          applicationId: application.applicationId,
          body: application
        };
        return client.apis.Applications.put_applications__applicationId_(payload, _this15._requestMetaData());
      });

      if (callback) {
        return promiseGet.then(callback);
      } else {
        return promiseGet;
      }
    }
    /**
     * Add new comment to an existing API
     * @param apiId apiId of the api to which the comment is added
     * @param comment comment text
     */

  }, {
    key: "addComment",
    value: function addComment(apiId, comment) {
      var _this16 = this;

      return this.client.then(function (client) {
        var payload = {
          apiId: apiId,
          body: comment
        };
        return client.apis.Comments.addCommentToAPI(payload, _this16._requestMetaData());
      });
    }
    /**
     * Get all comments for a particular API
     * @param apiId api id of the api to which the comment is added
     */

  }, {
    key: "getAllComments",
    value: function getAllComments(apiId) {
      var _this17 = this;

      return this.client.then(function (client) {
        return client.apis.Comments.getAllCommentsOfAPI({
          apiId: apiId
        }, _this17._requestMetaData());
      });
    }
    /**
     * Delete a comment belongs to a particular API
     * @param apiId api id of the api to which the comment belongs to
     * @param commentId comment id of the comment which has to be deleted
     */

  }, {
    key: "deleteComment",
    value: function deleteComment(apiId, commentId) {
      var _this18 = this;

      return this.client.then(function (client) {
        return client.apis.Comments.deleteComment({
          apiId: apiId,
          commentId: commentId
        }, _this18._requestMetaData());
      });
    }
    /**
     * Update a comment belongs to a particular API
     * @param apiId apiId of the api to which the comment is added
     * @param commentId comment id of the comment which has to be updated
     * @param commentInfo comment text
     */

  }, {
    key: "updateComment",
    value: function updateComment(apiId, commentId, commentInfo) {
      var _this19 = this;

      var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var promise = this.client.then(function (client) {
        return client.apis['Comment (Individual)'].put_apis__apiId__comments__commentId_({
          apiId: apiId,
          commentId: commentId,
          body: commentInfo
        }, _this19._requestMetaData());
      })["catch"](function (error) {
        console.error(error);
      });

      if (callback) {
        return promise.then(callback);
      } else {
        return promise;
      }
    }
    /**
     * Get Rating details for a partiuclar API
     * @param {apiId} apiId of the api
     * @returns {promise} promise
     */

  }, {
    key: "getRatingFromUser",
    value: function getRatingFromUser(apiId) {
      var _this20 = this;

      var promiseGet = this.client.then(function (client) {
        return client.apis.Ratings.get_apis__apiId__ratings({
          apiId: apiId
        }, _this20._requestMetaData());
      })["catch"](function (error) {
        console.error(error);
      });
      return promiseGet;
    }
    /**
     * Remove Rating details for a partiuclar API for the logged in user
     * @param {apiId} apiId of the api
     * @returns {promise} promise
     */

  }, {
    key: "removeRatingOfUser",
    value: function removeRatingOfUser(apiId) {
      var _this21 = this;

      var promiseDelete = this.client.then(function (client) {
        return client.apis.Ratings.delete_apis__apiId__user_rating({
          apiId: apiId
        }, _this21._requestMetaData());
      })["catch"](function (error) {
        console.error(error);
      });
      return promiseDelete;
    }
    /**
     * Add Rating for a partiuclar API by the logged in user
     * @param {apiId} apiId of the api
     * @param {ratingInfo} ratingInfo user rating for the api
     * @returns {promise} promise
     */

  }, {
    key: "addRating",
    value: function addRating(apiId, ratingInfo) {
      var _this22 = this;

      var promise = this.client.then(function (client) {
        return client.apis.Ratings.put_apis__apiId__user_rating({
          apiId: apiId,
          body: ratingInfo
        }, _this22._requestMetaData());
      })["catch"](function (error) {
        console.error(error);
      });
      return promise;
    }
    /**
     * Generate application keys
     * @param applicationId id of the application that needs to generate the keys
     * @param request_content payload of generate key request
     * @param callback {function} Function which needs to be called upon success
     * @returns {promise} With given callback attached to the success chain else API invoke promise.
     * @deprecated Use Application.generateKeys() instead
     */

  }, {
    key: "generateKeys",
    value: function generateKeys(applicationId, requestContent) {
      var _this23 = this;

      var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var promiseGet = this.client.then(function (client) {
        var payload = {
          applicationId: applicationId,
          body: requestContent
        };
        return client.apis.Applications.post_applications__applicationId__generate_keys(payload, _this23._requestMetaData());
      });

      if (callback) {
        return promiseGet.then(callback);
      } else {
        return promiseGet;
      }
    }
    /**
     * Generate token
     * @param applicationId id of the application that needs to generate the token
     * @param request_content payload of generate token request
     * @param callback {function} Function which needs to be called upon success
     * @returns {promise} With given callback attached to the success chain else API invoke promise.
     * @deprecated Use Application.generateToken() instead
     */

  }, {
    key: "generateToken",
    value: function generateToken(applicationId, requestContent) {
      var _this24 = this;

      var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var promiseGet = this.client.then(function (client) {
        var payload = {
          applicationId: applicationId,
          body: requestContent
        };
        return client.apis.Applications.post_applications__applicationId__generate_token(payload, _this24._requestMetaData());
      });

      if (callback) {
        return promiseGet.then(callback);
      } else {
        return promiseGet;
      }
    }
    /**
     * Get keys of an application
     * @param applicationId id of the application that needs to get the keys
     * @param callback {function} Function which needs to be called upon success
     * @returns {promise} With given callback attached to the success chain else API invoke promise.
     * @deprecated Use Application.getKeys() instead
     */

  }, {
    key: "getKeys",
    value: function getKeys(applicationId) {
      var _this25 = this;

      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var promiseGet = this.client.then(function (client) {
        return client.apis.Applications.get_applications__applicationId__keys({
          applicationId: applicationId
        }, _this25._requestMetaData());
      });

      if (callback) {
        return promiseGet.then(callback);
      } else {
        return promiseGet;
      }
    }
  }, {
    key: "generateApiKey",
    value: function generateApiKey(applicationId, keyType, validityPeriod, restrictions) {
      var _this26 = this;

      var promiseGet = this.client.then(function (client) {
        var payload = {
          applicationId: applicationId,
          keyType: keyType,
          body: {
            validityPeriod: validityPeriod,
            additionalProperties: restrictions
          }
        };
        return client.apis['API Keys'].post_applications__applicationId__api_keys__keyType__generate(payload, _this26._requestMetaData());
      });
      return promiseGet;
    }
    /**
     * Get keys of an application
     * @param applicationId id of the application that needs to get the keys
     * @param callback {function} Function which needs to be called upon success
     * @returns {promise} With given callback attached to the success chain else API invoke promise.
     */

  }, {
    key: "getSubscriptions",
    value: function getSubscriptions(apiId, applicationId) {
      var _this27 = this;

      var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var payload = {
        apiId: apiId
      };

      if (applicationId) {
        payload[applicationId] = applicationId;
      }

      var promisedGet = this.client.then(function (client) {
        return client.apis.Subscriptions.get_subscriptions(payload, _this27._requestMetaData());
      });

      if (callback) {
        return promisedGet.then(callback);
      } else {
        return promisedGet;
      }
    }
    /**
     * Create a subscription
     * @param {string} apiId id of the API that needs to be subscribed
     * @param {string} applicationId id of the application that needs to be subscribed
     * @param {string} policy throttle policy applicable for the subscription
     * @param {function} callback callback url
     * @returns {promise} With given callback attached to the success chain else API invoke promise.
     */

  }, {
    key: "subscribe",
    value: function subscribe(apiId, applicationId, policy) {
      var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var promiseCreateSubscription = this.client.then(function (client) {
        var subscriptionData = null;
        subscriptionData = {
          apiId: apiId,
          applicationId: applicationId,
          throttlingPolicy: policy
        };
        var payload = {
          body: subscriptionData
        };
        return client.apis.Subscriptions.post_subscriptions(payload, {
          'Content-Type': 'application/json'
        });
      });

      if (callback) {
        return promiseCreateSubscription.then(callback);
      } else {
        return promiseCreateSubscription;
      }
    }
    /**
     * Get the available labels.
     * @returns {Promise.<TResult>}
     */

  }, {
    key: "labels",
    value: function labels() {
      var _this28 = this;

      var promiseLabels = this.client.then(function (client) {
        return client.apis['Label (Collection)'].get_labels({}, _this28._requestMetaData());
      });
      return promiseLabels;
    }
    /**
     * Get the SDK generation supported languages.
     * @returns {Promise} List of languages that supports SDK generation by swagger-codegen
     */

  }, {
    key: "getSdkLanguages",
    value: function getSdkLanguages() {
      var _this29 = this;

      var promiseLanguages = this.client.then(function (client) {
        return client.apis.SDKs.get_sdk_gen_languages({}, _this29._requestMetaData());
      });
      return promiseLanguages;
    }
    /**
     * Get the SDK for the API with the specified apiId and language.
     * @returns {Promise} Zip file for the generated SDK.
     */

  }, {
    key: "getSdk",
    value: function getSdk(apiId, language) {
      var _this30 = this;

      var payload = {
        apiId: apiId,
        language: language
      };
      var promiseSdk = this.client.then(function (client) {
        return client.apis.SDKs.get_apis__apiId__sdks__language_(payload, _this30._requestMetaData());
      });
      return promiseSdk;
    }
    /**
     * Get details of a given throttling policy
     * @param id {string} name of the tier.
     * @param callback {function} A callback function to invoke after receiving successful response.
     * @returns {promise} With given callback attached to the success chain else API invoke promise.
     */

  }, {
    key: "getTierByName",
    value: function getTierByName(name, level) {
      var _this31 = this;

      var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var payload = {
        policyId: name,
        policyLevel: level
      };
      var promiseGet = this.client.then(function (client) {
        return client.apis['Throttling Policies'].get_throttling_policies__policyLevel___policyId_(payload, _this31._requestMetaData());
      });

      if (callback) {
        return promiseGet.then(callback);
      } else {
        return promiseGet;
      }
    }
    /**
     * Create new user
     * @param body {JSON object} {username:"", password:"", firstName:"", lastName:"", email:""}
     * @returns {promise} With given callback attached to the success chain else API invoke promise.
     */

  }, {
    key: "createUser",
    value: function createUser(body) {
      var payload = {
        body: body
      };
      var promise = this.client.then(function (client) {
        return client.apis['Sign Up'].post_self_signup(payload, {
          'Content-Type': 'application/json'
        });
      });
      return promise;
    }
    /**
     * Get all tags
     * @returns {promise} promise all tags of APIs
     */

  }, {
    key: "getAllTags",
    value: function getAllTags() {
      var _this32 = this;

      var promiseGet = this.client.then(function (client) {
        return client.apis.Tags.get_tags(_this32._requestMetaData());
      })["catch"](function (error) {
        console.error(error);
      });
      return promiseGet;
    }
    /**
     * Get the thumnail of an API
     *
     * @param id {string} UUID of the api
     */

  }, {
    key: "getAPIThumbnail",
    value: function getAPIThumbnail(id) {
      var _this33 = this;

      var promised_getAPIThumbnail = this.client.then(function (client) {
        return client.apis.APIs.get_apis__apiId__thumbnail({
          apiId: id
        }, _this33._requestMetaData());
      });
      return promised_getAPIThumbnail;
    }
    /**
     * method to search apis and documents based on content
     * @param {Object} params APIs, Documents filtering parameters i:e { "name": "MyBank API"}
     * @returns {Promise} promise object return from SwaggerClient-js
     * @memberof API
     */

  }, {
    key: "search",
    value: function search(params) {
      return this.client.then(function (client) {
        return client.apis['Unified Search'].get_search(params, _Resource2["default"]._requestMetaData());
      });
    }
    /**
     * Returns the WSDL API client
     *
     * @return {Wsdl} WSDL API client
     */

  }, {
    key: "getWsdlClient",
    value: function getWsdlClient() {
      return this.wsdlClient;
    }
    /**
     * method to get store settings such as grant types, scopes, application sharing settings etc
     * Settings API can be invoked with and without access token, When a token is not present it will return the public
     * settings info, when a valid token is present it will return all the settings info.
     * @returns {Promise} promise object return from SwaggerClient-js
     * @memberof API
     */

  }, {
    key: "getSettings",
    value: function getSettings() {
      var _this34 = this;

      return this.client.then(function (client) {
        return client.apis.Settings.get_settings(_this34._requestMetaData());
      });
    }
    /**
     * @static
     * Get the supported alert types by the publisher.
     * @return {Promise}
     * */

  }, {
    key: "getSupportedAlertTypes",
    value: function getSupportedAlertTypes() {
      var _this35 = this;

      return this.client.then(function (client) {
        return client.apis.Alerts.getStoreAlertTypes(_this35._requestMetaData());
      });
    }
    /**
     * @static
     * Get the subscribed alert types by the current user.
     * @returns {Promise}
     * */

  }, {
    key: "getSubscribedAlertTypesByUser",
    value: function getSubscribedAlertTypesByUser() {
      var _this36 = this;

      return this.client.then(function (client) {
        return client.apis['Alert Subscriptions'].getSubscribedAlertTypes(_this36._requestMetaData());
      });
    }
    /**
     * @static
     * Subscribe to the provided set of alerts.
     * @return {Promise}
     * */

  }, {
    key: "subscribeAlerts",
    value: function subscribeAlerts(alerts) {
      var _this37 = this;

      return this.client.then(function (client) {
        return client.apis['Alert Subscriptions'].subscribeToAlerts({
          body: alerts
        }, _this37._requestMetaData());
      });
    }
    /**
     * @static
     * Unsubscribe from all the alerts.
     * @return {Promise}
     * */

  }, {
    key: "unsubscribeAlerts",
    value: function unsubscribeAlerts() {
      var _this38 = this;

      return this.client.then(function (client) {
        return client.apis['Alert Subscriptions'].unsubscribeAllAlerts(_this38._requestMetaData());
      });
    }
    /**
     * @static
     * Get the configuration for the given alert type.
     * @param {string} alertType The alert type name.
     * @return {Promise}
     * */

  }, {
    key: "getAlertConfigurations",
    value: function getAlertConfigurations(alertType) {
      var _this39 = this;

      return this.client.then(function (client) {
        return client.apis['Alert Configuration'].getAllAlertConfigs({
          alertType: alertType
        }, _this39._requestMetaData());
      });
    }
    /**
     * @static
     * Add configuration for the given alert type.
     * @param {string} alertType The alert type name.
     * @param {object} alertConfig Alert configurations.
     * @param {string} configId The alert configuration id.
     * @return {Promise}
     * */

  }, {
    key: "putAlertConfiguration",
    value: function putAlertConfiguration(alertType, alertConfig, configId) {
      var _this40 = this;

      return this.client.then(function (client) {
        return client.apis['Alert Configuration'].addAlertConfig({
          alertType: alertType,
          body: alertConfig,
          configurationId: configId
        }, _this40._requestMetaData());
      });
    }
    /**
     * @static
     * Delete configuration.
     * @param {string} alertType The alert type name.
     * @param {string} configId The alert configuration id.
     * @return {Promise}
     * */

  }, {
    key: "deleteAlertConfiguration",
    value: function deleteAlertConfiguration(alertType, configId) {
      var _this41 = this;

      return this.client.then(function (client) {
        return client.apis['Alert Configuration'].deleteAlertConfig({
          alertType: alertType,
          configurationId: configId
        }, _this41._requestMetaData());
      });
    }
    /**
     * @static
     * Get all API Categories of the given tenant
     * @return {Promise}
     * */

  }, {
    key: "apiCategories",
    value: function apiCategories(params) {
      var _this42 = this;

      return this.client.then(function (client) {
        return client.apis['API Category (Collection)'].get_api_categories(params, _this42._requestMetaData());
      });
    }
    /**
     * Get API recommendations for a given user.
     * @param {string} userId The username.
     * @return {Promise}
     * */

  }, {
    key: "getApiRecommendations",
    value: function getApiRecommendations() {
      var _this43 = this;

      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var promiseGet = this.client.then(function (client) {
        return client.apis.Recommendations.get_recommendations(params, _this43._requestMetaData());
      });
      return promiseGet;
    }
  }]);

  return API;
}(_Resource2["default"]);

exports["default"] = API;