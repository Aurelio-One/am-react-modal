# AM React Modal Component

A customizable and accessible modal dialog component for React applications.

## Installation

Install the component using npm:

```bash
npm install am-react-modal --save
```

## Usage

Import the `Modal` component in your React application and use it as follows:

```jsx
import React, { useState } from 'react'
import Modal from 'am-react-modal'

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
| `overlayClassName`     | string   | Class for the modal overlay.      |
| `contentClassName`     | string   | Class for the modal content.      |
| `titleClassName`       | string   | Class for the modal title.        |
| `bodyClassName`        | string   | Class for the modal body.         |
| `footerClassName`      | string   | Class for the modal footer.       |
| `closeButtonClassName` | string   | Class for the modal close button. |


## Styling

Default CSS classes :

| Class                   | Description                       |
| ----------------------- | --------------------------------- |
| `.modal-overlay`        | Class for the modal overlay.      |
| `.modal-content`        | Class for the modal content.      |
| `.modal-title`          | Class for the modal title.        |
| `.modal-body`           | Class for the modal body.         |
| `.modal-footer`         | Class for the modal footer.       |
| `.modal-close-button`   | Class for the modal close button. |


You can style the modal using the provided CSS class names or by passing your own custom classes as props.

## Accessibility

The Modal component follows WAI-ARIA best practices for modal dialogs, ensuring that it is accessible to users with disabilities.

## License

Distributed under the MIT License.
