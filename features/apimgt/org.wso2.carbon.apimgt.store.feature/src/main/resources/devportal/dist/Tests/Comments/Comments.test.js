"use strict";

var _react = _interopRequireDefault(require("react"));

var _testUtils = require("@material-ui/core/test-utils");

var _core = require("@material-ui/core");

var _Comments = _interopRequireDefault(require("../../src/app/components/Apis/Details/Comments/Comments"));

var _Comment = _interopRequireDefault(require("../../src/app/components/Apis/Details/Comments/Comment"));

var _CommentAdd = _interopRequireDefault(require("../../src/app/components/Apis/Details/Comments/CommentAdd"));

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
var CommentsUnwrapped = (0, _testUtils.unwrap)(_Comments["default"]);
var wrapper;
var theme = {
  custom: {
    commentsLimit: 5
  }
};
var api = {
  id: '6e770272-212b-404e-ab9c-333fdba02f2f',
  isDefaultVersion: true,
  lastUpdatedTime: '2018-11-27T03:08:22.569Z',
  lifeCycleStatus: 'Published',
  name: 'Swagger Petstore'
};
beforeEach(function () {
  wrapper = shallow( /*#__PURE__*/_react["default"].createElement(CommentsUnwrapped, {
    api: api,
    apiId: api.id,
    classes: {},
    theme: theme
  }));
});
beforeAll(function () {
  wrapper = shallow( /*#__PURE__*/_react["default"].createElement(CommentsUnwrapped, {
    api: api,
    apiId: api.id,
    classes: {},
    theme: theme
  }));

  CommentsUnwrapped.prototype.componentDidMount = function () {
    console.log('componentDidMount method is called');
  };
});
describe('<Comments /> rendering', function () {
  it('renders correctly', function () {
    expect(wrapper).toMatchSnapshot();
  }); //     it('should render a <ArrowDropDownCircleOutlined /> with the title of the section - Comments', () => {
  //         expect(wrapper.find(ArrowDropDownCircleOutlined)).toHaveLength(1);
  //     });
  //     it('should render a <Typography /> with the title of the section - Comments', () => {
  //         expect(wrapper.find(Typography)).toHaveLength(1);
  //     });
  //     it('should render a <CommentAdd /> component to add a new comment', () => {
  //         expect(wrapper.find(CommentAdd)).toHaveLength(1);
  //     });
  //     it('should render a <Comment /> component to display a comment', () => {
  //         expect(wrapper.find(Comment)).toHaveLength(1);
  //     });
  //     it('should render a <a /> to load more comments, if the number of comments is greater than the maximum limit to be displayed', () => {
  //         wrapper.setState({ startCommentsToDisplay: 1 });
  //         expect(wrapper.find('a')).toHaveLength(1);
  //     });
  //     it('should render 3 <Typography /> s, if the number of comments is greater than the maximum limit to be displayed', () => {
  //         wrapper.setState({ startCommentsToDisplay: 1 });
  //         expect(wrapper.find(Typography)).toHaveLength(3);
  //     });
  // });
  // describe('<Comments /> interactions', () => {
  //     it('should change the state \'expanded\' when the ArrowDropDownCircleOutlined is clicked', () => {
  //         const stateBefore = wrapper.state('expanded');
  //         wrapper.find(ArrowDropDownCircleOutlined).simulate('click');
  //         expect(wrapper.state('expanded')).toEqual(!stateBefore);
  //     });
  //     it('should change the state \'expanded\' when the Title is clicked', () => {
  //         const stateBefore = wrapper.state('expanded');
  //         wrapper.find(Typography).first().simulate('click');
  //         expect(wrapper.state('expanded')).toEqual(!stateBefore);
  //     });
  //     it('should not change the state startCommentsToDisplay when the load more comments Arrow is clicked when number of comments is equal to commentsLimit', () => {
  //         const stateBefore = wrapper.state('startCommentsToDisplay');
  //         wrapper.setState({ startCommentsToDisplay: theme.custom.commentsLimit });
  //         wrapper.find(ArrowDropDown).first().simulate('click');
  //         expect(wrapper.state('startCommentsToDisplay')).toEqual(stateBefore);
  //     });
  //     it('should not change the state startCommentsToDisplay when the load more comments Arrow is clicked when number of comments is less than  the commentsLimit', () => {
  //         const stateBefore = wrapper.state('startCommentsToDisplay');
  //         wrapper.setState({ startCommentsToDisplay: theme.custom.commentsLimit - 1 });
  //         wrapper.find(ArrowDropDown).first().simulate('click');
  //         expect(wrapper.state('startCommentsToDisplay')).toEqual(stateBefore);
  //     });
  //     it('should change the state startCommentsToDisplay when the load more comments Arrow is clicked when number of comments is greater than the commentsLimit', () => {
  //         const stateBefore = wrapper.state('startCommentsToDisplay');
  //         wrapper.setState({ startCommentsToDisplay: theme.custom.commentsLimit + 1 });
  //         wrapper.find(ArrowDropDown).first().simulate('click');
  //         expect(wrapper.state('startCommentsToDisplay')).toEqual(stateBefore + 1);
  //     });
});