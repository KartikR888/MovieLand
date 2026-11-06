import React from "react"; 

const MovieCard = ({ movie:{imdbID, Title, Year, Type, Poster} }) => {
  return (
    <>
    <div className="movie" key={imdbID}>
        <div>
          <p>{Title}</p>
        </div>
        <div> 
          <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/300"} alt={Title} />
        </div>
        <div> 
          <span>{Type}</span>
          <p>{Year}</p>
        </div>
      </div>
    </>
  )
}

export default MovieCard
