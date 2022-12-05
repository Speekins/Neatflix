import React from "react"
import './Poster.css'

const Poster = ({ title, poster, id, showMovie }) => {
  return (
    <div id={id} className='poster-container'>
      <img 
        className='poster'
        onClick={(event) => showMovie(event)}
        src={poster}
      />
      <p onClick={(event) => showMovie(event)} className='poster-title'>{title}</p>
    </div>
  )
}


export default Poster