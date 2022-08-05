import Table from 'react-bootstrap/Table'

const TableComponent = () => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Alamat</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Risma</td>
                    <td>Bogor</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Rizky</td>
                    <td>Bogor</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Annisa</td>
                    <td>Bogor</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default TableComponent