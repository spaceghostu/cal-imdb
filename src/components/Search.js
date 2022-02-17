import Button from 'react-bootstrap/Button';
import { useStoreActions, useStoreState } from 'easy-peasy';
import React from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup';
import { LinkContainer } from 'react-router-bootstrap';
import AwesomeDebouncePromise from 'awesome-debounce-promise';

export default function Search() {
    const searchMovies = useStoreActions(actions => actions.movies.search);
    const setSearchQuery = useStoreActions(actions => actions.app.setSearchQuery);
    const pageNumber = useStoreState(state => state.app.pageNumber);
    const searchQuery = useStoreState(state => state.app.searchQuery);
    const setSearchQueryDebounced = AwesomeDebouncePromise(
        setSearchQuery,
        500,
    );
    return (
        <>
            <InputGroup>
                <Form.Control onChange={setSearchQueryDebounced} type="text" placeholder="Search..." />
                <LinkContainer to="/">
                    <Button onClick={() => searchMovies({ query: searchQuery, page: pageNumber })}>Search</Button>
                </LinkContainer>
            </InputGroup>
        </>
    )
}
