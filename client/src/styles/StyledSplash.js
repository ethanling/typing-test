import styled from "styled-components";
import bg from "../images/keyboard-closeup.svg";

export const StyledSplash = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    flex: 1;
    width: 100vw;
    color: #1c1c1c;

    h1 {
        font-size: 3em;
        max-width: 90vw;
    }

    h2 {
        text-align: center;
    }

    p {
        font-size: 1.7em;
        margin-bottom: 20px;
    }

    .content {
        margin-bottom: 5em;
    }
`;

export const StyledAnimation = styled.div`
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #e2615f;
    line-height: 5em;
    border-radius: 8px;
    padding: 1em;

    h1 {
        color: #873a39;
        text-align: center;
        height: 100%;
        margin: 0;
        transition: all 0.4s ease-in;
    }
`;
