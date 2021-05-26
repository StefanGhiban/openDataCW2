import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getSearchedUni, getCityNumbeo } from "../api/Api";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import ListGroup from "react-bootstrap/ListGroup";

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination]);

const UniversityPage = () => {

  const { state }  = useLocation();
  const [prices, setPrices] = useState([]);


  useEffect(() => {
    getSearchedUni(state.university.title)
      .then(res => {
        // console.log(res);
      });
    getCityNumbeo(state.university.location)
      .then(res => {
        console.log(res.prices);
        setPrices(res.prices);
      })
  },[]);

  return (
    <Container fluid>
      <Row>
          <Col className="p-0">
              <Jumbotron className="d-flex flex-column align-items-center jumbo">
                  <h1>{state.university.title}</h1>
                  <h3 className="mb-1">
                      World ranking: {state.university.worldRanking}
                  </h3>
                  <h3 className="mb-1">
                      UK ranking: {state.university.ukRanking}
                  </h3>

                  <h4 className="mb-1 ">
                      Overall Score: {state.university.overallScore}
                  </h4>
              </Jumbotron>
          </Col>
      </Row>
      <Row>
        <Container>
          <Row>
            <Col className="d-flex justify-content-center flex-column align-items-center">
              <h3 className="pb-3">University scores <i class="fas fa-university"></i></h3>
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
          <hr className="py-2"/>
          <Row>
            <Col className="d-flex justify-content-center flex-column align-items-center">
              <h3 className="pb-3">City prices <i class="fas fa-pound-sign"></i></h3>
              <Container fluid>
                <Row>
                  <Col>
                    <Swiper
                      spaceBetween={50}
                      slidesPerView={1}
                      navigation
                      pagination={{ clickable: true }}
                      onSlideChange={() => console.log('slide change')}
                      onSwiper={(swiper) => console.log(swiper)}
                    >
                      <SwiperSlide>
                        <div className="px-5 pb-5">
                          <h3>Groceries <i class="fas fa-shopping-cart"></i></h3>
                          <ListGroup className="px-2" variant="flush">
                            {
                              prices.map(price => {
                                if(price.item_name === "Eggs (regular) (12), Markets" ||
                                price.item_name === "Milk (regular), (1 liter), Market"||
                                price.item_name === "Meal, Inexpensive Restaurant, Restaurants"||
                                price.item_name === "McMeal at McDonalds (or Equivalent Combo Meal), Restaurants"||
                                price.item_name === "Local Cheese (1kg), Markets"||
                                price.item_name === "Chicken Fillets (1kg), Markets"

                                ) {
                                  return <ListGroup.Item class="d-flex justify-content-between"><span>{price.item_name}</span>  <span class="text-primary">{(Math.round(price.average_price*100) /100).toFixed(2)}£</span></ListGroup.Item>
                                }
                              })
                            }
                          </ListGroup>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="px-5 pb-5">
                          <h3>Rent <i class="fas fa-home"></i></h3>
                          <ListGroup className="px-2" variant="flush">
                          {
                              prices.map(price => {
                                if(price.item_name === "Apartment (1 bedroom) Outside of Centre, Rent Per Month" ||
                                price.item_name === "Apartment (1 bedroom) in City Centre, Rent Per Month" ||
                                price.item_name === "Basic (Electricity, Heating, Cooling, Water, Garbage) for 85m2 Apartment, Utilities (Monthly)"||
                                price.item_name === "Apartment (3 bedrooms) in City Centre, Rent Per Month"||
                                price.item_name === "Apartment (3 bedrooms) Outside of Centre, Rent Per Month"||
                                price.item_name === "Internet (60 Mbps or More, Unlimited Data, Cable/ADSL), Utilities (Monthly)"


                                ) {
                                  return <ListGroup.Item class="d-flex justify-content-between"><span>{price.item_name}</span>  <span class="text-primary">{(Math.round(price.average_price*100) /100).toFixed(2)}£</span></ListGroup.Item>
                                }
                              })
                            }
                          </ListGroup>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="px-5 pb-5">
                          <h3>Transportation <i class="fas fa-bus"></i></h3>
                          <ListGroup className="px-2" variant="flush">
                            {
                              prices.map(price => {
                                if(
                                price.item_name === "One-way Ticket (Local Transport), Transportation"||
                                price.item_name === "Monthly Pass (Regular Price), Transportation"||
                                price.item_name === "Gasoline (1 liter), Transportation"||
                                price.item_name === "Volkswagen Golf 1.4 90 KW Trendline (Or Equivalent New Car), Transportation"

                                ) {
                                  return <ListGroup.Item class="d-flex justify-content-between"><span>{price.item_name}</span>  <span class="text-primary">{(Math.round(price.average_price*100) /100).toFixed(2)}£</span></ListGroup.Item>
                                }
                              })
                            }
                          </ListGroup>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </Col>
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
