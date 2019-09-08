import React, { useState } from 'react'
import Tags from './tags'

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
        {props.post.published ? '✅' : '❌'}
      </span>
      <Tags postId={props.post.id} initialTags={props.post.tags} />
      {expanded && <div className="post-contents">{props.post.body}</div>}
    </div>
  )
}

export default Post
