import React, { useEffect, useRef, useState } from 'react'
import TimerDisplayContent from './TimerDisplayContent';

interface Props {
  timerState: string;
  timeLeft: number;
}

function TimerDisplay({ timerState, timeLeft }: Props) {
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
      <TimerDisplayContent timeLeft={timeLeft} timerState={timerState} />
    </div>
  )
}

export default TimerDisplay