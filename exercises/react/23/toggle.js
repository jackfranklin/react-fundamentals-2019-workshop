import React, { useState, useEffect } from 'react'

// TODO: turn the Toggle component into a controlled component
const Toggle = props => {
  const [on, setOn] = useState(false)

  useEffect(() => {
    props.onToggleChange(on)
  }, [on, props])

  return (
    <div>
      <input
        className="toggle"
        id="toggle"
        type="checkbox"
        checked={on}
        onChange={event => {
          setOn(o => !o)
        }}
      />
      <label className="toggleButton" htmlFor="toggle" />
    </div>
  )
}

export default Toggle
