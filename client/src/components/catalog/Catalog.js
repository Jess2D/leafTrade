import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import catalogMKT from "../../assets/catalogMKT.png";

/**
 * @description Represents a Login view Component for the whole app
 */
const PurpleSection = styled.div`
  background: rgb(242, 242, 242);
  background: linear-gradient(
    90deg,
    rgba(242, 242, 242, 1) 0%,
    rgba(206, 205, 208, 1) 0%,
    rgba(164, 123, 220, 1) 43%,
    rgba(250, 255, 245, 1) 100%
  );
`;

const Catalog = () => {
  return (
    <div>
      <PurpleSection>
        <Container>
          <div className="d-flex justify-content-around">
            <div className="">
              <h1>Our range</h1>
              <p>
                Our huge range of plants includes indoor, outdoor, herbs,
                natives, and so much more!
              </p>
            </div>
            <div className="">
              <img src={catalogMKT} alt="catalogMKT" width={"89px"} />
            </div>
          </div>
        </Container>
      </PurpleSection>
      <Container>Catalog</Container>
    </div>
  );
};

export default Catalog;
