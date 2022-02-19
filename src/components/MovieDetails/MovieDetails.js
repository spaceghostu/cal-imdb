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
import { StarFill } from 'react-bootstrap-icons';
import FavoriteButton from '../FavoriteButton';
import { useStoreActions, useStoreState } from 'easy-peasy';

export default function MovieDetails({ movie }) {
    const credits = {
        'Directors': movie.Director.split(','),
        'Writers': movie.Writer.split(','),
        'Actors': movie.Actors.split(','),
    }
    const favorites = useStoreState(state => state.favorites.ids)
    const isFavorite = favorites.includes(movie.imdbID)
    const addToFavorites = useStoreActions(actions => actions.favorites.add);
    const removeFromFavorites = useStoreActions(actions => actions.favorites.remove);
    const toggleFavorite = event => {
        event.stopPropagation();
        if (isFavorite) removeFromFavorites(movie.imdbID);
        else addToFavorites(movie);
    }
    return (
        <>
            <Header xs={1}>
                <DetailsSection>
                    <Title>
                        <h1 className="display-1 d-none d-sm-flex flex-grow-1">{movie.Title}</h1>
                        <h1 className="d-flex d-sm-none flex-grow-1">{movie.Title}</h1>
                        <FavoriteButton customOnClick={toggleFavorite} active={isFavorite} large />
                    </Title>
                    <DetailsList details={[capitalize(movie.Type), movie.Year, movie.Rated, movie.Runtime]} />
                </DetailsSection>
                <RatingsSection>
                    <Ratings ratings={movie.Ratings} />
                </RatingsSection>
            </Header>
            <SubHeader>
                <GenrePills genres={movie.Genre.split(',')} />
                {movie.Awards !== 'N/A' && <Col className="text-center text-sm-right">
                    <StarIcon />
                    {movie.Awards}
                </Col>}
            </SubHeader>
            <Row>
                <Col sm={4} xs={5}>
                    <Image src={movie.Poster} className="w-100" />
                </Col>
                <Col xs={7}>
                    <Plot>{movie.plot !== 'N/A' ? movie.Plot : `Unfortunately there is no plot information for this ${movie.Type}.`}</Plot>
                    <CreditsList credits={credits} className="d-none d-sm-inline-flex flex-column" />
                </Col>
                <CreditsList credits={credits} className="d-inline-flex d-sm-none flex-column" />
            </Row>
        </>
    )
}


const Title = styled(Col)`
    color: white;
    font-weight: normal;
    display: flex;
    flex-direction: row;
    align-items: center;
    svg {
        margin-left: 10px;
    }
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

const StarIcon = styled(StarFill)`
    font-size: 28px;
    margin-right: 15px;
    position: relative;
    top: -4px;
    color: #0094ff;
`