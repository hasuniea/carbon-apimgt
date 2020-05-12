/**
 * Copyright (c) 2017, WSO2 Inc. (http://wso2.com) All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AuthManager = _interopRequireDefault(require("./AuthManager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/***
 * Abstract resource representation, Host for generic resource related methods
 */
var Resource = /*#__PURE__*/function () {
  function Resource() {
    _classCallCheck(this, Resource);
  }

  _createClass(Resource, null, [{
    key: "_requestMetaData",

    /**
     * @param data
     * @returns {object} Metadata for API request
     */
    value: function _requestMetaData() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      /* TODO: This should be moved to an interceptor ~tmkb*/
      return {
        requestContentType: data['Content-Type'] || "application/json"
      };
    }
  }]);

  return Resource;
}();

exports["default"] = Resource;