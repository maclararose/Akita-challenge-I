import React from 'react';
import styled from 'styled-components';
import { Form, Button, Row, Col } from 'react-bootstrap';

const FormContainer = styled.fieldset`
  border: 1px solid #000;
  padding: 5px;
`;

const FormStyled = styled.form`
  padding: 20px 0px;
`;

const FormLegend = styled.legend`
  // border: 1px solid #000;
  padding: 0 10px;
  width: auto;
`;

const FormSubmit = ({ onSubmit }) => {
  return(
    <FormContainer>
        <FormLegend>Insert an item</FormLegend>
        <FormStyled onSubmit={onSubmit}>
          <Form.Group>
            <Row>
              <Col xs={2}>
                <Form.Control type="number" name="time_spent" required />
              </Col>
              <Col xs={4}>
                <Form.Control as="select" name="activity" required >
                  <option disabled selected>Chose an activity</option>
                  <option value="Run">Run</option>
                  <option value="Swimming">Swimming</option>
                  <option value="Bike">Bike</option>
                </Form.Control>
              </Col>
              <Col xs={4}>
                <Form.Control type="date" name="date" required />
              </Col>
              <Col xs={1}>
                <Button type="submit">Add</Button>
              </Col>
            </Row>
          </Form.Group>
        </FormStyled>
    </FormContainer>
  );
}

export default FormSubmit;