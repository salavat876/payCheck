import React, { useEffect } from "react";
import { Card, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUserSuccess } from "../redux/reducers/userSlice";
import { Link } from "react-router-dom";

function Main() {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserSuccess());
  }, [dispatch]);

  return (
    <>
      {users.map((user) => (
        <Col key={user.id}>
          <Link key={user.id} to={`/pays/${user.id}`} className="pays_link">
            <Card style={{ width: "18rem" }} className="card">
              <Card.Body>
                <Card.Title>name: {user.name}</Card.Title>
                <Card.Text>Sum: {user.sum}</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      ))}
    </>
  );
}

export default Main;
