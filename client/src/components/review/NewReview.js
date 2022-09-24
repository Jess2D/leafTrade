import { Button, Col, Form } from "react-bootstrap";
import styled from "styled-components";
import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import Product from "../product/Product";

const Padding32 = styled.div`
  padding: 32px;
`;

const FormSize = styled.div`
  width: 500px;
`;

const MainTitle = styled.div`
  font-size: 50px;
  font-weight: bold;
  text-align: center;
`;

const Bg = styled.div`
  background: #fcd6d5;
`;

const NewReview = () => {
  const userSessionID = sessionStorage.getItem("user");
  console.log("User: " + userSessionID);
  const params = useParams();
  const id = params.id.toString();
  const product = Product(id);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    rate: "",
    review: "",
    productId: "",
    userID: "",
  });

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the CreateUser url, we'll add a new product to the database.
    const newListing = { ...form };

    await fetch("http://localhost:5000/review/add", {
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
      rate: "",
      review: "",
      productId: "",
      userID: "",
    });
    const url = "/product/" + params.id.toString();
    navigate(url);
  }

  return (
    <Bg>
      <MainTitle>
        <p>Create Review</p>
      </MainTitle>
      <Padding32>
        <div className="d-flex justify-content-center">
          <FormSize>
            <Form onSubmit={onSubmit}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">
                  Overall rating (1 being Terrible and 5 being Amazing)
                </Form.Label>
                <Col sm={10}>
                  <Form.Check
                    required
                    type="radio"
                    label="1"
                    name="formRadio"
                    id="radio"
                    value="1"
                    onClick={() => {
                      updateForm({ rate: "1" });
                    }}
                  />
                  <Form.Check
                    type="radio"
                    label="2"
                    name="formRadio"
                    id="radio2"
                    value="2"
                    onClick={() => updateForm({ rate: "2" })}
                  />
                  <Form.Check
                    type="radio"
                    label="3"
                    name="formRadio"
                    id="radio3"
                    value="3"
                    onClick={() => updateForm({ rate: "3" })}
                  />
                  <Form.Check
                    type="radio"
                    label="4"
                    name="formRadio"
                    id="radio4"
                    value="4"
                    onClick={() => updateForm({ rate: "4" })}
                  />
                  <Form.Check
                    type="radio"
                    label="5"
                    name="formRadio"
                    id="radio5"
                    value="5"
                    onClick={() => updateForm({ rate: "5" })}
                  />
                </Col>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">
                  Add a written review
                </Form.Label>
                <Form.Control
                  required
                  id="review"
                  as="textarea"
                  rows={3}
                  placeholder="What did you like or dislike? Would you buy again?"
                  onChange={(e) => updateForm({ review: e.target.value })}
                />
              </Form.Group>
              <div className="d-grid gap-2 col-6 mx-auto">
                <Button
                  onClick={() =>
                    updateForm({
                      userId: userSessionID.toString(),
                      productId: product._id,
                    })
                  }
                  className="fw-bold"
                  variant="dark"
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </Form>
          </FormSize>
        </div>
      </Padding32>
    </Bg>
  );
};

export default NewReview;
