import React, { useEffect, useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import styled from "styled-components";

/**
 * @description Represents a Login view Component for the whole app
 */

/**
 * @description Represents the style of Catalog Page
 */
const Box = styled.div`
  padding: 32px;
  height: 300px;
`;

const Padding = styled.div`
  padding: 32px;
  width: 400px;
  margin: 0;
`;

const Bg = styled.div`
  background: #fcd6d5;
`;
/*
const Img = styled.div`
  padding-top: 32px;
  width: 189px;
`;
const CardSize = styled.div`
  width: 220px;
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
`;*/

/**
 * @description Represents a view of a single User of a product from MongoDB database
 */

const User = (props) => props.user.name;

/**
 * @description Represents the list of products from MongoDB database
 */
function UserList() {
  const [users, setUsers] = useState([]);

  // This method fetches the Users from the database.
  useEffect(() => {
    async function getUsers() {
      const response = await fetch(`http://localhost:5000/user/`);
      console.log(response);
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const users = await response.json();
      setUsers(users);
    }

    getUsers();

    return;
  }, [users.length]);

  // This method will map out the Users on cards
  function UserList() {
    return users.map((user, key) => {
      key = user._id;
      return (
        <option value={key}>
          <User user={user} key={key} />
        </option>
      );
    });
  }

  // This following section will display the cards with the Users of individuals.
  return UserList();
}

const Login = () => {
  const [selectedUser, setselectedUser] = useState();
  return (
    <div>
      <Bg className="row align-items-center vh-100">
        <Padding className="col-6 mx-auto">
          <Card>
            <Box>
              <h1 className="text-center">Sign in</h1>
              <Card.Body className="d-flex flex-column gap-3 justify-content-center">
                <Form.Select
                  aria-label="User Login"
                  value={selectedUser}
                  onChange={(e) => setselectedUser(e.target.value)}
                  className=""
                >
                  {console.log(selectedUser)}
                  <option>User </option>
                  <UserList />{" "}
                </Form.Select>{" "}
                <Button variant="outline-success">Login</Button>
              </Card.Body>
            </Box>
          </Card>
        </Padding>
      </Bg>
    </div>
  );
};
console.log();
export default Login;
