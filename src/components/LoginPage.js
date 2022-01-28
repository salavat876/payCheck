import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { increment } from "../redux/reducers/userSlice";

function LoginPage() {
  const dispatch = useDispatch();
  return (
    <Container className="login_container">
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <h3 className="login_title">Let's check your account</h3>
      <Form className="login_form">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Your login</Form.Label>
          <Form.Control type="text" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>Your password</Form.Label>
          <Form.Control type="text" placeholder="name@example.com" />
        </Form.Group>
        <Button onClick={() => dispatch(increment())}>
          Authorization
        </Button>
      </Form>
    </Container>
  );
}

export default LoginPage;
