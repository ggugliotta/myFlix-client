import React, { useState } from "react";
import { Form, Button, Container, Col, Row} from "react-bootstrap";
//import { Link } from 'react-router-dom';

export const SignupView = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
        Name: name,
        Username: username,
        Password: password,
        Email: email,
        Birthday: birthday
    };

    fetch("https://moviesapi-zy5e.onrender.com/users", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }).then((response) => {
        if (response.ok) {
            alert ("Signup successful");
            window.location.reload();
        } else {
            alert("Signup failed");
        }
     });
  };

  return (
    <Container>
      <Row>
        <Col>
            <div>Welcome to</div> <br></br><h1>Flickette</h1>
             <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formName">
                      <Form.Label>Name:</Form.Label>
                         <Form.Control
                           type="text"
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                           required
                           minLength="3"
                         />
                     </Form.Group>

                     <Form.Group controlId="formUsername">
                       <Form.Label>Username:</Form.Label>
                         <Form.Control
                           type="text"
                           value={username}
                           onChange={(e) => setUsername(e.target.value)}
                           required
                           minLength="5"
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

                     <Form.Group controlId="formEmail">
                      <Form.Label>Email:</Form.Label>
                         <Form.Control
                           type="email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           required
                         />
                      </Form.Group>

                      <Form.Group controlId="formBirthday">
                        <Form.Label>Birthday:</Form.Label>
                          <Form.Control
                            type="date"
                            value={birthday}
                            onChange={(e) => setBirthday(e.target.value)}
                            required
                          />
                      </Form.Group>
                      <Button className="align-center" variant="primary" type="submit">
                         Signup 
                      </Button>
                    </Form> 
                    {/* <div>
                       <Link to="/login">Already have an account?</Link>
                    </div> */}
 
        </Col>
      </Row>
    </Container>
  );
};
