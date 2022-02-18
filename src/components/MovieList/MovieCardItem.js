import { useStoreActions } from 'easy-peasy';
import React from 'react'
import { Card } from 'react-bootstrap'
import styled from 'styled-components'
import FavoriteButton from '../FavoriteButton'

export default function MovieCardItem({ movie, isFavorite }) {
    const addToFavorites = useStoreActions(actions => actions.favorites.add);
    const removeFromFavorites = useStoreActions(actions => actions.favorites.remove);
    const toggleFavorite = () => {
        if (isFavorite) removeFromFavorites(movie.imdbID);
        else addToFavorites(movie);
    }
    return (
        <StyledCard>
            <CardImage src={movie.Poster} />
            <CardBody>
                <CardTitle>{movie.Title}</CardTitle>
                <CardText as="div">
                    <div>{movie.Year}</div>
                    <div>{movie.Type}</div>
                </CardText>
                <CardFooter>
                    <FavoriteButton customOnClick={() => toggleFavorite()} active={isFavorite} />
                </CardFooter>
            </CardBody>
        </StyledCard>
    )
}

const StyledCard = styled(Card)`
    display: flex;
    flex-direction: row;
    padding: 0;
    background-color: #121212;

`

const CardImage = styled(Card.Img)`
    width: 150px;
    height: auto;
`
const CardBody = styled(Card.Body)`
    color: white;
    ${'' /* background-color: #121212; */}
    display: flex;
    flex-direction: column;
`

const CardFooter = styled(Card.Footer)`
    display: flex;
    align-self: flex-end;
    padding: 0;
`

const CardTitle = styled(Card.Title)`
    display: flex;
`

const CardText = styled(Card.Text)`
    display: flex;
    flex-direction: column;
    flex: 1;
`