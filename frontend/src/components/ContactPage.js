import { Container, Row, Col, Jumbotron, Card } from 'react-bootstrap/';
import iustin from '../assets/iustin.jpeg';
import bianca from '../assets/bianca.jpeg';
import stefan from '../assets/stefan.jpeg';
import victoria from '../assets/victoria.jpeg';

const ContactPage = () => {
return (
    <Container fluid>
      <Row>
        <Col className="p-0">
          <Jumbotron className="d-flex flex-column align-items-center jumbo">
            <h1>Contact page</h1>
            <p>
              Here are the details of the developers of the website
            </p>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <Card className="mr-3" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={stefan} />
            <Card.Body>
              <Card.Title>Stefan Ghiban</Card.Title>
              <Card.Text>
                isg1u17@soton.ac.uk
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mr-3" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={victoria} />
            <Card.Body>
              <Card.Title>Victoria Draganova</Card.Title>
              <Card.Text>
                vd4g17@soton.ac.uk
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mr-3" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={iustin} />
            <Card.Body>
              <Card.Title>Iustin Dinca</Card.Title>
              <Card.Text>
                igd1u17@soton.ac.uk
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mr-3" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={bianca} />
            <Card.Body>
              <Card.Title>Bianca Corbu</Card.Title>
              <Card.Text>
                bgc1u17@soton.ac.uk
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
