import React, { Component, useState } from 'react'
import { Table, Button, Modal, Form, Row, Alert } from 'react-bootstrap'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function VotingTable(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [modalName, setmodalName] = useState('')
    const [modalDesc, setmodalDesc] = useState('')
    const [modalVote, setmodalVote] = useState('')
    const [modalIndex, setmodalIndex] = useState('')
    const [modalContract, setModalContract] = useState('')



    const notifyWarning = () => toast("Usted ya voto.");
    const notifySuccess = () => toast("Muchas gracias por votar!.");

    const changeModalValue = async (e, index) => {

        if (props.revisarSiVoto.includes(index)) {

            notifyWarning()
        } else {
            setmodalName(props.VoteList[index].Nombre)
            setmodalDesc(props.VoteList[index].Description)
            setmodalVote(props.VoteList[index])
            setmodalIndex(index)
            setModalContract(props.VoteList[index].contract)
            handleShow()

        }
    }

    const ClickVote = async (e, Selection) => {
        if (props.Votar)
            await props.Votar(modalVote, Selection, modalIndex, modalContract)
        handleClose()
        notifySuccess()

    }




    return (

        <>

            <ToastContainer />
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

                    {props.VoteList ? props.VoteList.map((item, i) => (
                        <tr>

                            <td>{i + 1}</td>
                            <td>{item.Nombre}</td>
                            <td>{item.Description}</td>
                            <td><Button variant="primary" onClick={e => changeModalValue(e, i)} >Go!</Button></td>
                        </tr>
                    )) : null}
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
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="name" placeholder={modalName} readOnly />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control as="textarea" rows={3} readOnly placeholder={modalDesc} />
                    </Form.Group>{' '}
                    <Button variant="success" onClick={e => ClickVote(e, "A",modalContract)}>Yes</Button>{' '}
                    <Button variant="danger" onClick={e => ClickVote(e, 'B', modalContract)}>No</Button> {' '}
                    <Button variant="secondary" onClick={e => ClickVote(e, 'C',modalContract)}>None</Button>{' '}
                </Form>


                <Modal.Body>No personal information is saved by us!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </>



    )

}




