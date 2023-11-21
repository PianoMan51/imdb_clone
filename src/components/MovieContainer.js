import React from "react";
import SelectedMovie from "./SelectedMovie";
import MovieList from "./MovieList";

function renderStarIcons(rating) {
  const starIcons = [];
  const totalStars = 5;

  for (let i = 1; i <= totalStars; i++) {
    if (i <= rating) {
      starIcons.push(<i key={i} className="fa-solid fa-star"></i>);
    } else if (i - 0.5 === rating) {
      starIcons.push(<i key={i} className="fa-solid fa-star-half-stroke"></i>);
    } else {
      starIcons.push(<i key={i} className="fa-regular fa-star"></i>);
    }
  }

  return starIcons;
}

export default function MovieContainer({
  movieData,
  selectedMovie,
  setSelectedMovie,
}) {
  function handleMovieReset() {
    setSelectedMovie(null);
  }

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };
  return (
    <div className="movie--container">
      {selectedMovie ? (
        <SelectedMovie
          renderStarIcons={renderStarIcons}
          handleMovieReset={handleMovieReset}
          selectedMovie={selectedMovie}
          setSelectedMovie={setSelectedMovie}
        />
      ) : (
        <MovieList
          movieData={movieData}
          renderStarIcons={renderStarIcons}
          handleMovieClick={handleMovieClick}
        />
      )}
    </div>
  );
}
