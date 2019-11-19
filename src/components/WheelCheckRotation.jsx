import React from 'react';

export default class WheelCheckRotation extends React.Component {

    componentDidMount() {

        let mouseArea = document.querySelector ('.WheelCheckArea');
        let mouseUpCooldown;
        let mouseDownCooldown;

        mouseArea.addEventListener ('wheel', function (a) {
            if (a.deltaY > 0) {
                document.getElementById('WheelDown').classList.add('active');
                window.clearTimeout(mouseDownCooldown);
                mouseDownCooldown = window.setTimeout(function () {
                    document.getElementById('WheelDown').classList.remove('active')
                }, 175);
            } else if (a.deltaY < 0) {
                document.getElementById('WheelUp').classList.add('active');
                window.clearTimeout(mouseUpCooldown);
                mouseUpCooldown = window.setTimeout(function () {
                    document.getElementById('WheelUp').classList.remove('active')
                }, 175);
            }

        });
    }

    render() {
        return <div/>;
    }
}