import React from 'react';

export default class WheelCheckRotation extends React.Component {

    componentDidMount() {

        let mouseSection = document.querySelector('.WheelCheckArea');
        let upId, downId;

        mouseSection.addEventListener('wheel', function (a) {
            if (a.deltaY > 0) {
                document.getElementById('WheelDown').classList.add('active');
                window.clearTimeout(downId);
                downId = window.setTimeout(function () {
                    document.getElementById('WheelDown').classList.remove('active')
                }, 400);
            } else if (a.deltaY < 0) {
                document.getElementById('WheelUp').classList.add('active');
                window.clearTimeout(upId);
                upId = window.setTimeout(function () {
                    document.getElementById('WheelUp').classList.remove('active')
                }, 400);
            }

        });
    }

    render() {
        return <div/>;
    }
}