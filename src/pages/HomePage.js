import { useStoreState } from 'easy-peasy';
import React from 'react'
import Container from 'react-bootstrap/Container';
import MovieList from '../components/MovieList/MovieList';
import Paginator from '../components/Paginator';

export default function HomePage() {
    const movies = useStoreState(state => state.movies.items)
    const totalResults = useStoreState(state => state.movies.totalResults)
    return (
        <Container>
            {totalResults && <div>Total results: {totalResults}</div>}
            <MovieList movies={movies} />
            {totalResults && <Paginator pageCount={Math.ceil(totalResults / 10)} />}
        </Container>
    )
}
