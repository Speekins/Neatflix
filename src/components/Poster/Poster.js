import React from "react"
import './Poster.css'
import { Link } from "react-router-dom"

const Poster = ({ title, poster, id, selectMovie }) => {
  return (
    <Link to={`/${id}`}>
      {/* <div id={id} className='poster-container'> */}
        <img 
          className='poster'
          onClick={(event) => selectMovie(event)}
          src={poster}
          alt={title}
          id={id}
        />
        {/* <p onClick={(event) => selectMovie(event)} className='poster-title'>{title}</p> */}
      {/* </div> */}
    </Link>
  )
}


export default Poster