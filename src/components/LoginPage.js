import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { setAuth } from "../redux/reducers/userSlice";

function LoginPage() {
  const navigate = useNavigate();
  const { login, password } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    e.preventDefault();
    if (data.userEmail === login && data.userPassword === password) {
      dispatch(setAuth());
      navigate("/pays", { replace: true });
    }
  };
  return (
    <Container className="login_container">
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <h3 className="login_title">Let's check your account</h3>
      <Form className="login_form" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Your login</Form.Label>
          <Form.Control
            type="text"
            {...register("userEmail", { required: true })}
            placeholder="paycheck@gmail.com"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Your password</Form.Label>
          <Form.Control
            {...register("userPassword")}
            type="password"
            placeholder="1234321"
          />
        </Form.Group>
        <Button type="submit">Authorization</Button>
      </Form>
    </Container>
  );
}

export default LoginPage;
