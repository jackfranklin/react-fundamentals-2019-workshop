import { useState, useEffect } from 'react'
import fetch from 'so-fetch-js'

const usePostsLoader = userId => {
  const [postsCache, setPostsCache] = useState({})

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
  }, [userId])

  return postsCache[userId]
}

export default usePostsLoader
