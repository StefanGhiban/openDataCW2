import Table from "react-bootstrap/Table";

const RecentSearches = (props) => {
    return(
        <Table bordered responsize {...props.getTableProps()} style={{}}>
            <thead>
                {props.headerGroups.map(headerGroup => (
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
            <tbody {...props.getTableBodyProps()}>
                {props.rows.map(row => {
                    props.prepareRow(row)
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
    );
}

export default RecentSearches;
