"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
var puppeteer = require('puppeteer');

var fs = require('fs');

var mkdirp = require('mkdirp');

var os = require('os');

var path = require('path');

var DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');
module.exports = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var browser;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('\nSetup Puppeteer');
          _context.next = 3;
          return puppeteer.launch({// headless: false,
          });

        case 3:
          browser = _context.sent;
          // This global is not available inside tests but only in global teardown
          // eslint-disable-next-line no-underscore-dangle
          global.__BROWSER_GLOBAL__ = browser; // Instead, we expose the connection details via file system to be used in tests

          mkdirp.sync(DIR);
          fs.writeFileSync(path.join(DIR, 'wsEndpoint'), browser.wsEndpoint());

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));