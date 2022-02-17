import Button from 'react-bootstrap/Button';
import { useStoreActions, useStoreState } from 'easy-peasy';
import React from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup';
import { LinkContainer } from 'react-router-bootstrap';
import AwesomeDebouncePromise from 'awesome-debounce-promise';

export default function Search() {
    const setSearchParams = useStoreActions(actions => actions.setSearchParams);
    const setSearchQuery = useStoreActions(actions => actions.setSearchQuery);
    const searchQuery = useStoreState(state => state.searchQuery);
    const setSearchQueryDebounced = AwesomeDebouncePromise(
        setSearchQuery,
        500,
    );
    return (
        <InputGroup>
            <Form.Control onChange={event => setSearchQueryDebounced(event.target.value)} type="text" placeholder="Search..." />
            <LinkContainer to="/">
                <Button onClick={() => setSearchParams({ searchQuery, pageNumber: 1 })}>Search</Button>
            </LinkContainer>
        </InputGroup>
    )
}
