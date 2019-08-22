import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { css } from 'emotion'
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
                <h5>React Exercises:</h5>
                <ul
                  className={css`
                    list-style: none;
                    display: flex;
                    flex-wrap: wrap;
                  `}
                >
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
                        <li
                          key={path}
                          className={css`
                            display: block;
                            padding: 6px;
                            margin: 5px;
                            border-radius: 2px;
                            border: 1px solid blue;
                          `}
                        >
                          <a href={`/react/${path}`}>{path}</a>
                        </li>
                      )
                    })}
                </ul>
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
