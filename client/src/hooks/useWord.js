import { useState, useEffect } from "react";
import { words } from "../eng-1000.js";

export const useWord = () => {
    const [allWords, setAllWords] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const getRandomWordList = () => {
        setIsLoading(true);
        const wordList = [];

        for (let i = 0; i < words.length; i++) {
            const randIndex = Math.floor(Math.random() * 1000);
            const word = words[randIndex];
            if (word.length > 1) {
                wordList.push(words[randIndex]);
            }
        }
        setIsLoading(false);
        return wordList;
    };

    useEffect(() => {
        setAllWords(getRandomWordList());
    }, []);

    return {allWords, isLoading};
};
