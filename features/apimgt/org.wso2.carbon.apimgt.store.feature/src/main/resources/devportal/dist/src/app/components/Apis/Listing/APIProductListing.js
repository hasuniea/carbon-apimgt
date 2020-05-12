"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _CommonListing = _interopRequireDefault(require("./CommonListing"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
 * Copyright (c) 2019, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
// const ApiTypeContext = React.createContext({ type: Constants.API });

/**
 * API Listing wraps the commonListing component by passing a kind param
 *
 * @returns
 */
function APIProductListing(props) {
  var apiType = props.apiType;
  return /*#__PURE__*/_react["default"].createElement(_CommonListing["default"], {
    isApiProduct: true,
    apiType: apiType
  });
} // APIProductListing.propTypes = {
//     apiType: PropTypes.string.isRequired,
// };


var _default = APIProductListing;
exports["default"] = _default;