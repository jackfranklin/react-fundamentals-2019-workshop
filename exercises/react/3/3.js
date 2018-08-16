import ReactDOM from 'react-dom'
import React from 'react'

const HelloWorld = ({ greeting = 'Hello', name }) => {
  return (
    <h1>
      {greeting}, {name} sdlfkjsdlkfjsdlkfjdf
      <div>
        lkdjflkjsd
        <span>sdlkjflskdjflsdjf</span>
      </div>
    </h1>
  )
}

ReactDOM.render(
  <HelloWorld name="Jack" />,
  document.getElementById('react-root')
)
