import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

const Box = styled.div`
  background: #fcd6d5;
  height: 80px;
`;
const Greetings = styled.div`
  color: #506053;
`;

export const Logout = () => {
  const userID = sessionStorage.getItem("user");
  console.log(userID);
  //sessionStorage.removeItem('user'); and go to home
  return (
    <Box>
      <Container>
        <Greetings>Hello @</Greetings>
      </Container>
    </Box>
  );
};
