import React from "react";
import styled from "styled-components";
import { Container, Button } from "react-bootstrap";
import User from "../user/User";

const Box = styled.div`
  padding: 12px;
  background: #fcd6d5;
  height: 50px;
`;
const Greetings = styled.div`
  color: #506053;
`;

export const Logout = () => {
  const userID = sessionStorage.getItem("user");
  const user = User(userID);

  console.log(userID);

  return (
    <Box>
      <Container className="text-end d-flex justify-content-between">
        <Greetings>Hello @{user.name}</Greetings>
        <Button
          className="fw-bold"
          variant="outline-danger"
          size="sm"
          type="button"
          href="/"
          onClick={() => sessionStorage.removeItem("user")}
        >
          Logout
        </Button>
      </Container>
    </Box>
  );
};
