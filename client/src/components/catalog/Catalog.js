import React, { useEffect, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import styled from "styled-components";
import catalogMKT from "../../assets/catalogMKT.png";

/**
 * @description Represents the style of Catalog Page
 */

const Header = styled.div`
  font-size: 50px;
  font-weight: bold;
`;
const Padding32 = styled.div`
  padding: 32px;
`;

const Padding12 = styled.div`
  padding: 12px;
`;
const Img = styled.div`
  padding-top: 32px;
  width: 189px;
`;
const CardSize = styled.div`
  width: 286px;
  height: 420px;
`;
const PurpleSection = styled.div`
  background: rgb(242, 242, 242);
  background: linear-gradient(
    90deg,
    rgba(242, 242, 242, 1) 0%,
    rgba(206, 205, 208, 1) 0%,
    rgba(164, 123, 220, 1) 43%,
    rgba(250, 255, 245, 1) 100%
  );
`;

/**
 * @description Represents a view of a single record of a product from MongoDB database
 */
const url = "/product/";

const Record = (props) => (
  <Card className="d-flex flex-column">
    <CardSize>
      <Card.Body>
        <Img className="text-center">
          <Card.Img variant="top" src={props.record.img} />
        </Img>
        <Card.Title className="font-weight-bold">
          {props.record.name}
        </Card.Title>
        <Card.Text>{props.record.category}</Card.Text>
        <Card.Text>${props.record.price}</Card.Text>
        <Button href={url + props.record._id + "/reviews"} variant="secondary">
          More info
        </Button>
      </Card.Body>
    </CardSize>
  </Card>
);

/**
 * @description Represents the list of products from MongoDB database
 */
function RecordList() {
  const [records, setRecords] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5000/product/`);
      console.log(response);
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

  // This method will map out the records on cards
  function recordList() {
    return records.map((record) => {
      return <Record record={record} key={record._id} />;
    });
  }

  // This following section will display the cards with the records of individuals.
  return (
    <div className="d-inline-flex align-content-center  gap-3 flex-wrap">
      {recordList()}
    </div>
  );
}

/**
 * @description Represents the Catalog view
 */

const Catalog = () => {
  return (
    <div className="position-relative">
      <PurpleSection>
        <Container>
          <Padding12>
            <div className="d-flex justify-content-between flex-wrap">
              <div className="">
                <Header>Our range</Header>
                <p>
                  Our huge range of plants includes indoor, outdoor, herbs,
                  natives, and so much more!
                </p>
              </div>
              <div className="">
                <img src={catalogMKT} alt="catalogMKT" width={"89px"} />
              </div>
            </div>
          </Padding12>
        </Container>
      </PurpleSection>
      <Padding32>
        <Container className="d-flex">
          <RecordList />
        </Container>
      </Padding32>
    </div>
  );
};

export default Catalog;
