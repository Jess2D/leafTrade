import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import peacelily from "../../assets/homeassets/peacelilysqr.jpeg";
import Product from "../product/Product";
import Stack from "react-bootstrap/Stack";
import { useParams } from "react-router";

const Box = styled.div`
  background: #fcd6d5;
  height: 80px;
`;
const Padding = styled.div`
  padding: 12px;
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
      <Box>
        <Container>
          <Padding>
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="/catalog">Catalog</Breadcrumb.Item>
              <Breadcrumb.Item active>Peace Lily</Breadcrumb.Item>
            </Breadcrumb>
          </Padding>
        </Container>
      </Box>
      <Container>
        <Row>
          <Col>
            <Card.Img variant="top" src={peacelily} />
          </Col>

          <Col>
            <Card.Title>
              <ProductTitle>{product.name}</ProductTitle>
              <ProductPrice>NZD {product.price}</ProductPrice>
            </Card.Title>

            <Card.Text>
              <ProductDescription>
                <p>{product.description}</p>
              </ProductDescription>
            </Card.Text>

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
                  <CartButton>
                    <p>Add to cart</p>
                  </CartButton>
                </div>
                <div>
                  <Button variant="align-middle text-center btn-lg btn-outline-danger">
                    &nbsp;
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="30"
                      fill="currentColor"
                      class="text-center bi bi-heart-fill align-middle"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                      ></path>
                    </svg>
                  </Button>{" "}
                </div>
              </Stack>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductView;
