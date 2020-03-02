import React, { useState, useEffect } from 'react';
import { useKeyboard } from '../hooks/useKeyboard';
import { useKeyMatches } from '../hooks/useKeyMatches';
import { useStartEndTest } from '../hooks/useStartEndTest';
import { useTimer } from '../hooks/useTimer';
import { allTests } from '../tests';

export const KeyContext = React.createContext();

const defaultState = {
    currentKey: '', // Last key pressed
    history: [], // All pressed keys
    test: {
        text: '', // Test text
        difficulty: 1, // 1 - Easy, 2 - Medium, 3 - Hard
        duration: 1 // in minutes
    },
    time: {
        seconds: 0,
        minutes: 0
    },
    matches: [], // Correctly matched test letters to keys pressed
    isStarted: false,
    isComplete: false,
}

const KeyProvider = ({ children }) => {
    // Defines intial state
    const [state, setState] = useState(defaultState);

    const test = allTests[0];
    // Returns last key pressed and an array of all pressed keys
    const { currentKey, history } = useKeyboard();
    // Returns array of booleans comparing key pressed to test text
    const matches = useKeyMatches(state.test, state.currentKey, state.history);
    // Sets timer when test is begun based on duration of test
    const time = useTimer(state.isStarted);
    // Determines test's start/end state
    const { isStarted, isComplete } = useStartEndTest(state.history, state.test, state.time);

    const resetState = () => {
        setState(defaultState)
        console.log(state);
    };

    useEffect(() => {
        console.log(state)
        setState({
            currentKey: currentKey,
            history: history,
            test: test,
            time: time,
            matches: matches,
            isStarted: isStarted,
            isComplete: isComplete,
        })
    }, [currentKey, history, test, matches, time, isStarted, isComplete])

	return (
        <KeyContext.Provider value={{ state, resetState }} >
            {children}
        </KeyContext.Provider>
    );
}

export default KeyProvider;
