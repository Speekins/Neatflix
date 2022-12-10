import React from "react"
import './Poster.css'
import { Link } from "react-router-dom";

const Poster = ({ title, poster, id, selectMovie }) => {
  return (
    <Link to={`/${id}`}>
        <img 
          className='poster'
          onClick={(event) => selectMovie(event)}
          src={poster}
          alt={title}
          id={id}
        />
    </Link>
  )
}


export default Poster