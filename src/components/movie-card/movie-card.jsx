//Import PropTypes from PropTypes Library
import PropTypes from "prop-types";

//Import React Bootstrap from Library
import { Button, Card } from "react-bootstrap";

import "./movie-card.scss";

//MovieCard Function Component
export const MovieCard = ({ movie, onMovieClick }) => {
    return (
       <Card className="h-100">
        <Card.Img variant="top" src={movie.image} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{[movie.description, movie.genre, movie.director, movie.featured, movie.actors, movie.releaseyear, movie.rating]} </Card.Text>
          <Button onClick={() => onMovieClick(movie)} variant="link">
            Open
          </Button>
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
