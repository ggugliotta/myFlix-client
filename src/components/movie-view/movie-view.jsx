import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import './movie-view.scss';
import {Button, Card, Container, Col, Row, Badge, ListGroup} from "react-bootstrap";

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();

  const movie = movies.find((m) => m.id === movieId);

   return (
  <Row>
    <Col xs={12} md={6}>
       <Card className="h-50">
        <Card.Img variant="top" src={movie.imageURL} alt="movie image"/>
       </Card>
      </Col>

      <Col xs={12} md={6}>
        <Card>
        <Card.Body className="h-50">
          <Card.Title className="fs-3 fw-bold">{movie.title}</Card.Title>
          <Card.Subtitle className="fs-6 fw-light">{movie.releaseYear} - {movie.rating}</Card.Subtitle>
          <Card.Text className="mt-3 mt-sm-4">{movie.description}</Card.Text>
          <Card.Text><Badge pill bg="primary">{movie.genre.Name}</Badge></Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item><span className="fw-bold">Director:</span> {movie.director.Name}</ListGroup.Item>
          <ListGroup.Item>
            <span className="fw-bold">Actors: </span>
            <>
              {movie.actors.length > 0 ? (
                movie.actors
              ) : (
                <span>N/A</span>
              )}
            </>
            </ListGroup.Item>
        </ListGroup>
        <Card.Body className="text-end">
            <Button
              href={`/`}
              variant="primary"
            >
              Back
            </Button>
        </Card.Body>
       </Card>
    </Col>
  </Row>
    );
  };
