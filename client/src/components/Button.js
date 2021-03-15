import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    border: none;
    font-family: "Roboto Mono", monospace;
    font-size: 1em;
    color: ${(props) => (props.dark ? "#f1f1f1" : "#2c2c2c")};
    padding: 10px 15px 10px 15px;
    border-radius: 8px;
    background: ${(props) => (props.dark ? "#2c2c2c" : "")};
    transition: all 0.2s ease;
    font-weight: bold;

    :hover {
        /* transform: scale(1.07); */
        background: #0a0a0a;
        box-shadow: 0 0 8px 0px rgba(0, 0, 0, 0.5);
        cursor: pointer;
    }
`;

const Button = ({ action, children, text, textSize, dark }) => (
    <StyledButton onClick={action} dark={dark} style={{ fontSize: textSize }}>
        { text }
        { children }
    </StyledButton>
);

export default Button;
