import React, { Component, useState } from 'react'
import { Table, Button, Modal, Form, Row } from 'react-bootstrap'

export default function VotingTable() {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Table striped bordered hover variant="dark"
                padding-left="80px"
            >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Voting IDName</th>
                        <th>Description</th>
                        <th>Ver</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Desarrollo de Aplicaciones de Vanguardia VIRTUAL VS PRESENCIAL</td>
                        <td>Estudiantes de la clase de DAV pueden decidir que tipo de asistencia sera la clase el otro periodo.</td>
                        <td><Button variant="primary">Go!</Button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Seguridad de la informacion VIRTUAL VS PRESENCIAL</td>
                        <td>Estudiantes de la clase de Seguridad pueden decidir que tipo de asistencia sera la clase el otro periodo.</td>
                        <td><Button variant="primary">Go!</Button></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Pizza con piña vs Pizza sin piña</td>
                        <td>Decide que comida ordenar el proximo jueves.</td>
                        <td><Button variant="primary">Go!</Button></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Pizza con piña vs Pizza sin piña</td>
                        <td>Decide que comida ordenar el proximo jueves.</td>
                        <td><Button variant="primary">Go!</Button></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Pizza con piña vs Pizza sin piña</td>
                        <td>Decide que comida ordenar el proximo jueves.</td>
                        <td><Button variant="primary">Go!</Button></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Pizza con piña vs Pizza sin piña</td>
                        <td>Decide que comida ordenar el proximo jueves.</td>
                        <td><Button variant="primary">Go!</Button></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Pizza con piña vs Pizza sin piña</td>
                        <td>Decide que comida ordenar el proximo jueves.</td>
                        <td><Button variant="primary">Go!</Button></td>
                    </tr>
                </tbody>
            </Table>

            < Button variant="primary" onClick={handleShow} >
                Borrar antes de presentar!
            </Button >

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>CloudChain Vote</Modal.Title>
                </Modal.Header>

                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Voting Name</Form.Label>
                        <Form.Control type="name" placeholder="Desarrollo de Aplicaciones de Vanguardia VIRTUAL VS PRESENCIAL" readOnly />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} readOnly placeholder="Estudiantes de la clase de DAV pueden decidir que tipo de asistencia sera la clase el otro periodo." />
                    </Form.Group>{' '}
                    <Button variant="success">Yes</Button>{' '}
                    <Button variant="danger">No</Button> {' '}
                    <Button variant="secondary">None</Button>{' '}
                </Form>


                <Modal.Body>No personal information is saved by us!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

        </>

    )

}




