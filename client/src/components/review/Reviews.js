import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Box = styled.div`
  margin: 32px;
  font-style: italic;
`;

const Record = (props) => (
  <Container>
    <Box>
      <div>
        {props.record.rate}
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </div>

      <div>{props.record.review}</div>
      <div>{props.record.userId}</div>
    </Box>
  </Container>
);

export default function Reviews() {
  const [records, setRecords] = useState([]);
  let url;
  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5000/review/`);

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
    return records.map((record) => {
      url = "/newreview/" + record.productId;
      return <Record record={record} key={record._id} />;
    });
  }

  // This following section will display the table with the records of individuals.
  return (
    <Container>
      {recordList()}
      <Box>
        <Button variant="dark" href={url}>
          Review this product
        </Button>
      </Box>
    </Container>
  );
}
