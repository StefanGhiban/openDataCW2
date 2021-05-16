import { useState, useEffect, useMemo } from "react";
import { useTable } from "react-table";

import Search from "./homeComps/Search";
import RecentSearches from "./homeComps/RecentSearches";
import Bar from "./homeComps/Bar";
import aaa from "../assets/aaa.png";

import { Container, Row, Col, Jumbotron } from "react-bootstrap/";


import { getSearchedLocation, getSearchedUni, saveSearch, getSearches } from "../api/Api";

const HomePage = () => {

  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    getSearches()
      .then(res => {
        setSearchData(res);
      })
      .catch(error => {
      })
  }, [results])

  const [data2, setData2] = useState([
    {
      index: 0,
      date: "UoC",
      value: 100,
    },
    {
      index: 1,
      date: "UoO",
      value: 94,
    },
    {
      index: 2,
      date: "UoE",
      value: 88,
    },
    {
      index: 3,
      date: "UoM",
      value: 80,
    },
    {
      index: 4,
      date: "UoS",
      value: 79,
    },
  ]);

  const handleSubmitLocation = (event) => {
    event.preventDefault();

    getSearchedLocation(search)
      .then(res => {
        if(res.length !== 0) {
          setResults(res);
          saveSearch(search)
            .then(res => {
              console.log(res);
            })
        }
        else {
          setResults(["No universities found"]);
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
        if(res.length !== 0) {
          setResults(res);
          saveSearch(search)
            .then(res => {
              console.log(res);
            })
        }
        else {
          setResults(['No universities found'])
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
    <Container fluid>
      <Row>
        <Col className="p-0">
          <Jumbotron className="d-flex flex-column align-items-center jumbo">
            <img src={aaa} alt="logo2" width="200" />
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
                  <h4>Top 5 Universities based on aggregated score</h4>
                  <Bar
                    data={data2}
                    width={400}
                    height={300}
                    top={20}
                    bottom={30}
                    left={30}
                    right={0}
                  />
                  <div>
                    <p>UoC: University of Cambridge</p>
                    <p>UoO: University of Oxford</p>
                    <p>UoE: University of Edinburgh</p>
                    <p>UCM: University of Manchester</p>
                    <p>UoS: University of Sheffield</p>
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
