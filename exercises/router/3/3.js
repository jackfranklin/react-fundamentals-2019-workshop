import ReactDOM from 'react-dom'
import React from 'react'
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom'

const About = () => {
  return <p> this is the about page</p>
}

const Home = () => {
  return <p>this is the home page</p>
}

// TODO: can you use NavLinks?
// TODO: create a navbar component that contains links to the home page and the about page
// and render it from the HelloWorld component
const HelloWorld = () => {
  return (
    <div>
      <h1>My great app!</h1>
      <Link to="/about">Click here to view the about page</Link>
      <Route exact path="/" component={Home} />
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
