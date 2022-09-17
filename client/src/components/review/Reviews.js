import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Product from "../product/Product";
import User from "../user/User";

const StarsOuter = styled.div`
  padding: 32px;
  height: 300px;
`;
const StarsInner = styled.div`
  padding: 32px;
  height: 300px;
`;

export default function Reviews() {
  const params = useParams();
  const id = params.id.toString();
  const product = Product(id);
  const userID = product.userID.user_id;
  console.log(userID);
  const user = User(userID);
  console.log(product.userID.user_id);
  console.log(user.name);
  return (
    <div>
      {product.name}
      {user.name}
    </div>
  );
}
