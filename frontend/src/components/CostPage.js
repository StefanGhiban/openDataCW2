import { useState, useEffect } from "react";
import React from 'react'
import { useTable } from 'react-table'
import { Container, Row, Col, Table } from 'react-bootstrap/';
import {getCities} from "../api/Api";

function CostPage() {
  const [ukData, setUkData] = useState([]);

  useEffect(() => {
    getCities()
      .then(res => {
        console.log(res);
        setUkData(res);
      })
      .catch(error => {
        console.log(error);
      })
  }, [])

  const data = React.useMemo(
    () => ukData.sort((a, b) => (a.cpi_index < b.cpi_index) ? 1 : -1)  );

  console.log(ukData);

  const columns = React.useMemo(
    () => [
      {
        Header: 'City',
        accessor: 'name', // accessor is the "key" in the data
      },
      {
        Header: 'Cost Index',
        accessor: 'cpi_index',
      },
      {
        Header: 'Rent Index',
        accessor: 'rent_index',
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
    <Container>
      <Row className="pt-5">
        <Col>
          <Table {...getTableProps()} style={{}}>
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
  )
}



export default CostPage;
