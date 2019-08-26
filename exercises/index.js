import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, NavLink, Redirect } from 'react-router-dom'
import { css } from 'emotion'
import { reactExercises } from './all-exercises'
import todosJSON from './react/todos.json'
import { FaClipboardCheck } from 'react-icons/fa'

const todosJSONToMap = () => {
  const withDataAsSets = todosJSON.map(([key, data]) => {
    return [key, new Set(data)]
  })
  return new Map(withDataAsSets)
}

const todos = todosJSONToMap()
console.log('todos', todos)

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

              const hasAnyTodos = todosForExercise.some(todo => {
                return todo.todos.length > 0
              })
              return (
                <Fragment>
                  <div
                    className={css`
                      border-top: 1px solid #111;
                      margin-top: 20px;
                      padding-top: 20px;
                    `}
                  >
                    <h4>Exercise {exerciseNumber}</h4>
                    <div id="exercise-container">
                      <Comp />
                    </div>
                  </div>
                  {hasAnyTodos ? (
                    <div
                      className={css`
                        position: fixed;
                        bottom: 0;
                        width: 100%;
                        left: 0;
                        padding: 5px 15px;
                        background: rgba(0, 0, 0, 0.8);
                        color: #fff;
                      `}
                    >
                      <ul>
                        {todosForExercise.map(({ filePath, todos }) => {
                          return todos.length > 0 ? (
                            <li key={filePath}>
                              <code>{filePath}</code>
                              <ul>
                                {todos.map(todo => {
                                  return (
                                    <li
                                      key={todo}
                                      className={css`
                                        display: flex;
                                        align-items: center;
                                      `}
                                    >
                                      <FaClipboardCheck
                                        className={css`
                                          padding-right: 5px;
                                        `}
                                      />
                                      {todo}
                                    </li>
                                  )
                                })}
                              </ul>
                            </li>
                          ) : null
                        })}
                      </ul>
                    </div>
                  ) : null}
                </Fragment>
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
