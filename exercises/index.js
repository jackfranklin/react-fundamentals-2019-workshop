import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import { reactExercises } from './all-exercises'

const Index = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/react"
          exact
          render={() => {
            return (
              <div>
                <h5>Pick an exercise:</h5>
                {Object.keys(reactExercises)
                  .map(k => {
                    return parseInt(
                      k.replace('./react/', '').replace('/index.js', ''),
                      10
                    )
                  })
                  .sort((a, b) => a - b)
                  .map(path => {
                    return (
                      <a href={`/react/${path}`} key={path}>
                        {path}
                      </a>
                    )
                  })}
              </div>
            )
          }}
        />
        {Object.keys(reactExercises).map(exercise => {
          const path = exercise.replace('./', '/').replace('/index.js', '')
          return (
            <Route
              key={path}
              path={path}
              exact={true}
              render={() => {
                const Comp = reactExercises[exercise].default
                console.log('rendering', Comp)
                return <Comp />
              }}
            />
          )
        })}
      </Switch>
    </BrowserRouter>
  )
}

Index.propTypes = {}

ReactDOM.render(<Index />, document.getElementById('react-root'))
