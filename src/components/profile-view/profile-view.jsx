import React, { useEffect, useState } from 'react';
import {FavoriteMovies} from "./favorite-movies.jsx";
import {ProfileView} from "../profile-view/profile-view.scss";
import {UserInfo} from "../profile-view/user-info.jsx";
import {UpdateUser} from "../profile-view/update-user.jsx";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProfileView = ({ user, movies, token, syncUser }) => {

    const handleSubmit = (event) => {event.preventDefault();};
    //const handleRemove =
    //const handleUpdate = () => {};
    const favoriteMovies = movies.filter(m => user.FavoriteMovies.includes(m.id))

    // useEffect(() => {
    //   if (!token) return;
    //   fetch ("https://moviesapi-zy5e.onrender.com/users", {
    //     headers: { Authorization: `Bearer ${token}` }
    //   })
    //     .then((response) => response.json())
    //     .then((users) => {
    //       const usersFromApi = users.map((user) => {
    //         return {
    //           _id: user._id,
    //           name: user.Name,
    //           username: user.Username,
    //           password: user.Password,
    //           email: user.Email,
    //           birthday: user.Birthday,
    //           favoriteMovies: user.favoriteMovies
    //        };
    //      });

    //     setUsers(usersFromApi);
    //     });
    // }, [token]);

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <UserInfo user={user} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              {/* <UpdateUser handleSubmit={handleSubmit} handleUpdate={handleUpdate} /> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <FavoriteMovies favoriteMovieList={favoriteMovies} />

      <Link to={`/`}>
        <Button variant="primary">Home</Button>
      </Link>
    </Container>
  )
}
