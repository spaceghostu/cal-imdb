import React from 'react'
import { Col, ListGroup } from 'react-bootstrap';
import MovieListItem from './MovieListItem';
import { useStoreState } from 'easy-peasy';
import MovieCardItem from './MovieCardItem';
import Row from 'react-bootstrap/Row';

export default function MovieList({ movies }) {
    const favorites = useStoreState(state => state.favorites.ids)
    const viewMode = useStoreState(state => state.viewMode)
    if (viewMode === 'list') return (
        <Col md={{ span: 8, offset: 2 }}>
            <ListGroup>
                {movies.map((movie, index) => (
                    <MovieListItem key={index} movie={movie} isFavorite={favorites.includes(movie.imdbID)} />
                ))}
            </ListGroup>
        </Col>
    )
    return (
        <Row xs={1} md={4} style={{ gap: '10px' }} className="justify-content-md-center">
            {movies.map((movie, index) => (
                <MovieCardItem className="m-3" key={index} movie={movie} isFavorite={favorites.includes(movie.imdbID)} />
            ))}
        </Row>
    )
}
