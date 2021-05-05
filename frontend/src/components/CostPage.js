import { useState, useMemo, useEffect } from "react";
import { useTable } from 'react-table'
import { Container, Row, Col, Table } from 'react-bootstrap/';
import axios from "axios";

function CostPage() {
  const [ukData, setUkData] = useState([]);

  useEffect( () => {
    axios.get('https://www.numbeo.com/api/cities', {
      params: {
        api_key: "e77cv9twst4ni2",
        country: "United Kingdom"
      }
    })
      .then(res => {
        let ukCities = [];
        res.data.cities.forEach( city => {
          let ukCity = {}
          axios.get('https://www.numbeo.com/api/indices', {
            params: {
              api_key: "e77cv9twst4ni2",
              query: city.city + ", United Kingdom"
            }
          })
            .then(res => {
              if(res.data.cpi_and_rent_index) {
                ukCity.name = city.city;
                ukCity.priceIndex = res.data.cpi_index;
                ukCities.push(ukCity);
              }
            })
            .catch(error => {
              console.log(error);
            })
        })
        setUkData(ukCities);
      })
      .catch(error => {
        console.log(error);
      })
  }, [])

  const data = useMemo(
    () => ukData.sort((a, b) => (a.priceIndex < b.priceIndex) ? 1 : -1),
    []
  )

  const columns = useMemo(
    () => [
      {
        Header: 'City',
        accessor: 'name', // accessor is the "key" in the data
      },
      {
        Header: 'Cost Index',
        accessor: 'priceIndex',
      },
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
