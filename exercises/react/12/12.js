import ReactDOM from 'react-dom'
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import fetch from 'so-fetch-js'

const Post = props => {
  const urlForPost = `https://jsonplaceholder.typicode.com/posts/${props.id}`

  const [post, setPost] = useState(null)

  useEffect(() => {
    console.log('I get run on every render')

    // let this code run to see the increment looping
    // setPost({
    //   title: 'testing',
    //   body: 'testing',
    // })

    // TODO: run this code to fetch the post ensuring that you add the empty
    // dependencies array to the useEffect call so it doesn't cause an infinite
    // loop!

    // NOTE: you will see an eslint warning when you do this, but that's fine.
    // We're going to chat about why that is shortly 👌

    // fetch(urlForPost).then(response => {
    // response.data is the post
    // })
  })

  return post ? (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  ) : (
    <p>Loading the post!</p>
  )
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
}
const App = () => {
  return <Post id={1} />
}

ReactDOM.render(<App />, document.getElementById('react-root'))
