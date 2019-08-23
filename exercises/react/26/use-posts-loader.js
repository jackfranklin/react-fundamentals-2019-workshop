import apiPort from '../api-port'
import { useState, useEffect } from 'react'
import fetch from 'so-fetch-js'

const usePostsLoader = userId => {
  const [postsCache, setPostsCache] = useState({})

  useEffect(() => {
    if (!userId) return

    if (postsCache[userId]) {
      return
    } else {
      fetch(`http://localhost${apiPort}/posts?userId=${userId}`).then(
        response => {
          setPostsCache(cache => ({
            ...cache,
            [userId]: response.data,
          }))
        }
      )
    }
  }, [userId, postsCache])

  return postsCache[userId]
}

export default usePostsLoader
