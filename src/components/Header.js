import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Search from './Search';
import { NavLink } from '../styled-components/NavLink';
import { LinkContainer } from 'react-router-bootstrap';
import Col from 'react-bootstrap/Col';
import StyledNavbar from '../styled-components/Navbar';
import Logo from './Logo';

export default function Header() {
    return (
        <StyledNavbar bg="dark" variant="dark">
            <Container>

                <Col md={{ span: 2 }}>
                    <LinkContainer to="/">
                        <Logo />
                    </LinkContainer>
                </Col>
                <Col md={{ span: 6 }}>
                    <Search />
                </Col>
                <Col md={{ span: 2 }}>
                    <Nav className="justify-content-md-end">
                        <LinkContainer to="/">
                            <NavLink href="/favorites">
                                Home
                            </NavLink>
                        </LinkContainer>
                        <LinkContainer to="/favorites">
                            <NavLink href="/favorites">
                                Favorites
                            </NavLink>
                        </LinkContainer>
                    </Nav>
                </Col>
            </Container>
        </StyledNavbar>
    )
}

