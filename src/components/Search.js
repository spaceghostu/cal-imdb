import Button from 'react-bootstrap/Button';
import { action, useLocalStore, useStoreActions } from 'easy-peasy';
import React from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup';
import { LinkContainer } from 'react-router-bootstrap';

export default function Search() {
    const searchMovies = useStoreActions(actions => actions.search);
    const [state, actions] = useLocalStore(() => ({
        search: '',
        setSearch: action((_state, payload) => {
            _state.search = payload;
        }),
    }));
    return (
        <>
            <InputGroup>
                <Form.Control onChange={actions.setSearch} type="text" placeholder="Search..." />
                <LinkContainer to="/">
                    <Button onClick={() => searchMovies(state.search)}>Search</Button>
                </LinkContainer>
            </InputGroup>
        </>
    )
}
