import React, { useContext } from "react";
import { StateContext } from "../context/StateProvider";
import { StyledTestText, StyledLetter } from "../styles/StyledTest";

const Letter = () => {
    const [{ test, matches, history}] = useContext(StateContext);

    const testTextArr = test.text.split("");

    const setLetterStyles = (index) => {
        const letterStyles = {
            backgroundColor: "",
            borderBottom: "3px solid #f1f1f1",
            borderBottomLeftRadius: "4px",
            borderBottomRightRadius: "4px"
        };

        if (matches[index] && index < matches.length) {
            letterStyles.backgroundColor = "#81c970";
            letterStyles.backgroundImage =
                "radial-gradient( circle 613px at 24.5% 36%,  rgba(165,233,138,1) 0%, #bbb 90% )";
        } else if (!matches[index] && index < matches.length) {
            letterStyles.backgroundColor = "#e2615f";
        } else {
            letterStyles.backgroundColor = "";
        }
        // Determines cursor position
        if (history.length === index) {
            letterStyles.borderBottom = "3px solid #000";
            letterStyles.borderBottomLeftRadius = "0px";
            letterStyles.borderBottomRightRadius = "0px";
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
