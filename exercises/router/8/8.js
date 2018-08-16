import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom'
import request from 'graphql-request'

const GRAPHQL_ENDPOINT = 'https://fake-graphql.tech/graphql'

// TODO: can you make the PersonPage make the right GraphQL request
// to fetch information about the person?
// don't forget to write the componentDidUpdate code to ensure we don't have
// the bug from the previous exercise!

// TODO: can you make each person's page show all their albums, too?
class PersonPage extends Component {
  state = {
    person: null,
  }

  fetchPerson(id) {}

  componentDidMount() {
    this.fetchPerson(this.props.match.params.id)
  }

  render() {
    return this.state.person ? (
      <div>
        <span>viewing person:</span>
        <h1>{this.state.person.name}</h1>
      </div>
    ) : (
      <p>no person yet</p>
    )
  }
}

class People extends Component {
  state = { people: [] }

  componentDidMount() {
    const query = `{
      people { id, name }
    }`
    request(GRAPHQL_ENDPOINT, query).then(data => {
      console.log('got graphql response', data)
      this.setState({ people: data.people })
    })
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.people.map(person => {
            return (
              <li key={person.id}>
                <NavLink
                  activeClassName="active-link"
                  to={`/person/${person.id}`}
                >
                  {person.name}
                </NavLink>
              </li>
            )
          })}
        </ul>

        <Route path="/person/:id" component={PersonPage} />
      </div>
    )
  }
}

ReactDOM.render(
  <BrowserRouter>
    <People />
  </BrowserRouter>,
  document.getElementById('react-root')
)
