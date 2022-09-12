import { useState } from "react"

function PopUp() {
  const [isPopUpVisible, setIsPopUpVisible] = useState(true);
  const [isDropdownToggled, setIsDropdownToggled] = useState(false);

  return (
    <div id="PopUp_container">
      <div>
        <h1>BEFORE YOU START</h1>
        <p></p>
      </div>
    </div>
  )
}

export default PopUp