import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

const TextOnlyButton = styled(Button)`
    background: none;
    border: none;
    color: white;
    opacity: 0.55;
    &:hover {
        background: none;
        border: none;
        color: white;
        opacity: 1;
    }
`

export default TextOnlyButton