import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const Top = styled.div`
  padding: 32px;
  background:  #FCEAD5;
  height; 200px;
`;

const MainContent = styled.div`
  padding: 32px;
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

export default function MagageListing() {
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
      <Top>
        <Container>
          <h3> Manage Listings </h3>
          Create an item, view a list, view item details, update or edit the
          item and delete an item.
        </Container>
      </Top>
      <MainContent>
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
