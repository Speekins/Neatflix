import React from "react"
import './Poster.css'

const Poster = ({ title, poster, id, showMovie }) => {
  return (
    <div id={id}>
      <div onClick={(event) => showMovie(event)}>
      </div>
      <p onClick={(event) => showMovie(event)}>{title}</p>
    </div>
  )
}


export default Poster