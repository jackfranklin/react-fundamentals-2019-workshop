import React from 'react'

const Toggle = props => {
  const { on, onChange } = props

  return (
    <div>
      <input
        className="toggle"
        id="toggle"
        type="checkbox"
        checked={on}
        onChange={event => {
          onChange(!on)
        }}
      />
      <label className="toggleButton" htmlFor="toggle" />
    </div>
  )
}

export default Toggle
