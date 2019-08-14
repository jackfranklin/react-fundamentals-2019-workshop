import React, { useState, useRef, useEffect } from 'react'

const LoginModal = props => {
  const [loginName, setLoginName] = useState('')

  const inputEl = useRef(null)

  const onSubmit = event => {
    event.preventDefault()
    props.onSubmit(loginName)
  }

  useEffect(() => {
    if (inputEl.current && props.isShowing) {
      inputEl.current.focus()
    }
  }, [props.isShowing, inputEl])

  return (
    props.isShowing && (
      <div className="journal-login-modal">
        <div className="journal-login-modal-contents">
          <span onClick={props.onClose}>Cancel</span>
          <form onSubmit={onSubmit}>
            <p>Login to your Journal.</p>
            <input
              type="text"
              ref={inputEl}
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
