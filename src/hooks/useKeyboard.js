import { useState, useEffect } from 'react';

export const useKeyboard = () => {
    const [currentKey, setCurrentKey] = useState(null);
    const [history, setHistory] = useState({ keys: [] });

	const handleKeyDown = (e) => {
        if (e.key.length < 2) {
            setCurrentKey(e.key);
            updateHistory(e.key);   
        } else if (e.key === 'Backspace') {
            console.log('Backspace');
        }
    }

    const updateHistory = (key) => {
        setHistory(prevState => ({
            keys: [...prevState.keys, key]
        }));
    }

	useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    });

    return { currentKey, history };
}
