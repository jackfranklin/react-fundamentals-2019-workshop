import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'
import { FaPlus } from 'react-icons/fa'

const tagStyling = css`
  padding: 6px 10px;
  border-radius: 4px;
  background-color: #fff;
  margin-right: 4px;
`
const Tags = props => {
  const { postId, initialTags } = props

  // TODO: turn tags into a Set and update the rest of the code in this component accordingly
  const [tags, setTags] = React.useState(initialTags)
  const [formExpanded, setFormExpanded] = React.useState(false)
  const [newTagValue, setNewTagValue] = React.useState('')

  const onTagSubmit = event => {
    event.preventDefault()
    // you would make an API call here but we're ignoring this for now

    setTags(oldTags => [...oldTags, newTagValue])
    setNewTagValue('')
  }

  return (
    <div
      className={css`
        display: flex;
        flex-wrap: wrap;
      `}
    >
      {tags.map((tag, index) => {
        return (
          <span key={index} className={tagStyling}>
            {tag}
          </span>
        )
      })}
      <span className={tagStyling}>
        <FaPlus
          className={css`
            margin-top: 5px;
          `}
          onClick={() => setFormExpanded(true)}
        />

        {formExpanded && (
          <form
            onSubmit={onTagSubmit}
            className={css`
              display: inline-block;
              margin-left: 5px;
              border-radius: 4px;
            `}
          >
            <input
              type="text"
              value={newTagValue}
              onChange={e => setNewTagValue(e.target.value)}
            />
            <button
              type="submit"
              className={css`
                display: none;
              `}
            />
          </form>
        )}
      </span>
    </div>
  )
}

Tags.propTypes = {
  postId: PropTypes.number.isRequired,
  initialTags: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Tags
