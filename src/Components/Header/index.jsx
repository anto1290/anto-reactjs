import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'

const HeaderComponent = () => {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand href="/">Muhammad Nurwibawanto</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#biografi">Biografi</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default HeaderComponent