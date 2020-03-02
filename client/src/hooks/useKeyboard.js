import { useState, useEffect } from "react";

export const useKeyboard = () => {
    const [currentKey, setCurrentKey] = useState();

    const handleKeyDown = e => {
        // Resets current key so that repeated keys trigger re-renders
        setCurrentKey(undefined);

        if (e.key.length < 2 || e.key === "Backspace") {
            setCurrentKey(e.key);
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    });

    return currentKey;
};
