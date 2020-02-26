import React, { useContext, useEffect } from 'react';
import { StateContext } from '../context/StateProvider';
import { useKeyboard } from '../hooks/useKeyboard';
import Letter from './Letter';
import { StyledTestDisplay } from '../styles/StyledTest';

const Test = () => {
    const [{ test, history, isStarted }, dispatch] = useContext(StateContext);

    const currentKey = useKeyboard();
    
    const updateCurrentKey = () => {
        dispatch({ type: 'setCurrentKey', newKey: currentKey })
        updateHistory(currentKey);
        startTest();
    }

    const matchKeysToTest = () => {
        if (currentKey && currentKey === test.text[history.length]) {
            dispatch({ type: "setMatch", setMatchBool: true });
        } else {
            dispatch({ type: "setMatch", setMatchBool: false });
        }
    };

    const updateHistory = (key) => {
        if (key) {
            if (key !== 'Backspace') {
                dispatch({ type: 'addToHistory', setHistory: key});
                matchKeysToTest();
            } else {
                dispatch({ type: 'removeLastKey'});
                dispatch({ type: "removeMatch" });
            }
        }
    }

    const startTest = () => {
        if (currentKey && !isStarted) {
            dispatch({ type: 'startEndTest', setStartState: true })
        }
    }

    useEffect(() => {
        updateCurrentKey();
    }, [currentKey])

    return (
        <StyledTestDisplay>
            <Letter />
        </StyledTestDisplay>
    );
}

export default Test;