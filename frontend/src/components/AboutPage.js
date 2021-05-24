import { Container, Row, Col, Jumbotron } from 'react-bootstrap/';

const AboutPage = () => {
  return(
    <Container fluid>
      <Row>
        <Col className="p-0">
          <Jumbotron className="d-flex flex-column align-items-center jumbo">
            <h1>About page</h1>
            <p>
              Here you can find some details about the objectives of the application
            </p>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col>

        </Col>
      </Row>
    </Container>
  );
}

export default AboutPage;
