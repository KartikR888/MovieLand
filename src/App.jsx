import './App.css';
import searchicon from './assets/search.svg';
import MovieCard from './assets/MovieCard';
import { useEffect, useState } from 'react';

const API_URL = 'https://omdbapi.com/?apikey=e2eb8b44';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    if (!title.trim()) {
      setMovies([]);
      return;
    }

    const response = await fetch(`${API_URL}&s=${encodeURIComponent(title)}`);
    const data = await response.json();

    setMovies(data.Search || []);
  };

  useEffect(() => {
    searchMovies(searchTerm);
  }, []);

  return (
    <div className="app">
      <h1>MovieLand by kartik </h1>
      <div className="search">
        <input
          placeholder="Search for movies and series"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              searchMovies(searchTerm);
            }
          }}
        />
        <img
          src={searchicon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
