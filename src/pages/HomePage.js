import React from 'react'
import Container from 'react-bootstrap/Container';
import Banner from '../components/Banner';
import MovieList from '../components/MovieList/MovieList';
import Toolbar from '../components/Toolbar';
import POPULAR_MOVIES from '../data/popularMovies';

export default function HomePage() {
    const bannerTitle = `Popular movies`

    return (
        <Container>
            <Banner title={bannerTitle} />
            <Toolbar />
            <MovieList movies={POPULAR_MOVIES} />
        </Container>
    )
}
