import React from 'react'
import { Image, ListGroup } from 'react-bootstrap';
import styled from 'styled-components';
import { capitalize } from '../../util/util'
import FavoriteButton from '../FavoriteButton';
import { useStoreActions } from 'easy-peasy';

export default function MovieListItem({ movie, isFavorite }) {
    const addToFavorites = useStoreActions(actions => actions.favorites.add);
    const removeFromFavorites = useStoreActions(actions => actions.favorites.remove);
    const toggleFavorite = () => {
        if (isFavorite) removeFromFavorites(movie.imdbID);
        else addToFavorites(movie);
    }
    return (
        <ItemContainer>
            <Image fluid={true} src={movie.Poster} />
            <Details>
                <Title>{movie.Title}</Title>
                <Year>{movie.Year}</Year>
                <Type>{capitalize(movie.Type)}</Type>
            </Details>
            {/* for some reason onCLick doesn't work, using customOnCLick workaround */}
            <FavoriteButton customOnClick={() => toggleFavorite()} active={isFavorite} />
        </ItemContainer>
    )
}


const Title = styled.div`
    font-size: 18px;
    font-weight: bold;
`

const Year = styled.div`
    font-size: 14px;
`

const Type = styled.div`
    font-size: 14px;
`

const Details = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 18px;
`


const ItemContainer = styled(ListGroup.Item)`
    display: flex;
    flex-direction: row;
    align-items: center;
    max-height: 80px;
    padding: 5px;
    background: #252525;
    color: white;
    border-color: #181818;
    cursor: pointer;
    &:hover {
        background: #353535;
    }
    img {
        height: 60px;
        margin-right: 10px;
    }
`