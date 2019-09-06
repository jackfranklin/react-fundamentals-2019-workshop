import apiPort from '../../api-port'

import React, { useState, useEffect, useReducer } from 'react'
import Spinner from '../../spinner'
import JournalHeader from './journal-header'
import Post from './post'
import fetch from 'so-fetch-js'
import Toggle from './toggle'

const initialState = {
  loggedInUser: {
    name: '',
  },
  postsForUser: [],
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'logUserIn':
      return {
        ...state,
        loggedInUser: {
          name: action.newUserName,
        },
      }

    case 'gotPostsForUser':
      return {
        ...state,
        postsForUser: action.posts,
      }

    default: {
      console.error(`Unknown action! ${action}`)
      return state
    }
  }
}

const JournalApp = () => {
  const userIdForName = name => {
    return {
      alice: 1,
      bob: 2,
      charlotte: 3,
    }[name]
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const [publishedOnly, setPublishedOnly] = useState(false)

  useEffect(() => {
    const userId = userIdForName(state.loggedInUser.name)
    if (!userId) return

    fetch(`http://localhost:${apiPort}/posts?userId=${userId}`).then(
      response => {
        dispatch({
          type: 'gotPostsForUser',
          posts: response.data,
        })
      }
    )
  }, [state.loggedInUser.name])

  const logInAs = username => event => {
    event.preventDefault()

    const currentTime = Date.now()

    const userId = userIdForName(username)

    fetch(`http://localhost:${apiPort}/users/${userId}`, {
      method: 'PUT',
      body: JSON.stringify({
        lastLogInTime: currentTime,
        name: username,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    dispatch({
      type: 'logUserIn',
      newUserName: username,
    })
  }

  return (
    <div className="journal-app">
      <JournalHeader loggedInUser={state.loggedInUser} dispatch={dispatch} />
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
      <span className="log-in-shortcut">
        Log in as{' '}
        <a href="" onClick={logInAs('charlotte')}>
          Charlotte
        </a>
      </span>

      {state.loggedInUser && (
        <span className="toggle-wrapper">
          Only published posts?
          <Toggle onChange={setPublishedOnly} on={publishedOnly} />
        </span>
      )}

      {state.postsForUser ? (
        <ul>
          {state.postsForUser
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
    </div>
  )
}

const Render = () => <JournalApp />
export default Render
