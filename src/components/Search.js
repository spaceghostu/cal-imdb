import Button from 'react-bootstrap/Button';
import { useStoreActions } from 'easy-peasy';
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup';
import { LinkContainer } from 'react-router-bootstrap';

export default function Search() {
    const setSearchParams = useStoreActions(actions => actions.setSearchParams);
    const [inputValue, setInputValue] = useState()
    return (
        <InputGroup>
            <Form.Control onChange={event => setInputValue(event.target.value)} type="text" placeholder="Search..." style={{ color: 'black' }} />
            <LinkContainer to="/">
                <Button onClick={() => setSearchParams({ searchQuery: inputValue, pageNumber: 1 })}>Search</Button>
            </LinkContainer>
        </InputGroup>
    )
}
