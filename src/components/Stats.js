import React from "react";
import tomatoJPG from "../images/tomato.png";

export default function Stats({ selectedMovie }) {
  return (
    <div className="movie--stats">
      <div className="stat boxoffice">
        <i class="fa-solid fa-sack-dollar"></i>
        <span>{selectedMovie.BoxOffice}</span>
      </div>
      <div className="stat awards">
        <i class="fa-solid fa-trophy"></i>
        <span>{selectedMovie.Awards}</span>
      </div>
      <div className="stat rottenTomatoes">
        {<img src={tomatoJPG} height="20px" />}
        <span>
          {selectedMovie.Ratings.find(
            (rating) => rating.Source === "Rotten Tomatoes"
          )?.Value || "?"}
        </span>
      </div>
      <div className="stat language">
        <i class="fa-solid fa-language"></i>
        <span>{selectedMovie.Language}</span>
      </div>
      <div className="stat released">
        <i class="fa-regular fa-calendar-days"></i>
        <span>{selectedMovie.Released}</span>
      </div>
      <div className="stat votes">
        <i class="fa-solid fa-check-to-slot"></i>
        <span>{selectedMovie.imdbVotes}</span>
      </div>
      <div className="stat rated">
        <i class="fa-regular fa-registered"></i>
        <span>{selectedMovie.Rated}</span>
      </div>
    </div>
  );
}
