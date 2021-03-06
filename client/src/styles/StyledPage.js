import styled from "styled-components";
// background-image: radial-gradient( circle farthest-corner at -2.9% 119.3%,  rgba(0,47,73,1) 0%, rgba(39,169,255,1) 100.7% );

export const StyledApp = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    background: #f1f1f1;
    z-index: 0;
    padding-bottom: 3em;
    overflow-x: hidden;
`;

export const Col = styled.div`
    display: flex;
    flex-direction: column;
    background: ${props => props.background};
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: ${props => props.background};
`
