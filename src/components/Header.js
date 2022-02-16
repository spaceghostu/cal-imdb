import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Search from './Search';

export default function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/favorites">calMDB</Navbar.Brand>
                <Search />
                <Nav className="me-auto">
                    <Nav.Link href="/favorites">Favorites</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
