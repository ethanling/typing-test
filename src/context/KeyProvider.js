import React, { useState } from 'react';
import { useKeyboard } from '../hooks/useKeyboard';

export const KeyContext = React.createContext();

const KeyProvider = ({ children }) => {
    const currentKey = useKeyboard();

	return (
        <KeyContext.Provider
            value={{
                currentKey
            }}
        >
            {children}
        </KeyContext.Provider>
    );
}

export default KeyProvider;
