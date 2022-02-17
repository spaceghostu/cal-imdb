import React, { useEffect } from 'react'
import { Col, ListGroup } from 'react-bootstrap';
import MovieListItem from './MovieListItem';
import { useStoreState } from 'easy-peasy';

export default function MovieList({ movies }) {
    const favorites = useStoreState(state => state.favorites.ids)
    return (
        <>
            <Col md={{ span: 8, offset: 2 }}>
                <ListGroup>
                    {movies.map((movie, index) => (
                        <MovieListItem key={index} movie={movie} isFavorite={favorites.includes(movie.imdbID)} />
                    ))}
                </ListGroup>
            </Col>
        </>
    )
}
