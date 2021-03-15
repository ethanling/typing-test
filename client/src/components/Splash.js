import React, { useState } from "react";
import { useInterval } from "../hooks/useInterval";
import { StyledSplash, StyledAnimation } from "../styles/StyledSplash";

const wordList = ["Time", "Determination", "Practice", "Skill", "Accuracy"];

const AnimatedText = ({ word }) => (
    <StyledAnimation>
        <h1>{word}</h1>
    </StyledAnimation>
);

const Splash = ({ children }) => {
    const [tick, setTick] = useState(0);

    useInterval(() => {
        if (tick < wordList.length - 1) {
            setTick(tick + 1);
        } else {
            setTick(0);
        }
    }, 1000);

    return (
        <StyledSplash>
            <div className="content">
                <h1>Becoming a better typist takes: </h1>
                <AnimatedText word={wordList[tick]} />
                <h2>TypicalType will help with at least one of these!</h2>
            </div>
            {children}
        </StyledSplash>
    );
};

export default Splash;
