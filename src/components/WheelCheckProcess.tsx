import React from 'react';
import mouseUp from '../files/mouseUp.png';
import mouseDown from '../files/mouseDown.png';

class WheelCheckProcess extends React.Component {

    componentDidMount() {
        // Preload для картинок
        let images = [mouseUp, mouseDown]
        images.forEach(() => {
            new Image().src = mouseUp;
            new Image().src = mouseDown
        });

        let mouse = document.getElementById('Mouse') as HTMLElement;
        let mouseArea = document.querySelector('.WheelCheckArea') as HTMLElement;
        let mouseUpCooldown: any;
        let mouseDownCooldown: any;

        mouseArea.addEventListener('wheel', function (a) {
            if (a.deltaY < 0) {
                mouse.classList.remove('Down')
                mouse.classList.add('Up');
                window.clearTimeout(mouseUpCooldown);
                mouseUpCooldown = window.setTimeout(function () {
                    mouse.classList.remove('Up')
                }, 550);
            } else if (a.deltaY > 0) {
                mouse.classList.remove('Up')
                mouse.classList.add('Down');
                window.clearTimeout(mouseDownCooldown);
                mouseDownCooldown = window.setTimeout(function () {
                    mouse.classList.remove('Down')
                }, 550);
            }
        });
    }

    render() {
        return <div/>;
    }
}

export default WheelCheckProcess;
