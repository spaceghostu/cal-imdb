import React from 'react'
import styled from 'styled-components'

export default function Logo() {
    return (
        <Container><div>calMDB</div></Container>
    )
}

const Container = styled.div`
    width: 68px;
    padding: 3px;
    border-radius: 4px;
    background-color: var(--bs-primary);
    div {
        transform: scaleY(1.5);
        font-weight: bold;
        color: black !important;
    }
`