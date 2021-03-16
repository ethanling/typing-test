import styled from 'styled-components';

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2em;
    max-width: 70%;
`
export const StyledSelect = styled.select`
    padding: 10px 15px 10px 15px;
    color: #f1f1f1;
    appearance: none;
    -webkit-appearance: none; 
    -moz-appearance: none; 
    font-size: 1.2em;
    border: none;
    border-radius: 8px;
    background: #2c2c2c;
    font-family: "Roboto Mono", monospace;
    font-weight: bold;

    option {
        padding: 10px;
    }
`;
