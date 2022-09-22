
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
  background: #FCD6D5;
`;

const NewReview = () => {
  return (
    <div>
      <Bg>
        <MainTitle>
            <p>Create Review</p>
        </MainTitle>
          <Padding32>
            <div class="d-flex justify-content-center">
              <FormSize>
                <Form>
                    <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">
                        Overall rating (1 being Terrible and 5 being Amazing)
                     </Form.Label>
                    <Col sm={10}>
                     <Form.Check required
                        type="radio"
                        label="1"
                        name="formRadio"
                         id="radio1"
                        />
                        <Form.Check
                        type="radio"
                        label="2"
                        name="formRadio"
                        id="radio2"
                        />
                        <Form.Check
                        type="radio"
                        label="3"
                        name="formRadio"
                         id="radio3"
                        />
                        <Form.Check
                        type="radio"
                        label="4"
                        name="formRadio"
                        id="radio4"
                        />
                        <Form.Check
                        type="radio"
                        label="5"
                        name="formRadio"
                        id="radio5"
                        />
                        
                        </Col>  
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Add a written review</Form.Label>
                    <Form.Control required
                      id="description"
                      as="textarea"
                      rows={3}
                      placeholder="What did you like or dislike? Would you buy again?"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Choose your public name</Form.Label>
                    <Form.Control required
                      id="name"
                      type="text"
                      placeholder="This is how you will appear to other customers"
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

export default NewReview;