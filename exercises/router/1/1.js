import ReactDOM from 'react-dom'
import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

// TODO: Can you add a link from the about page back to the index page?
// TODO: can you add a new component for the /contact page?

const About = () => {
  return <p> this is the about page</p>
}

const HelloWorld = () => {
  return (
    <div>
      <h1>My great app!</h1>
      <Link to="/about">Click here to view the about page</Link>
      <Route path="/about" component={About} />
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <HelloWorld />
  </BrowserRouter>,
  document.getElementById('react-root')
)
