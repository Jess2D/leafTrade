import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import toolsmanage from "../../assets/listing/toolsmanage.png";

const Top = styled.div`
  padding: 32px;
  background:  #FCEAD5;
  height; 200px;
`;

const MainContent = styled.div`
  padding: 32px;
`;

const MainTitle = styled.div`
  font-size: 50px;
  font-weight: bold;
  `;

const Padding12 = styled.div`
  padding: 12px;
`;

const PurpleSection = styled.div`
  background: rgb(262, 242, 242);
  background: linear-gradient(
    90deg,
    rgba(252, 237, 236, 1) 0%,
    rgba(245, 221, 217, 1) 0%,
    rgba(248, 227, 224, 1) 43%,
    rgba(274, 215, 212, 1) 100%
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
      <div className="position-relative">
        <PurpleSection>
          <Container>
            <Padding12>
              <div className="d-flex justify-content-between flex-wrap">
                <div>
                  <MainTitle>
                    <p>
                      Manage your listings
                    </p>
                  </MainTitle>
                  <p className="lh-1">
                  Here you can view all your listings, view item details,
                  </p>
                  <p className="lh-1">
                  edit or delete an item.
                  </p>
                </div>
                <div>
                  <img src={toolsmanage} alt="toolsmanage" width={"300px"} />
                </div>
              </div>
            </Padding12>
          </Container>
        </PurpleSection>
      </div>
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
    </div >
  );
}
