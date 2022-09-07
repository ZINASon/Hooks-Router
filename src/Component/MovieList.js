import React from 'react'
import MovieCard from './MovieCard'


const MovieList = ({list}) => {
  return (
    <div>
        {list.length? list.map(elm=><MovieCard elm={elm}/>):<h2>Not Found</h2>}
    </div>
  )
}

export default MovieList