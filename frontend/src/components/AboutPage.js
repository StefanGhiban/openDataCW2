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
        <Container>
          <Row>
            <Col>
              <div className="d-flex justify-content-center">
                <ul>
                  <li>
                    <h5>
                      While no two university experiences are alike, knowing what to expect will help students plan for a major life change.
                    </h5>
                  </li>
                  <li>
                    <h5>
                      With Uni Living Cost, high school graduates will no longer have to spend hours surfing multiple web pages,
                      trying to firstly identify their desired university and course and then,
                      researching the cost of living in that specific city.
                    </h5>
                  </li>
                  <li>
                    <h5>
                      The datasets used for this website are from Numbeo and Kaggle.
                    </h5>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
}

export default AboutPage;
