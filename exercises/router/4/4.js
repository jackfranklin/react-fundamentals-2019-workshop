import ReactDOM from 'react-dom'
import React from 'react'
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom'

const UserPage = props => {
  // TODO: can you fill in the ???
  return <p>this is the user page for ???</p>
}

const HelloWorld = () => {
  return (
    <div>
      <h1>My great app!</h1>
      <Route path="/user/:name" component={UserPage} />
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <HelloWorld />
  </BrowserRouter>,
  document.getElementById('react-root')
)
