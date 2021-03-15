import React from "react";
import styled from "styled-components";

const colors = {
    dark: "#2c2c2c",
    light: "#f1f1f1",
    black: "#0a0a0a",
};

const StyledButton = styled.button`
    border: none;
    font-family: "Roboto Mono", monospace;
    font-size: 1em;
    color: ${(props) => (props.dark ? "#f1f1f1" : "#2c2c2c")};
    padding: 10px 15px 10px 15px;
    border: ${(props) =>
        props.dark ? `3px solid ${colors.dark}` : `3px solid rgba(0, 0, 0, 0)`};
    border-radius: 8px;
    background: ${(props) => (props.dark ? "#2c2c2c" : "")};
    transition: all 0.2s ease-in;
    font-weight: bold;
    margin: 0 0.25em 0 0.25em;

    :hover {
        border: ${props => props.dark ? `3px solid ${colors.black}` : `3px solid ${colors.dark}`};
        cursor: pointer;
        box-shadow: 1px 1px 0 0 #2c2c2c,
        2px 2px 0 0 #2c2c2c,
        3px 3px 0 0 #2c2c2c,
        4px 4px 0 0 #2c2c2c,
        5px 5px 0 0 #2c2c2c;
    }
`;

const Button = ({ action, children, text, textSize, dark }) => (
    <StyledButton onClick={action} dark={dark} style={{ fontSize: textSize }}>
        {text}
        {children}
    </StyledButton>
);

export default Button;
