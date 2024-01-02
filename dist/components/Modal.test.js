"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
require("@testing-library/jest-dom");
var _Modal = _interopRequireDefault(require("./Modal"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/**
 * Test suite for the Modal component.
 */
describe('Modal Component', () => {
  const mockOnClose = jest.fn();
  const title = 'Test Title';
  const content = 'Test Content';
  beforeEach(() => {
    mockOnClose.mockClear();
  });

  /**
   * Test case to verify if the modal renders correctly when open.
   */
  it('renders correctly when open', () => {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Modal.default, {
      isOpen: true,
      onClose: mockOnClose,
      title: title,
      content: content
    }));
    expect(_react2.screen.getByText(title)).toBeInTheDocument();
    expect(_react2.screen.getByText(content)).toBeInTheDocument();
  });

  /**
   * Test case to verify if the modal does not render when not open.
   */
  it('does not render when not open', () => {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Modal.default, {
      isOpen: false,
      onClose: mockOnClose
    }));
    expect(_react2.screen.queryByText(title)).toBeNull();
    expect(_react2.screen.queryByText(content)).toBeNull();
  });

  /**
   * Test case to verify if onClose is called when the overlay is clicked.
   */
  it('calls onClose when the overlay is clicked', () => {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Modal.default, {
      isOpen: true,
      onClose: mockOnClose
    }));
    _react2.fireEvent.click(_react2.screen.getByRole('dialog'));
    expect(mockOnClose).toHaveBeenCalled();
  });

  /**
   * Test case to verify if onClose is called when the close button is clicked.
   */
  it('calls onClose when the close button is clicked', () => {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Modal.default, {
      isOpen: true,
      onClose: mockOnClose
    }));
    _react2.fireEvent.click(_react2.screen.getByText('Close'));
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  /**
   * Test case to verify if onClose is not called when modal content (excluding close button) is clicked.
   */
  it('does not call onClose when modal content (excluding close button) is clicked', () => {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Modal.default, {
      isOpen: true,
      onClose: mockOnClose,
      content: content
    }));
    _react2.fireEvent.click(_react2.screen.getByText(content));
    expect(mockOnClose).not.toHaveBeenCalled();
  });

  /**
   * Test case to verify if onClose is called when the escape key is pressed.
   */
  it('calls onClose when the escape key is pressed', () => {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Modal.default, {
      isOpen: true,
      onClose: mockOnClose
    }));
    _react2.fireEvent.keyDown(window, {
      key: 'Escape'
    });
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  /**
   * Test case to verify if custom class names are applied when provided.
   */
  it('should apply custom class names if provided', () => {
    const customClassNames = {
      overlayClassName: 'custom-overlay',
      contentClassName: 'custom-content',
      titleClassName: 'custom-title',
      bodyClassName: 'custom-body',
      footerClassName: 'custom-footer',
      closeButtonClassName: 'custom-close-button'
    };
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Modal.default, _extends({
      isOpen: true,
      onClose: mockOnClose,
      title: title
    }, customClassNames)));
    expect(_react2.screen.getByRole('dialog').classList.contains(customClassNames.overlayClassName)).toBe(true);
    expect(_react2.screen.getByTestId('modal-content').classList.contains(customClassNames.contentClassName)).toBe(true);
    expect(_react2.screen.getByTestId('modal-title').classList.contains(customClassNames.titleClassName)).toBe(true);
    expect(_react2.screen.getByTestId('modal-body').classList.contains(customClassNames.bodyClassName)).toBe(true);
    expect(_react2.screen.getByTestId('modal-footer').classList.contains(customClassNames.footerClassName)).toBe(true);
    expect(_react2.screen.getByText('Close').classList.contains(customClassNames.closeButtonClassName)).toBe(true);
  });
});