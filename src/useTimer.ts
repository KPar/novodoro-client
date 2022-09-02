import { useEffect, useRef, useState } from "react";
import calculateMinuteRateArray from "./calculateMinuteRateArray";

const useTimer = (
    timerState: "inactive" | "active" | "paused" | "completed" | "break" | "completed break",
    setTimerState: React.Dispatch<React.SetStateAction<"inactive" | "active" | "paused" | "completed" | "break" | "completed break">>,
    totalTime: number,
    totalBreakTime: number
) => {
    const [currentMinute, setCurrentMinute] = useState<number>(0);
    const minuteRateIndex = useRef(0);
    const minuteRateArray = useRef<number[]>([]);
    const rateSwitcherInterval = useRef(Math.ceil(totalTime / 3));
    const runningTimeoutRef = useRef<NodeJS.Timeout>();

    const startTimer = () => {
        setCurrentMinute(prev => prev + 1);   
        runningTimeoutRef.current = setTimeout(startTimer, 1000 * minuteRateArray.current[minuteRateIndex.current]);
    }

    const startBreakTimer = () => {
        setCurrentMinute(prev => prev + 1);   
        runningTimeoutRef.current = setTimeout(startBreakTimer, 1000 * 60);
    }

    useEffect(() => {
        
        if (timerState === "active") {            

            //if coming from "completed" state, reset currentMinute, and thus timeLeft for TimerDisplay
            // if(currentMinute >= totalTime){
            //     setCurrentMinute(0);
            // }

            runningTimeoutRef.current = setTimeout(startTimer, 1000 * minuteRateArray.current[minuteRateIndex.current]);
        } else if (timerState === "inactive" || timerState === "completed") {

            //if inactive reset currentMinute
            // if(timerState==="inactive"){
            //     setCurrentMinute(0);
            // }
            setCurrentMinute(0);
            clearTimeout(runningTimeoutRef.current);
            minuteRateIndex.current = 0;            
            minuteRateArray.current = [];
            minuteRateArray.current = [1,1,1]//calculateMinuteRateArray(totalTime);

            //TODO: if there's a server error, then just pass in a [60,60,60]
        } else if (timerState === "paused"){
            clearTimeout(runningTimeoutRef.current);
        } else if (timerState === "break"){
            //once break is active, reset currentMinute
            setCurrentMinute(0);
            runningTimeoutRef.current = setTimeout(startBreakTimer, 1000 * 60);
        } else if (timerState === "completed break"){
            setCurrentMinute(0);
            clearTimeout(runningTimeoutRef.current);
        }

    }, [timerState]);

    useEffect(()=>{
       console.log("current min: "+currentMinute);
       console.log("switch point is at: " + (rateSwitcherInterval.current * (minuteRateIndex.current + 1)));
       console.log("index=" + minuteRateIndex.current + " Rate is: " + minuteRateArray.current[minuteRateIndex.current] + " seconds")

       if (currentMinute >= (rateSwitcherInterval.current * (minuteRateIndex.current + 1))) {
            minuteRateIndex.current++;
        } 

        if (timerState==="active" && currentMinute >= totalTime) {
            setTimerState("completed");
            clearTimeout(runningTimeoutRef.current)
            return;
        }

        if(timerState==="break" && currentMinute>= totalBreakTime){
            setTimerState("completed break");
            clearTimeout(runningTimeoutRef.current);
        }
    },[currentMinute])

    return { currentMinute };

}

export default useTimer;

