import React, { useState, useContext } from 'react'
import LoginModal from './login-modal'
import AuthContext from './auth-context'

const JournalHeader = props => {
  const [isShowingModal, setIsShowingModal] = useState(false)
  // TODO: can you swap this to use our new useAuth hook
  // you'll need to import the function from ./use-auth
  const { loggedInUserName, setLoggedInUser } = useContext(AuthContext)

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
