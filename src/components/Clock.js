import React, { useContext } from "react";
import { StateContext } from "../context/StateProvider";
import { StyledClockText } from "../styles/StyledTest";
import { useInterval } from "../hooks/useInterval";

const Clock = () => {
    const [{ time, test, isStarted }, dispatch] = useContext(StateContext);

    const checkTimeAgainstDuration = () => {
        // Runs dispatch the during the last second, accounts for delay
        if (time.seconds === (test.duration * 60 - 1)) {
            dispatch({ type: "startEndTest", setStartState: false });
            dispatch({ type: "completeTest", setCompleteTest: true });
        }
    }

    useInterval(() => {
        let sec = time.seconds;
        let min = time.minutes;

        sec++;

        if (time.seconds === 59) {
            min++;
            sec = 0;
        }

        dispatch({ type: "setTimer", setSeconds: sec, setMinutes: min });
        checkTimeAgainstDuration();

    }, isStarted ? 1000 : null);

    const formatClock = () => {
        const min = time.minutes;
        const sec = time.seconds;

        let displayMinutes;
        let displaySeconds;

        if (sec < 10) {
            displaySeconds = `0${sec}`;
        } else {
            displaySeconds = `${sec}`;
        }

        if (min < 10) {
            displayMinutes = `0${min}`;
        } else {
            displayMinutes = `${min}`;
        }

        return `${displayMinutes}:${displaySeconds} // 0${test.duration}:00`;
    };

    return (
        <StyledClockText>
            <section>{formatClock()}</section>
        </StyledClockText>
    );
};

export default Clock;
