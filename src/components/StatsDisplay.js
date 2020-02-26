import React, { useContext, useEffect } from "react";
import { StateContext } from "../context/StateProvider";

const StatsDisplay = () => {
    const [{ history, matches, stats }, dispatch] = useContext(StateContext);

    const determineWordsPerMin = () => {
        let wordCount = 0;
        // adds word for at each space typed in history
        for (let i = 0; i < history.length; i++) {
            if (history[i] === ' ') {
                wordCount++;
            }
        }
        console.log(wordCount);  
    }

    const determineAccuracy = () => {
        const allTypedChars = matches.length
        const incorrectChars = matches.filter(a => a === false).length;
        const correctChars = allTypedChars - incorrectChars
        const typingAccuracy = Math.round((correctChars / allTypedChars) * 100);
        
        dispatch({ type: 'setStats', setAccuracy: typingAccuracy });
    }

    const getStats = () => {
        determineWordsPerMin();
        determineAccuracy();
    }

    useEffect(() => {
        getStats();
    }, [])
    
    return (
        <div>
            <h1>Stats</h1>
            Words Per Minute: <br />
            Accuracy: {stats.accuracy + "%"}
        </div>
    );
}

export default StatsDisplay;