//Import PropTypes from PropTypes Library
import PropTypes from "prop-types";

//MovieCard Function Component
export const MovieCard = ({ movie, onMovieClick }) => {
    return (
       <div
         onClick={() => {
            onMovieClick(movie);
         }}
       >
        {movie.title}
        </div>
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
