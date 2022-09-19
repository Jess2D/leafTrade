import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import styled from "styled-components";
import monstera from "../../assets/monstera.png";

const Top = styled.div`
  padding: 32px;
  background:  #FCD6D5;
  height; 200px;
`;

const MainContent = styled.div`
  padding: 32px;
`;

export default function Edit() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    img: "",
    price: "",
    products: [],
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
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

      setForm(product);
    }

    fetchData();

    return;
  }, [params.id, navigate]);

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    const editedPerson = {
      name: form.name,
      description: form.description,
      img: form.img,
      price: form.price,
    };

    // This will send a post request to update the data in the database.
    await fetch(`http://localhost:5000/update/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedPerson),
      headers: {
        "Content-Type": "application/json",
      },
    });

    navigate("/");
  }

  // This following section will display the form that takes input from the user to update the data.
  return (
    <div>
      <Top className="d-flex flex-row justify-content-between">
        <div>
          <h2>Edit Listings</h2>
          <p>Update your own listings</p>
        </div>
        <img src={monstera} alt="monstera" width={"200px"} />
      </Top>
      <MainContent>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={form.name}
              onChange={(e) => updateForm({ name: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description: </label>
            <input
              type="text"
              className="form-control"
              id="description"
              value={form.description}
              onChange={(e) => updateForm({ description: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="img">Url Img: </label>
            <input
              type="text"
              className="form-control"
              id="img"
              value={form.img}
              onChange={(e) => updateForm({ img: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Price">Price: </label>
            <input
              type="text"
              className="form-control"
              id="price"
              value={form.price}
              onChange={(e) => updateForm({ price: e.target.value })}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Update product"
              className="btn btn-primary"
            />
          </div>
        </form>
      </MainContent>
    </div>
  );
}
