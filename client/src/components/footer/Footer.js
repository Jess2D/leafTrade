import React from "react";
import styled from "styled-components";
import { Container, Navbar, Nav } from "react-bootstrap";
import plant from "../../assets/logo2.png";
import divider from "../../assets/Divider.png";

const Background = styled.div`
  background: #f2f2f2;
  padding: 22px;
`;
const Sizes = styled.div`
  font-size: 10px;
`;

const GreenBar = styled.div`
  height: 20px;
  background: #506053;
`;

/**
 * @description Represents a Footer view Component for the whole app
 */

const Footer = () => {
  return (
    <div className="fixed-bottom">
      <Background>
        <Nav className="justify-content-center">
          <Nav.Item>
            <Nav.Link href="#IndoorPlants" className="text-dark">
              Indoor Plants
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#OutdoorPlants" className="text-dark">
              Outdoor Plants
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#KitchenHerbs" className="text-dark">
              Kitchen Herbs
            </Nav.Link>
          </Nav.Item>{" "}
          <img src={plant} alt="Logo" />
          <Nav.Item>
            <Nav.Link href="#About" className="text-dark">
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#Blog" className="text-dark">
              Blog
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#Contactus" className="text-dark">
              Contact us
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Container>
          <Nav.Item>
            {" "}
            <div className="text-center">
              {" "}
              <img src={divider} alt="Divider" />{" "}
            </div>
          </Nav.Item>
          <div className="mx-auto text-center">
            <Sizes>
              © Copyright 2022 Leaf Trade. All rights reserved. JM Designs
            </Sizes>
          </div>
        </Container>
      </Background>
      <GreenBar />
    </div>
  );
};

export default Footer;
