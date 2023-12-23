import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import './Modal.css'

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
const Modal = ({
  isOpen,
  onClose,
  title,
  content,
  overlayClassName,
  contentClassName,
  titleClassName,
  bodyClassName,
  footerClassName,
  closeButtonClassName,
}) => {
  const modalRef = useRef(null)

  useEffect(() => {
    /**
     * Event handler for the 'Escape' key.
     * @param {KeyboardEvent} e - The keyboard event.
     */
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
      modalRef.current.focus()
    } else {
      window.removeEventListener('keydown', handleEscape)
    }

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) {
    return null
  }

  return (
    <div
      className={`modal-overlay ${overlayClassName || ''}`}
      onClick={onClose}
      role='dialog'
      aria-modal='true'
      ref={modalRef}
      tabIndex='-1'
      data-testid='modal-overlay'
    >
      <div
        className={`modal-content ${contentClassName || ''}`}
        onClick={(e) => e.stopPropagation()}
        aria-labelledby='modalTitle'
        aria-describedby='modalDescription'
        data-testid='modal-content'
      >
        {title && (
          <div
            id='modalTitle'
            className={`modal-title ${titleClassName || ''}`}
            data-testid='modal-title'
          >
            <h2>{title}</h2>
          </div>
        )}

        {content ? (
          <div
            id='modalDescription'
            className={`modal-body ${bodyClassName || ''}`}
            data-testid='modal-body'
          >
            {content}
          </div>
        ) : (
          <div
            id='modalDescription'
            className={`modal-body ${bodyClassName || ''}`}
            data-testid='modal-body'
          />
        )}
        <div
          className={`modal-footer ${footerClassName || ''}`}
          data-testid='modal-footer'
        >
          <button
            onClick={onClose}
            className={`modal-close-button ${closeButtonClassName || ''}`}
            data-testid='modal-close-button'
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

/**
 * PropTypes for the Modal component.
 * @type {Object}
 */
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  content: PropTypes.node,
  overlayClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  titleClassName: PropTypes.string,
  bodyClassName: PropTypes.string,
  footerClassName: PropTypes.string,
  closeButtonClassName: PropTypes.string,
}

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
  closeButtonClassName: '',
}

export default Modal
