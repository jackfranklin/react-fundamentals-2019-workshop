import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, NavLink, Redirect } from 'react-router-dom'
import { css } from 'emotion'
import { reactExercises } from './all-exercises'
import todosJSON from './react/todos.json'
import Exercise from './exercise'

const todosJSONToMap = () => {
  const withDataAsSets = todosJSON.map(([key, data]) => {
    return [key, new Set(data)]
  })
  return new Map(withDataAsSets)
}

const todos = todosJSONToMap()

const Index = props => {
  return (
    <BrowserRouter>
      <Route path="/" exact render={() => <Redirect to="/react" />} />
      <Route
        path="/react"
        render={() => {
          return (
            <div>
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
                      <li key={path} className={css``}>
                        <NavLink
                          className={css`
                            display: block;
                            padding: 6px;
                            margin: 5px;
                            border-radius: 2px;
                            border: 1px solid blue;

                            &:link,
                            &:visited {
                              color: blue;
                              text-decoration: none;
                            }
                          `}
                          activeClassName={css`
                            background: #fff;
                          `}
                          to={`/react/${path}`}
                        >
                          {path < 10 ? '0' + path : path}
                        </NavLink>
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
              const exerciseNumber = path.replace('/react/', '')
              const todosForExercise = Array.from(todos.get(exerciseNumber))
              return (
                <Exercise
                  todos={todosForExercise}
                  component={Comp}
                  exerciseNumber={exerciseNumber}
                />
              )
            }}
          />
        )
      })}
    </BrowserRouter>
  )
}

Index.propTypes = {}

ReactDOM.render(<Index />, document.getElementById('react-root'))
