import { useStoreActions, useStoreState } from 'easy-peasy';
import React, { useEffect } from 'react'
import Pagination from 'react-bootstrap/Pagination'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useLocalStore, action } from 'easy-peasy';
import styled from 'styled-components';
import useWindowSize from '../hooks/useWindowSize';

export default function Paginator({ pageCount }) {
    const size = useWindowSize()
    const isXs = size.width < 576
    const pageNumber = useStoreState(state => state.pageNumber)
    const searchQuery = useStoreState(state => state.searchQuery)
    const setSearchParams = useStoreActions(action => action.setSearchParams)

    const [state, actions] = useLocalStore(() => ({
        pageRange: [0, 0],
        showEllipsis: [false, false],
        setPageRange: action((_state, _payload) => {
            const range = _payload.isXs ? 3 : 5
            let min = _payload.pageNumber - (range - 1)
            let max = _payload.pageNumber + range
            if (min < 1) {
                min = 1
                max = (range * 2)
            }
            if (max > _payload.pageCount) {
                min = _payload.pageCount - range
                max = _payload.pageCount
            }
            _state.showEllipsis = [min > 1, max < _payload.pageCount]
            _state.pageRange = [min - 1, max - 1]
        }),
    }));

    useEffect(() => {
        actions.setPageRange({ pageNumber, pageCount, isXs })
    }, [actions, pageNumber, pageCount, isXs])

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
                <Pagination className="justify-content-center">
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

                    {state.showEllipsis[1] && (
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
        background: none;
        border: 1px solid rgba(255, 255, 255, 0.5);
        color: rgba(255, 255, 255, 0.5);
        &:hover {
            background: none;
            border-color: rgba(255, 255, 255, 1) !important;
            color: white;import useWindowSize from '../hooks/useWindowSize';

        }
    }
    &.active .page-link {
        background: none;
        color: var(--bs-primary);
        border: 1px solid var(--bs-primary);

    }
`