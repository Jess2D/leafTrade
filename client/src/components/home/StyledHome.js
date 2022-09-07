import styled from 'styled-components'




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


// //Tests Monday 5 Sep//
// const Button = styled.button`
//   background: blue;
//   border-radius: 3px;
//   border: none;
//   color: white;
// `

// // Create a Title component that'll render an <h1> tag with some styles
// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;

// // Create a Wrapper component that'll render a <section> tag with some styles
// const Wrapper = styled.section`
//   padding: 4em;
//   background: papayawhip;
// `;

//You should import individual components like: react-bootstrap/Button rather than the entire library.//

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'


//Tests Monday 5 Sep//


//Wednesdday 7 Sep//

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function StyledHome() {
  return (
    <Container fluid>
      <Row>
        <Col>1 of 1</Col>
      </Row>
    </Container>
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