import React, { useEffect, useState } from "react";
//import { Container, Card } from "react-bootstrap";
//import styled from "styled-components";

/**
 * @description Represents a Login view Component for the whole app
 */

/**
 * @description Represents the style of Catalog Page
 */
/*const Padding32 = styled.div`
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

const User = (props) => <div>{props.user.name}</div>;

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
    return users.map((user) => {
      return <User user={user} key={user._id} />;
    });
  }

  // This following section will display the cards with the Users of individuals.
  return (
    <div className="d-inline-flex align-content-center justify-content-start gap-3 flex-wrap">
      {UserList()}
    </div>
  );
}

const Login = () => {
  return (
    <div>
      <UserList />
    </div>
  );
};

export default Login;
