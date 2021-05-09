import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getSearchedUni, getCityNumbeo } from "../api/Api";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import ListGroup from "react-bootstrap/ListGroup";

const UniversityPage = () => {

  const { state }  = useLocation();
  const [prices, setPrices] = useState([]);


  useEffect(() => {
    getSearchedUni(state.university.title)
      .then(res => {
        // console.log(res);
      });

    // getCity(state.university.location)
    //   .then(res => {
    //     console.log(res);
    //   });
    getCityNumbeo(state.university.location)
      .then(res => {
        console.log(res.prices);
        setPrices(res.prices);
      })
  },[]);

  console.log(prices[0]);

  return (
    <Container fluid>
      <Row>
          <Col>
              <Jumbotron className="d-flex flex-column align-items-center">
                  <h1>{state.university.title}</h1>
                  <p>
                      World ranking: {state.university.worldRanking} / UK ranking: {state.university.ukRanking}
                  </p>
                  <h4>
                    Overall Score: {state.university.overallScore}
                  </h4>
              </Jumbotron>
          </Col>
      </Row>
      <Row>
        <Container>
          <Row>
            <Col className="d-flex justify-content-center flex-column align-items-center">
              <h3>University scores</h3>
              <div className="d-flex justify-content-center align-items-center">
                <ListGroup className="px-2" variant="flush">
                  <ListGroup.Item>Teaching score: {state.university.teachingScore}</ListGroup.Item>
                  <ListGroup.Item>Research score: {state.university.researchScore}</ListGroup.Item>
                  <ListGroup.Item>Citations score: {state.university.citationsScore}</ListGroup.Item>
                </ListGroup>
                <ListGroup className="px-2" variant="flush">
                  <ListGroup.Item>Research score: {state.university.researchScore}</ListGroup.Item>
                  <ListGroup.Item>International Outlook score: {state.university.intlOutlookScore}</ListGroup.Item>
                  <ListGroup.Item>Industry income: {state.university.industryIncomeScore}</ListGroup.Item>
                </ListGroup>
              </div>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col className="d-flex justify-content-center flex-column align-items-center">
              <h3>City prices</h3>
              <Container fluid>
                <Row>
                  <Col className="d-flex justify-content-center align-items center flex-column">
                    <h3>Groceries</h3>
                    <ListGroup className="px-2" variant="flush">
                      {/* <ListGroup.Item>{prices[3].item_name}: {prices[3].average_price}£</ListGroup.Item>
                      <ListGroup.Item>{prices[4].item_name}: {prices[4].average_price}£</ListGroup.Item>
                      <ListGroup.Item>{prices[5].item_name}: {prices[5].average_price}£</ListGroup.Item> */}
                      {
                        prices.map(price => {
                          if(price.item_name === "Water (1.5 liter bottle), Markets" || price.item_name === "Bottle of Wine (Mid-Range), Markets") {
                            return <ListGroup.Item>{price.item_name}</ListGroup.Item>
                          }
                        })
                      }
                    </ListGroup>
                  </Col>
                  {/* <Col className="d-flex justify-content-center align-items center flex-column">
                    <h3>Rent</h3>
                    <ListGroup className="px-2" variant="flush">
                      <ListGroup.Item>{prices[23].item_name}: {prices[23].average_price}£</ListGroup.Item>
                      <ListGroup.Item>{prices[24].item_name}: {prices[24].average_price}£</ListGroup.Item>
                    </ListGroup>
                  </Col> */}
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
}

export default UniversityPage;
