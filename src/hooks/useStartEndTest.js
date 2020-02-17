import { useState, useEffect } from 'react';

export const useStartEndTest = (history, test, time, timer) => {
    const [isStarted, setIsStarted] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    // Convert test duration minutes to seconds
    const testDuration = test.duration * 60;
    console.log(testDuration, time)

    const beginTest = () => {
        setIsComplete(false);
        setIsStarted(true);
    }
    
    const isTestComplete = () => {
        if (history.keys.length === test.text.length) {
            console.log("Done")
            setIsComplete(true);
        } else if (testDuration === time) {
            console.log("Time's up");
            clearInterval(timer)
        }
    }
    
    useEffect(() => {
        isTestComplete();
    }, [time])

    return { isStarted, isComplete };
}
