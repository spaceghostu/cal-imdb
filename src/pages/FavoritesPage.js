import { useStoreState } from 'easy-peasy';
import React from 'react'
import Container from 'react-bootstrap/Container';
import MovieList from '../components/MovieList/MovieList';

export default function FavoritesPage() {
    const favorites = useStoreState(state => state.favorites.items)
    return (
        <Container>
            <MovieList movies={favorites} />
        </Container>
    )
}
