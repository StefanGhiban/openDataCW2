import { useState, useEffect } from "react";
import React from 'react'
import { useTable } from 'react-table'
import { Container, Row, Col, Table, Jumbotron } from 'react-bootstrap/';
import {getUnis, getCities} from "../api/Api";

function UniPage() {
  const [aggregatedData, setAggregatedData] =useState([]);

  function norm(value, min, max) {
    return (value - min) / (max - min);
  }

  useEffect(() => {
    Promise.all([
      getUnis(),
      getCities()
    ]).then(res => {
      var aggregatedList = []
      for (const el of res[0]){
        var location =  el.location + ", United Kingdom";
        for(const ele of res[1]) {
          if(ele.name === location) {
            var agg = {};
            agg['title'] = el.title;
            agg['location'] = ele.name;
            const range = [0.1795225016850576, 1.4871362265895658];
            agg['aggScore'] = Math.floor(norm(parseInt(el.overallScore) / ele.cpi_and_rent_index, range[0], range[1]) * 100);
            aggregatedList.push(agg);
          }
        }
      }
      setAggregatedData(aggregatedList);
    })
  }, [])

  const data = React.useMemo(
    () => aggregatedData.sort((a, b) => (a.aggScore < b.aggScore) ? 1 : -1)
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'University',
        accessor: 'title', // accessor is the "key" in the data
      },
      {
        Header: 'Location',
        accessor: 'location',
      },
      {
        Header: 'Aggregated Score',
        accessor: 'aggScore',
      }
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  return (
    <Container fluid>
      <Row>
        <Col className="p-0">
          <Jumbotron className="d-flex flex-column align-items-center jumbo">
            <h1>Aggregated ranking</h1>
            <p>
              This ranking is based on both the university and the costs of living rankings
              to give a balanced leaderboard.
            </p>
          </Jumbotron>
        </Col>
      </Row>
      <Row className="pt-3">
        <Container>
          <Row>
            <Col>
              <Table {...getTableProps()} style={{}}>
                <thead>
                  {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map(column => (
                        <th
                          {...column.getHeaderProps()}
                          style={{
                          borderBottom: 'solid 3px',
                          background: '#DEF0F2',
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
  )
}



export default UniPage;
