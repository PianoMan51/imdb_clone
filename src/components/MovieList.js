import React from "react";

export default function MovieList({
  movieData,
  renderStarIcons,
  handleMovieClick,
}) {
  return (
    <div className="movie--list">
      {movieData.map((movie, index) => (
        <div
          key={index}
          className="movie--item"
          onClick={() => handleMovieClick(movie)}
        >
          <div className="movie--text">
            <h2 className="movie--title">
              {movie.Title}
              <span className="movie--year"> ({movie.Year})</span>
            </h2>
            <span>{movie.Runtime}</span>

            <div className="movie--rating">
              <span>{movie.imdbRating}</span>
              <span className="movie-stars">
                {renderStarIcons(Math.round(movie.imdbRating * 2) / 4)}
              </span>
            </div>
            <span>
              {movie.Type !== "movie" ? "Series, " : ""}
              {movie.Genre}
            </span>
          </div>
          <div className="movie--poster">
            <img src={movie.Poster} alt={movie.Title} />
          </div>
        </div>
      ))}
    </div>
  );
}
