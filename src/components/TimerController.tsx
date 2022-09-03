import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setTimerState } from '../features/timerStateSlice';
import { selectTimerState } from '../store';

function TimerController() {
  const timerState = useSelector(selectTimerState)
  const dispatch = useDispatch();

  const onStart = () => {
    dispatch(setTimerState("active"));
  }

  const onPause = () => {
    dispatch(setTimerState("paused"));
  }

  const onEnd = () => {
    dispatch(setTimerState("inactive"));
  }

  const onBreak = () => {
    dispatch(setTimerState("break"));
  }

  const onFinishBreak = () => {
    dispatch(setTimerState("completed break"));
  }

  return (
    <div id="TimerController_container">
      <div style={{display: timerState==="inactive" ? "block" : "none"}}>
        <button className="TimerController_button" onClick={onStart}>START</button>
      </div>
      <div style={{display: timerState==="active" ? "block" : "none"}}>
        <button className="TimerController_button" onClick={onEnd}>EXIT</button>
        <button className="TimerController_button" onClick={onPause}>PAUSE</button>
      </div>
      <div style={{display: timerState==="paused" ? "block" : "none"}}>
        <button className="TimerController_button" onClick={onEnd}>EXIT</button>
        <button className="TimerController_button" onClick={onStart}>CONTINUE</button>
      </div>
      <div style={{display: timerState==="completed" ? "block" : "none"}}>
        <button className="TimerController_button" onClick={onBreak}>START BREAK</button>
        <button className="TimerController_button" onClick={onStart}>SKIP</button>
        <button className="TimerController_button" onClick={onEnd}>EXIT</button>
      </div>
      <div style={{display: timerState==="break" ? "block" : "none"}}>
        <button className="TimerController_button" onClick={onFinishBreak}>FINISH BREAK</button>
        <button className="TimerController_button" onClick={onEnd}>EXIT</button>
      </div>
      <div style={{display: timerState==="completed break" ? "block" : "none"}}>
        <button className="TimerController_button" onClick={onStart}>START</button>
        <button className="TimerController_button" onClick={onEnd}>EXIT</button>
      </div>
    </div>
  )
}

export default TimerController