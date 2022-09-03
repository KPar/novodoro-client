import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectTimerState } from '../../store';
import TimerDisplayContent from './TimerDisplayContent';

interface Props {
  timeLeft: number;
}

function TimerDisplay({timeLeft }: Props) {
  const timerState = useSelector(selectTimerState)
  const timeLeftRef = useRef<HTMLHeadingElement>(null);


  useEffect(() => {
    (timerState === "active" || timerState === "break") ?
      timeLeftRef.current?.classList.add("scaleAnimation") : timeLeftRef.current?.classList.remove("scaleAnimation");
  }, [timerState])

  return (
    <div id="TimerDisplay_container">
      <h1 id={(timerState === "inactive" || timerState === "break" || timerState === "active") ?
        "TimerDisplay_normalTimerStateHeader" : "TimerDisplay_bigTimerStateHeader"}>
        {timerState.toUpperCase()}
      </h1>
      <TimerDisplayContent timeLeft={timeLeft}/>
    </div>
  )
}

export default TimerDisplay