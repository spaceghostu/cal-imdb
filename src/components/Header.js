import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Search from './Search';
import { NavLink } from '../styled-components/NavLink';
import { HeartFill } from 'react-bootstrap-icons';
import { LinkContainer } from 'react-router-bootstrap';

export default function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>calMDB</Navbar.Brand>
                </LinkContainer>
                <Search />
                <Nav>
                    <LinkContainer to="/favorites">
                        <NavLink href="/favorites">
                            Favorites
                            <HeartFill />
                        </NavLink>
                    </LinkContainer>Î
                </Nav>
            </Container>
        </Navbar>
    )
}
