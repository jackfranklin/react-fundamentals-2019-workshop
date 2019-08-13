import ReactDOM from 'react-dom'
import React, { useState } from 'react'
import { css } from 'emotion'
import Modal from './modal'
import NewItemForm from './new-item-form'

const App = () => {
  const [inEditMode, setInEditMode] = useState(true)

  return (
    <div
      className={css`
        padding: 32px;
      `}
    >
      <h2
        className={css`
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 1.5;
          font-weight: normal;
          border-bottom: 1px solid #ccc;
        `}
      >
        GetItDone tracker
      </h2>

      <Modal visible={inEditMode} onClose={() => setInEditMode(false)}>
        <NewItemForm />
      </Modal>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('react-root'))
