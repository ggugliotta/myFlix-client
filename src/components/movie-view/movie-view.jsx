import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import './movie-view.scss';
import {Button} from "react-bootstrap";

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();

  const movie = movies.find((m) => m.id === movieId);

  return (
    <div>
      <div>
        <img className="w-100" src={movie.imageURL} />
      </div>
      <div>
        <span><strong>Title:</strong></span>
        <span>{movie.title}</span>
      </div>
      <div>
        <span><strong>Director:</strong></span>
        <span>{movie.director.Name}</span>
      </div>
      <Link to={`/`}>
        <Button className="back-button">Back</Button>
      </Link>
    </div>
  );
};
