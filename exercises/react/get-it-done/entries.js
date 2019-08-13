import React, { useEffect, useState } from 'react'
import { database } from './firebase'

const Entries = () => {
  const [entries, setEntries] = useState([])

  useEffect(() => {
    const itemsRef = database.ref('items')

    itemsRef.on('value', snapshot => {
      const items = snapshot.val()

      const itemsWithId = Object.entries(items).map(([id, data]) => {
        return {
          id,
          ...data,
        }
      })
      setEntries(itemsWithId)
    })
  }, [])

  return (
    <div>
      <ul>
        {entries.map(entry => (
          <li key={entry.id}>{entry.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Entries
