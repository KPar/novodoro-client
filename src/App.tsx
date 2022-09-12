
import EditTimerDialog from "./components/EditTimerDialog";
import Navigation from "./components/Navigation";
import TimerController from "./components/TimerController";
import TimerDisplay from "./components/TimerDisplay/TimerDisplay";
import PopUp from "./components/PopUp";
import './index.css';
import useTimer from "./useTimer";

function App() {

  useTimer();

  return (
    <div>
      {/* <Navigation /> */}
      <div id="App_timerContainer">
        <div>
          <TimerDisplay/>
          <TimerController />
        </div>
      </div>
      {/* <EditTimerDialog /> */}
      <PopUp />
    </div>
  );
}

export default App;
