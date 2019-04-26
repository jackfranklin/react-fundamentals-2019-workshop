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
    if (!userId) return

    if (postsCache[userId]) {
      return
    } else {
      fetch(`http://localhost:3000/posts?userId=${userId}`).then(response => {
        setPostsCache(cache => ({
          ...cache,
          [userId]: response.data,
        }))
      })
    }
  }, [userId, postsCache])

  return postsCache[userId]
}

export default usePostsLoader
