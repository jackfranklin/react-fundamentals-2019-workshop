import React, { Fragment } from 'react'
import { css } from 'emotion'
import { FaClipboardCheck } from 'react-icons/fa'

const Exercise = ({ component: Component, exerciseNumber, todos }) => {
  const hasAnyTodos = todos.some(todo => {
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
          <Component />
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
            {todos.map(({ filePath, todos }) => {
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
}

export default Exercise
