import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export default function Product(product_id) {
  const [item, setitem] = useState({
    _id: "",
    name: "",
    userID: { user_id: "" },
    description: "",
    img: "",
    price: "",
    quantity: "",
    category: "",
    questions: [
      {
        title: "",
        quserID: { quser_id: "" },
        answer: "",
        answers: [
          {
            answer: "",
          },
        ],
      },
    ],
    reviews: [
      {
        rate: "",
        ruserID: { ruser_id: "" },
        review: "",
      },
    ],
    products: [],
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = product_id;
      const response = await fetch(
        `http://localhost:5000/product/${params.id.toString()}`
      );

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const product = await response.json();
      if (!product) {
        window.alert(`product with id ${id} not found`);
        navigate("/");
        return;
      }

      setitem(product);
    }

    fetchData();

    return;
  }, [params.id, navigate]);

  // This following section will display the item that takes input from the user to update the data.
  return item;
}
