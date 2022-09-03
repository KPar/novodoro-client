import { useState } from "react";
import { useSelector } from "react-redux";
import EditTimerDialog from "./components/EditTimerDialog";
import Navigation from "./components/Navigation";
import TimerController from "./components/TimerController";
import TimerDisplay from "./components/TimerDisplay/TimerDisplay";
import WelcomePopUp from "./components/WelcomePopUp";
import './index.css';
import { selectTimerState } from "./store";
import useTimer from "./useTimer";

function App() {
  const timerState = useSelector(selectTimerState)
  const [totalTime, setTotalTime] = useState<number>(25);
  const [totalBreakTime, setTotalBreakTime] = useState<number>(5);

  const { currentMinute } = useTimer(totalTime, totalBreakTime)

  return (
    <div>
      <Navigation />
      <div id="App_timerContainer">
        <div>
          <TimerDisplay timeLeft={timerState === "break" ? totalBreakTime - currentMinute : totalTime - currentMinute} />
          <TimerController />
        </div>
      </div>
      <EditTimerDialog />
      <WelcomePopUp />
    </div>
  );
}

export default App;
