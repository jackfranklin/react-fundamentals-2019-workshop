import React, { useState, useEffect } from 'react'

// TODO: turn the Toggle component into a controlled component
const Toggle = props => {
  const [on, setOn] = useState(false)

  useEffect(() => {
    props.onToggleChange(on)
  }, [on, props])

  return <span onClick={() => setOn(o => !o)}>{on ? 'YES' : 'NO'}</span>
}

export default Toggle
