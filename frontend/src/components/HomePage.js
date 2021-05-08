import { useState, useEffect, useMemo, useRef } from "react";
import { useTable } from "react-table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
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
  }, [])

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

        if(res.length != 0) {
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

        if(res.length != 0) {
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
                  <Form className="p-2">
                      <Form.Group className="d-flex justify-content-center flex-column align-items-center">
                          <Form.Label className="font-weight-bold">Search for a University</Form.Label>
                          <Form.Control type="search" placeholder="Search..." onChange={(event) => setSearch(event.target.value)}/>
                      </Form.Group>
                      <div className="d-flex justify-content-around align-items-center">
                        <Button onClick={handleSubmitUni}>
                          Search by uni
                        </Button>
                        <Button onClick={handleSubmitLocation}>
                          Search by location
                        </Button>
                      </div>
                  </Form>
                  <div>
                    {results.map(result => (<p>{result.title}</p>))}
                  </div>
              </Col>
              <Col className="d-flex justify-content-center p-2">

                <Table bordered responsize {...getTableProps()} style={{}}>
                  <thead>
                    {headerGroups.map(headerGroup => (
                      <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                          <th
                            {...column.getHeaderProps()}
                            style={{
                            borderBottom: 'solid 3px red',
                            background: 'aliceblue',
                            color: 'black',
                            fontWeight: 'bold',
                            }}
                          >
                            {column.render('Header')}
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                      prepareRow(row)
                        return (
                          <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                              return (
                                <td
                                  {...cell.getCellProps()}
                                  style={{
                                  padding: '10px',
                                  }}
                                >
                                  {cell.render('Cell')}
                                </td>
                              )
                            })}
                          </tr>
                        )
                    })}
                  </tbody>
                </Table>
              </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
}

export default HomePage;
