import React, { useEffect, useState } from 'react'
import { database } from './firebase'
import { css } from 'emotion'
import { format, parse } from 'date-fns'

const formatDate = stamp => {
  return format(parse(stamp), 'MMM Do YYYY')
}

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
      <ul
        className={css`
          list-style: none;
          padding: 0 !important;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          grid-gap: 10px;
          margin: 20px 0 0 0 !important;
        `}
      >
        {entries.map(entry => (
          <li
            className={css`
              box-sizing: border-box;
              padding: 10px;
              border: 1px solid #ddd;
              height: 150px;
              margin-bottom: 10px;
            `}
            key={entry.id}
          >
            {entry.title}
            <span
              className={css`
                display: block;
                font-style: italic;
              `}
            >
              {entry.time} minutes
            </span>
            <span>{formatDate(entry.date)}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Entries
