import React from 'react'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';

export default function ErrorMessage({ message }) {
    return (
        <Alert variant="error">
            <Alert.Heading>Error</Alert.Heading>
            <p>An error occurred</p>
            <hr />
            <p>{message}</p>
            <hr />
            <div className="d-flex justify-content-end">
                <div className="d-flex justify-content-end">
                    <LinkContainer to="/">
                        <Button>
                            Home
                        </Button>
                    </LinkContainer>
                </div>
            </div>
        </Alert>
    )
}
