import React from 'react'
import { HeartFill, Heart } from 'react-bootstrap-icons';
import styled, { css } from 'styled-components';

export default function FavoriteButton({ active, customOnClick, large }) {
    return (
        <Container
            large={large}
            active={active}
            onClick={customOnClick}>
            {active ? <HeartFill /> : <Heart />}
        </Container>
    )
}



const Container = styled.div`
    ${props => props.large ? `
        font-size: 30px;
    ` : `
        margin-left: auto;
        margin-right: 10px;
        font-size: 20px;
    `}
    cursor: pointer;
    ${(props) => props.active && css`color: #ff5151;`}
    &:hover {
        opacity: 0.5;
        color: #ff5151;
    }
`