import { useEffect, useState } from 'react';

export const useTimer = (testDuration) => {
    const [time, setTime] = useState(0);
    let timer;

    useEffect(() => {
        timer = setInterval(() => {
            setTime(time + 1);
        }, 1000);
        return () => clearInterval(timer);
    })

    return { time, timer };
}