import ReactDOM from 'react-dom'
import React from 'react'

const JournalApp = () => {
  // TODO: can you update this component so it also renders a h2
  // that shows the name of the person ?
  // you should give the h2 a class of "journal-subheader"
  // HINT: props are passed into a component as the first argument.
  return (
    <div>
      <h1 className="journal-header">Journal App</h1>
    </div>
  )
}

ReactDOM.render(
  <JournalApp name="Jack" />,
  document.getElementById('react-root')
)
