import React, { useState } from 'react';
import { useKeyboard } from '../hooks/useKeyboard';
import { useKeyHistory } from '../hooks/useKeyHistory';

export const KeyContext = React.createContext();

const config = {
    currentKey: '',
    keyHistory: [],
    test: {
        text: '',
        difficulty: 1,
        duration: 0
    },
    matches: [],

}

const KeyProvider = ({ children }) => {
    const [state, setState] = useState(config)

    const currentKey = useKeyboard();
    const history = useKeyHistory(currentKey);

	return (
        <KeyContext.Provider
            value={{
                currentKey,
                history
            }}
        >
            {children}
        </KeyContext.Provider>
    );
}

export default KeyProvider;
