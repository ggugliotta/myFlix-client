import React, { useEffect, useState } from 'react';
import {FavoriteMovies} from "../profile-view/favorite-movies.jsx";
import {ProfileView} from "../profile-view/profile-view.scss";
import {UserInfo} from "../profile-view/user-info.jsx";
import {UpdateUser} from "../profile-view/update-user.jsx";
import { Container, Row, Col} from "react-bootstrap";

export const ProfileView = () => {
    const [users, setUsers] = useState([]);
    const handleSubmit = (event) => {event.preventDefault();};
    //const handleRemove = 
    //const handleUpdate = () => {};
    const favoriteMovies = movies.filter(m => user.FavoriteMovies.includes(m._id))

    useEffect(() => {
      if (!token) return;
      fetch ("https://moviesapi-zy5e.onrender.com/users", {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then((response) => response.json())
        .then((users) => {
          const usersFromApi = users.map((user) => {
            return {
              _id: user._id,
              name: user.Name,
              username: user.Username,
              password: user.Password,
              email: user.Email,
              birthday: user.Birthday,
              favoriteMovies: user.favoriteMovies
           };
         });

        setUsers(usersFromApi);
        });
    }, [token]);

    return (
        <Container>
            <Row>
                 <Col xs={12} sm={4}>
                     <Card>
                        <Card.Body>
                           <UserInfo name={user.Username} email={user.Email} />
                        </Card.Body>
                    </Card>
           
                </Col>

                 <Col xs={12} sm={8}>
                     <Card>
                        <Card.Body>
                            <UpdateUser handleSubmit={handleSubmit} handleUpdate={handleUpdate} />
                        </Card.Body>
                    </Card>

                </Col>
        </Row>
       
        <FavoriteMovies favoriteMovieList={favoriteMovieList} />
        <Link to={`/`}>
            <Button variant="primary">Home</Button>
        </Link> 
      
      </Container>
    )
}