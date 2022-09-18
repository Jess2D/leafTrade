import React, { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { Container, Card, Form, Button } from "react-bootstrap";
import plantbasket from "../../assets/newlisting/plantbasket.png";

const Padding32 = styled.div`
  padding: 32px;
`;

const Padding12 = styled.div`
  padding: 12px;
`;

const PurpleSection = styled.div`
  background: rgb(242, 242, 242);
  background: linear-gradient(
    90deg,
    rgba(252, 237, 236, 1) 0%,
    rgba(245, 221, 217, 1) 0%,
    rgba(248, 227, 224, 1) 43%,
    rgba(244, 215, 212, 1) 100%
  );
`;

const MainTitle = styled.div`
  font-size: 50px;
  font-weight: bold;
  `;

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
      <div className="position-relative">
        <PurpleSection>
          <Container>
            <Padding12>
              <div className="d-flex justify-content-between flex-wrap">
                <div>
                  <MainTitle>
                    <p>
                      New Listing
                    </p>
                  </MainTitle>
                  <p>
                    You are just a few steps away from a great sale!
                  </p>
                </div>
                <div>
                  <img src={plantbasket} alt="plantbasket" width={"300px"} />
                </div>
              </div>
            </Padding12>
          </Container>
        </PurpleSection>
      </div>
      
      <div>
        <Padding32>
          <h3>New product</h3>
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
        </Padding32>

        <div>
          <Form>
            <Form.Group controlId="formPhotos" className="mb-3">
              <Form.Label>Add photos: 0/5</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCategory">
              <Form.Label>Category</Form.Label>
              <Form.Select>
                <option>Choose one</option>
                <option>Indoor plants</option>
                <option>Outdoor plants</option>
                <option>Kitchen Garden</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="title" placeholder="Write a title that will spark interest" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control type="title" placeholder="How much does it cost?" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formQuantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control type="title" placeholder="Single Item or In Stock" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Keep it simple, using clear, descriptive words and aiming for positive connotations" />
            </Form.Group>
            <Button variant="primary" type="submit">
              PUBLISH
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
