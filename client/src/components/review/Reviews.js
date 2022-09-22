import React from "react";
import { useParams } from "react-router";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Product from "../product/Product";
import User from "../user/User";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import ProductView from "../product/ProductView";

const Box = styled.div`
  margin: 32px;
  font-style: italic;
`;

const getRating = (quant) => {
  let number = quant;
  console.log(number);
  if ((number = 5)) {
    return (
      <div>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </div>
    );
  } else if ((number = 4)) {
    return (
      <div>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </div>
    );
  } else if ((number = 3)) {
    return (
      <div>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </div>
    );
  } else if ((number = 2)) {
    return (
      <div>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </div>
    );
  } else if ((number = 1)) {
    return (
      <div>
        <FontAwesomeIcon icon={faStar} />
      </div>
    );
  } else return <div></div>;
};

const Review = (props) => (
  <div>
    <Container>
      <Box>
        <div>{getRating(props.review.rate)}</div>
        <div>{props.review.review}</div>
        <div>{props.name}</div>
      </Box>
    </Container>
  </div>
);

export default function Reviews() {
  const params = useParams();
  const id = params.id.toString();
  const product = Product(id);
  const url = "/product/" + product._id + "/review/add";
  const ReviewList = () => {
    return product.reviews.map((review, key) => {
      console.log(review.ruserID);
      const user = User(review.ruserID);
      const name = user.name;

      return <Review review={review} name={name} key={key} />;
    });
  };

  return (
    <div>
      <Container>
        {ReviewList()}
        <Box>
          <Button variant="dark" href={url}>
            Review this product
          </Button>
        </Box>
      </Container>
    </div>
  );
}
