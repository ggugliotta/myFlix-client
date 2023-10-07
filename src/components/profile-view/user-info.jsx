import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Card, Container } from 'react-bootstrap';

export const UserInfo = ({ user }) => {
  return (
    <>
      <Card.Title>Your Information</Card.Title>
      <Card.Text>
        Name: {user.Name}<br />
        E-mail: {user.Email}
      </Card.Text>
    </>
  );
};


{/* UserCard.propTypes = {
  users: PropTypes.shape({
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    birthday: PropTypes.number.isRequired,
    favoriteMovies: PropTypes.array.isRequired,
  }).isRequired,
}; */}
