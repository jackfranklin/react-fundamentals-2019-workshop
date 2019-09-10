import React, { useState } from 'react'
import LoginModal from './login-modal'

const JournalHeader = props => {
  const [isShowingModal, setIsShowingModal] = useState(false)

  const loggedInUserName = props.loggedInUser

  const setLoggedInUser = name => {
    props.onLogin(name)
  }

  const showModal = () => setIsShowingModal(true)

  return (
    <div className="journal-header-wrapper">
      <h1 className="journal-header">Journal App</h1>
      <h2 className="journal-subheader">Journal for {loggedInUserName}</h2>
      <button className="journal-login" onClick={showModal}>
        Login
      </button>

      <LoginModal
        isShowing={isShowingModal}
        onSubmit={name => {
          setLoggedInUser(name)
          setIsShowingModal(false)
        }}
        onClose={() => setIsShowingModal(false)}
      />
    </div>
  )
}

export default JournalHeader
