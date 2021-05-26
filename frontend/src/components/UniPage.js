import { useState, useEffect } from "react";
import React from 'react'
import { useFilters, useTable } from 'react-table'
import { Container, Row, Col, Table, Jumbotron } from 'react-bootstrap/';
import {getUnis} from "../api/Api";
import { Link } from "react-router-dom";

function UniPage() {
  const [uniData, setUniData] = useState([]);

  useEffect(() => {
    getUnis()
      .then(res => {
        setUniData(res);
      })
      .catch(error => {
        console.log(error);
      })
  }, [])

  const data = React.useMemo(
    () => uniData.sort((a, b) => (a.overallScore < b.overallScore) ? 1 : -1)  );

  console.log(uniData);

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
        Header: 'Overall Score',
        accessor: 'overallScore',
      },
      {
        Header: 'Research Score',
        accessor: 'researchScore',
      },
      {
        Header: 'Teaching Score',
        accessor: 'teachingScore',
      },
      {
        Header: 'Industry Income Score',
        accessor: 'industryIncomeScore',
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
            <h1>University ranking</h1>
            <p>
              This ranking is only based on academic criteria
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
                                {cell.column.Header === "University" ? <Link to={{pathname: `/university/${cell.value}`, state: {university: cell.row.original}}}>{cell.render('Cell')}</Link> : (cell.column.Header === "Overall Score" ? <strong>{cell.render('Cell')}</strong> : cell.render('Cell'))}
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
