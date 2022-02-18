import React from 'react'
import styled from 'styled-components'
import DetailsList from './DetailsList'

export default function CreditsList({ credits }) {
    return (
        <ul>
            {Object.entries(credits).map(([role, names], index) => (
                <CreditsListItem key={index}>
                    <Role>{role}</Role>
                    <DetailsList details={names} />
                </CreditsListItem>
            ))}
        </ul>
    )
}

const CreditsListItem = styled.li`
    list-style: none;
    border-top: 1px solid #3a3a3a;
    height: 50px;
    display: flex;
    align-items: center;
    &:last-child {
        border-bottom: 1px solid #3a3a3a;
    }
`

const Role = styled.span`
    font-weight: bold;
    color: white;
    margin-right: 20px;
`
