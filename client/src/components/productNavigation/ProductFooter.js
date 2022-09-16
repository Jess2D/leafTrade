import { Nav, Container } from "react-bootstrap";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Questions from "../question/Questions";
import Reviews from "../review/Reviews";

const Wrapper = styled.div`
  padding: 32px;
`;

export const ProductNav = () => {
  return (
    <Wrapper className="justify-content-center">
      <Container>
        <Nav variant="tabs" defaultActiveKey="/reviews">
          <Nav.Item>
            <Nav.Link href="#">Reviews</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/qa">Questions & Answers</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Shipping & pick-up options
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Wrapper>
  );
};

const FooterProductPage = () => {
  return (
    <div>
      <ProductNav />
      <Routes>
        <Route exact path="/" element={<Reviews />} />
        <Route exact path="/qa" element={<Questions />} />
      </Routes>
    </div>
  );
};

export default FooterProductPage;
