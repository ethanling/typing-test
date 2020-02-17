import React, { useContext, useState } from 'react';
import { KeyContext } from "../context/KeyProvider";
import { StyledTestText, StyledLetter } from '../styles/StyledTestDisplay';

const TestText = () => {
    const { test, matches, history } = useContext(KeyContext);

    const testTextArr = test.text.split('');

    const setLetterStyles = (index) => {
        const letterStyles = {
            backgroundColor: "",
            borderBottom: "3px solid #f1f1f1",
            borderBottomLeftRadius: "",
            borderBottomRightRadius: "",
            transition: 'all .15s ease',
        };

        if (matches[index] && index < matches.length) {
            letterStyles.backgroundColor = "#81c970";
        } else if (!matches[index] && index < matches.length) {
            letterStyles.backgroundColor = "#e2615f"
        } else {
            letterStyles.backgroundColor = '';
        }
        // Determines cursor position
        if (history.keys.length === index) {
            letterStyles.borderBottom = '3px solid #000';
            letterStyles.borderBottomLeftRadius = '0px';
            letterStyles.borderBottomRightRadius = "0px";
        }

        return letterStyles;
    }

    return (
        <StyledTestText>
            { testTextArr.map((letter, i) => (
                <StyledLetter key={i} style={setLetterStyles(i)}>
                    {letter}
                </StyledLetter>))
            }
        </StyledTestText>
    );
}

export default TestText;