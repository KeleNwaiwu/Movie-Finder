import './App.css';
import {useState,useEffect} from 'react'; 
import SearchIcon from './search.svg';

import MovieCard from './MovieCard';

//d9099e8

const movie1 = {
  "Title": "Italian Spiderman",
  "Year": "2007",
  "imdbID": "tt2705436",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
}

const API_URL = 'http://www.omdbapi.com?apikey=d9099e8';
const App = () => {

  const [searchTerm,setSearchTerm] = useState('');
  const [movies,setMovies] = useState([]);
  const searchMovies = async (title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }
  return (
    <div className = "app">
      <h1>Movie App</h1>
 
      <div className="search">
        <input
        placeholder = "Search for Movies"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
        src = {SearchIcon}
        alt="Search"
        onClick={()=>searchMovies(searchTerm)}
        /> 
      </div>

      {
        movies?.length > 0
        ?
        (
          <div className='container'>
            {movies.map((movie) => (
              <MovieCard movie = {movie}/>
            ))}
        </div>
        ) : (
          <div className = "empty">
            <h2>No movies Found</h2>
          </div>
        )

      }
    </div>
  );
}

export default App;
