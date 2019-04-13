import ReactDOM from 'react-dom'
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import fetch from 'so-fetch-js'

const Post = props => {
  const [userPostInput, setUserPostInput] = useState('')

  const [postIdForSearch, setPostIdForSearch] = useState(null)

  const onFormSubmit = event => {
    event.preventDefault()
    // TODO: when the form is submitted, update the PostIdForSearch so
    // we show the user what ID we're going to search for
    // (Note: we won't do the actual data fetching in this exercise, it's in the next one)
  }

  return (
    <div>
      <form onSubmit={onFormSubmit} className="search-form">
        <label>
          Please enter the ID of a post
          <input
            type="text"
            name="post-id"
            /* TODO: make this value prop be attached to the userPostInput state */
            value={''}
            onChange={e => {
              // TODO: make this onChange event update the value of the input
            }}
          />
        </label>
        <button type="submit">Go</button>
        {/* TODO: add another button that clears out the user input value */}
      </form>

      {postIdForSearch && <p>The ID you searched for is: {postIdForSearch}</p>}
    </div>
  )
}

const App = () => {
  return <Post />
}

ReactDOM.render(<App />, document.getElementById('react-root'))
