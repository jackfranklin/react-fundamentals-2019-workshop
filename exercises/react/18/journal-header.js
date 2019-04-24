import React, { useState } from 'react'
import LoginModal from './login-modal'

const JournalHeader = props => {
  const [isShowingModal, setIsShowingModal] = useState(false)

  const showModal = () => setIsShowingModal(true)

  return (
    <div className="journal-header-wrapper">
      <h1 className="journal-header">Journal App</h1>
      <h2 className="journal-subheader">Journal for {props.name}</h2>
      <button className="journal-login" onClick={showModal}>
        Login
      </button>

      <LoginModal
        isShowing={isShowingModal}
        onSubmit={name => {
          props.setName(name)
          setIsShowingModal(false)
        }}
        onClose={() => setIsShowingModal(false)}
      />
    </div>
  )
}

export default JournalHeader
