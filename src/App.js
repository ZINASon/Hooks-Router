import './App.css';
import React, { useState } from "react";
import MovieList from './Component/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './Component/Filter';
import AddMovies from './Component/AddMovies';
import ReactStars from "react-rating-stars-component";
function App() {
 const [rating, setRating] = useState(0)
   //initialisation setfilter
  const [filter,setFilter] = useState("")
  const [movielist,setMovieList]=useState([
    { title: "MostafaHosni",
      description:"da3iya" ,
      postURL:"https://tse4.mm.bing.net/th?id=OIP.8NzRO8ZwTnPh4JfAHPBIigHaDt&pid=Api&P=0",
      rating: '5'
    },
    { title: "DocRatebNaaboulsi",
    description:"3allema 3arabi" ,
    postURL:"https://tse4.mm.bing.net/th?id=OIP.FWRtQ6yBMAeKVge6gto79wHaEK&pid=Api&P=0" ,
    rating: '4'
    },
    { title: "zina",
    description:"3allema 3arabi" ,
    postURL:"https://tse4.mm.bing.net/th?id=OIP.FWRtQ6yBMAeKVge6gto79wHaEK&pid=Api&P=0" ,
    rating: '8'
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
      <MovieList list={movielist.filter(elm=>elm.title.toLowerCase().includes(filter.toLowerCase())&&((elm.rating)>=(rating)))}/>
      <AddMovies handleAddMovie={handleAddMovie}/>
    </div>
  );
}
 export default App;