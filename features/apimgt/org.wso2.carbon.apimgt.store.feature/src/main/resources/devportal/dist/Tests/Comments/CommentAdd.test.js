"use strict";

var _testUtils = require("@material-ui/core/test-utils");

var _core = require("@material-ui/core");

var _CommentAdd = _interopRequireDefault(require("../../src/app/components/Apis/Details/Comments/CommentAdd"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CommentAddUnwrapped = (0, _testUtils.unwrap)(_CommentAdd["default"]);
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
    }
  }, props);
}

var wrapper;
var commentText = 'New comment';
var category = 'Another category';
var props = createTestProps();
beforeEach(function () {
  wrapper = shallow( /*#__PURE__*/React.createElement(CommentAddUnwrapped, props));
});
describe('<CommentAdd /> rendering', function () {
  it('renders correctly', function () {
    expect(wrapper).toMatchSnapshot();
  });
  it('should render a <TextField /> to type the comment', function () {
    expect(wrapper.find(_core.TextField)).toHaveLength(1);
  });
  it('should render a <Select /> to select the category', function () {
    expect(wrapper.find(_core.Select)).toHaveLength(1);
  });
  it('should render 3 <MenuItem /> s to select the categories', function () {
    expect(wrapper.find(_core.Select).dive().find(_core.MenuItem)).toHaveLength(3);
  });
  it('should render a <Typography /> to display the maximum length of the comment', function () {
    expect(wrapper.find(_core.Typography)).toHaveLength(1);
  });
  it('should render 2 <Button /> s to display the save and cancel options, if cancelButton property is true ', function () {
    expect(wrapper.find(_core.Button)).toHaveLength(2);
  });
  it('should render only one <Button /> to display only the save option, if cancelButton property is false ', function () {
    wrapper = shallow( /*#__PURE__*/React.createElement(CommentAddUnwrapped, _extends({}, props, {
      cancelButton: false
    })));
    expect(wrapper.find(_core.Button)).toHaveLength(1);
  });
});
describe('<CommentAdd /> interactions', function () {
  it('should call the onClick function when \'Add Comment\' button is clicked', function () {
    var mockedHandleClickAddComment = jest.fn();
    wrapper.instance().handleClickAddComment = mockedHandleClickAddComment;
    wrapper.find(_core.Button).first().props().onClick();
    expect(mockedHandleClickAddComment).toHaveBeenCalledTimes(1);
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