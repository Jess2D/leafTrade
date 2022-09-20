import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import styled from "styled-components";
import { Button, Container, Form } from "react-bootstrap";
import editcoin from "../../assets/listing/editcoin.png";

const Top = styled.div`
  padding: 32px;
  height; 200px;
`;

const Header = styled.div`
  font-size: 50px;
  font-weight: bold;
`;

const MainContent = styled.div`
  padding: 32px;
`;

const FormSize = styled.div`
  width: 500px;
`;

const MainTitle = styled.div`
  font-size: 50px;
  font-weight: bold;
  `;

const Padding12 = styled.div`
  padding: 12px;
`;

const PurpleSection = styled.div`
  background: rgb(262, 242, 242);
  background: linear-gradient(
    90deg,
    rgba(252, 237, 236, 1) 0%,
    rgba(245, 221, 217, 1) 0%,
    rgba(248, 227, 224, 1) 43%,
    rgba(274, 215, 212, 1) 100%
  );
`;

export default function Edit() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    img: "",
    price: "",
    category: "",
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
    const editedProduct = {
      name: form.name,
      description: form.description,
      img: form.img,
      price: form.price,
      category: form.category,
    };

    // This will send a post request to update the data in the database.
    await fetch(`http://localhost:5000/update/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedProduct),
      headers: {
        "Content-Type": "application/json",
      },
    });

    navigate("/");
  }

  // This following section will display the form that takes input from the user to update the data.
  return (
    <div>
      <div className="position-relative">
        <PurpleSection>
          <Container>
            <Padding12>
              <div className="d-flex justify-content-between flex-wrap">
                <div>
                  <MainTitle>
                  Edit listings
                  </MainTitle>
                  <p>
                  Update your own listings
                  </p>
                </div>
                <div>
                  <img src={editcoin} alt="editcoin" width={"300px"} />
                </div>
              </div>
            </Padding12>
          </Container>
        </PurpleSection>
      </div>
      <MainContent>
        <Container>
          <div class="d-flex justify-content-center flex-wrap">
            <FormSize>
              <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formPhotos">
                  <Form.Label className="fw-bold">Add photo</Form.Label>
                  <Form.Control
                    id="name"
                    value={form.img}
                    onChange={(e) => updateForm({ img: e.target.value })}
                    type="text"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCategory">
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
                <Form.Group className="mb-4" controlId="formName">
                  <Form.Label className="fw-bold">Title</Form.Label>
                  <Form.Control
                    id="name"
                    value={form.name}
                    onChange={(e) => updateForm({ name: e.target.value })}
                    type="text"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPrice">
                  <Form.Label className="fw-bold">Price</Form.Label>
                  <Form.Control
                    id="price"
                    value={form.price}
                    onChange={(e) => updateForm({ price: e.target.value })}
                    type="text"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formQuantity">
                  <Form.Label className="fw-bold">Quantity</Form.Label>
                  <Form.Control
                    id="quantity"
                    value={form.quantity}
                    onChange={(e) => updateForm({ quantity: e.target.value })}
                    type="text"
                    placeholder="How many do you have available?"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDescription">
                  <Form.Label className="fw-bold">Description</Form.Label>
                  <Form.Control
                    id="description"
                    value={form.description}
                    onChange={(e) =>
                      updateForm({ description: e.target.value })
                    }
                    as="textarea"
                    rows={3}
                  />
                </Form.Group>
                <div class="d-grid gap-2 col-6 mx-auto">
                  <Button className="fw-bold" variant="dark" type="submit">
                    UPDATE
                  </Button>
                </div>
              </Form>
            </FormSize>
          </div>
        </Container>
      </MainContent>
    </div>
  );
}
