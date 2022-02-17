import React from 'react'
import { Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

export default function Banner({ title, subtitle }) {
    return (
        <Container>
            <Inner md={{ span: 10, offset: 1 }}>
                <h1 className="display-5">{title}</h1>
                <h5>{subtitle}</h5>
            </Inner>
        </Container>
    )
}

const Inner = styled(Col)`
    background-color: #121212;
    color: white;
    border-radius: 4px;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 20px;
`