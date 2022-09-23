import React, { useState } from "react";
import { useNavigate } from "react-router";
import User from "../user/User";

export default function AddProduct() {
  const userID = sessionStorage.getItem("user");
  const user = User(userID);
  const newID = user._id;
  console.log(user._id);
  const [form, setForm] = useState({
    name: "",
    description: "",
    img: "",
    price: "",
    userID: { user_id: "" },
  });
  const navigate = useNavigate();
  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the AddProduct url, we'll add a new product to the database.
    const newproduct = { ...form };

    await fetch("http://localhost:5000/product/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newproduct),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({ name: "", description: "", img: "", price: "", userID: "" });
    navigate("/");
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div>
      <h3>AddProduct New product</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="userID">Name</label>
          <input
            type="text"
            className="form-control"
            id="userID"
            value={form.userID}
            onChange={(e) => updateForm({ userID: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={form.description}
            onChange={(e) => updateForm({ description: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            className="form-control"
            id="price"
            value={form.price}
            onChange={(e) => updateForm({ price: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="img">Img</label>
          <input
            type="text"
            className="form-control"
            id="img"
            value={form.img}
            onChange={(e) => updateForm({ img: e.target.value })}
          />
        </div>

        <Button
          onClick={() => updateForm({ userID: newID })}
          className="fw-bold"
          variant="dark"
          type="submit"
        >
          PUBLISH
        </Button>
      </form>
    </div>
  );
}
