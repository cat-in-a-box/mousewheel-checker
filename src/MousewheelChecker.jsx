import React from "react";
import BackButton from "../BackButton.jsx";
import WheelCheckArea from "./components/WheelCheckArea.jsx";
import WheelCheckProcess from "./components/WheelCheckProcess.jsx";
import WheelCheckDescription from './components/WheelCheckDescription.jsx';

const MousewheelChecker = () => {

    return (
        <div>
            <BackButton/>
            <WheelCheckDescription/>
            <WheelCheckArea/>
            <WheelCheckProcess/>
        </div>
    );

}

export default MousewheelChecker;
