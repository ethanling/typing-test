import styled from "styled-components";

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
    font-family: "Courier Prime", "Courier New", Courier, monospace;
    font-weight: bold;
    font-size: 2em;
    color: #1d2226;
    background: #f1f1f1;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 3px 0 #9e9e9e;
`;

export const StyledLetter = styled.span`
    margin: 2px 2px 0px 2px;
    padding: 2px;
    border-radius: 4px;
    white-space: pre-wrap;
    line-height: 2em;
    /* font-weight: bold; */
`;

export const StyledClockText = styled.span`
    font-family: "Courier Prime", "Courier New", Courier, monospace;
    font-weight: bold;
    flex: 1;
    font-size: 1.4em;
    color: #f1f1f1;
    display: flex;

    section {
        padding: 12px 15px 12px 15px;
        border-radius: 8px;
        background: #1c1c1c;
    }
`;
