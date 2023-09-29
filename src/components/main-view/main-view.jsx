import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";

export const MainView = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [user, setUser] = useState(storedUser? storedUser : null);
    const [token, setToken] = useState(storedToken? storedToken: null);

    useEffect(() => {
      if (!token) return;

      fetch ("https://moviesapi-zy5e.onrender.com/movies", {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then((response) => response.json())
        .then((movies) => {
          console.log(movies);
          const moviesFromApi = movies.map((movie) => {
            return {
              id: movie._id,
              title: movie.Title,
              imageURL: movie?.ImageUrl ?? movie?.ImagePath ?? '',
              director: movie.Director,
              genre: movie.Genre,
              actors: movie.Actors,
              description: movie.Description,
              featured: movie.Featured,
              rating: movie.Rating ?? '',
              releaseYear: Number.parseInt(movie.ReleaseYear)
            };
          });

          setMovies(moviesFromApi);
        });
    }, [token]);

  if (!user) {
    return (
      <>
        <LoginView onLoggedIn={(user, token) => {
          setUser(user);
          setToken(token);
        }} />
        or
        <SignupView />
     </>
    );
  }

  if (selectedMovie) {
    return (
      <>
        <button
          onClick={() => {
            setUser(null);
            setToken(null);
            localStorage.clear();
          }}
          >
            Logout
          </button>
          <MovieView
           movie={selectedMovie}
           onBackClick={() => setSelectedMovie(null)}
           />
        </>
    );
  }

  if (movies.length === 0) {
    return (
      <>
        <button
          onClick={() => {
            setUser(null);
            setToken(null);
            localStorage.clear();
           }}
        >
          Logout
        </button>
        <div>The list is empty!</div>
      </>
    );
  }

return (
  <>
    <button
      onClick={() => {
        setUser(null);
        setToken(null);
        localStorage.clear();
      }}
    >
      Logout
    </button>
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
  </>
);
}