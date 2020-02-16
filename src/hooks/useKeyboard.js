import React, { useState, useEffect } from 'react';

export const useKeyboard = () => {
    const [currentKey, setCurrentKey] = useState(null);

	const handleKeyDown = (e) => {
        if (e.key.length < 2) {
            setCurrentKey(e.key);            
        } else if (e.key == 'Backspace') {
            console.log('Backspace');
        }
    }

	useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    });

	return currentKey; 
}
