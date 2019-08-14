import React, { useState } from 'react'

const LoginModal = props => {
  const [loginName, setLoginName] = useState('')

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
