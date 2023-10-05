import React, { useEffect, useState} from 'react';
import { Container, Col, Row, Card } from 'react-bootstrap';
import UserInfo from './user-info';
import FavoriteMovies from './favorite-movies';
import UpdateUser from './update-user';
import './profile-view.scss';

export const ProfileView ({ movies }) => {
    const [user, setUser] = useState({
        Username: '',
        Email: '',
        FavoriteMovies: []
    })
    const favoriteMovies = movies.filter(m => user.FavoriteMovies.includes(m._id);
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted');
    };
    const handleRemove = (id) => {listMovie.list.filter((Id) => item.Id !=== id);
    const handleUpdate = (e) => {};

    useEffect(() => {

    } 

    }, []);

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
            <Col xs={12} xs={8}>
                <Card>
                    <Card.Body>
                        <UpdateUser handleSubmit={handleSubmit} handleUpdate={handleUpdate} />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
       
        <FavoriteMovies favoriteMovieList={favoriteMovieList} />
      
      </Container>
    );
}