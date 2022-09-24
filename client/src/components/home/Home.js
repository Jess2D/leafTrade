import { Link } from "react-router-dom";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import bgheroimage from "../../assets/homeassets/bgheroimage.jpeg";
import peacelily from "../../assets/homeassets/peacelilysqr.jpeg";
import snakeplant from "../../assets/homeassets/snakesqr.jpeg";
import aloevera from "../../assets/homeassets/aloeverasqr.jpeg";
import rubberplant from "../../assets/homeassets/rubberplantsqr.jpeg";

const Imagebgmain = styled.div`
  background-image: url(${bgheroimage});
  height: 900px;
  position: relative;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  margin-bottom: 50px;
`;

const MainTitle = styled.div`
  font-size: 70px;
  line-height: 70px; /* within paragraph */
  margin: 30px; /* between paragraphs */
  font-weight: bold;
  font-family: "Raleway";
`;
const Space = styled.div`
  padding-bottom: 32px;
`;

const PrimaryButton = styled.div`
  position: absolute;
  left: calc(50% - 50px / 2);
  top: 826px;
  font-family: "Raleway";
  text-align: center;
  font-size: 48px;
  font-weight: bold;
`;

const Home = () => {
  return (
    <div className="">
      <Imagebgmain>
        <Container fluid>
          <MainTitle>
            <div className="text-center text-wrap">
              <p>Bring Nature into</p>
              <p>your life</p>
            </div>
          </MainTitle>
          <p className="text-center ">
            Your online shop for buying indoor plants, outdoor plants & kitchen
            herbs
          </p>
          <PrimaryButton>
            <Button variant="dark" href="/catalog" type="button" size="lg">
              Shop
            </Button>
          </PrimaryButton>
        </Container>
      </Imagebgmain>

      {/* Air purifying */}
      <Space>
        <Container>
          <Row>
            <Col>
              <h1 className="text-center text-wrap">Air purifying plants</h1>
              <p className="text-center">
                Looking to reduce toxins in your home? These air cleaning plants
                will help you to improve air quality
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card style={{ width: "286px" }}>
                <Card.Img variant="top" src={peacelily} />
                <Card.Body>
                  <Card.Title>Peace Lily</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="/catalog">Check it out</Card.Link>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card style={{ width: "286px" }}>
                <Card.Img variant="top" src={snakeplant} />
                <Card.Body>
                  <Card.Title>Snake Plant</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="/catalog">Check it out</Card.Link>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card style={{ width: "286px" }}>
                <Card.Img variant="top" src={aloevera} />
                <Card.Body>
                  <Card.Title>Aloe Vera</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="/catalog">Check it out</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Space>

      {/* TODO: Fresh Herbs */}

      {/* TODO: Grow your Business */}

      {/* TODO: Become a Seller */}
    </div>
  );
};

export default Home;
