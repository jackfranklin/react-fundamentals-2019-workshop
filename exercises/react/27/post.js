import React, { useState } from 'react'

const Post = props => {
  const [expanded, setExpanded] = useState(false)

  const onClickTitle = event => {
    event.preventDefault()
    setExpanded(e => !e)
  }

  return (
    <div className="post">
      <a href="" onClick={onClickTitle}>
        {props.post.title}
      </a>
      <span>
        Posted on {props.post.date} | Published{' '}
        {props.post.published ? 'Yes' : 'No'}
      </span>
      {expanded && <div className="post-contents">{props.post.body}</div>}
    </div>
  )
}

export default Post
