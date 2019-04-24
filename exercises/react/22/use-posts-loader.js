import { useState, useEffect } from 'react'
import fetch from 'so-fetch-js'

const usePostsLoader = userId => {
  const [postsCache, setPostsCache] = useState({})

  useEffect(() => {
    if (!userId) return
    // TODO: make this work:
    // if we have posts in the cache, do nothing
    // if we don't, fetch them from the network and put them into the cache
  }, [userId])

  return postsCache[userId]
}

export default usePostsLoader
