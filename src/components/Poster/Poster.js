import React from "react"
import './Poster.css'
import { Link } from "react-router-dom"

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

export default Poster