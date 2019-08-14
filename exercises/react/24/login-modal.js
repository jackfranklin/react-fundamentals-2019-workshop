import React, { useState, useRef, useEffect } from 'react'

const LoginModal = props => {
  const [loginName, setLoginName] = useState('')

  /* TODO: create a new ref called inputEl and have it bound to the <input />
   * that is rendered below and use useEffect to focus the input automatically
   * when we show the login modal
   */
  const onSubmit = event => {
    event.preventDefault()
    props.onSubmit(loginName)
  }

  return (
    props.isShowing && (
      <div className="journal-login-modal">
        <div className="journal-login-modal-contents">
          <span onClick={props.onClose}>Cancel</span>
          <form onSubmit={onSubmit}>
            <p>Login to your Journal.</p>
            <input
              type="text"
              value={loginName}
              placeholder="jack"
              onChange={e => setLoginName(e.target.value)}
            />
            <input type="submit" value="Login" />
          </form>
        </div>
      </div>
    )
  )
}

export default LoginModal
