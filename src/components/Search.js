import Button from 'react-bootstrap/Button';
import { useStoreActions, useStoreState } from 'easy-peasy';
import React from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup';
import { LinkContainer } from 'react-router-bootstrap';

export default function Search() {
    const searchMovies = useStoreActions(actions => actions.movies.search);
    const setSearchQuery = useStoreActions(actions => actions.app.setSearchQuery);
    const searchQuery = useStoreState(actions => actions.app.searchQuery);
    return (
        <>
            <InputGroup>
                <Form.Control onChange={setSearchQuery} type="text" placeholder="Search..." />
                <LinkContainer to="/">
                    <Button onClick={() => searchMovies(searchQuery)}>Search</Button>
                </LinkContainer>
            </InputGroup>
        </>
    )
}
