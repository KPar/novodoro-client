import { useState } from "react"

function PopUp() {
  const [isPopUpVisible, setIsPopUpVisible] = useState(true);
  const [isAboutToggled, setIsAboutToggled] = useState(false);

  const onToggleClicked = () => {
    setIsAboutToggled(!isAboutToggled);
  }

  return (
    <div id="PopUp_wrapper">
      <div id="PopUp_container">
        <h1 style={{textAlign:"center"}}>WELCOME</h1>
        <p>This app helps you complete tasks and discourages procrastination</p>
        
        <p>
          Before you start, please hide all references to time in your vicinity,
          physical and digital, so that you are unaware of the actual time
        </p>
        <ul>
          <li>Move phones far away and turn on "do not disturb"</li>
          <li>Hide clock on Windows</li>
          <li>Hide clock on Mac</li>
        </ul>
        <div id="PopUp_toggleAbout" >
          <button id="PopUp_toggleAboutButton" style={{display: isAboutToggled? "none":"block"}} onClick={onToggleClicked}>
            LEARN MORE ABOUT NOVODORO
          </button>
          <p id="PopUp_toggleAboutContent" style={{display: isAboutToggled? "block":"none"}}>
            Novodoro follows a Pomodoro structure but consistently changes the 
            rate of time as the clock ticks. You will never know if the timer 
            will end early, on time, or late. Such unpredictability keeps you 
            on edge to finish your task and deters procrastination
          </p>
        </div>
        <button id="PopUp_closeButton">CLOSE</button>
      </div>
    </div>
  )
}

export default PopUp