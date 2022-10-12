function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock(){
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio =(secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio =(minutesRatio + currentDate.getHours()) / 12
    
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)


    document.getElementById("day").innerHTML = currentDate.getDate();
    document.getElementById("month").innerHTML = currentDate.getMonth()+1;
    document.getElementById("year").innerHTML = currentDate.getFullYear();
}
setInterval(setClock, 1000)

setClock()