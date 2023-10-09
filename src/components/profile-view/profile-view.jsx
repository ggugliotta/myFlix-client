import { Button, Modal, Container, Row, Col, Card, Form} from "react-bootstrap";
import { Link } from "react-router-dom";
import { MovieCard } from '../movie-card/movie-card.jsx';
import { useState } from 'react';
import "../profile-view/profile-view.scss";

export const ProfileView = ({ user, movies, token, syncUser }) => {
  const [username, setUsername] = useState(user.Username);
  const [name, setName] = useState(user.Name);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(user.email);
  const [birthday, setBirthday] = useState(user.Birthday);
  const [showModal, setShowModal] = useState(false);
  const favoriteMovies = movies.filter((movie) => {
    return user.FavoriteMovies.includes(movie.id)
  });

  let result = movies.filter((movie) => user.FavoriteMovies.includes(movie.title));

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);


  const handleSubmit = (event) => {event.preventDefault();

    let data = {
      Username: username,
      Name: name,
      Email: email,
      Birthday: birthday
    };
    if(password) {
      data['Password'] = password
    }

    fetch (`https://moviesapi-zy5e.onrender.com/users/${user.Username}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: { 
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}` 
                  }
    }).then((response) => {
            if (response.ok) {
              return response.json();
            } else {
                    alert ("update failed")
            }
     }).then((data) => {
          if (data) {
                      localStorage.setItem("user", JSON.stringify(data));
                      setUser(data);
                    }
        })
  };

  const handleDeleteUser = () => {
    fetch(`https://moviesapi-zy5e.onrender.com/users/${user.Username}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer $ token`
      }
    }).then((response) => {
          if (response.ok) {
                setUser(null);
                alert("your account has successfully been deleted")
          } else {
                 alert("something went wrong")
          }
    })
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={5}>
          <h1 className='profile'>My Profile</h1>

          <Card>
            <Card.Body>
              <Card.Title>Account Details</Card.Title>
              <Card.Text>
                 Name: {user.Name}<br />
                 Username: {user.Username}<br />
                 E-mail: {user.Email} <br />
                 Birthday: {user.Birthday}
              </Card.Text>
              <Button variant="link" className="text-danger" onClick={handleShowModal}>
                Delete My Account
              </Button>
            </Card.Body>
          </Card>

          <Form className='profile-form' onSubmit={(e) => handleSubmit(e)}>
            <Form.Group>
              <Form.Title>Want to change some info?</Form.Title>
                 <Form.Label>Username:</Form.Label>
                  <Form.Control
                    type="text"
                    value={user.Username}
                    onChange={(e) => handleUpdate(e)}
                    required
                    placeholder="Enter a username"
                  />
            </Form.Group>
            <Form.Group>
                <Form.Label>Name:</Form.Label>
                  <Form.Control
                     type="name"
                     value={user.Name}
                     onChange={(e) => handleUpdate(e)}
                     required
                     placehoolder="Enter your name"
                  />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password:</Form.Label>
                <Form.Control
                  type="password"
                  value={user.Password}
                  onChange={(e) => handleUpdate(e)}
                  required
                  minLength="8"
                  placehoolder="Your password must be 8 or more characters"
                />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
                 <Form.Control
                    type="email"
                    value={user.Email}
                    onChange={(e) => handleUpdate(e)}
                    required
                    placehoolder="Enter your email address"
                  />
            </Form.Group>
            <Button variant="primary" type="submit"
            onClick={handleSubmit}>
              Submit
            </Button>
          </Form>

          <Row>
            <Col>
                <h1 className="favorite-movies">Favorite Movies Collection</h1>
            </Col>
          </Row>
         <Row className="justify-content-center">
            {result.map((movie) => (
              <Col className="mb-4" key={movie.id} xs={6} md={3} >
                <MovieCard
                  movie={movie}
                  user={user}
                  token={token}
                  setUser={setUser}
                  ></MovieCard>
              </Col>
            ))}
          </Row> 
    

        <Link to={`/`}>
          <Button variant="primary">Home</Button>
        </Link>

      </Col>
    </Row>

    <Modal>
      show={showModal} onHide={handleCloseModal}
      <Modal.Header closeButton>
        <Modal.Title>Delete Account</Modal.Title>
        <Modal.Body>Are you sure you want to delete your account? This action is permanent. 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleDeleteUser}>Yes</Button>
          <Button variant="primary" onClick={handleCloseModal}>No</Button>
        </Modal.Footer> 
      </Modal.Header>
    </Modal>

  </Container>
  );
}