import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function NewListing() {
  const [form, setForm] = useState({
    name: "",
    description: "",
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

    // When a post request is sent to the CreateUser url, we'll add a new product to the database.
    const newPerson = { ...form };

    await fetch("http://localhost:5000/product/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({ name: "", photo: "" });
    navigate("/");
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div>
      <h3>CreateUser New product</h3>
      <form onSubmit={onSubmit}>
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
          <label htmlFor="photo">Name</label>
          <input
            type="text"
            className="form-control"
            id="photo"
            value={form.photo}
            onChange={(e) => updateForm({ photo: e.target.value })}
          />
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="CreateUser person"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
