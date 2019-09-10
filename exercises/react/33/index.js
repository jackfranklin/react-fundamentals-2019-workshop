import apiPort from '../../api-port'

import React, { useState, useEffect } from 'react'
import Spinner from '../../spinner'
import JournalHeader from './journal-header'
import Post from './post'
import fetch from 'so-fetch-js'
import Toggle from './toggle'
import graphqlPort from '../../graphql-port'

const userIdForName = name => {
  return {
    alice: 1,
    bob: 2,
    charlotte: 3,
  }[name]
}

const JournalApp = () => {
  const [publishedOnly, setPublishedOnly] = useState(false)

  const [user, setUser] = useState('alice')
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    const userId = userIdForName(user)

    if (!userId) return

    // TODO: swap this request to use our GraphQL API

    // hint: you'll want to use the userById query to get the posts just for the given user
    fetch(`http://localhost:${apiPort}/posts?userId=${userId}`).then(
      response => {
        setPosts(response.data)
      }
    )
  }, [user])

  const logInAs = username => event => {
    event.preventDefault()
    setUser(username)
  }

  return (
    <div className="journal-app">
      <JournalHeader loggedInUser={user} onLogin={setUser} />
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

      {user && (
        <span className="toggle-wrapper">
          Only published posts?
          <Toggle onChange={setPublishedOnly} on={publishedOnly} />
        </span>
      )}

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
    </div>
  )
}

const Render = () => <JournalApp />
export default Render
