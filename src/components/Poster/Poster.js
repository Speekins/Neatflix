import React from "react"
import './Poster.css'
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const Poster = ({ title, poster, id }) => {
  return (
    <div className="poster-container" id={id}>
      <Link to={`/${id}`}>
        <img
          className='poster'
          src={poster}
          alt={`Movie poster for ${title}`}
        />
      </Link>
      <p className="poster-title">{title}</p>
    </div>
  )
}

Poster.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  id: PropTypes.any.isRequired
}

export default Poster