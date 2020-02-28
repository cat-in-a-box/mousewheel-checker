import React from 'react';

export default class WheelCheckRotation extends React.Component {

    componentDidMount() {

        let mouseArea = document.querySelector ('.WheelCheckArea');
        let mouseUpCooldown;
        let mouseDownCooldown;

        mouseArea.addEventListener ('wheel', function (a) {
            if (a.deltaY > 0) {
                document.getElementById('Wheel').classList.add('Down');
                window.clearTimeout(mouseDownCooldown);
                mouseDownCooldown = window.setTimeout(function () {
                    document.getElementById('Wheel').classList.remove('Down')
                }, 400);
            }

            else if (a.deltaY < 0) {
                document.getElementById('Wheel').classList.add('Up');
                window.clearTimeout(mouseUpCooldown);
                mouseUpCooldown = window.setTimeout(function () {
                    document.getElementById('Wheel').classList.remove('Up')
                }, 400);
            }

        });
    }

    render() {
        return <div/>;
    }
}