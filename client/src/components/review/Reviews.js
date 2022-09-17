import React from "react";
import Product from "../product/Product";
import { useParams } from "react-router";
import styled from "styled-components";

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
  console.log(product.userID.user_id);
  return (
    <div>
      {product.name}
      {product.reviews[0].rate}
    </div>
  );
}
