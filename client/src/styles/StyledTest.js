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
    width: 720px;
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
    font-size: 30px;
    font-weight: bold;
    color: #1d2226;
    background: #fff;
    border-radius: 8px;
    padding: 20px; 
    border: 1px solid rgba(0, 0, 0, 0.2);
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
