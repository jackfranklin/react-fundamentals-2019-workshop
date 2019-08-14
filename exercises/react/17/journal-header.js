import React, { useState } from 'react'

const JournalHeader = props => {
  const [loginName, setLoginName] = useState('')

  const [isShowingModal, setIsShowingModal] = useState(false)

  const showModal = () => setIsShowingModal(true)

  const onLoginInputChange = event => {
    setLoginName(event.target.value)
  }

  const onLoginSubmit = event => {
    event.preventDefault()
    props.setName(loginName)
    setIsShowingModal(false)
  }

  return (
    <div className="journal-header-wrapper">
      <h1 className="journal-header">Journal App</h1>
      <h2 className="journal-subheader">Journal for {props.name}</h2>
      <button className="journal-login" onClick={showModal}>
        Login
      </button>

      {/* TODO: can you extract the LoginModal compoonent so that this works and you can use this ? */}
      {/* <LoginModal
        isShowing={isShowingModal}
        onSubmit={name => props.setName(name)}
        onClose={() => setIsShowingModal(false)}
      /> */}

      {isShowingModal && (
        <div className="journal-login-modal">
          <div className="journal-login-modal-contents">
            <span onClick={() => setIsShowingModal(false)}>Cancel</span>
            <form onSubmit={onLoginSubmit}>
              <p>Login to your Journal.</p>
              <input
                type="text"
                value={loginName}
                placeholder="jack"
                onChange={onLoginInputChange}
              />
              <input type="submit" value="Login" />
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default JournalHeader
