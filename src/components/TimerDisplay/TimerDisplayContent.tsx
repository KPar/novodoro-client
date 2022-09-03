import React, { useEffect, useRef} from 'react'
import { useSelector } from 'react-redux';
import { selectCurrentMinute, selectTimerState, selectTotalBreakTime, selectTotalTime } from '../../store';



function TimerDisplayContent() {
    const timeLeftRef = useRef<HTMLHeadingElement>(null);
    const timerState = useSelector(selectTimerState);
    const totalTime = useSelector(selectTotalTime)
    const totalBreakTime = useSelector(selectTotalBreakTime)
    const currentMinute = useSelector(selectCurrentMinute)
    const timeLeft = timerState === "break" ? totalBreakTime - currentMinute : totalTime - currentMinute
    
    useEffect(() => {
        (timerState === "active" || timerState === "break") ?
            timeLeftRef.current?.classList.add("scaleAnimation") : timeLeftRef.current?.classList.remove("scaleAnimation");
    }, [timerState]);

    switch (timerState) {
        case "paused":
            return (
                <div>
                    <h3>{timeLeft} MINUTES LEFT</h3>
                </div>
            );
        case "completed":
            return (
                <div>
                    <h3>TAKE A SHORT BREAK</h3>
                </div>
            );
        case "completed break":
            return (
                <div>
                    <h3>START NEXT {timeLeft}-MINUTE TIMER</h3>
                </div>
            );
        default:
            return (
                <div id="TimerDisplay_timeContainer">
                    <h1 id="TimerDisplay_timeLeftHeader" ref={timeLeftRef}>{timeLeft}</h1>
                    <h3 id="TimerDisplay_minutesLiteralHeader">MINUTES {timerState !== "inactive" ? "LEFT" : ""}</h3>
                </div>
            );
    }

}

export default TimerDisplayContent