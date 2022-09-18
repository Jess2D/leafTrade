import React from "react";
import styled from "styled-components";
import { Button, Container, Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/logo.png";

const Background = styled.div`
  background: #506053;
  color: #fffffd;
`;
const Padding = styled.div`
  padding: 5px;
`;

/**
 * @description Represents a Navbar view Component for the whole app
 */

const TopBar = () => {
  return (
    <div>
      <Background>
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand href="/">
              {" "}
              <img src={logo} alt="Logo" width={"89px"} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link className="text-white" href="#action1">
                  {" "}
                  Indoor Plants{" "}
                </Nav.Link>
                <Nav.Link className="text-white" href="#action2">
                  {" "}
                  Outdoor Plants{" "}
                </Nav.Link>
                <Nav.Link className="text-white" href="#action3">
                  {" "}
                  Kitchen Herbs{" "}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Padding>
              <Button href="/login" variant="outline-light">
                Sell
              </Button>
            </Padding>
            <Padding>
              <Button href="/catalog" variant="outline-light">
                Shop
              </Button>
            </Padding>
          </Container>
        </Navbar>
      </Background>
    </div>
  );
};

export default TopBar;
