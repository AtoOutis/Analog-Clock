function drawStrip(stripClass, num, jsClass) {
    let htmlCode = '';
    for (let i = 0; i < num; i++) {
        htmlCode += `<div class="${stripClass}"></div>`
    }
    document.querySelector(`${jsClass}`).innerHTML = htmlCode;
}

function stripRotator(stripClass, num, stripDegree) {
    for (let i = 1; i < num; i++) {
        document.querySelector(`.${stripClass}:nth-child(${i})`).style.transform = `rotate(${90 + stripDegree * i}deg)`;
    }
}

function analogClock() {
    const hourHand = document.querySelector('.hour');
    const minuteHand = document.querySelector('.minute');
    const secondHand = document.querySelector('.second');

    let currentTime = new Date();
    let hours = currentTime.getHours() % 12;
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let milliseconds = currentTime.getMilliseconds();

    let hourDegree = hours * 30 + minutes * 0.5 - 90;
    let minuteDegree = minutes * 6 + seconds * 0.1 - 90;
    let secondDegree = seconds * 6 + milliseconds * 0.006 - 90;

    hourHand.style.transform = `rotateZ(${hourDegree}deg)`;
    minuteHand.style.transform = `rotateZ(${minuteDegree}deg)`;
    secondHand.style.transform = `rotateZ(${secondDegree}deg)`;


}

function numbers(numClass, num, jsClass) {
    let htmlCode = '';
    for (let i = 0; i < num; i++) {
        htmlCode += `<div class = "${numClass}" >${i + 1}</div>`
    }
    document.querySelector(`${jsClass}`).innerHTML = htmlCode;
}

function numRotator(numClass, num) {
    for (let i = 1; i < num; i++) {
        document.querySelector(`.${numClass}:nth-child(${i})`).style.transform = `rotate(${i * 30 + 270}deg) translate(90px) rotate(-${i * 30 + 270}deg)`;
    }
}

analogClock();
setInterval(analogClock, 50);


drawStrip('strip', 60, '.js-outer-circle');
drawStrip('strip-two', 6, '.js-inner-circle');

stripRotator('strip', 60, 3);
stripRotator('strip-two', 6, 30);

numbers('number', 12, '.js-inner-layer');
numRotator('number', 12)
