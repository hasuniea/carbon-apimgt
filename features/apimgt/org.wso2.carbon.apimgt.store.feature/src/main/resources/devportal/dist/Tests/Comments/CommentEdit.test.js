"use strict";

var _testUtils = require("@material-ui/core/test-utils");

var _core = require("@material-ui/core");

var _CommentEdit = _interopRequireDefault(require("../../src/app/components/Apis/Details/Comments/CommentEdit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CommentEditUnwrapped = (0, _testUtils.unwrap)(_CommentEdit["default"]);
/**
 * Initialize common properties to be passed
 * @param {*} props properies to be override
 */

function createTestProps(props) {
  return _objectSpread({
    classes: {},
    apiId: '6e770272-212b-404e-ab9c-333fdba02f2f',
    cancelButton: true,
    allComments: [],
    theme: {
      custom: {
        maxCommentLength: 512
      }
    },
    comment: {
      commentId: 'ebf03093-74a3-4cd3-b5d0-a30d32a90f4b',
      category: 'General',
      parentCommentId: null,
      username: 'admin',
      commentText: 'My new comment updated',
      createdTime: '2018-09-27T10:16:44.444Z',
      createdBy: 'admin',
      lastUpdatedTime: '2018-09-27T10:37:03.570Z',
      lastUpdatedBy: 'admin'
    },
    commentsUpdate: jest.fn(),
    toggleShowEdit: jest.fn()
  }, props);
}

var wrapper;
var commentText = 'New comment';
var category = 'Another category';
var props = createTestProps();
beforeEach(function () {
  wrapper = shallow( /*#__PURE__*/React.createElement(CommentEditUnwrapped, props));
});
describe('<CommentEdit /> rendering', function () {
  it('renders correctly', function () {
    expect(wrapper).toMatchSnapshot();
  });
  it('should render a <TextField /> to type the comment', function () {
    expect(wrapper.find(_core.TextField)).toHaveLength(1);
  });
  it('should render a <Select /> to select the category', function () {
    expect(wrapper.find(_core.Select)).toHaveLength(1);
  });
  it('should render a 3 <MenuItem /> s to select the categories', function () {
    expect(wrapper.find(_core.Select).dive().find(_core.MenuItem)).toHaveLength(3);
  });
  it('should render a <Typography /> to display the maximum length of the comment', function () {
    expect(wrapper.find(_core.Typography)).toHaveLength(1);
  });
  it('should render 2 <Button /> s to display the save and cancel options', function () {
    expect(wrapper.find(_core.Button)).toHaveLength(2);
  });
});
describe('<CommentEdit /> interactions', function () {
  it('should call the onClick function when \'Save\' button is clicked', function () {
    var mockedHandleClickUpdateComment = jest.fn();
    wrapper.instance().handleClickUpdateComment = mockedHandleClickUpdateComment;
    wrapper.find(_core.Button).first().props().onClick();
    expect(mockedHandleClickUpdateComment).toHaveBeenCalledTimes(1);
  });
  it('should call the onClick function when \'Cancel\' button is clicked', function () {
    var mockedHandleClickCancel = jest.fn();
    wrapper.instance().handleClickCancel = mockedHandleClickCancel;
    wrapper.find(_core.Button).last().props().onClick();
    expect(mockedHandleClickCancel).toHaveBeenCalledTimes(1);
  });
  it('should change the state commentText and currentlength when the onChange function of the TextField is invoked', function () {
    wrapper.find(_core.TextField).simulate('change', {
      target: {
        value: commentText
      }
    });
    expect(wrapper.state('commentText')).toEqual(commentText);
    expect(wrapper.state('currentLength')).toEqual(commentText.length);
  });
  it('should change the state commentText and currentlength when the onChange function of the Select is invoked', function () {
    wrapper.find(_core.Select).simulate('change', {
      target: {
        value: category
      }
    });
    expect(wrapper.state('category')).toEqual(category);
  });
});