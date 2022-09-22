import React, { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { Container, Form, Button, Modal } from "react-bootstrap";
import plantbasket from "../../assets/newlisting/plantbasket.png";
import { Logout } from "../login/Logout";
import User from "../user/User";

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

const FormSize = styled.div`
  width: 500px;
`;

export default function NewListing() {
  const userID = sessionStorage.getItem("user");
  const user = User(userID);
  console.log(user._id);
  const [form, setForm] = useState({
    img: "",
    name: "",
    description: "",
    quantity: "",
    category: "",
    price: "",
    userID: { user_id: user._id },
  });

  //Controls the state of the modal
  const [modalShow, setModalShow] = useState(false);

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
    const newListing = { ...form };

    await fetch("http://localhost:5000/product/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newListing),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({
      name: "",
      img: "",
      description: "",
      quantity: "",
      category: "",
      price: "",
      userID: { user_id: user._id },
    });
    const url = "/managelisting";

    // This function shows the modal
    setModalShow(true);

    //This will give some delay before redirecting the user
    setTimeout(() => {
      navigate(url);
    }, 4000);
  }

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Nice one!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>We are publishing your new listing...</p>
          <p>You will be redirected to Manage Listings once we are finished.</p>
        </Modal.Body>
      </Modal>
    );
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div>
      <Logout />
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <div className="position-relative">
        <PurpleSection>
          <Container>
            <Padding12>
              <div className="d-flex justify-content-between flex-wrap">
                <div>
                  <MainTitle>
                    <p>New Listing</p>
                  </MainTitle>
                  <p>You are just a few steps away from a great sale!</p>
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
        <Padding12>
          <Padding32>
            <div class="d-flex justify-content-center">
              <FormSize>
                <Form onSubmit={onSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Add photo</Form.Label>
                    <Form.Control
                      id="name"
                      value={form.img}
                      onChange={(e) => updateForm({ img: e.target.value })}
                      type="text"
                      placeholder="Paste your URL here"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Category</Form.Label>
                    <Form.Select
                      id="category"
                      value={form.category}
                      onChange={(e) => updateForm({ category: e.target.value })}
                    >
                      <option>Indoor Plants</option>
                      <option>Outdoor Plants</option>
                      <option>Kitchen Garden</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Title</Form.Label>
                    <Form.Control
                      id="name"
                      value={form.name}
                      onChange={(e) => updateForm({ name: e.target.value })}
                      type="text"
                      placeholder="Write a title that will spark interest"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Price</Form.Label>
                    <Form.Control
                      id="price"
                      value={form.price}
                      onChange={(e) => updateForm({ price: e.target.value })}
                      type="text"
                      placeholder="How much does it cost?"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Quantity</Form.Label>
                    <Form.Control
                      id="quantity"
                      value={form.quantity}
                      onChange={(e) => updateForm({ quantity: e.target.value })}
                      type="text"
                      placeholder="How many do you have available?"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Description</Form.Label>
                    <Form.Control
                      id="description"
                      value={form.description}
                      onChange={(e) =>
                        updateForm({ description: e.target.value })
                      }
                      as="textarea"
                      rows={3}
                      placeholder="Keep it simple, using clear, descriptive words and aiming for positive connotations"
                    />
                  </Form.Group>
                  <div class="d-grid gap-2 col-6 mx-auto">
                    <Button className="fw-bold" variant="dark" type="submit">
                      PUBLISH
                    </Button>
                  </div>
                </Form>
              </FormSize>
            </div>
          </Padding32>
        </Padding12>
      </div>
    </div>
  );
}
