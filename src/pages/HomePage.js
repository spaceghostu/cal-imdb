import { useStoreState } from 'easy-peasy';
import React from 'react'
import Container from 'react-bootstrap/Container';

export default function HomePage() {
    const movies = useStoreState(state => state.movies)
    return (
        <Container>
            {movies.map((movie, index) => (
                <div key={index}>{movie.Title}</div>
            ))}
        </Container>
    )
}
