import React from 'react'
import { Badge } from 'react-bootstrap'
import styled from 'styled-components'

export default function GenrePills({ genres }) {
    return (
        <StyledContainer>
            {genres.map((genre, index) => (
                <GenrePill pill key={index}>{genre}</GenrePill>
            ))}
        </StyledContainer>
    )
}


const StyledContainer = styled.h5`
    display: flex;
    flex: 1;
`

const GenrePill = styled(Badge)`
    background: none !important;
    border: 2px solid white;
    margin: 0 10px;
    padding-bottom: 9px;
`