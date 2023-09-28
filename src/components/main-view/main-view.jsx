import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
      fetch ("https://moviesapi-zy5e.onrender.com")
        .then((response) => response.json())
        .then((data) => {
          const moviesFromApi = data.docs.map((doc) => {
            return {
              id: doc.key,
              title: doc.title,
              image: "https://moviesapi-zy5e.onredner.com/b/id/${doc.cover_i}-L.jpg",
              director: doc.director_name?.[0]
            };
          });

          setMovies(moviesFromApi);
        });
    }, []);

  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  } 

return (
  <div>
    {movies.map((movie) => (
      <MovieCard
       key={movie.id} 
       movie={movie}
       onMovieClick={(newSelectedMovie) => {
         setSelectedMovie(newSelectedMovie);
       }}
       />
    ))}
  </div>
 );
}