import { Nav, Container } from "react-bootstrap";
import styled from "styled-components";
import { useParams } from "react-router";

const Wrapper = styled.div`
  padding: 32px;
`;

export const ProductNav = () => {
  const params = useParams();
  console.log(params.id.toString());
  sessionStorage.setItem("product", params.id.toString());
  const id = sessionStorage.getItem("product");
  const qa = "qa";

  return (
    <Wrapper className="justify-content-center">
      <Container>
        <Nav variant="tabs">
          <Nav.Item>
            <Nav.Link href="reviews">Reviews</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href={qa}>Questions</Nav.Link>
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
