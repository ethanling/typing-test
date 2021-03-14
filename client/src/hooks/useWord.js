import React, { useEffect } from "react";
import { words } from "../eng-1000.js";

export const useWord = () => {
    const totalWordCount = 200;
    const randIndex = Math.floor(Math.random() * 1000);
    

    return randIndex;
};
