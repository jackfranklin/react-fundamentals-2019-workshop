import React from 'react'

const Toggle = props => {
  const { on, onChange } = props

  return <span onClick={() => onChange(!on)}>{on ? 'YES' : 'NO'}</span>
}

export default Toggle
