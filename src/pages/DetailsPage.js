import { useStoreActions, useStoreState } from 'easy-peasy';
import React, { useEffect } from 'react'
import { Col, Container, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Center from '../styled-components/Center';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import { ArrowLeft } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

export default function DetailsPage() {
    const navigate = useNavigate()
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
            <BackButton onClick={() => navigate(-1)}>
                <BackIcon />
                Back
            </BackButton>
            <MovieDetails movie={movie} />
        </StyledContainer>
    )
}

const StyledContainer = styled(Container)`
    margin-top: 50px;
`

const BackIcon = styled(ArrowLeft)`
    margin-right: 5px;
    font-size: 18px;
    position: relative;
    top: -2px;
`

const BackButton = styled(Col)`
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`