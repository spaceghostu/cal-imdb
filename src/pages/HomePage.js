import { useStoreState } from 'easy-peasy';
import React from 'react'
import Container from 'react-bootstrap/Container';
import MovieList from '../components/MovieList/MovieList';

export default function HomePage() {
    const movies = useStoreState(state => state.movies)
    const totalResults = useStoreState(state => state.totalResults)
    return (
        <Container>
            {totalResults && <div>Total results: {totalResults}</div>}
            <MovieList movies={movies} />
        </Container>
    )
}
