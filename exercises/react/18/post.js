import React from 'react'

/* TODO: update this compoonent so when you click on its title, it shows a <div> with the post's contents inside
 * hint: the post's contents is in props.post.body
 * give the post div the class of "post-contents"
 */

const onTitleClick = event => {
  event.preventDefault()
}

const Post = props => {
  return (
    <div className="post">
      <a href="#" onClick={onTitleClick}>
        {props.post.title}
      </a>
      <span>Posted on {props.post.date}</span>
    </div>
  )
}

export default Post
