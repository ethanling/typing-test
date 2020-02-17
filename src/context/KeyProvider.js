import React, { useState } from 'react';
import { useKeyboard } from '../hooks/useKeyboard';
import { useKeyMatches } from "../hooks/useKeyMatches";
import { allTests } from '../tests';

export const KeyContext = React.createContext();

const initialState = {
    currentKey: '', // Last key pressed
    keyHistory: [], // All pressed keys
    test: {
        text: '', // Test text
        difficulty: 1, // 1 - Easy, 2 - Medium, 3 - Hard
        duration: 0 // in minutes
    },
    matches: [], // Correctly matched test letters to keys pressed
}

const KeyProvider = ({ children }) => {
    const [state, setState] = useState(initialState);

    const test = allTests[0];
    // Return last key pressed and an array of all pressed keys
    const { currentKey, history } = useKeyboard();
    // Returns array of booleans comparing key pressed to test text
    const matches = useKeyMatches(test, currentKey, history);

	return (
        <KeyContext.Provider
            value={{
                currentKey,
                history,
                matches,
                test
            }}
        >
            {children}
        </KeyContext.Provider>
    );
}

export default KeyProvider;
