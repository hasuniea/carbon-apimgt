"use strict";

var _testUtils = require("@material-ui/core/test-utils");

var _core = require("@material-ui/core");

var _Comment = _interopRequireDefault(require("../../src/app/components/Apis/Details/Comments/Comment"));

var _CommentEdit = _interopRequireDefault(require("../../src/app/components/Apis/Details/Comments/CommentEdit"));

var _CommentOptions = _interopRequireDefault(require("../../src/app/components/Apis/Details/Comments/CommentOptions"));

var _CommentReply = _interopRequireDefault(require("../../src/app/components/Apis/Details/Comments/CommentReply"));

var _ConfirmDialog = _interopRequireDefault(require("../../src/app/components/Shared/ConfirmDialog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CommentUnwrapped = (0, _testUtils.unwrap)(_Comment["default"]);
var comment, reply;
/**
 * Initialize common properties to be passed
 * @param {*} props properies to be override
 */

function createTestProps(props) {
  comment = {
    commentId: 'ebf03093-74a3-4cd3-b5d0-a30d32a90f4b',
    category: 'General',
    parentCommentId: null,
    username: 'admin',
    commentText: 'My new comment',
    createdTime: '2018-09-27T10:16:44.444Z',
    createdBy: 'admin',
    lastUpdatedTime: '2018-09-27T10:37:03.570Z',
    lastUpdatedBy: 'admin',
    replies: []
  };
  reply = {
    commentId: 'adf03093-74a3-4cd3-b5d0-a30d32a90f4b',
    category: 'General',
    parentCommentId: 'ebf03093-74a3-4cd3-b5d0-a30d32a90f4b',
    username: 'admin',
    commentText: 'My new comment reply',
    createdTime: '2018-09-27T10:17:44.444Z',
    createdBy: 'admin',
    lastUpdatedTime: '2018-09-27T11:37:03.570Z',
    lastUpdatedBy: 'admin',
    replies: []
  };
  return _objectSpread({
    classes: {},
    apiId: '6e770272-212b-404e-ab9c-333fdba02f2f',
    allComments: [comment],
    theme: {
      custom: {
        maxCommentLength: 512
      }
    },
    comments: [comment],
    commentsUpdate: jest.fn()
  }, props);
}

var wrapper;
var props = createTestProps();
beforeEach(function () {
  wrapper = shallow( /*#__PURE__*/React.createElement(CommentUnwrapped, props));
});
describe('<Comment /> rendering', function () {
  it('renders correctly', function () {
    expect(wrapper).toMatchSnapshot();
  });
  it('should render 2 <Typography /> s to display the username and the comment text', function () {
    expect(wrapper.find(_core.Typography)).toHaveLength(2);
  });
  it('should not render a <CommentEdit /> component to edit the comment if the edit index is not equal to the index of the currenly displayed comnment', function () {
    expect(wrapper.find(_CommentEdit["default"])).toHaveLength(0);
  });
  it('should render a <CommentOptions /> component', function () {
    expect(wrapper.find(_CommentOptions["default"])).toHaveLength(1);
  });
  it('should render a <ConfirmDialog /> component', function () {
    expect(wrapper.find(_ConfirmDialog["default"])).toHaveLength(1);
  });
  it('should not render a <CommentReply /> component when there are no replies', function () {
    expect(wrapper.find(_CommentReply["default"])).toHaveLength(0);
  });
  it('should render a <CommentReply /> component', function () {
    comment.replies.push(reply);
    wrapper = shallow( /*#__PURE__*/React.createElement(CommentUnwrapped, _extends({}, props, {
      comments: [comment],
      allComments: [comment]
    })));
    expect(wrapper.find(_CommentReply["default"])).toHaveLength(1);
  });
});