import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Search from './Search';
import { LinkContainer } from 'react-router-bootstrap';
import Col from 'react-bootstrap/Col';
import Logo from './Logo';
import styled from 'styled-components';
import { Offcanvas } from 'react-bootstrap';

export default function Header() {
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const nav = (
        <Nav className="justify-content-md-end">
            <LinkContainer to="/" onClick={() => setShowOffcanvas(false)}>
                <NavLink href="/favorites">
                    Home
                </NavLink>
            </LinkContainer>
            <LinkContainer to="/favorites" onClick={() => setShowOffcanvas(false)}>
                <NavLink href="/favorites">
                    Favorites
                </NavLink>
            </LinkContainer>
        </Nav>
    )
    return (
        <>
            <StyledNavbar bg="dark" variant="dark">
                <Container>
                    <Col md={{ span: 2 }}>
                        <LinkContainer to="/">
                            <Logo />
                        </LinkContainer>
                    </Col>
                    <Col md={{ span: 6 }} className="d-none d-sm-flex">
                        <Search />
                    </Col>
                    <Col md={{ span: 2 }} className="d-none d-sm-flex">
                        {nav}
                    </Col>
                    <Col className="d-xs-flex d-sm-none">
                        <Navbar.Toggle className="d-flex ms-auto" onClick={() => setShowOffcanvas(!showOffcanvas)} />
                        <Navbar.Offcanvas placement="end" show={showOffcanvas}>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                {nav}
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Col>
                </Container>
            </StyledNavbar>

            <StyledNavbar bg="dark" variant="dark" className="d-xs-flex d-sm-none">
                <Col xs={{ span: 10, offset: 1 }}>
                    <Search />
                </Col>
            </StyledNavbar>
        </>
    )
}


const StyledNavbar = styled(Navbar)`
    background-color: #121212 !important;
`

const NavLink = styled(Nav.Link)`
    display: flex;
    flex-direction: row;
    align-items: center;
    svg {
        margin-left: 8px;
    }
`