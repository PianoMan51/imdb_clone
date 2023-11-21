import React from "react";
import Stats from "./Stats";

export default function SelectedMovie({
  renderStarIcons,
  handleMovieReset,
  selectedMovie,
}) {
  return (
    <div className="selected-movie--container">
      <div className="selected-top">
        <div className="selected-movie--textContainer">
          <h1 className="selected--title">
            {selectedMovie.Title}
            <span className="movie--year"> ({selectedMovie.Year})</span>
          </h1>

          <div className="movie--rating">
            <span>{selectedMovie.imdbRating}</span>
            <span className="movie-stars">
              {renderStarIcons(Math.round(selectedMovie.imdbRating * 2) / 4)}
            </span>
          </div>

          <div className="selected--authors">
            <p className="selected--director">
              Director: {selectedMovie.Director}
            </p>
            <p className="selected--writer">Writer: {selectedMovie.Writer}</p>
            <p className="selected--actors">Actors: {selectedMovie.Actors}</p>
          </div>

          <p className="selected--plot">{selectedMovie.Plot}</p>
        </div>
        <div className="selected-movie--posterContainer">
          <div className="selected--poster">
            <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
          </div>
        </div>
      </div>
      <div className="selected-bottom">
        <Stats selectedMovie={selectedMovie} />
      </div>

      <div className="bottom-buttons">
        <button className="reset-button" onClick={() => handleMovieReset()}>
          Go back
        </button>
      </div>
    </div>
  );
}
