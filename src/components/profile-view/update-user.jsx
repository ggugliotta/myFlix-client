import React from 'react';
import {Form, Button} from 'react-bootstrap';

UpdateUser = ({handleSubmit, handleUpdate, user}) => {
    return (
      <Form onSubmit={handleSubmit}>
                  <Form.Group>
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
            )
}