
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
`;

const StyledHome = () => {
  return (
    <div>
      {/* //Main Image// */}
      <Container fluid>
                <Col>
             <div>
              <Imagebgmain>
             <h1 className="text-center text-wrap">Bring Nature into your life</h1>
             {/* <img src={imagebgmain} class="img-fluid bg-image-container" alt="bgheroimage" /> */}
             </Imagebgmain>
              </div> 
                </Col>
        </Container>


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
                        <Card.Title>Card Title</Card.Title>
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
                        <Card.Title>Card Title</Card.Title>
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
                        <Card.Title>Card Title</Card.Title>
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
                        <Card.Title>Card Title</Card.Title>
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