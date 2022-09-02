import { useState } from "react";
import EditTimerDialog from "./components/EditTimerDialog";
import Navigation from "./components/Navigation";
import TimerController from "./components/TimerController";
import TimerDisplay from "./components/TimerDisplay/TimerDisplay";
import WelcomePopUp from "./components/WelcomePopUp";
import './index.css';
import useTimer from "./useTimer";

function App() {
  const [timerState, setTimerState] = useState<"inactive" | "active" | "paused" | "completed" | "break" | "completed break">("inactive");
  const [totalTime, setTotalTime] = useState<number>(25);
  const [totalBreakTime, setTotalBreakTime] = useState<number>(5);

  const { currentMinute } = useTimer(timerState, setTimerState, totalTime, totalBreakTime)

  return (
    <div>
      <Navigation />
      <div id="App_timerContainer">
        <div>
          <TimerDisplay timerState={timerState} timeLeft={timerState === "break" ? totalBreakTime - currentMinute : totalTime - currentMinute} />
          <TimerController timerState={timerState} setTimerState={setTimerState} />
        </div>
      </div>
      <EditTimerDialog />
      <WelcomePopUp />
    </div>
  );
}

export default App;
