import React, { useState } from "react";
import { Form, Card, CardGroup, Container, Col, Row, Button } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/reducers/user";

export const LoginView = ({ onLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    //this prevents default behavior of the form to reload entire page
    event.preventDefault();

    const data = {
      Username: username,
      Password: password
    };

    fetch("https://moviesapi-zy5e.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Login response: ", data);
        if (data.user) {
            localStorage.setItem("user", JSON.stringify(data.user));
            localStorage.setItem("token", data.token);
            onLoggedIn(setUser(username));
        } else {
          alert("No such user");
        }
     })
     .catch((e) => {
        alert("Something went wrong");
    });
  }

  return (
    <Container>
      <Row>
        <Col>
          <CardGroup>
            <Card>
              <Card.Title>Login</Card.Title>
                <Card.Body>
                 <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formUsername">
                    <Form.Label>Username:</Form.Label>
                      <Form.Control
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        minLength="3"
                      />
                  </Form.Group>

                  <Form.Group controlId="formPassword">
                    <Form.Label>Password:</Form.Label>
                      <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                     />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </CardGroup>
         </Col>
      </Row>
   </Container>
  );
}
