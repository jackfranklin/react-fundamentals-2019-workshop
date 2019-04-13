import ReactDOM from 'react-dom'
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import fetch from 'so-fetch-js'

const Post = props => {
  const [userPostInput, setUserPostInput] = useState('')

  const [postIdForSearch, setPostIdForSearch] = useState(null)

  const [post, setPost] = useState(null)

  const onFormSubmit = event => {
    event.preventDefault()
    setPostIdForSearch(userPostInput)
  }

  useEffect(() => {
    if (!postIdForSearch) return

    // TODO: fill out the rest of the useEffect to ensure that it runs when the user hits submit

    const urlForPost = `https://jsonplaceholder.typicode.com/posts/${postIdForSearch}`
  }, [postIdForSearch])

  return (
    <div>
      <form onSubmit={onFormSubmit} className="search-form">
        <label>
          Please enter the ID of a post
          <input
            type="text"
            name="post-id"
            value={userPostInput}
            onChange={e => setUserPostInput(e.target.value)}
          />
        </label>
        <button type="submit">Go</button>
        {/* TODO: add another button that clears out the user input value */}
      </form>

      {postIdForSearch && <p>The ID you searched for is: {postIdForSearch}</p>}

      {post && <div>Post title: {post.title}</div>}
    </div>
  )
}

const App = () => {
  return <Post />
}

ReactDOM.render(<App />, document.getElementById('react-root'))
