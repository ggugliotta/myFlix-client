import { useParams } from "react-router";
import { Link } from "react-router-dom";
import './movie-view.scss'; 

export const MovieView = ({ movie }) => {
  const { movieId } = useParams();

  const movie = movies.find((b) => b.id === movieId);
  
  return (
    <div>
      <div>
        <img width = "w-100" src={movie.imageURL} />
      </div>
      <div>
        <span><strong>Title:</strong></span>
        <span>{movie.title}</span>
      </div>
      <div>
        <span><strong>Description:</strong></span>
        <span>{movie.description}</span>
      </div>
      <div>
        <span><strong>Director:</strong></span>
        <span>{movie.director.Name}</span>
      </div>
      <div>
        <span><strong>Genre:</strong></span>
        <span>{movie.genre.Name}</span>
      </div>
      <div>
        <span><strong>Actors:</strong></span>
        <span>{movie.actors.join(', ')}</span>
      </div>
      <div>
        <span><strong>Rating:</strong></span>
        <span>{movie.rating}</span>
      </div>
      <div>
        <span><strong>Released:</strong></span>
        <span>{movie.releaseYear}</span>
      </div>
      <Link to={`/`}>
        <button className="back-button">Back</button>
      </Link>
    </div>
  );
};
