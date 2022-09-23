import {Button, Col, Form, } from "react-bootstrap";
import styled from "styled-components";

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
  background: #FCEAD5;
`;

const NewQuestion = () => {
  return (
    <div>
      <Bg>
          <MainTitle>
            <p>Post your question</p>
          </MainTitle>
          <Padding32>
            <div class="d-flex justify-content-center">
              <FormSize>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">What is your question?</Form.Label>
                    <Form.Control required
                      id="description"
                      as="textarea"
                      rows={3}
                      placeholder="What would you like to know about this product?"
                    />
                  </Form.Group>
                  <div class="d-grid gap-2 col-6 mx-auto">
                    <Button className="fw-bold" variant="dark" type="submit">
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
}

export default NewQuestion;