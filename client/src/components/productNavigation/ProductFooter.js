import { Nav, Container } from "react-bootstrap";
import styled from "styled-components";
import { useParams, Route, Routes } from "react-router";
import Reviews from "../review/Reviews";
import Questions from "../question/Questions";
import Product from "../product/Product";

const Wrapper = styled.div`
  padding: 32px;
`;

export const ProductNav = () => {
  const params = useParams();
  const id = params.id.toString();

  return (
    <Wrapper className="justify-content-center">
      <Container>
        <Nav variant="tabs">
          <Nav.Item>
            <Nav.Link href="reviews">Reviews</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="qa">Questions</Nav.Link>
          </Nav.Item>
          <Nav.Item></Nav.Item>
        </Nav>
      </Container>
    </Wrapper>
  );
};

const FooterProductPage = () => {
  return (
    <div>
      <ProductNav />
    </div>
  );
};

export default FooterProductPage;
