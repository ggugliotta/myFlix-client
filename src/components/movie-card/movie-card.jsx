import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './movie-card.scss';

//MovieCard Function Component
export const MovieCard = ({ movie }) => {
    return (
       <Card className="h-100">
        <Card.Img variant="top" src={movie.imageURL} alt="movie image" height="430 px" width="100%" />
        <Card.Body>
          <Card.Title className="text-center" margin-top="10"> {movie.title}</Card.Title>
        </Card.Body>
        <Card.Footer>
          <Link to={`/movies/${encodeURIComponent(movie.id)}`}>
            <Button 
              variant="primary"
              style={{ cursor: "pointer"}}
            >
                Open
            </Button>
          </Link>
        </Card.Footer>
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
