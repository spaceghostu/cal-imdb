import styled from 'styled-components'
import Nav from 'react-bootstrap/Nav'

export const NavLink = styled(Nav.Link)`
    display: flex;
    flex-direction: row;
    align-items: center;
    svg {
        margin-left: 8px;
    }
`