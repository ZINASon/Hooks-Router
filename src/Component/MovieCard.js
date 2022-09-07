import React from 'react'

const MovieCard = ({elm}) => {
  return (
    <div>
        <h2>{elm.title}</h2>
        <h2>{elm.description}</h2>
        <img width="320" height="240" src={elm.postURL} alt="imagetest"/>
        <h2>{elm.rating}</h2>
    </div>
  )
}

export default MovieCard