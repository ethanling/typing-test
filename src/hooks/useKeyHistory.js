import React, { useState, useEffect } from "react";

export const useKeyHistory = (currentKey) => {
    const [keyHistory, setKeyHistory] = useState({history: []})

    useEffect(() => {
        updatedHistory();
    }, [currentKey])

    const updatedHistory = () => {
        if (currentKey) {
            setKeyHistory(prevState => ({
                history: [...prevState.history, currentKey]
            }));
        }
    }

    return keyHistory;
};
