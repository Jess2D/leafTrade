import React from "react";
import { useParams } from "react-router";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Product from "../product/Product";
import User from "../user/User";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const StarsOuter = styled.div`
  padding: 32px;
  height: 300px;
`;
const Box = styled.div`
  margin: 32px;
  font-style: italic;
`;

const StarsInner = styled.div`
  padding: 32px;
  height: 300px;
`;

const getUser = (id) => {
  const user = User(id);
  return user.name;
};

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
        <div>{getUser(props.id)}</div>
      </Box>
    </Container>
  </div>
);

export default function Reviews() {
  const params = useParams();
  const id = params.id.toString();
  const product = Product(id);
  const ReviewList = () => {
    return product.reviews.map((review, key) => {
      return <Review review={review} id={review.ruserID.ruser_id} key={key} />;
    });
  };

  return (
    <div>
      <Container>{ReviewList()}</Container>
    </div>
  );
}
