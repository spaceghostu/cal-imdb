import { useStoreState } from 'easy-peasy';
import React from 'react'
import { Alert } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Banner from '../components/Banner';
import MovieList from '../components/MovieList/MovieList';
import Toolbar from '../components/Toolbar';

export default function FavoritesPage() {
    const favorites = useStoreState(state => state.favorites.items)

    if (!favorites.length) return (
        <Container>
            <Alert variant="info">
                No favorites to show, please add movies to your favorites to view them here.
            </Alert>
        </Container>
    )

    return (
        <Container>
            <Banner title="Favorites" />
            <Toolbar />
            <MovieList movies={favorites} />
        </Container>
    )
}
