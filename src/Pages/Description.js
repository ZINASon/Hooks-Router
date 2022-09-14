import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Description = ({movieList}) => {
  const navigate = useNavigate();
  const goHome= () => {
    navigate('/')
  }
  const params=useParams();
  const movie=movieList.find(elm=>elm.id === params.MovId)

  return (
    <div>
      {movie.description}
      <br></br>
      {movie.trailerLink}
      <br></br>
      <button onClick={goHome}>Go Home</button>

    </div>
  )
}

export default Description