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
        } else if (currentKey) {
            setMatches(prevState => ({
                matches: [...prevState.matches, false]
            }));
        }
    }

    return matches.matches;
}