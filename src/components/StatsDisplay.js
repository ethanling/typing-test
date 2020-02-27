import React, { useContext, useEffect } from "react";
import { StateContext } from "../context/StateProvider";
import { StyledStatsWrapper, StyledStatsHeader } from "../styles/StyledStats";

const StatsDisplay = () => {
    const [{ history, matches, stats }, dispatch] = useContext(StateContext);

    const determineWordsPerMin = () => {
        let wordCount = 0;
        // adds word for at each space typed in history
        // TODO: MAKE THIS BETTER
        for (let i = 0; i < history.length; i++) {
            if (history[i] === " ") {
                wordCount++;
            }
        }

        return wordCount;
    };

    const determineAccuracy = () => {
        const allTypedChars = matches.length;
        const incorrectChars = matches.filter(a => a === false).length;
        const correctChars = allTypedChars - incorrectChars;
        const typingAccuracy = Math.round((correctChars / allTypedChars) * 100);

        return typingAccuracy;
    };

    const getStats = () => {
        const wpm = determineWordsPerMin();
        const accuracy = determineAccuracy();

        dispatch({ type: "setStats", setWPM: wpm, setAccuracy: accuracy });
    };

    useEffect(() => {
        getStats();
    }, []);

    return (
        <>
            <StyledStatsHeader>Test Complete!</StyledStatsHeader>
            <StyledStatsWrapper>
                <p>Words Per Minute: {stats.wpm}</p>
                <p>Accuracy: {stats.accuracy + "%"}</p>
            </StyledStatsWrapper>
        </>
    );
};

export default StatsDisplay;
