import './App.css';
import React, { useState } from "react";
import MovieList from './Component/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './Component/Filter';
import AddMovies from './Component/AddMovies';
import ReactStars from "react-rating-stars-component";
import {Routes, Router, Route, Link} from "react-router-dom"
import Description from './Pages/Description';
function App() {
 const [rating, setRating] = useState(0)
   //initialisation setfilter
  const [filter,setFilter] = useState("")
  const [movielist,setMovieList]=useState([
    { id: '1',
      title: "MostafaHosni",
      description:"da3iya" ,
      postURL:"https://tse4.mm.bing.net/th?id=OIP.8NzRO8ZwTnPh4JfAHPBIigHaDt&pid=Api&P=0",
      rating: '5',
      trailerLink: (<iframe 
        width="1349" 
        height="480" src="https://www.youtube.com/embed/mCv-TfICqvw" title="كن قوياً بالله - مصطفى حسني" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>)
    },
    { id: '2',
      title: "DocRatebNaaboulsi",
    description:"3allema 3arabi" ,
    postURL:"https://tse4.mm.bing.net/th?id=OIP.FWRtQ6yBMAeKVge6gto79wHaEK&pid=Api&P=0" ,
    rating: '4',
    trailerLink: (<iframe 
    width="1366" 
    height="480" 
    src="https://www.youtube.com/embed/4Y2fabwPfW0" 
    title="" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>)
    }
  ])
  ///declaration function filter
  const handleFilter=(val)=>{
    setFilter(val)
  }
  const handleAddMovie=(val)=>{
    setMovieList([...movielist,val])
  }
  const handleRating = (rate) => {
    setRating(rate)
  }


 ////pass props Filter
  return (
    <div className="App">
      <Filter handleFilter={handleFilter}/>
      <ReactStars onClick={handleRating} ratingValue={rating}/>
    <Routes>
      <Route path='/' element={
        <>
        <MovieList list={movielist.filter(elm=>elm.title.toLowerCase().includes(filter.toLowerCase())&&((elm.rating)>=(rating)))}/>
         <AddMovies handleAddMovie={handleAddMovie}/>
        </>
      }>
      </Route>
      <Route path="/description/:MovId" element={<Description movieList={movielist}/>}/>
    </Routes>
    </div>
  );
}
 export default App;