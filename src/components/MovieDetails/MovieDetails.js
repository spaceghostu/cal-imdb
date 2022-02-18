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
            <Header>
                <DetailsSection>
                    <Title>
                        <span>{movie.Title}</span>
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
                {movie.Awards !== 'N/A' && <Awards>
                    <StarIcon />
                    {movie.Awards}
                </Awards>}
            </SubHeader>
            <Row>
                <Poster src={movie.Poster} />
                <Col>
                    <Plot>{movie.plot !== 'N/A' ? movie.Plot : `Unfortunately there is no plot information for this ${movie.Type}.`}</Plot>
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