import React from "react";
import styled from 'styled-components'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import peacelily from "../../assets/homeassets/peacelilysqr.jpeg";
import Nav from 'react-bootstrap/Nav';

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
color: #0D1321;
border: 1px solid #0D1321;
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
color: #0D1321;
background-color: transparent;
cursor: pointer;
display: inline-block;
line-height: 50px;
`;

const InputDelete = styled.div`
font-size: 16px;
font-size: 1.25rem;
color: #0D1321;
background-color: transparent;
cursor: pointer;
display: inline-block;
line-height: 50px;
`;

const InputNumber = styled.div`
font-size: 16px;
font-size: 1.25rem;
color: #0D1321;
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
background-color:#0D1321;
border: 1px solid #0D1321;
width: 152px;
height: 50px;
text-align: center;
border-radius: 6px;
display: inline-block;
line-height: 50px;
`;

const ProductView = () => {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="http://localhost:3000/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="http://localhost:3000/catalog">
          Catalog
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Peace Lily</Breadcrumb.Item>
      </Breadcrumb>
      <Container>
        <Row>
          <Col>
            <Card.Img variant="top" src={peacelily} />
          </Col>

          <Col>
                <Card.Title>
                  <ProductTitle>Peace Lily</ProductTitle>
                  <ProductPrice>NZD 20,00</ProductPrice>
                </Card.Title>

                <Card.Text>
                  <ProductDescription>
                    <p>
                      The name “peace lily” came about because the white flowers look like white flags of peace—though
                      they aren't actually lilies. Instead, they're tropical perennials, meaning when you practice good peace lily care,
                      these plants can live for years
                    </p>
                    <ul>
                      <li>Place plants in bright, indirect light</li>
                      <li>Keep the soil consistently moist but not soggy</li>
                      <li>Grow 1 to 4 feet tall</li>
                    </ul>
                  </ProductDescription>
                </Card.Text>

                <Row>
                  <Col>
                    <InputPlaceholder>
                      <InputDelete>-</InputDelete>
                      <InputNumber>1</InputNumber>
                      <InputAdd>+</InputAdd>
                    </InputPlaceholder>
                  </Col>
                  <Col>
                    <CartButton>
                      <p>Add to cart</p>
                    </CartButton>
                  </Col>
                  <Col>
                    <Button variant="w-100 btn btn-lg btn-outline-danger">
                      <span variant="text-center">
                        &nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 30 30">
                          <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path>
                        </svg>
                      </span>
                    </Button>{' '}
                  </Col>
                  <p></p>
                </Row>
          </Col>
        </Row>
      </Container>
      <Container>
        <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link href="/home">Reviews</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Questions&Answers</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="disabled" disabled>
                Shipping & pick-up options
              </Nav.Link>
            </Nav.Item>
        </Nav>
      </Container>
    </div>
  );
}

export default ProductView;