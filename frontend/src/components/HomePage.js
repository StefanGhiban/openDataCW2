import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const HomePage = () => {
    return(
        <Container>
            <Row>
                <Col className="d-flex justify-content-center">
                    Popular Searches
                    Maybe a graph here with d3?
                </Col>
                <Col className="d-flex justify-content-center">
                    <Form>
                        <Form.Group>
                            <Form.Label>Search for a university name</Form.Label>
                            <Form.Control type="search" placeholder="Search..." />
                        </Form.Group>
                    </Form>
                </Col>
                <Col className="d-flex justify-content-center">
                    small list with recent searches;
                </Col>
            </Row>
        </Container>
    );
}

export default HomePage;
