import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './movie-card.scss';

//MovieCard Function Component
export const MovieCard = ({ movie }) => {
    return (
       <Card className="h-100">
        <Card.Img variant="top" src={movie.imageURL} alt="movie image" height="250 px" width="auto" />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text><Badge pill bg= "primary">{movie.rating}</Badge></Card.Text>
          <Link to={`/movies/${encodeURIComponent(movie.id)}`}
              className="stretched-link"
              style={{ cursor: "pointer"}}
              >
          </Link>
        </Card.Body>
       </Card>
    );
  };


//Defining prop constraints for MovieCard
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    genre: PropTypes.object.isRequired,
    director: PropTypes.object.isRequired,
    imageURL: PropTypes.string.isRequired,
    featured: PropTypes.bool.isRequired,
    actors: PropTypes.array.isRequired,
    releaseYear: PropTypes.number.isRequired,
    rating: PropTypes.string.isRequired
  }).isRequired,
};
