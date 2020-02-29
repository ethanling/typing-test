import styled from 'styled-components';

export const StyledButton = styled.button`
    border: none;
    font-size: 1em;
    color: #f1f1f1;
    padding: 10px 15px 10px 15px;
    border-radius: 8px;
    background: #1c1c1c;
    transition: all .2s ease;
    
    :hover {
        /* transform: scale(1.07); */
        background: #0a0a0a;
        box-shadow: 0 0 8px 0px #000;
        cursor: pointer;
    }
`;