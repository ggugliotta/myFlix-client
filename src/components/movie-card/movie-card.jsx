import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

//MovieCard Function Component
export const MovieCard = ({ movie }) => {
    return (
       <Card className="h-100">
        <Card.Img variant="top" src={movie.image} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.director.name} </Card.Text>
          <Link to={`/movies/${encodeURIComponent(movie.Id)}`}>
            <Button variant="link">Open</Button>
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
  onMovieClick: PropTypes.func.isRequired
};
