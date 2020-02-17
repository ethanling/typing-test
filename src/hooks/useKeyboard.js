import { useState, useEffect } from 'react';

export const useKeyboard = () => {
    const [currentKey, setCurrentKey] = useState(null);
    const [history, setHistory] = useState({ keys: [] });

	const handleKeyDown = (e) => {
        // Resets current key so that repeated keys trigger re-renders
        setCurrentKey(null);
        if (e.key.length < 2) {
            // Sets current key
            setCurrentKey(e.key);
            // Adds key to history
            setHistory(prevState => ({
                keys: [...prevState.keys, e.key]
            }));
        } else if (e.key === "Backspace") {
            setCurrentKey("Backspace");
            // Mutates temporary history array before removing last item and adding to state
            const tmp = history.keys;
            const deletedLastItem = tmp.slice(0, tmp.length - 1);
            setHistory({keys: deletedLastItem});
        }
    }

	useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    });

    return { currentKey, history };
}
