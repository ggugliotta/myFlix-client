import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import './movie-view.scss';
import {Button, Card, Container, Col, Row} from "react-bootstrap";

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();

  const movie = movies.find((m) => m.id === movieId);
  
   return (
       <Card className="h-100">
        <Card.Img variant="top" src={movie.imageURL} alt="movie image" height="600 px" width="100%" />
        <Card.Body>
          <Card.Title className="text-center" margin-top="10"> {movie.title}</Card.Title>
        </Card.Body>
        <Card.Footer>
          <Link to={`/movies`}>
            <Button 
              variant="primary"
              style={{ cursor: "pointer"}}
            >
                Back 
            </Button>
          </Link>
        </Card.Footer>
       </Card>
    );
  };
