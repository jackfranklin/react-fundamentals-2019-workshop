import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, NavLink, Redirect } from 'react-router-dom'
import { css } from 'emotion'
import { reactExercises } from './all-exercises'

const Index = props => {
  return (
    <BrowserRouter>
      <Route path="/" exact render={() => <Redirect to="/react" />} />
      <Route
        path="/react"
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
              return (
                <div
                  className={css`
                    border-top: 1px solid #111;
                    margin-top: 20px;
                    padding-top: 20px;
                  `}
                >
                  <h4>Exercise {path.replace('/react/', '')}</h4>
                  <div id="exercise-container">
                    <Comp />
                  </div>
                </div>
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
