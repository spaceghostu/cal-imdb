import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import styled from 'styled-components'

export default function Logo() {
    return (
        <LinkContainer to="/">
            <Container><div>calMDB</div></Container>
        </LinkContainer>
    )
}

const Container = styled.div`
    width: 68px;
    padding: 3px;
    border-radius: 4px;
    background-color: var(--bs-primary);
    cursor: pointer;
    div {
        transform: scaleY(1.5);
        font-weight: bold;
        color: black !important;
    }
`