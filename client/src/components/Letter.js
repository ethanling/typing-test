import React, { useContext } from "react";
import styled from "styled-components";
import { StateContext } from "../context/StateProvider";
import { StyledTestText } from "../styles/StyledTest";

const StyledLetter = styled.span`
    white-space: pre-wrap;
    line-height: 2em;
    /* font-weight: bold; */
    border-left: 4px solid #fff;
`;

const Letter = () => {
    const [{ test, matches, history }] = useContext(StateContext);

    const testTextArr = test.text.split("");

    const setLetterStyles = (index) => {
        const letterStyles = {
            opacity: ".4",
            borderLeftWidth: "4px",
            borderLeftStyle: 'solid',
            borderLeftColor: '#fff',
            transition: "opacity .1s",
        };

        if (matches[index] && index < matches.length) {
            letterStyles.color = "#81c970";
            letterStyles.opacity = "1";
            letterStyles.color = "#423c3c";
        } else if (!matches[index] && index < matches.length) {
            letterStyles.color = "#e2615f";
            letterStyles.opacity = ".8";
        } else {
            letterStyles.backgroundColor = "";
        }
        // Determines cursor position
        if (history.length === index) {
            letterStyles.borderLeftColor = "#59B1FC";
        }

        return letterStyles;
    };

    return (
        <StyledTestText>
            {testTextArr.map((letter, i) => (
                <StyledLetter key={i} style={setLetterStyles(i)}>
                    {letter}
                </StyledLetter>
            ))}
        </StyledTestText>
    );
};

export default Letter;
