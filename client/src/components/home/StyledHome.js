
//Jessica template//


// import React from "react";
// import styled from "styled-components";
// import { Button, Container, Navbar, Nav, Form } from "react-bootstrap";
// import logo from "../../assets/logo.png";

// const Background = styled.div`
//   background: #506053;
//   color: #fffffd;
// `;
// const Padding = styled.div`
//   padding: 5px;
// `;

// /**
//  * @description Represents a Navbar view Component for the whole app
//  */

// const TopBar = () => {
//   return (
//     <div>
//       <Background>
//         <Navbar expand="lg">
//           <Container fluid>
//             <Navbar.Brand href="#">
//               {" "}
//               <img src={logo} alt="Logo" width={"89px"} />
//             </Navbar.Brand>
//             <Navbar.Toggle aria-controls="navbarScroll" />
//             <Navbar.Collapse id="navbarScroll">
//               <Nav
//                 className="me-auto"
//                 style={{ maxHeight: "100px" }}
//                 navbarScroll
//               >
//                 <Nav.Link className="text-white" href="#action1">
//                   {" "}
//                   Indoor Plants{" "}
//                 </Nav.Link>
//                 <Nav.Link className="text-white" href="#action2">
//                   {" "}
//                   Outdoor Plants{" "}
//                 </Nav.Link>
//                 <Nav.Link className="text-white" href="#action3">
//                   {" "}
//                   Kitchen Herbs{" "}
//                 </Nav.Link>
//               </Nav>
//             </Navbar.Collapse>
//             <Padding>
//               <Button variant="outline-light">Sell</Button>
//             </Padding>
//             <Padding>
//               <Button variant="outline-light">Shop</Button>
//             </Padding>
//           </Container>
//         </Navbar>
//       </Background>
//     </div>
//   );
// };

// export default TopBar;

// ****************************************



//Wednesday 7 Sep//
import styled from 'styled-components'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import bgheroimage from "../../assets/homeassets/bgheroimage.jpeg"

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
  line-height: 70px;   /* within paragraph */
  margin: 30px; /* between paragraphs */
  font-weight: bold;
  font-family: 'Raleway'
`;

const PrimaryButton = styled.div`
position: absolute;
width: 250px;
height: 64px;
left: calc(50% - 250px/2);
top: 826px;
background: #0D1321;
border-radius: 5px;
font-family: 'Raleway';
text-align: center;
font-size: 28px;
font-weight: bold;
color: #FFFFFD;
line-height: 64px;
`;

const StyledHome = () => {
  return (
    <div>
        <Imagebgmain>
            <Container fluid>
                <MainTitle>
                  <div className="text-center text-wrap">
                    <p>Bring Nature into</p>
                    <p>your life</p>
                  </div>
                </MainTitle>
                  <p className="text-center">Your online shop for buying indoor plants, outdoor plants & kitchen herbs</p>
                <PrimaryButton>
                  <p>Shop</p>
                </PrimaryButton>
            </Container>
        </Imagebgmain>
        
        {/* Air purifying */}
          <Container>
            <Row>
              <Col>
              <h1 className="text-center text-wrap">Air purifying plants</h1>
              <p className="text-center">Looking to reduce toxins in your home? These air cleaning plants will help you to improve air quality</p>
              </Col>
            </Row>
            <Row>
              <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Peace Lily</Card.Title>
                             <Card.Text>
                              Some quick example text to build on the card title and make up the
                              bulk of the card's content.
                             </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                </Card>
              </Col>

              <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Snake Plant</Card.Title>
                             <Card.Text>
                              Some quick example text to build on the card title and make up the
                              bulk of the card's content.
                             </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                </Card>
              </Col>

              <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Aloe Vera</Card.Title>
                             <Card.Text>
                              Some quick example text to build on the card title and make up the
                              bulk of the card's content.
                             </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                </Card>
              </Col>

            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Rubber Plant</Card.Title>
                             <Card.Text>
                              Some quick example text to build on the card title and make up the
                              bulk of the card's content.
                             </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                </Card>
              </Col>

           </Row>
          </Container>
  
    
    </div>
  );
}

export default StyledHome;

//Maira Visual results//

// function StyledHome() {
//     return (
//       <div>
//         <p>home component test Maira</p>
//         {/* <Button/>
//         <Wrapper>
//          <Title><h1>Hello World!!!</h1></Title>
//         </Wrapper> */}


//         <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//       </div>
//     );
//   }
  
//   export default StyledHome;