import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Product from "../product/Product";
import Stack from "react-bootstrap/Stack";
import { useParams } from "react-router";
import FooterProductPage from "../productNavigation/ProductFooter";
import { Outlet } from "react-router";

const Padding32 = styled.div`
  padding: 32px;
`;
const ProductTitle = styled.div`
  font-size: 64px;
  font-weight: bold;
`;

const ProductPrice = styled.div`
  font-size: 43px;
`;

const ProductDescription = styled.div`
  font-size: 16px;
  padding: 12px;
`;
const InputPlaceholder = styled.div`
  font-size: 16px;
  color: #0d1321;
  border: 1px solid #0d1321;
  width: 152px;
  height: 50px;
  text-align: center;
  border-radius: 6px;
  background-color: transparent;
  cursor: pointer;
  margin-left: 2rem;
  display: inline-block;
`;

const InputAdd = styled.div`
  font-size: 16px;
  font-size: 1.25rem;
  color: #0d1321;
  background-color: transparent;
  cursor: pointer;
  display: inline-block;
  line-height: 50px;
`;

const InputDelete = styled.div`
  font-size: 16px;
  font-size: 1.25rem;
  color: #0d1321;
  background-color: transparent;
  cursor: pointer;
  display: inline-block;
  line-height: 50px;
`;

const InputNumber = styled.div`
  font-size: 16px;
  font-size: 1.25rem;
  color: #0d1321;
  background-color: transparent;
  cursor: pointer;
  display: inline-block;
  padding-left: 40px;
  padding-right: 40px;
  line-height: 50px;
`;

const CartButton = styled.div`
  font-size: 16px;
  color: #fffffd;
  background-color: #0d1321;
  border: 1px solid #0d1321;
  width: 152px;
  height: 50px;
  text-align: center;
  border-radius: 6px;
  display: inline-block;
  line-height: 50px;
`;

const ProductView = () => {
  const params = useParams();
  const id = params.id.toString();
  const product = Product(id);
  return (
    <div>
      <Container>
        <Padding32>
          <Row className="vh-100">
            <Col>
              <Card.Img variant="top" src={product.img} />
            </Col>

            <Col>
              <Card.Title>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductPrice>NZD {product.price}</ProductPrice>
              </Card.Title>

              <Card.Body>
                <ProductDescription>{product.description}</ProductDescription>
              </Card.Body>

              <Row>
                <Stack direction="horizontal" gap={3}>
                  <div>
                    <InputPlaceholder>
                      <InputDelete>-</InputDelete>
                      <InputNumber>1</InputNumber>
                      <InputAdd>+</InputAdd>
                    </InputPlaceholder>
                  </div>
                  <div>
                    <CartButton>Add to cart</CartButton>
                  </div>
                  <div>
                    <Button variant="align-middle text-center btn-lg btn-outline-danger">
                      &nbsp;
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="30"
                        fill="currentColor"
                        className="text-center bi bi-heart-fill align-middle"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                        ></path>
                      </svg>
                    </Button>{" "}
                  </div>
                </Stack>
              </Row>
            </Col>
          </Row>
        </Padding32>
      </Container>
      <FooterProductPage />
      <Outlet />
    </div>
  );
};

export default ProductView;
