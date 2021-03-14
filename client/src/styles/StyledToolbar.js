import styled from "styled-components";

export const StyledToolBar = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
    padding: 10px 15px 10px 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    z-index: 10;
    background: #f1f1f1;
`;

export const StyledLogo = styled.h1`
    margin: 0;
    padding: 0;
    font-weight: 700;
    text-transform: lowercase;

    a {
        text-decoration: none;
        color: #0a0a0a;
    }

    a:visited {
        color: #0a0a0a;
    }

    .highlight {
        color: #999;
    }
`;
