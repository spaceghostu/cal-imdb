import React from 'react'
import styled from 'styled-components'

export default function RatingValue({ value }) {
    const regBeforeSlash = /[^/]*/
    const regAfterSlash = /\/(.*)/
    const isPercent = value.indexOf('%') !== -1
    let mainValue, symbol
    if (isPercent) {
        mainValue = value.substring(0, 2)
        symbol = value.substring(2, 3)
    } else {
        mainValue = (value.match(regBeforeSlash) || [''])[0]
        symbol = (value.match(regAfterSlash) || [''])[0]
    }
    return (
        <Container>
            <MainValue>{mainValue}</MainValue>
            <Symbol>{symbol}</Symbol>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding-left: 0;
`

const MainValue = styled.span`
    color: white;
    font-size: 24px;
`

const Symbol = styled.span`
    color: white;
    vertical-align: top;
    opacity: 0.6;
`