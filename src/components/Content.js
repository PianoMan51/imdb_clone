import React from "react";
import Search from "./Search";
import MovieContainer from "./MovieContainer";

export default function Content() {
  const [movieData, setMovieData] = React.useState([]);
  const [selectedMovie, setSelectedMovie] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const fetchData = (title) => {
    setLoading(true);
    const apiKey = "b64be8fa";
    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${title}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Search) {
          const imdbIDs = data.Search.map((movie) => movie.imdbID);
          const fetchPromises = imdbIDs.map((imdbID) =>
            fetch(
              `http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}&plot=full`
            ).then((response) => response.json())
          );

          Promise.all(fetchPromises)
            .then((detailedDataArray) => {
              const combinedData = data.Search.map((movie, index) => ({
                ...movie,
                ...detailedDataArray[index],
              }));
              setMovieData(combinedData);
            })
            .catch((error) => {
              console.error("Error fetching detailed data:", error);
            })
            .finally(() => {
              setLoading(false);
            });
        } else {
          setMovieData([]);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
        setLoading(false);
      });
  };

  React.useEffect(() => {
    fetchData("");
  }, []);

  return (
    <div className="content">
      {!selectedMovie && <h1>Movies</h1>}
      {!selectedMovie && <Search onSearch={fetchData} />}
      {loading ? (
        <div className="loading-icon">
          <p>Loading...</p>
          <i class="fa-solid fa-spinner fa-spin fa-2xl"></i>
        </div>
      ) : (
        <MovieContainer
          movieData={movieData}
          selectedMovie={selectedMovie}
          setSelectedMovie={setSelectedMovie}
        />
      )}
    </div>
  );
}
