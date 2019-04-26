import { useState, useEffect, useReducer } from 'react'
import fetch from 'so-fetch-js'

const initialState = {}

const reducer = (state, action) => {
  switch (action.type) {
    case 'newPostsForUser':
      return {
        ...state,
        [action.userId]: action.posts,
      }
  }
}

const usePostsLoader = userId => {
  const [postsCache, setPostsCache] = useState({})

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    /* TODO:
     * update this code to use our reducer
     * and GET RID of the postsCache state that we have
     */

    if (!userId) return

    if (postsCache[userId]) {
      return
    } else {
      fetch(`http://localhost:3000/posts?userId=${userId}`).then(response => {
        // TODO: dispatch the right action here so the posts
        // get put into the cache
      })
    }
  }, [userId, postsCache])

  return state[userId]
}

export default usePostsLoader
