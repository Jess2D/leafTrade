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
  background: #fcead5;
`;

const NewQuestion = () => {
  const userSessionID = sessionStorage.getItem("user");
  console.log("User: " + userSessionID);
  const params = useParams();
  const id = params.id.toString();
  const navigate = useNavigate();
  const product = Product(id);
  const [form, setForm] = useState({
    question: "",
    answer: "",
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
    const newQuestion = { ...form };

    await fetch("http://localhost:5000/question/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newQuestion),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({
      question: "",
      answer: "",
      productId: "",
      userID: "",
    });
    const url = "/product/" + params.id.toString() + "/reviews";
    navigate(url);
  }

  return (
    <div>
      <Bg>
        <MainTitle>
          <p>Post your question</p>
        </MainTitle>
        <Padding32>
          <div class="d-flex justify-content-center">
            <FormSize>
              <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold">
                    What is your question?
                  </Form.Label>
                  <Form.Control
                    required
                    id="question"
                    as="textarea"
                    rows={3}
                    placeholder="What would you like to know about this product?"
                    onChange={(e) => updateForm({ question: e.target.value })}
                  />
                </Form.Group>
                <div class="d-grid gap-2 col-6 mx-auto">
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
    </div>
  );
};

export default NewQuestion;
