import React, { useEffect, useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import styled from "styled-components";

const Box = styled.div`
  padding: 32px;
  height: 300px;
`;

const Padding = styled.div`
  padding: 32px;
  width: 400px;
  margin: 0;
`;

const Section = styled.div`
  margin-top: 12px;
`;

const Bg = styled.div`
  background: #fcd6d5;
`;

/**
 * @description Represents a single user
 */

const User = (props) => props.user.name;

/**
 * @description Represents the list of users from MongoDB database
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

  // This method will map out the Users
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

  return UserList();
}

/**
 * @description Represents a Login view Component for the whole app
 */

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
                <Form validated>
                  <Form.Select
                    aria-label="User Login"
                    value={selectedUser}
                    onChange={(e) => setselectedUser(e.target.value)}
                    required
                  >
                    {console.log(selectedUser)}
                    <option></option>
                    <UserList />{" "}
                  </Form.Select>{" "}
                  <Section className="d-grid gap-2">
                    <Button
                      onClick={sessionStorage.setItem("user", selectedUser)}
                      variant="outline-success"
                      type="button"
                      href="/managelisting"
                    >
                      Login
                    </Button>
                  </Section>
                </Form>
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
