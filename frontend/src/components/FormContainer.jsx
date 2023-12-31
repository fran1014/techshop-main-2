import { Container, Row, Col } from 'react-bootstrap';

const FormContainer = ({ children }) => {
  return (
    <Container>
      <Row className="justify-content-md-centre">
        <Col xs={12} ms={6}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;
