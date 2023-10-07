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
        <span><strong>Movie:</strong></span>
        <span>{movie.title}</span>
      </div>
      <div>
        <span><strong>Director:</strong></span>
        <span>{movie.director.Name}</span>
      </div>
      <div>
        <span><strong>Description:</strong></span>
        <span>{movie.description}</span>
    </div>
    <div>
        <span><strong>Genre:</strong></span>
        <span>{movie.genre.Name}</span>
    </div>
    <div>
        <span><strong>Genre:</strong></span>
        <span>{movie.genre.Description}</span>
    </div>
    <div>
        <span><strong>Actors:</strong></span>
        <span>{movie.actors}</span>
    </div>
    <div>
        <span><strong>Release Year:</strong></span>
        <span>{movie.releaseyear}</span>
    </div>
    <div>
        <span><strong>Rating:</strong></span>
        <span>{movie.rating}</span>
    </div>
      <Link to={`/`}>
        <Button className="back-button">Back</Button>
      </Link>
    </div>
  );
};
