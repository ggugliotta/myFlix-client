import React, { useEffect, useState } from 'react';
import { Container, Col, Row, Card } from 'react-bootstrap';
import UserInfo from './user-info';
import FavoriteMovies from './favorite-movies';
import UpdateUser from './update-user';
import './profile-view.scss';

export const ProfileView ({ user, movies }) => {
    // const [user] = useState({
    //     Username: '',
    //     Email: '',
    //     FavoriteMovies: []
    // });
    // const favoriteMovies ({movies.filter}) => user.FavoriteMovies.includes(movie.id);
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    // };
    // const handleRemove(movies) => {movies.list.filter((movie.id) => movie.id);
    // const handleUpdate = (e) => {profile-view};

    // useEffect(() => {
    //           if (!token) return;
    //   fetch ("https://moviesapi-zy5e.onrender.com/${favoriteMovies}", {
    //     headers: { Authorization: `Bearer ${token}` }
    //   })
    //     .then((response) => response.json())
    //     .then((movies) => {
    //       const moviesFromApi = movies.map((movie) => {
    //         return {
    //           id: movie._id,
    //           title: movie.Title,
    //           imageURL: movie?.ImageUrl ?? movie?.ImagePath ?? '',
    //         };
    //       });

    //       setMovies(moviesFromApi);
    //     });
    // }, [token]);

    return (
      <Container>
        hello 
        {/* /* { <Row>
            <Col xs={12} sm={4}>
                <Card>
                    <Card.Body>
                           <UserInfo name={user.Username} email={user.Email} />
                    </Card.Body>
                </Card>
           
            </Col>
            <Col xs={12} xs={8}>
                <Card>
                    <Card.Body>
                        <UpdateUser handleSubmit={handleSubmit} handleUpdate={handleUpdate} />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
       
        <FavoriteMovies favoriteMovieList={favoriteMovieList} />/} */ */}
      
      </Container>
    );
}