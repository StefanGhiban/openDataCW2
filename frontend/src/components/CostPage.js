import { useState, useEffect } from "react";
import React from 'react'
import { useTable } from 'react-table'
import { Container, Row, Col, Table, Jumbotron } from 'react-bootstrap/';
import {getCities} from "../api/Api";

function CostPage() {
  const [ukData, setUkData] = useState([]);

  useEffect(() => {
    getCities()
      .then(res => {
        setUkData(res);
      })
      .catch(error => {
        console.log(error);
      })
  }, [])

  const data = React.useMemo(
    () => ukData.sort((a, b) => (a.cpi_and_rent_index > b.cpi_and_rent_index) ? 1 : -1)  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'City',
        accessor: 'name', // accessor is the "key" in the data
      },
      {
        Header: 'Cost Index',
        accessor: 'cpi_and_rent_index',
      },
      {
        Header: 'Groceries Index',
        accessor: 'groceries_index'
      },
      {
        Header: 'Rent Index',
        accessor: 'rent_index'
      },
      {
        Header: 'Restaurant Price Index',
        accessor: 'restaurant_price_index'
      }
    ],
    []
  )

  console.log(ukData);

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
            <h1>City ranking</h1>
            <p>
              This ranking is only based on costs of living.
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
                                {cell.column.Header !== "City" ? (cell.column.Header === 'Cost Index' ? <strong>{cell.value.toFixed(2)}</strong> : cell.value.toFixed(2)) : cell.render('Cell')}
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



export default CostPage;
