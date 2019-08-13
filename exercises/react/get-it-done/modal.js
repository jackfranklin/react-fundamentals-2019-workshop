import React from 'react'
import PropTypes from 'prop-types'
import { css, cx } from 'emotion'
import { FaWindowClose } from 'react-icons/fa'

const Modal = props => {
  const wrapperClasses = props.visible
    ? css`
        opacity: 1;
        pointer-events: all;
      `
    : css`
        opacity: 0;
        pointer-events: none;
      `
  return (
    <div
      className={cx(
        wrapperClasses,
        css`
          transition: opacity 0.2s ease-in;
        `
      )}
    >
      <div
        className={css`
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.2);
        `}
      />

      <div
        className={css`
          background: white;
          position: relative;
          z-index: 2;
          padding: 32px;
        `}
      >
        <div
          className={css`
            width: 100%;
            display: flex;
            justify-content: flex-end;
            border-bottom: 1px solid #ccc;
            padding-bottom: 6px;
            margin-bottom: 6px;
          `}
        >
          <span onClick={props.onClose}>
            <FaWindowClose />
          </span>
        </div>

        {props.children}
      </div>
    </div>
  )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default Modal
