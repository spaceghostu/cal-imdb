import React from 'react'
import styled from 'styled-components'

export default function DetailsList({ details }) {
    return (
        <DetailsUl>
            {details
                .filter(detail => detail !== 'N/A')
                .map((detail, index) => <DetailsLi key={index}>{detail}</DetailsLi>)}
        </DetailsUl>
    )
}


const DetailsUl = styled.ul`
    display: inline-flex;
    flex-wrap: wrap;
    padding: 0;
`

const DetailsLi = styled.li`
    color: white;
    list-style: none;
    &:not(:first-child)::before {
        display: inline-block;
        margin: 0 0.5rem 0.2rem;
        content: '';
        font-size: 1rem;
        line-height: .5rem;
        padding: 1px;
        border-radius: 50%;
        vertical-align: middle;
        background-color: currentColor;
    }
`