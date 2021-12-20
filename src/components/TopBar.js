import React, { Component } from 'react'
import {Navbar,Container,Nav, NavDropdown} from 'react-bootstrap/'

export default class TopBar extends Component {
    render() {
        return (
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">CloudChain Vote</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#features">About Us</Nav.Link>
                                <Nav.Link href="#pricing">Privacy Policy</Nav.Link>
                            </Nav>
                            
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
        )
    }
}
