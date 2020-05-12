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

/* eslint-disable no-underscore-dangle */
var timeout = 20000;
jest.setTimeout(20000);

var qs = require('qs');

describe('/ (Home Page)', function () {
  var page;
  beforeAll( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return global.__BROWSER__.newPage();

          case 2:
            page = _context.sent;

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), timeout);
  beforeEach( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return page._client.send('Network.clearBrowserCookies');

          case 2:
            _context2.next = 4;
            return page._client.send('Network.clearBrowserCache');

          case 4:
            _context2.next = 6;
            return page["goto"]('https://localhost:9443/publisher');

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  afterAll( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return page.close();

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
  test('should able to login without error', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var consentSelector, expectedCookies, availableCookies;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return page.type('input[name="username"]', 'admin');

          case 2:
            _context4.next = 4;
            return page.type('input[name="password"]', 'admin');

          case 4:
            _context4.next = 6;
            return Promise.all([page.$eval('#loginForm', function (form) {
              return form.submit();
            }), page.waitForNavigation()]);

          case 6:
            _context4.next = 8;
            return page.click('input#approveCb[type="radio"]');

          case 8:
            _context4.next = 10;
            return page.$('input#consent_select_all[type="checkbox"]');

          case 10:
            consentSelector = _context4.sent;

            if (!consentSelector) {
              _context4.next = 14;
              break;
            }

            _context4.next = 14;
            return page.click('input#consent_select_all[type="checkbox"]');

          case 14:
            _context4.next = 16;
            return Promise.all([page.click('#approve'), page.waitForNavigation({
              waitUntil: 'load'
            })]);

          case 16:
            expectedCookies = ['AM_ACC_TOKEN_DEFAULT_P2', 'JSESSIONID', 'opbs', 'WSO2_AM_TOKEN_1_Default', 'commonAuthId', 'AM_REF_TOKEN_DEFAULT_P2'];
            _context4.next = 19;
            return page.cookies();

          case 19:
            availableCookies = _context4.sent;
            availableCookies = availableCookies.map(function (cookieObject) {
              return cookieObject.name;
            });
            expectedCookies.forEach(function (expectedCookie) {
              return expect(availableCookies).toContain(expectedCookie);
            });

          case 22:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })));
  test('should not able to log with wrong username', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var _qs$parse, authFailure;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return page.type('input[name="username"]', 'chuckNorris');

          case 2:
            _context5.next = 4;
            return page.type('input[name="password"]', 'chuckNorris');

          case 4:
            _context5.next = 6;
            return Promise.all([page.$eval('#loginForm', function (form) {
              return form.submit();
            }), page.waitForNavigation({
              waitUntil: 'load'
            })]);

          case 6:
            _qs$parse = qs.parse(page.url().split('?')[1]), authFailure = _qs$parse.authFailure;
            expect(authFailure).toEqual('true');

          case 8:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  })));
}, timeout);