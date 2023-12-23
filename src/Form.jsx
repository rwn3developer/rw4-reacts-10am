import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

const Crud = ({recordInsert,single}) => {

    const [name,setName] = useState();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
     const [iseditid,setEditId] = useState("");
    const handleSubmit = () => {
        recordInsert(name,email,password,iseditid)
        setName("");
        setEmail("");
        setPassword("");
        setEditId("");
    }

    useEffect(()=>{
        setName(single.name)
        setEmail(single.email)
        setPassword(single.password)
        setEditId(single.id)
    },[single])

    return (
        <div className="container">
            <div style={{backgroundColor : "orange",height:"50px"}} className="header">
                <h3 className="text-white">Crud App</h3>
            </div>
            <div className="row mt-5 justify-content-center">
                <div style={{boxShadow:"1px 1px 5px 1px gray"}} className="col-md-8 p-3">
                    <Form>
                    <Form.Group className="mb-3" >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="name" onChange={ (e) => setName(e.target.value) } value={name} placeholder="Name"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" onChange={ (e) => setEmail(e.target.value) } value={email} placeholder="Email" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="password" onChange={ (e) => setPassword(e.target.value) } placeholder="password" value={password}/>
                        </Form.Group>
                    </Form>
                  {
                    iseditid ? (  <Button type="submit" onClick={ () => handleSubmit() } variant="primary">Edit</Button>) : (
                        <Button type="submit" onClick={ () => handleSubmit() } variant="primary">Submit</Button>
                    )
                  }
                </div>
            </div>
        </div>
    )
}

export default Crud;