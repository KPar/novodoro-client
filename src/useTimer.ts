import { useEffect, useRef, useState } from "react";
import calculateMinuteRateArray from "./calculateMinuteRateArray";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentMinute, selectTimerState, selectTotalBreakTime, selectTotalTime } from "./store";
import { setTimerState } from './features/timerStateSlice';
import { incrementCurrentMinute, setCurrentMinute } from "./features/currentMinuteSlice";

const useTimer = (
    // totalTime: number,
    // totalBreakTime: number
) => {    
    const dispatch = useDispatch();

    const timerState = useSelector(selectTimerState)
    const totalTime = useSelector(selectTotalTime)
    const totalBreakTime = useSelector(selectTotalBreakTime)
    const currentMinute = useSelector(selectCurrentMinute)


    //const [currentMinute, setCurrentMinute] = useState<number>(0);
    const minuteRateIndex = useRef(0);
    const minuteRateArray = useRef<number[]>([]);
    const rateSwitcherInterval = useRef(Math.ceil(totalTime / 3));
    const runningTimeoutRef = useRef<NodeJS.Timeout>();

    const startTimer = () => {
        dispatch(incrementCurrentMinute(1));
        runningTimeoutRef.current = setTimeout(startTimer, 1000 * minuteRateArray.current[minuteRateIndex.current]);
    }

    const startBreakTimer = () => {
        dispatch(incrementCurrentMinute(1));
        runningTimeoutRef.current = setTimeout(startBreakTimer, 1000 * 60);
    }

    useEffect(() => {

        if (timerState === "active") {
            runningTimeoutRef.current = setTimeout(startTimer, 1000 * minuteRateArray.current[minuteRateIndex.current]);
        } else if (timerState === "inactive" || timerState === "completed") {
            //if inactive or completed, reset currentMinute
            dispatch(setCurrentMinute(0));
            clearTimeout(runningTimeoutRef.current);
            minuteRateIndex.current = 0;
            minuteRateArray.current = [];
            minuteRateArray.current = [1, 1, 1]//calculateMinuteRateArray(totalTime);

            //TODO: if there's a server error, then just pass in a [60,60,60]
        } else if (timerState === "paused") {
            clearTimeout(runningTimeoutRef.current);
        } else if (timerState === "break") {
            //once break is active, reset currentMinute
            dispatch(setCurrentMinute(0));
            runningTimeoutRef.current = setTimeout(startBreakTimer, 1000 * 60);
        } else if (timerState === "completed break") {
            //once completed break, reset currentMinute
            dispatch(setCurrentMinute(0));
            clearTimeout(runningTimeoutRef.current);
        }

    }, [timerState]);

    useEffect(() => {
        console.log("current min: " + currentMinute);
        console.log("switch point is at: " + (rateSwitcherInterval.current * (minuteRateIndex.current + 1)));
        console.log("index=" + minuteRateIndex.current + " Rate is: " + minuteRateArray.current[minuteRateIndex.current] + " seconds")

        if (currentMinute >= (rateSwitcherInterval.current * (minuteRateIndex.current + 1))) {
            minuteRateIndex.current++;
        }

        if (timerState === "active" && currentMinute >= totalTime) {
            dispatch(setTimerState("completed"));
            clearTimeout(runningTimeoutRef.current)
            return;
        }

        if (timerState === "break" && currentMinute >= totalBreakTime) {
            dispatch(setTimerState("completed break"));
            clearTimeout(runningTimeoutRef.current);
        }
    }, [currentMinute])


}

export default useTimer;

