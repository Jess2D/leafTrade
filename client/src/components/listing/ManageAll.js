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
    <td>
      <img src={props.record.img} alt={props.record.name} width={"89px"} />
    </td>
    <td>{props.record.name}</td>
    <td>{props.record.category}</td>
    <td>{props.record.price}</td>

    <td>
      <Link className="btn btn-link" to={`/edit/${props.record._id}`}>
        Edit
      </Link>{" "}
      |
      <button
        className="btn btn-link"
        onClick={() => {
          props.deleteRecord(props.record._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default function MagageAll() {
  const [records, setRecords] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5000/product/`);

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

  // This method will delete a record
  async function deleteRecord(id) {
    await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE",
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  // This method will map out the records on the table
  function recordList() {
    return records.map((record) => {
      return (
        <Record
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
        />
      );
    });
  }

  // This following section will display the table with the records of individuals.
  return (
    <div>
      <Logout />
      <BgSection>
        <Top className="d-flex flex-row justify-content-between flex-wrap">
          <div>
            <Header>Manage Listings</Header>
            Create an item, view a list, view item details, update or edit the
            item and delete an item.
          </div>
          <img src={tools} alt="Tools" width={"300px"} />
        </Top>
      </BgSection>

      <MainContent>
        <Container>
          <Button
            className="fw-bold"
            href="/newlisting"
            variant="dark"
            type="submit"
          >
            New Listing
          </Button>
        </Container>
        <Container>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>{recordList()}</tbody>
          </table>
        </Container>
      </MainContent>
    </div>
  );
}
