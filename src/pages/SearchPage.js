import { useStoreState } from 'easy-peasy';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Banner from '../components/Banner';
import MovieList from '../components/MovieList/MovieList';
import Paginator from '../components/Paginator';
import Spinner from 'react-bootstrap/Spinner';
import Center from '../styled-components/Center';
import Toolbar from '../components/Toolbar';
import { Alert } from 'react-bootstrap';
import ErrorMessage from '../components/ErrorMessage';

export default function SearchPage() {
    const searchQuery = useStoreState(state => state.searchQuery)
    const movies = useStoreState(state => state.movies.items)
    const totalResults = useStoreState(state => state.movies.totalResults)
    const pending = useStoreState(state => state.movies.pending)
    const error = useStoreState(state => state.movies.error)

    const bannerTitle = `Results for "${searchQuery}"`
    const bannerSubTitle = `${totalResults} results`

    if (pending) return (
        <Container>
            <Center className="p-5">
                <Spinner animation="grow" variant="primary" />
            </Center>
        </Container>
    )

    if (error) return (
        <Container>
            <ErrorMessage message={error} />
        </Container>
    )

    if (!movies || !movies.length) return (
        <Container>
            <Alert variant="info">
                No movies to show, please refine your search
            </Alert>
        </Container>
    )

    return (
        <Container>
            {totalResults && <Banner title={bannerTitle} subtitle={bannerSubTitle} />}
            {totalResults && <Toolbar />}
            <MovieList movies={movies} />
            {totalResults && <Paginator pageCount={Math.ceil(totalResults / 10)} />}
        </Container>
    )
}
