import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import ToggleButton from './ToggleButton';

export default function Toolbar() {
    return (
        <Container>
            <Col md={{ span: 8, offset: 2 }} className="mb-3">
                <ToggleButton />
            </Col>
        </Container>
    )
}