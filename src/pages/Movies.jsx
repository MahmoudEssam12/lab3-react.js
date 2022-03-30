import React, { useState, useEffect } from "react";
import { axiosInstance } from "../Network/axiosConfig";
import MovieCard from "../components/MovieCard";

function Movies() {
  const url = `/movie/popular${process.env.REACT_APP_APIKEY}`;
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axiosInstance
      .get(url)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="container mt-5">
      <div className="row">
        {movies.map((movie) => (
          <div className="col-4 mb-5" key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
