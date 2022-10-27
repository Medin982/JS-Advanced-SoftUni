function calculeteTime(steps, foot, speed) {
    let distance = steps * foot;
    let speedMeter = speed / 3.6;
    let time = distance / speedMeter;
    let rest = Math.floor(distance / 500);

    let timeMin = Math.floor(time / 60);
    let timeSec = (time - (timeMin * 60)).toFixed(0);
    let timeHour = Math.floor(time / 3600);
    timeMin += rest;
    timeHour += Math.floor(timeMin / 60);
    timeMin = timeMin % 60;

    let formattedH = timeHour < 10 ? `0${timeHour}` : `${timeHour}`;
    let formattedM = timeMin < 10 ? `0${timeMin}` : `${timeMin}`;
    let formattedS = timeSec < 10 ? `0${timeSec}` : `${timeSec}`;
    
    console.log(`${formattedH}:${formattedM}:${formattedS}`)
}

calculeteTime(2564, 0.70, 5.5);