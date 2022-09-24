import React from "react";
import { useParams } from "react-router";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Product from "../product/Product";
import User from "../user/User";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faUser,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";

const Box = styled.div`
  margin: 32px;
  font-style: italic;
`;

const getUser = (id) => {
  const user = User(id);
  return user.name;
};

const Question = (props) => (
  <div>
    <Container>
      <Box>
        <div>
          <FontAwesomeIcon icon={faCircleQuestion} />
          <b> Question: </b>
          {props.question.title}
        </div>
        <div>
          <FontAwesomeIcon icon={faUser} />
          <b> Author: </b>
          {getUser(props.question.quserID)}
        </div>
        <div>
          <FontAwesomeIcon icon={faCheck} />
          <b> Answer: </b>
          {props.question.answer}
        </div>
      </Box>
    </Container>
  </div>
);

export default function Questions() {
  const params = useParams();
  const id = params.id.toString();
  const product = Product(id);
  const url = "/product/" + product._id + "/question/add";
  const QuestionList = () => {
    return product.questions.map((question, key) => {
      return (
        <Question
          question={question}
          id={question.quserID.quser_id}
          key={key}
        />
      );
    });
  };

  return (
    <div>
      <Container>
        {QuestionList()}
        <Box>
          <Button variant="dark" href={url}>
            Ask you question
          </Button>
        </Box>
      </Container>
    </div>
  );
}
