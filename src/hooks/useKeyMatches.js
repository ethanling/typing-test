import { useState, useEffect } from 'react';

export const useKeyMatches = (test, currentKey, history) => {
    const [matches, setMatches] = useState({matches: []});

    useEffect(() => {
        matchKeyToTest();
    }, [currentKey]);

    // Converts test text to an iterable array for comparison
    const testArr = test.text.split('');

    const matchKeyToTest = () => {
        if (currentKey && currentKey === testArr[history.keys.length]) {
            setMatches(prevState => ({
                matches: [...prevState.matches, true]
            }))
        } else if (currentKey && currentKey !== "Backspace") {
            setMatches(prevState => ({
                matches: [...prevState.matches, false]
            }));
        } else if (currentKey === "Backspace") {
            const tmp = matches.matches;
            const deletedLastItem = tmp.slice(0, tmp.length - 1);
            setMatches({ matches: deletedLastItem });
        }
    }

    return matches.matches;
}