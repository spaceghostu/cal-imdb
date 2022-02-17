import { useStoreActions, useStoreState } from 'easy-peasy';
import React, { useEffect } from 'react'
import Pagination from 'react-bootstrap/Pagination'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useLocalStore, action } from 'easy-peasy';
import styled from 'styled-components';

export default function Paginator({ pageCount }) {
    const pageNumber = useStoreState(state => state.pageNumber)
    const searchQuery = useStoreState(state => state.searchQuery)
    const setSearchParams = useStoreActions(action => action.setSearchParams)

    const [state, actions] = useLocalStore(() => ({
        pageRange: [0, 0],
        showEllipsis: [false, false],
        setPageRange: action((_state, _payload) => {
            let min = _payload.pageNumber - 4
            let max = _payload.pageNumber + 5
            if (min < 1) {
                min = 1
                max = 10
            }
            if (max > _payload.pageCount) {
                min = _payload.pageCount - 5
                max = _payload.pageCount
            }
            _state.showEllipsis = [min > 1, max < _payload.pageCount]
            _state.pageRange = [min - 1, max - 1]
        }),
    }));

    useEffect(() => {
        actions.setPageRange({ pageNumber, pageCount })
    }, [actions, pageNumber, pageCount])

    const onPageClick = (pageNumber) => {
        setSearchParams({ searchQuery, pageNumber })
    }

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(
            <StyledPaginationItem
                key={i}
                active={i === pageNumber}
                onClick={() => onPageClick(i)}>
                {i}
            </StyledPaginationItem>,
        );

    }
    return (
        <Container className="mt-4">
            <Row>
                <Pagination className="justify-content-md-center">
                    {state.showEllipsis[0] && (
                        <>
                            <StyledPaginationItem
                                active={pageNumber === 1}
                                onClick={() => onPageClick(1)}>
                                1
                            </StyledPaginationItem>
                            <StyledPaginationItem>...</StyledPaginationItem>
                        </>
                    )}

                    {pages.slice(...state.pageRange)}

                    {state.showEllipsis[0] && (
                        <>
                            <StyledPaginationItem>...</StyledPaginationItem>
                            <StyledPaginationItem
                                active={pageNumber === pageCount}
                                onClick={() => onPageClick(pageCount)}>
                                {pageCount}
                            </StyledPaginationItem>
                        </>
                    )}
                </Pagination>
            </Row>
        </Container>
    )
}


const StyledPaginationItem = styled(Pagination.Item)`
    a {
        background-color: #000;
        border: 1px solid #4e4e4e;
        color: var(--bs-primary);
        &:hover {
            background-color: #1a1a1a !important;
            border-color: #5d5d5e !important;
            color: var(--bs-primary);
        }
    }
    &.active .page-link {
        background-color: var(--bs-primary);
        color: black;
        border: 1px solid var(--bs-primary);

    }
`