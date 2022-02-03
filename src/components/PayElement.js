import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Card, Col, FormControl, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deletedUser, saveUserSuccess } from "../redux/reducers/userSlice";

function PayElement() {
  const { id } = useParams();
  const [userName, setUserName] = useState(null);
  const [userSum, setUserSum] = useState(null);
  const [deleted, setDeleted] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
  const saveUserData = async () => {
    setEdit(!isEdit);
    dispatch(saveUserSuccess({ id, userName, userSum }));
  };
  const deleteUser = () => {
    dispatch(deletedUser(id));
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
    setTimeout(
      () =>
        navigate("/pays", { state: { from: { pathname: location.pathname } } }),
      1000
    );
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
