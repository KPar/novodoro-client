import { useState } from "react"

function PopUp() {
  const [isPopUpVisible, setIsPopUpVisible] = useState(true);
  const [isDropdownToggled, setIsDropdownToggled] = useState(false);

  return (
    <div id="PopUp_wrapper">
      <div id="PopUp_container">
        <h1>BEFORE YOU START</h1>
        <p>This app helps you complete tasks and discourages procrastination.</p>
        <div>

        </div>
        <p>
          Before you start, please hide all references to time in your vicinity,
          physical and digital, so that you are unaware of the actual time.
        </p>
        <ul>
          <li>Move phones far away and turn on "do not disturb"</li>
          <li>On Windows</li>
          <li>On Mac</li>
        </ul>
        <button>CLOSE</button>
      </div>
    </div>
  )
}

export default PopUp