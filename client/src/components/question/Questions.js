import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faUser,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

const Box = styled.div`
  margin: 32px;
  font-style: italic;
`;

const Record = (props) => (
  <div>
    <Container>
      <Box>
        <div>
          <FontAwesomeIcon icon={faCircleQuestion} />
          <b> Question: </b>
          {props.record.question}
        </div>
        <div>
          <FontAwesomeIcon icon={faUser} />
          <b> Author: </b>
          {props.record.userId}
        </div>
        <div>
          <FontAwesomeIcon icon={faCheck} />
          <b> Answer: </b>
          {props.record.answer}
        </div>
      </Box>
    </Container>
  </div>
);

export default function Reviews() {
  const [records, setRecords] = useState([]);
  let url;
  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5000/question/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setRecords(records);
    }

    getRecords();

    return;
  }, [records.length]);

  // This method will map out the records on the table
  function recordList() {
    return records.map((record, key) => {
      url = "/newquestion/" + record.productId;
      return <Record record={record} key={key} />;
    });
  }

  // This following section will display the table with the records of individuals.
  return (
    <Container>
      {recordList()}
      <Box>
        <Button variant="dark" href={url}>
          Ask your question
        </Button>
      </Box>
    </Container>
  );
}
