import React from 'react'
import { Grid3x3GapFill, List } from 'react-bootstrap-icons';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components';
import { useStoreActions, useStoreState } from 'easy-peasy';

export default function ToggleButton() {
    const viewMode = useStoreState(state => state.viewMode)
    const toggleViewMode = useStoreActions(actions => actions.toggleViewMode)
    return (
        <StyledButtonGroup onClick={() => toggleViewMode()}>
            <ToggleButtonItem active={viewMode === 'cards'}>
                <Grid3x3GapFill />
            </ToggleButtonItem>
            <ToggleButtonItem active={viewMode === 'list'}>
                <List />
            </ToggleButtonItem>
        </StyledButtonGroup>
    )
}

const StyledButtonGroup = styled(ButtonGroup)`
    margin-left: auto;
    display: flex;
    max-width: 70px;
`


const ToggleButtonItem = styled(Button)`
    background: none;
    color: white;
    border: 1px solid #efefef;
    line-height: 10px;
    opacity: 0.55;
    &:hover {
        opacity: 1;
        background: none;
        color: white;
        border: 1px solid #efefef;
    }
    &.active {
        background: none;
        color: var(--bs-primary);
        border: 1px solid var(--bs-primary);
        opacity: 1;
        &:active,
        &:focus {
            background: none;
            color: var(--bs-primary);
            border: 1px solid var(--bs-primary);
            outline: none;
            box-shadow: none !important;
        }
    }
    &:active,
    &:focus {
        background: none;
        color: white;
        border: 1px solid #efefef;
        outline: none;
        box-shadow: none !important;
    }
`