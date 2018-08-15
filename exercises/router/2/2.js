import ReactDOM from 'react-dom'
import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const About = () => {
  return <p> this is the about page</p>
}

const Home = () => {
  return <p>this is the home page</p>
}

// TODO: can you make the home component only show on the home page?
const HelloWorld = () => {
  return (
    <div>
      <h1>My great app!</h1>
      <Link to="/about">Click here to view the about page</Link>
      <Route path="/" component={Home} />
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
