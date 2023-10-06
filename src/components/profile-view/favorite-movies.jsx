import React from "react";
import {  Row, Col, Figure, Button, Card } from "react-bootstrap";
import "./profile-view.scss";

function FavoriteMovies({ favoriteMovieList }) {
    return (
        <Card>
            <Card.Body>
                <Row>
                    <Col xs={12}>
                        <h4>Favorite Movies</h4>
                 </Col>
                 </Row>

                <Row>
                    {favoriteMovieList.map(({ ImageURL, Title, _id}) => {
                         return (
                            <Col xs={12} md={6} lg={4} key={_id} className="fav-movie">
                                <Figure>
                                <Link to={`/movies/${_id}`}>
                                    <Figure.Image
                                        src={ImageURL}
                                        alt={Title}
                                    />
                                    <Figure.Caption>
                                        {Title}
                                    </Figure.Caption>
                                    </Link>
                                </Figure>
                                <Link to={`/movies/${movies._id}`}>
                                 <h4>{movies.Title}</h4>
                                 </Link>
                                 <Button variant="secondary" onClick={() => removeFav(movies._id)}>Remove</Button>
                            </Col>
                        )
                     })
                    }
                </Row>
            </Card.Body>
        </Card>
    )
            
}   

export default FavoriteMovies 