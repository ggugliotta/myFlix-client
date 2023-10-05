import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

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

    const onLoggedIn = (user, token) => {
      setUser(user);
      setToken(token);
    }

    return (
      <BrowserRouter>
        <Row className="justify-content-md-center"> 
          <Routes>
           <Route 
            path="/signup"
            element={
           <>
            {!user ? (
              <Navigate to="/" />
            ) : (
              <Col md={5}>
                <SignupView />
              </Col>
            )}
          </>
        }
      />
           <Route 
            path="/login"
            element={
           <>
             {user ? (
               <Navigate to="/" />
             ) : (
               <Col md={5}>
                  <LoginView onLoggedIn={(user) => setUser(user)} />
               </Col>
             )}
           </>

            }
            />
          <Route 
            path="/movies/:movieId"
            element={
            <>
            {!user ? (
              <Navigate to="/login" replace />
            ) : movies.length === 0 ? (
              <Col>The list is empty!</Col>
            ) : (
              <Col md={8}>
                <MovieView movies={movies} />
              </Col>
            )}
          </>
         }
       />
      <Route
        path="/"
        element={
          <>
            {!user ? (
              <Navigate to="/login" replace />
            ) : movies.length === 0 ? (
              <Col>The list is empty!</Col>
            ) : (
              <>
                {movies.map((movie) => (
                  <Col className="mb-4" key={movie.id} md={3}>
                    <BookCard book={book} />
                  </Col>
                ))}
              </>
            )}
          </>
         }
       />
     </Routes>
   </Row>
 </BrowserRouter>
 );
};
