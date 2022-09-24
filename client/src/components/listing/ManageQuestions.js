import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import styled from "styled-components";
import tools from "../../assets/listing/tools.png";
import { Logout } from "../login/Logout";

const Top = styled.div`
padding: 32px;
height; 200px;
`;

const Header = styled.div`
  font-size: 50px;
  font-weight: bold;
`;
const MainContent = styled.div`
  padding: 32px;
`;

const BgSection = styled.div`
  background-image: linear-gradient(
    to right top,
    #fcd6d5,
    #f7dbd0,
    #efe0d1,
    #e8e4d7,
    #e4e7de
  );
`;

const Record = (props) => (
  <tr>
    <td>{props.record.question}</td>
    <td>{props.record.answer}</td>
    <td>{props.record.userId}</td>
    <td>{props.record.productId}</td>
    <td>
      <Link className="btn btn-link" to={`/question/edit/${props.record._id}`}>
        Edit
      </Link>{" "}
    </td>
  </tr>
);

export default function MagageQuestions() {
  const [records, setRecords] = useState([]);

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
    return records.map((record) => {
      return <Record record={record} key={record._id} />;
    });
  }

  // This following section will display the table with the records of individuals.
  return (
    <div>
      <Logout />
      <BgSection>
        <Top className="d-flex flex-row justify-content-between flex-wrap">
          <div>
            <Header>Answer questions</Header>
            View all Q&A, details and answer a question
          </div>
          <img src={tools} alt="Tools" width={"300px"} />
        </Top>
      </BgSection>

      <MainContent>
        <Container></Container>
        <Container>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Question</th>
                <th>Answer</th>
                <th>Product</th>
                <th>User</th>
              </tr>
            </thead>
            <tbody>{recordList()}</tbody>
          </table>
        </Container>
      </MainContent>
    </div>
  );
}
