import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { css } from 'emotion'
import Modal from './modal'
import NewItemForm from './new-item-form'
import { FaPlusSquare } from 'react-icons/fa'
import Entries from './entries'

const App = () => {
  const [inEditMode, setInEditMode] = useState(false)

  return (
    <div
      className={css`
        padding: 32px;
      `}
    >
      <h2
        className={css`
          text-align: left;
          text-transform: uppercase;
          letter-spacing: 1.5;
          font-weight: normal;
          border-bottom: 1px solid #ccc;
          display: flex;
          align-items: center;
        `}
      >
        GetItDone tracker
        <span
          onClick={() => setInEditMode(true)}
          className={css`
            margin-left: auto;
          `}
        >
          <FaPlusSquare />
        </span>
      </h2>

      <Modal visible={inEditMode} onClose={() => setInEditMode(false)}>
        <NewItemForm
          onSuccess={() => {
            setInEditMode(false)
          }}
        />
      </Modal>

      <Entries />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('react-root'))
