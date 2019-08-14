import ReactDOM from 'react-dom'
import React, { useState, useEffect, useMemo, useRef } from 'react'
import fetch from 'so-fetch-js'
import Spinner from '../../spinner'
import JournalHeader from './journal-header'
import Post from './post'
import AuthContext from './auth-context'
import usePostsLoader from './use-posts-loader.js'
import Toggle from './toggle'

const JournalApp = () => {
  const userIdForName = name => {
    return {
      alice: 1,
      bob: 2,
      charlotte: 3,
    }[name]
  }

  const [name, setName] = useState('')

  const [publishedOnly, setPublishedOnly] = useState(false)

  const authContextValue = useMemo(() => {
    return {
      loggedInUserName: name,
      setLoggedInUser: setName,
    }
  }, [name])

  const posts = usePostsLoader(userIdForName(authContextValue.loggedInUserName))

  const logInAs = username => event => {
    event.preventDefault()

    setName(username)
  }

  /* just here for demonstration, so we're logged in from the get go!
   */
  useEffect(() => {
    setName('charlotte')
  }, [])

  const [count, setCount] = useState(0)

  const stopCounting = () => {
    console.log('you need to implement this!')
  }

  const countTimerId = useRef(null)

  // TODO: store the setInterval timer in the countTimerId reference
  // so that we can access it in the stop counting function
  // and allow the user to stop the interval continuing

  useEffect(() => {
    /* imagine that this effect made a network request
     * to load some data every 30 seconds
     * but we'll just increment a count
     */

    const id = setInterval(() => {
      setCount(c => c + 1)
    }, 500)

    return () => clearInterval(id)
  })

  return (
    <div>
      {count}
      <button onClick={stopCounting}>Stop counting</button>
      <AuthContext.Provider value={authContextValue}>
        <JournalHeader />
        <span className="log-in-shortcut">
          Log in as{' '}
          <a href="" onClick={logInAs('alice')}>
            Alice
          </a>
        </span>
        <span className="log-in-shortcut">
          Log in as{' '}
          <a href="" onClick={logInAs('bob')}>
            Bob
          </a>
        </span>

        <span className="toggle">
          Only published posts?{' '}
          <Toggle onChange={setPublishedOnly} on={publishedOnly} />
        </span>

        {posts ? (
          <ul>
            {posts
              .filter(p => {
                return publishedOnly ? p.published : true
              })
              .map(post => {
                return (
                  <li key={post.id}>
                    <Post post={post} />
                  </li>
                )
              })}
          </ul>
        ) : (
          <Spinner />
        )}
      </AuthContext.Provider>
    </div>
  )
}

ReactDOM.render(<JournalApp />, document.getElementById('react-root'))
