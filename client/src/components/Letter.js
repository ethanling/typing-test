import React, { useContext } from "react";
import styled from "styled-components";
import { StateContext } from "../context/StateProvider";
import { StyledTestText } from "../styles/StyledTest";

const StyledLetter = styled.span`
    white-space: pre-wrap;
    line-height: 2em;
    /* font-weight: bold; */
    border-left: 4px solid #fff;

    @keyframes blink {
        0% {
            border-color: #59B1FC;
        }
    }
`;

const Letter = () => {
    const [{ test, matches, history }] = useContext(StateContext);

    const testTextArr = test.text.split("");

    const setLetterStyles = (index) => {
        const letterStyles = {
            opacity: ".4",
            borderLeft: "4px solid #fff",
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
            letterStyles.borderLeftWidth = "4px";
            letterStyles.borderLeftStyle = "solid"
            letterStyles.borderLeftColor = "#fff"
            letterStyles.animation = "blink .5s step-end infinite alternate";
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
