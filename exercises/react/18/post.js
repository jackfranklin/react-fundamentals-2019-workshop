import React from 'react'

/* TODO: update this compoonent so when you click on its title, it shows a <div> with the post's contents inside
 * give the post div the class of "post-contents"
 */

const Post = props => {
  return (
    <div className="post-wrapper">
      <a href="">{props.post.title}</a>
      <span>Posted on {props.post.date}</span>
    </div>
  )
}

export default Post
