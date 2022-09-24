import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import styled from "styled-components";
import { Button, Container, Form } from "react-bootstrap";
import coin from "../../assets/listing/editcoin.png";
import { Logout } from "../login/Logout";

const Top = styled.div`
  padding: 32px;
  height; 200px;
`;
const Invisible = styled.div`
  display: none;
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

const BgSection = styled.div`
  background-image: linear-gradient(
    to right top,
    #fcd6d5,
    #f7dbd0,
    #efe0d1,
    #e8e4d7,
    #e4e7de
  );
`;

export default function EditQuestion() {
  const [form, setForm] = useState({
    question: "",
    answer: "",
    productId: "",
    userId: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(
        `http://localhost:5000/question/${params.id.toString()}`
      );

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const product = await response.json();
      if (!product) {
        window.alert(`question with id ${id} not found`);
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
      question: "",
      answer: "",
      productId: "",
      userId: "",
    };

    // This will send a post request to update the data in the database.
    await fetch(`http://localhost:5000/question/update/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedProduct),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const url = "/managelisting";

    navigate(url);
  }

  // This following section will display the form that takes input from the user to update the data.
  return (
    <div>
      <Logout />
      <BgSection>
        <Top className="d-flex flex-row justify-content-between flex-wrap">
          <div>
            <Header>Answer the question below</Header>
            Answer your client
          </div>
          <img src={coin} alt="coin" width={"300px"} />
        </Top>
      </BgSection>
      <MainContent>
        <Container>
          <div className="d-flex justify-content-center flex-wrap">
            <FormSize>
              <Form onSubmit={onSubmit}>
                <Form.Group className="mb-4">
                  <Form.Label className="fw-bold">Question</Form.Label>
                  <Form.Control
                    id="question"
                    value={form.question}
                    onChange={(e) => updateForm({ question: e.target.value })}
                    type="text"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold">Your answer</Form.Label>
                  <Form.Control
                    id="answer"
                    value={form.answer}
                    onChange={(e) => updateForm({ answer: e.target.value })}
                    type="text"
                  />
                </Form.Group>
                <Invisible>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">User</Form.Label>
                    <Form.Control
                      id="user"
                      value={form.userId}
                      onChange={(e) => updateForm({ userId: e.target.value })}
                      type="text"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Product</Form.Label>
                    <Form.Control
                      id="user"
                      value={form.productId}
                      onChange={(e) =>
                        updateForm({ productId: e.target.value })
                      }
                      type="text"
                    />
                  </Form.Group>
                </Invisible>
                <div className="d-grid gap-2 col-6 mx-auto">
                  <Button className="fw-bold" variant="dark" type="submit">
                    Send reply
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
