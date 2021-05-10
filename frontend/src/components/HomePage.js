import { useState, useEffect, useMemo, useRef } from "react";
import { useTable } from "react-table";

import Search from "./homeComps/Search";
import RecentSearches from "./homeComps/RecentSearches";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Table from "react-bootstrap/Table";


import { getSearchedLocation, getSearchedUni, saveSearch, getSearches } from "../api/Api";

const HomePage = () => {

  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    getSearches()
      .then(res => {
        console.log(res);
        setSearchData(res);
      })
      .catch(error => {
        console.log(error);
      })
  }, [results])

  // const d3Graph = useRef(null);

  // const exData = [100, 200, 300, 400, 500];

  // const getGraph = () => {
  //   let size = 500;
  //   let svg = d3.select(d3Graph.current)
  //               .append('svg')
  //               .attr('width', size)
  //               .attr('height', size)
  //               .attr('display', 'block')
  //               .attr('margin', 'auto');

  //   let rect_width = 30;
  //   svg.selectAll('rect')
  //       .data(exData)
  //       .enter()
  //       .append('rect')
  //       .attr('x', (d, i) => 5 + i*(rect_width + 5))
  //       .attr('y', d => size - d)
  //       .attr('width', rect_width)
  //       .attr('height', d => d)
  //       .attr('fill', 'teal');
  // }

  // useEffect( () => {
  //   getGraph();
  // }, [])

  const handleSubmitLocation = (event) => {
    event.preventDefault();

    getSearchedLocation(search)
      .then(res => {
        setResults(res);

        if(res.length !== 0) {
          saveSearch(search)
            .then(res => {
              console.log(res);
            })
        }
      })
      .catch(error => {
        console.log(error);
      })
  }

  const handleSubmitUni = (event) => {
    event.preventDefault();

    getSearchedUni(search)
      .then(res => {
        setResults(res);

        if(res.length !== 0) {
          saveSearch(search)
            .then(res => {
              console.log(res);
            })
        }
      })
      .catch(error => {
        console.log(error);
      })
  }

  const data = useMemo(
    () => searchData
  );

  const columns = useMemo(
    () => [
      {
        Header: 'Recent searches',
        accessor: "query"
      }
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  return(
    <Container fluid className="p-0">
      <Row>
        <Col>
          <Jumbotron className="d-flex flex-column align-items-center">
            <h1>The complete university ranking.</h1>
            <p>
                That ranking that also takes into account your pocket, not only your brain.
            </p>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Container fluid>
          <Row>
              <Col className="d-flex justify-content-center">
                  {/* <div ref={d3Graph} className="d-flex justify-content-center">
                  </div> */}
              </Col>
              <Col className="d-flex justify-content-center flex-column">
                  <Search handleSubmitUni={handleSubmitUni} handleSubmitLocation={handleSubmitLocation} results={results} setSearch={setSearch}/>
              </Col>
              <Col className="d-flex justify-content-center p-2">
                  <RecentSearches getTableProps={getTableProps} getTableBodyProps={getTableBodyProps} headerGroups={headerGroups} rows={rows} prepareRow={prepareRow}/>
              </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
}

export default HomePage;
