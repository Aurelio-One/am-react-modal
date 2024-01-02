"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./Modal.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 * Modal component.
 * @param {Object} props - The component's properties.
 * @param {boolean} props.isOpen - Indicates whether the modal is open.
 * @param {function} props.onClose - Function to close the modal.
 * @param {string} [props.title=''] - The title of the modal.
 * @param {React.ReactNode} [props.content=null] - The content of the modal.
 * @param {string} [props.overlayClassName=''] - CSS class for the modal overlay.
 * @param {string} [props.contentClassName=''] - CSS class for the modal content.
 * @param {string} [props.titleClassName=''] - CSS class for the modal title.
 * @param {string} [props.bodyClassName=''] - CSS class for the modal body.
 * @param {string} [props.footerClassName=''] - CSS class for the modal footer.
 * @param {string} [props.closeButtonClassName=''] - CSS class for the modal close button.
 * @returns {JSX.Element | null} - Returns the Modal component.
 */
const Modal = _ref => {
  let {
    isOpen,
    onClose,
    title,
    content,
    overlayClassName,
    contentClassName,
    titleClassName,
    bodyClassName,
    footerClassName,
    closeButtonClassName
  } = _ref;
  const modalRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(() => {
    /**
     * Event handler for the 'Escape' key.
     * @param {KeyboardEvent} e - The keyboard event.
     */
    const handleEscape = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
      modalRef.current.focus();
    } else {
      window.removeEventListener('keydown', handleEscape);
    }
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);
  if (!isOpen) {
    return null;
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-overlay ".concat(overlayClassName || ''),
    onClick: onClose,
    role: "dialog",
    "aria-modal": "true",
    ref: modalRef,
    tabIndex: "-1",
    "data-testid": "modal-overlay"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content ".concat(contentClassName || ''),
    onClick: e => e.stopPropagation(),
    "aria-labelledby": "modalTitle",
    "aria-describedby": "modalDescription",
    "data-testid": "modal-content"
  }, title && /*#__PURE__*/_react.default.createElement("div", {
    id: "modalTitle",
    className: "modal-title ".concat(titleClassName || ''),
    "data-testid": "modal-title"
  }, /*#__PURE__*/_react.default.createElement("h2", null, title)), content ? /*#__PURE__*/_react.default.createElement("div", {
    id: "modalDescription",
    className: "modal-body ".concat(bodyClassName || ''),
    "data-testid": "modal-body"
  }, content) : /*#__PURE__*/_react.default.createElement("div", {
    id: "modalDescription",
    className: "modal-body ".concat(bodyClassName || ''),
    "data-testid": "modal-body"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-footer ".concat(footerClassName || ''),
    "data-testid": "modal-footer"
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: onClose,
    className: "modal-close-button ".concat(closeButtonClassName || ''),
    "data-testid": "modal-close-button"
  }, "Close"))));
};

/**
 * PropTypes for the Modal component.
 * @type {Object}
 */
Modal.propTypes = {
  isOpen: _propTypes.default.bool.isRequired,
  onClose: _propTypes.default.func.isRequired,
  title: _propTypes.default.string,
  content: _propTypes.default.node,
  overlayClassName: _propTypes.default.string,
  contentClassName: _propTypes.default.string,
  titleClassName: _propTypes.default.string,
  bodyClassName: _propTypes.default.string,
  footerClassName: _propTypes.default.string,
  closeButtonClassName: _propTypes.default.string
};

/**
 * Default props for the Modal component.
 * @type {Object}
 */
Modal.defaultProps = {
  title: '',
  content: null,
  overlayClassName: '',
  contentClassName: '',
  titleClassName: '',
  bodyClassName: '',
  footerClassName: '',
  closeButtonClassName: ''
};
var _default = exports.default = Modal;