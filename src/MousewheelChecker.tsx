import React from "react";
import BackButton from "../BackButton";
import WheelCheckArea from "./components/WheelCheckArea";
import WheelCheckProcess from "./components/WheelCheckProcess";
import WheelCheckDescription from './components/WheelCheckDescription';

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
