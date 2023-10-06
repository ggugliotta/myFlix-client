import React from 'react';
import Proptypes from 'proptypes';
import Card from 'react-bootstrap';

export const UserCard = ({ user }) => {
    return (
      <Card classname="h-100">
        <Card.Body>
          <Card.Title>Your Information</Card.Title>
            <Card.Text>
              Name: {user.Name}
              E-mail: {user.Email}
              Birthday {user.Birthday}
              Favorite Movies {user.favoriteMovies}
            </Card.Text>
        </Card.Body>
      <Card/>
    );
  };


UserCard.propTypes = {
  users: PropTypes.shape({
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    birthday: PropTypes.number.isRequired,
    favoriteMovies: PropTypes.array.isRequired,
  }).isRequired,
};
