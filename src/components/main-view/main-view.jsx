import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";

export const MainView = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localstorage.getItem("token");
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [user, setUser] = useState(storedUser? storedUser : null);
    const [token, setToken] = useState(storedToken? storedToken: null);

    useEffect(() => {
      if (!token) return;

      fetch ("https://moviesapi-zy5e.onrender.com", {
        headers: { Authorization: 'Bearer ${token}' }
      })
        .then((response) => response.json())
        .then((movies) => {
          console.log(movies);
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
    }, [token]);

  if (!user) {
    return (
      <LoginView
        onLoggedIn={(user, token) => {
          setUser(user);
          setToken(token);
        }}
      />
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