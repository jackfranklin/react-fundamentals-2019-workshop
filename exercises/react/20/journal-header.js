import React, { useState, useContext } from 'react'
import LoginModal from './login-modal'
import AuthContext from './auth-context'

const JournalHeader = props => {
  const [isShowingModal, setIsShowingModal] = useState(false)
  const { loggedInUserName } = useContext(AuthContext)

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
          props.setName(name)
          setIsShowingModal(false)
        }}
        onClose={() => setIsShowingModal(false)}
      />
    </div>
  )
}

export default JournalHeader
