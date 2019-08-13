import React, { useState } from 'react'
import { database } from './firebase'
import { css } from 'emotion'

const NewItemForm = () => {
  const [title, setTitle] = useState('')
  const [time, setTime] = useState('')

  const labelStyle = css`
    display: flex;
    align-items: center;
    margin: 20px 0;
    > span {
      width: 20%;
    }
    > input {
      width: 60%;
    }
  `
  const onSubmit = event => {
    event.preventDefault()

    const itemsRef = database.ref('items')

    const newItem = {
      title,
      time: parseInt(time, 10),
    }

    itemsRef.push(newItem)

    setTitle('')
    setTime('')
  }

  return (
    <form onSubmit={onSubmit}>
      <h5>Create an item</h5>
      <label className={labelStyle}>
        <span>Title</span>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Workshop prep"
        />
      </label>
      <label className={labelStyle}>
        <span>Time (in minutes)</span>
        <input
          type="text"
          value={time}
          onChange={e => setTime(e.target.value)}
          placeholder="30"
        />
      </label>

      <input type="submit" value="Save" />
    </form>
  )
}

export default NewItemForm
