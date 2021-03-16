import { useEffect, useContext } from "react";
import TestDisplay from "../components/TestDisplay";
import Clock from "../components/Clock";
import RestartButton from "../components/RestartButton";
import StatsDisplay from "../components/StatsDisplay";
import { useWord } from "../hooks/useWord";
import { StateContext } from "../context/StateProvider";
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
    const [{ isComplete }, dispatch] = useContext(StateContext);

    const { allWords, isLoading } = useWord();

    const setTestText = (arr) => {
        const testObj = {
            text: arr.join(" "),
        };

        dispatch({ type: "setTest", testObj: testObj });
        return testObj;
    };

    useEffect(() => {
        if (!isLoading && allWords) {
            setTestText(allWords);
        }
    }, [isLoading]);

    return !isComplete && !isLoading ? <TestView /> : <StatsView />;
};

export default Test;
