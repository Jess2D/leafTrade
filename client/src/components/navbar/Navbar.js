import React from "react";
import styled from "styled-components";
import { Button, Container, Stack } from "react-bootstrap";
import logo from "../../assets/logo.png";

const Background = styled.div`
  background: #506053;
  color: #fffffd;
  padding: 12px;
`;
const ImgPadding = styled.div`
  background: #506053;
  padding: 15px;
`;

/**
 * @description Represents a Navbar view Component for the whole app
 */

const Navbar = () => {
  return (
    <div>
      <Background>
        <Container>
          <Stack direction="horizontal" gap={3}>
            <ImgPadding>
              <img src={logo} alt="Logo" width={"89px"} />
            </ImgPadding>

            <div className="ms-auto"></div>
            <Button variant="outline-light">Sell</Button>
            <Button variant="outline-light">Shop</Button>
          </Stack>
        </Container>
      </Background>
    </div>
  );
};

export default Navbar;
