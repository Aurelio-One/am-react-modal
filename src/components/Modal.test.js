import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Modal from './Modal'

/**
 * Test suite for the Modal component.
 */
describe('Modal Component', () => {
  const mockOnClose = jest.fn()
  const title = 'Test Title'
  const content = 'Test Content'

  beforeEach(() => {
    mockOnClose.mockClear()
  })

  /**
   * Test case to verify if the modal renders correctly when open.
   */
  it('renders correctly when open', () => {
    render(
      <Modal
        isOpen={true}
        onClose={mockOnClose}
        title={title}
        content={content}
      />
    )
    expect(screen.getByText(title)).toBeInTheDocument()
    expect(screen.getByText(content)).toBeInTheDocument()
  })

  /**
   * Test case to verify if the modal does not render when not open.
   */
  it('does not render when not open', () => {
    render(
      <Modal
        isOpen={false}
        onClose={mockOnClose}
      />
    )
    expect(screen.queryByText(title)).toBeNull()
    expect(screen.queryByText(content)).toBeNull()
  })

  /**
   * Test case to verify if onClose is called when the overlay is clicked.
   */
  it('calls onClose when the overlay is clicked', () => {
    render(
      <Modal
        isOpen={true}
        onClose={mockOnClose}
      />
    )
    fireEvent.click(screen.getByRole('dialog'))
    expect(mockOnClose).toHaveBeenCalled()
  })

  /**
   * Test case to verify if onClose is called when the close button is clicked.
   */
  it('calls onClose when the close button is clicked', () => {
    render(
      <Modal
        isOpen={true}
        onClose={mockOnClose}
      />
    )
    fireEvent.click(screen.getByText('Close'))
    expect(mockOnClose).toHaveBeenCalledTimes(1)
  })

  /**
   * Test case to verify if onClose is not called when modal content (excluding close button) is clicked.
   */
  it('does not call onClose when modal content (excluding close button) is clicked', () => {
    render(
      <Modal
        isOpen={true}
        onClose={mockOnClose}
        content={content}
      />
    )
    fireEvent.click(screen.getByText(content))
    expect(mockOnClose).not.toHaveBeenCalled()
  })

  /**
   * Test case to verify if onClose is called when the escape key is pressed.
   */
  it('calls onClose when the escape key is pressed', () => {
    render(
      <Modal
        isOpen={true}
        onClose={mockOnClose}
      />
    )
    fireEvent.keyDown(window, { key: 'Escape' })
    expect(mockOnClose).toHaveBeenCalledTimes(1)
  })

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
      closeButtonClassName: 'custom-close-button',
    }

    render(
      <Modal
        isOpen={true}
        onClose={mockOnClose}
        title={title}
        {...customClassNames}
      />
    )

    expect(
      screen
        .getByRole('dialog')
        .classList.contains(customClassNames.overlayClassName)
    ).toBe(true)
    expect(
      screen
        .getByTestId('modal-content')
        .classList.contains(customClassNames.contentClassName)
    ).toBe(true)
    expect(
      screen
        .getByTestId('modal-title')
        .classList.contains(customClassNames.titleClassName)
    ).toBe(true)
    expect(
      screen
        .getByTestId('modal-body')
        .classList.contains(customClassNames.bodyClassName)
    ).toBe(true)
    expect(
      screen
        .getByTestId('modal-footer')
        .classList.contains(customClassNames.footerClassName)
    ).toBe(true)
    expect(
      screen
        .getByText('Close')
        .classList.contains(customClassNames.closeButtonClassName)
    ).toBe(true)
  })
})
