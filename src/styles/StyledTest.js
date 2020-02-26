import styled from 'styled-components';

export const StyledTestContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
`;

export const StyledTestDisplay = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 75vw;
`;

export const StyledToolBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: row;
    margin-bottom: 20px;
`;

export const StyledTestText = styled.div`
    font-family: "Courier New", Courier, monospace;
    font-weight: bold;
    font-size: 2em;
    color: #1d2226;
    background: #f1f1f1;
    padding: 12px;
    border-radius: 8px;
`;

export const StyledLetter = styled.span`
    margin: 2px 2px 7px 2px;
    padding: 4px;
    border-radius: 4px;
    white-space: pre-wrap;
    line-height: 2em;
    font-weight: bold;
`;

export const StyledClockText = styled.span`
    font-family: "Courier New", Courier, monospace;
    font-weight: bold;
    font-size: 1.4em;
    flex: 1;
`;
