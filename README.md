# React Modal Component

A customizable and accessible modal dialog component for React applications.

## Installation

Install the component using npm:

```bash
npm install react-modal-aurelio --save
```

## Usage

Import the `Modal` component in your React application and use it as follows:

```jsx
import React, { useState } from 'react'
import Modal from 'react-modal-aurelio'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title='Your Title Here'
        content={<p>Your content here</p>}
      />
    </>
  )
}

export default App
```

## Props

The component accepts the following props:

| Prop                   | Type     | Description                              |
| ---------------------- | -------- | ---------------------------------------- |
| `isOpen`               | boolean  | Controls the visibility of the modal.    |
| `onClose`              | function | Callback function to close the modal.    |
| `title`                | string   | The title content of the modal.          |
| `content`              | node     | The body content of the modal.           |
| `overlayClassName`     | string   | Custom class for the modal overlay.      |
| `contentClassName`     | string   | Custom class for the modal content.      |
| `titleClassName`       | string   | Custom class for the modal title.        |
| `bodyClassName`        | string   | Custom class for the modal body.         |
| `footerClassName`      | string   | Custom class for the modal footer.       |
| `closeButtonClassName` | string   | Custom class for the modal close button. |

## Styling

You can style the modal using the provided CSS class names or by passing your own custom classes.

## Accessibility

The Modal component follows WAI-ARIA best practices for modal dialogs, ensuring that it is accessible to users with disabilities.

## License

Distributed under the MIT License.
