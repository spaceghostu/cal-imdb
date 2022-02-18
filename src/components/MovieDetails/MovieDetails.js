import React from 'react'
import styled from 'styled-components'
import Col from 'react-bootstrap/Col';
import DetailsList from './DetailsList';
import Ratings from './Ratings';
import Row from 'react-bootstrap/Row';
import GenrePills from './GenrePills';
import Image from 'react-bootstrap/Image';
import CreditsList from './CreditsList';
import { capitalize } from '../../util/util';
import { Star, StarFill } from 'react-bootstrap-icons';

export default function MovieDetails({ movie }) {
    const credits = {
        'Directors': movie.Director.split(','),
        'Writers': movie.Writer.split(','),
        'Actors': movie.Actors.split(','),
    }
    return (
        <>
            <Header>
                <DetailsSection>
                    <Title>{movie.Title}</Title>
                    <DetailsList details={[capitalize(movie.Type), movie.Year, movie.Rated, movie.Runtime]} />
                </DetailsSection>
                <RatingsSection>
                    <Ratings ratings={movie.Ratings} />
                </RatingsSection>
            </Header>
            <SubHeader>
                <GenrePills genres={movie.Genre.split(',')} />
                <Awards>
                    <StarIcon />
                    {movie.Awards}
                </Awards>
            </SubHeader>
            <Row>
                <Poster src={movie.Poster} />
                <Col>
                    <Plot>{movie.Plot}</Plot>
                    <CreditsList credits={credits} />
                </Col>
            </Row>
        </>
    )
}


const Title = styled.h1`
    color: white;
    font-weight: normal;
    font-size: 48px;
`

const Header = styled(Row)`
    justify-content: space-between;
`

const DetailsSection = styled(Col)`

`
const RatingsSection = styled(Col)`
    margin-top: auto;
    margin-bottom: auto;
`

const Poster = styled(Image)`
    width: 350px;
    height: auto;
`

const Plot = styled.p`
    color: white;
    font-size: 18px;
`

const SubHeader = styled(Row)`
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 20px;
`

const Awards = styled(Col)`
    text-align: right;
`

const StarIcon = styled(StarFill)`
    font-size: 28px;
    margin-right: 15px;
    position: relative;
    top: -4px;
    color: #0094ff;
`