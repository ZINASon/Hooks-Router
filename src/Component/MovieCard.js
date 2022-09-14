import React from 'react'
import { Router, Link } from 'react-router-dom'

const MovieCard = ({elm}) => {
  return (
    <div>
        <h2>{elm.title}</h2>
        <Link to={`/description/${elm.id}`}>DESCRIPTION</Link>
        
        <img width="320" height="240" src={elm.postURL} alt="imagetest"/>
        <h2>{elm.rating}</h2>
    </div>
  )
}

export default MovieCard