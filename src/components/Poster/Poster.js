import React from "react"
import './Poster.css'
import { Link } from "react-router-dom"

const Poster = ({ title, poster, id }) => {
  return (
    <div id={id}>
      <Link to={`/${id}`}>
        <img
          className='poster'
          src={poster}
          alt={`Movie poster for ${title}`}
        />
      </Link>
      <p>{title}</p>
    </div>
  )
}

export default Poster