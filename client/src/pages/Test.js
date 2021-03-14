import React, { useContext } from "react";
import TestDisplay from "../components/TestDisplay";
import Clock from "../components/Clock";
import RestartButton from "../components/RestartButton";
import StatsDisplay from "../components/StatsDisplay";
import TestPicker from "../components/TestPicker";
import { StateContext } from "../context/StateProvider";
import { useWord } from '../hooks/useWord'
import { StyledTestContainer, StyledToolBar } from "../styles/StyledTest";
import { StyledStatsContainer } from "../styles/StyledStats";

const TestView = () => (
    <StyledTestContainer>
        <StyledToolBar>
            <Clock />
            <RestartButton />
        </StyledToolBar>
        <TestDisplay />
    </StyledTestContainer>
);

const StatsView = () => (
    <StyledStatsContainer>
        <StatsDisplay />
    </StyledStatsContainer>
);

const Test = () => {
    const [{ isComplete, test }] = useContext(StateContext);

    const word = useWord();
    console.log(word)

    return test.text.length === 0 ? (
        <TestPicker />
    ) : !isComplete ? (
        <TestView />
    ) : (
        <StatsView />
    );
};

export default Test;
