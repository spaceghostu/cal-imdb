import { useStoreActions, useStoreState } from 'easy-peasy';
import React, { useEffect } from 'react'
import { Container, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Center from '../styled-components/Center';
import MovieDetails from '../components/MovieDetails/MovieDetails';

export default function DetailsPage() {
    const id = useParams()
    const getMovieById = useStoreActions(actions => actions.movieDetails.getMovieById)
    const movie = useStoreState(state => state.movieDetails.movie)
    const pending = useStoreState(state => state.movieDetails.pending)
    useEffect(() => {
        getMovieById(id)
    }, [getMovieById, id])

    if (pending || !movie) return (
        <Container>
            <Center className="p-5">
                <Spinner animation="grow" variant="primary" />
            </Center>
        </Container>
    )

    return (
        <StyledContainer>
            <MovieDetails movie={movie} />
        </StyledContainer>
    )
}

const StyledContainer = styled(Container)`
    margin-top: 50px;
`
