import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectTimerState } from '../../store';
import TimerDisplayContent from './TimerDisplayContent';


function TimerDisplay() {
  const timerState = useSelector(selectTimerState)
  
  return (
    <div id="TimerDisplay_container">
      <h1 id={(timerState === "inactive" || timerState === "break" || timerState === "active") ?
        "TimerDisplay_normalTimerStateHeader" : "TimerDisplay_bigTimerStateHeader"}>
        {timerState.toUpperCase()}
      </h1>
      <TimerDisplayContent/>
    </div>
  )
}

export default TimerDisplay