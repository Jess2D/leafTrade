import { Nav, Container } from "react-bootstrap";
import styled from "styled-components";
const Wrapper = styled.div`
  padding: 32px;
`;

export const ProductNav = () => {
  return (
    <Wrapper className="justify-content-center">
      <Container>
        <Nav variant="tabs">
          <Nav.Item>
            <Nav.Link href="/reviews">Reviews</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/qa">Questions</Nav.Link>
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
