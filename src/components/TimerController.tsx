import React from 'react'

interface Props {
  timerState: "inactive" | "active" | "paused" | "completed" | "break" | "completed break";
  setTimerState: React.Dispatch<React.SetStateAction<"inactive" | "active" | "paused" | "completed" | "break" | "completed break">>;
}

function TimerController({timerState, setTimerState}: Props) {
  const onStart = () => {
    setTimerState("active");
  }

  const onPause = () => {
    setTimerState("paused");
  }

  const onEnd = () => {
    setTimerState("inactive");
  }

  const onBreak = () => {
    setTimerState("break");
  }

  const onFinishBreak = () => {
    setTimerState("completed break");
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