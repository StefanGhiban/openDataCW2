import { useState, useEffect, useMemo, useRef } from "react";
import { useTable } from "react-table";
import * as d3 from "d3";

import Search from "./homeComps/Search";
import RecentSearches from "./homeComps/RecentSearches";
import Bar from "./homeComps/Bar";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";


import { getSearchedLocation, getSearchedUni, saveSearch, getSearches } from "../api/Api";
import { index } from "d3";

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

  const d3Graph = useRef(null);

  const exData = [
    {
      name: "name",
      value: 100,
    },
    {
      name: "name2",
      value: 200,
    },
    {
      name: "name3",
      value: 300,
    }
  ];

  const getGraph = () => {
    let height = 500;
    let width = 200;
    let svg = d3.select(d3Graph.current)
                .append('svg')
                .attr('width', width)
                .attr('height', height)
                .attr('display', 'block')
                .attr('margin', 'auto');

    let rect_width = 30;
    svg.selectAll('rect')
        .data(exData)
        .enter()
        .append('rect')
        .attr('x', (d, i) => 5 + i*(rect_width + 5))
        .attr('y', d => height - d.value)
        .attr('width', rect_width)
        .attr('height', d => d.value)
        .attr('fill', 'teal');
  }

  useEffect( () => {
    getGraph();
  }, [])

  // const generateData = (value, length = 5) =>
  //   d3.range(length).map((item, index) => ({
  //     index: index,
  //     date: index,
  //     value: value === null || value === undefined ? Math.random() * 100 : value
  //   }));

  const [data2, setData2] = useState([
    {
      index: 0,
      date: "UoS",
      value: 80,
    },
    {
      index: 1,
      date: "UoM",
      value: 90,
    },
    {
      index: 2,
      date: "UoL",
      value: 100,
    },
    {
      index: 3,
      date: "LSE",
      value: 110,
    },
    {
      index: 4,
      date: "UCL",
      value: 110,
    },
  ]);

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
              <Col className="d-flex align-items-center flex-column">
                  {/* <div ref={d3Graph} className="d-flex justify-content-center">
                  </div> */}
                  <Bar
                    data={data2}
                    width={300}
                    height={200}
                    top={20}
                    bottom={30}
                    left={30}
                    right={0}
                  />
                  <div>
                    <p>Uos: University of Southampton</p>
                    <p>UoM: University of Manchester</p>
                    <p>UoL: University of Leeds</p>
                    <p>UCL: University College London</p>
                    <p>LSE: London School of Economics</p>
                  </div>
              </Col>
              <Col className="d-flex flex-column">
                  <Search handleSubmitUni={handleSubmitUni} handleSubmitLocation={handleSubmitLocation} results={results} setSearch={setSearch}/>
              </Col>
              <Col className="d-flex justify-content-center pl-2 pr-5">
                  <RecentSearches getTableProps={getTableProps} getTableBodyProps={getTableBodyProps} headerGroups={headerGroups} rows={rows} prepareRow={prepareRow}/>
              </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
}

export default HomePage;
