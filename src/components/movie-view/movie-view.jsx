import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import './movie-view.scss';
import {Button, Card, Container, Col, Row} from "react-bootstrap";

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();

  const movie = movies.find((m) => m.id === movieId);

   return (
  <Row>
    <Col>
       <Card className="h-50">
        <Card.Img variant="top" src={movie.imageURL} alt="movie image"/>
       </Card>
      </Col>

      <Col>
        <Card>
        <Card.Body className="h-50">
          <Card.Title className="text-center" margin-top="10"> {movie.title}</Card.Title>
          <Card.Text margin-top="10"> Description: {movie.description}</Card.Text>
          <Card.Text margin-top="10"> Genre: {movie.genre.Name}</Card.Text>
          <Card.Text margin-top="10">Director: {movie.director.Name}</Card.Text>
          <Card.Text margin-top="10"> Release Year: {movie.releaseYear}</Card.Text>
          <Card.Text margin-top="10"> Actors: {movie.actors}</Card.Text>
          <Card.Text margin-top="10"> Rating: {movie.rating}</Card.Text>
        </Card.Body>
       </Card>
    </Col>
      <Link to={`/`}>
        <Button
          variant="primary"
          style={{ cursor: "pointer"}}
          >
            Back
        </Button>
       </Link>
  </Row>
    );
  };
