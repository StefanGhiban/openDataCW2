import { useState, useMemo, useEffect } from "react";
import { useTable } from 'react-table'
import { Container, Row, Col, Table } from 'react-bootstrap/';
import {getCities, getCityIndexes} from "../api/NumbeoAPI";

function CostPage() {
  const [ukData, setUkData] = useState([]);

  useEffect(() => {
    getCities()
      .then(res => {
        console.log(res);
        setUkData(res);
        // let ukCities = [];
        // res.forEach(city => {
        //   let ukCity = {};
        //   getCityIndexes(city)
        //     .then(res => {
        //       if(res.cpi_index) {
        //         console.log("ok");
        //         ukCity.name = city.city;
        //         ukCity.priceIndex = res.cpi_index;
        //         ukCities.push(ukCity);
        //       }
        //     })
        //     .catch(error => {
        //       console.log(error);
        //     });
        // })
        // setUkData(ukCities);
      })
      .catch(error => {
        console.log(error);
      })
  }, [])

  console.log(ukData);

  // const data = useMemo(
  //   () => ukData.sort((a, b) => (a.cpi_index < b.cpi_index) ? 1 : -1),
  //   []
  // )

  const columns = useMemo(
    () => [
      {
        Header: 'City',
        accessor: 'name', // accessor is the "key" in the data
      },
      {
        Header: 'Cost Index',
        accessor: 'cpi_index',
      },
    ],
    []
  )

  // console.log(data);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, ukData })

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
