import { useEffect } from "react";
import { MoviesList } from "../movies-list/movies-list";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { ProfileView } from "../profile-view/profile-view";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {Spinner} from "react-bootstrap";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setMovies } from "../../redux/reducers/movies";

export const MainView = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    const movies = useSelector((state) => state.movies.list);
    const user = useSelector((state) => state.user);
    const [token, setToken] = useState(storedToken? storedToken: null);
    const dispatch = useDispatch();

    useEffect(() => {
      if (!token) return;
      fetch ("https://moviesapi-zy5e.onrender.com/movies", {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then((response) => response.json())
        .then((movies) => {
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

          dispatch(setMovies(moviesFromApi));
        });
    }, [token]);

    const onLoggedIn = (user, token) => {
      setUser(user);
      setToken(token);
    }

    const syncUser = (user) => {
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
    };

    return (
       <BrowserRouter>
        <Row>
          <NavigationBar
            user={user}
            onLoggedOut={() => {
              setUser(null);
              setToken(null);
              localStorage.clear();
            }}
            />
        </Row>
        <Row className="justify-content-md-center mt-2 mt-sm-3 mt-md-4">
          <Routes>
            <Route
             path="/signup"
             element={
              <>
                {user ? (
                  <Navigate to="/" replace />
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
                  <Navigate to="/" replace />
                ) : (
                  <Col md={5}>
                    <LoginView onLoggedIn={onLoggedIn} />
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
                  <Col md={10} class="spinner=wrapper">
                      <Spinner class="spinner-border text-primary" animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                      </Spinner>
                  </Col>
                ) : (
                  <Col md={8}>
                    <MovieView />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <Col xl={1} class="spinner=wrapper">
                      <Spinner class="spinner-border text-primary" animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                      </Spinner>
                  </Col>
                ) : (
                  <Col md={8}>
                    <ProfileView user={user} movies={movies} token={token} syncUser={syncUser} />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="/"
            element={
              <>{!user ? <Navigate to="/login" replace /> : <MoviesList />}</>
            }
          />
        </Routes>
      </Row>
    </BrowserRouter>
 );
};