import React, { useEffect, useState } from "react";
import { useParams, Navigate, useLocation } from "react-router-dom";
import axios from "axios";
import { Button, Card, Col, FormControl, InputGroup } from "react-bootstrap";

function PayElement() {
  const { id } = useParams();
  const [userName, setUserName] = useState(null);
  const [userSum, setUserSum] = useState(null);
  const [isEdit, setEdit] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const location = useLocation();

  const handleClick = (e) => {
    if (e.detail === 2) {
      setEdit(!isEdit);
    }
  };
  const handleChangeName = (e) => {
    setUserName(e.target.value);
  };
  const handleChangeSum = (e) => {
    setUserSum(e.target.value);
  };
  const saveUserData = () => {
    setEdit(!isEdit);
    axios
      .put(`https://61f0031c732d93001778e7ca.mockapi.io/pay/users/${id}`, {
        name: userName,
        sum: userSum,
      })
      .then((res) => console.log(res));
  };
  const deleteUser = () => {
    axios
      .delete(`https://61f0031c732d93001778e7ca.mockapi.io/pay/users/${id}`)
      .then((res) => console.log(res));
    setDeleted(!deleted);
  };
  useEffect(() => {
    axios
      .get(`https://61f0031c732d93001778e7ca.mockapi.io/pay/users/${id}`)
      .then((res) => {
        setUserName(res.data.name);
        setUserSum(res.data.sum);
      });
  }, [id]);
  if (deleted) {
    return <Navigate to="/pays" from={location.pathname} />;
  }

  return (
    <div>
      <Col>
        <Card
          style={{ width: "18rem", margin: "24px auto" }}
          className=" card "
        >
          <Card.Body>
            {isEdit ? (
              <>
                <span>username:</span>
                <InputGroup className="mb-3">
                  <FormControl
                    value={userName}
                    onChange={handleChangeName}
                    placeholder="username"
                    aria-label=" username"
                  />
                </InputGroup>
                <span>sum:</span>
                <InputGroup className="mb-3">
                  <FormControl
                    value={userSum}
                    onChange={handleChangeSum}
                    placeholder="username"
                    aria-label=" username"
                  />
                </InputGroup>
                <Button onClick={saveUserData}>Save</Button>
                <Button
                  onClick={deleteUser}
                  style={{ marginLeft: "48.7%" }}
                  variant="danger"
                >
                  Delete
                </Button>
              </>
            ) : (
              <>
                <Card.Title onClick={handleClick}>name: {userName}</Card.Title>
                <Card.Text onClick={handleClick}>Sum: {userSum}</Card.Text>
              </>
            )}
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}

export default PayElement;
