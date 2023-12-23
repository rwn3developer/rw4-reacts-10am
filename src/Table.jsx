import { Button, Table } from "react-bootstrap";
const View = ({ record,handleDelete,handleEdit }) => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Srno</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                           {
                            record.map((item,i)=>{i=i+1
                                 return (
                                    <tr>
                                        <td>{i}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.password}</td>
                                        <td>
                                            <Button onClick={ () => handleDelete(item.id) } variant="danger">Delete</Button>
                                            <Button className="ps-2" onClick={ () => handleEdit(item.id) } variant="primary">Edit</Button>
                                        </td>

                                    </tr>
                                 )
                            })
                           }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default View;