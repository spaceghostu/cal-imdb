import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import RatingValue from './RatingValue';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image';

const ratingSourceLogos = {
    'Internet Movie Database': process.env.PUBLIC_URL + '/logos/imdb_logo.png',
    'Rotten Tomatoes': process.env.PUBLIC_URL + '/logos/metacritic_logo.png',
    'Metacritic': process.env.PUBLIC_URL + '/logos/rotten_tomatoes_logo.png',
}

export default function Ratings({ ratings }) {
    return (
        <StyledContainer>
            {ratings.map((rating, index) => (
                <Col key={index}>
                    <RowNoWrap>
                        <Logo src={ratingSourceLogos[rating.Source]} />
                        <RatingValue value={rating.Value} />
                    </RowNoWrap>
                </Col>
            ))}
        </StyledContainer>
    )
}

const StyledContainer = styled(Row)`
    max-width: 385px;
    flex-wrap: nowrap;
    margin-left: auto;
`

const RowNoWrap = styled(Row)`
    flex-wrap: nowrap;
    align-items: center;
`

const Logo = styled(Image)`
    max-width: 90px;
    max-height: 30px;
    width: auto;
    height: auto;
`