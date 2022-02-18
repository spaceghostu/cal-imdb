import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import { useStoreActions } from 'easy-peasy';

export default function Toolbar() {
    const toggleViewMode = useStoreActions(actions => actions.toggleViewMode);
    return (
        <Container>
            <Col>
                <div className="justify-content-md-end">
                    <TextOnlyButton onClick={() => toggleViewMode()}>List</TextOnlyButton>
                    <TextOnlyButton>Cards</TextOnlyButton>
                </div>
            </Col>
        </Container>
    )
}


const TextOnlyButton = styled(Button)`
    background: none;
    border: none;
    color: white;
    opacity: 0.55;
    &:hover {
        background: none;
        border: none;
        opacity: 1;
    }
`