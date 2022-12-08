import React from "react"
import './Poster.css'
import { Link } from "react-router-dom"

const Poster = ({ title, poster, id, showMovie }) => {
  return (
    <Link to={`/${id}`}>
      <div id={id} className='poster-container'>
        <img
          className='poster'
          // onClick={(event) => showMovie(event)}
          src={poster}
        />
        <p /*onClick={(event) => showMovie(event)}*/ className='poster-title'>{title}</p>
      </div>
    </Link>
  )
}


export default Poster