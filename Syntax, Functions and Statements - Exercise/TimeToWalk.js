function calculeteTime(steps, foot, speed) {
    let distance = steps * foot;
    let speedMeter = speed / 3.6;
    let time = distance / speedMeter;
    let rest = Math.floor(distance / 500);

    let timeMin = Math.floor(time / 60);
    let timeSec = Math.round(time - (timeMin * 60));
    let timeHour = Math.floor(time / 3600);

    console.log((timeHour < 10 ? "0" : "") + timeHour + 
    ':' + 
    (timeMin + rest < 10 ? '0' : '') +
     (timeMin + rest) + 
     ':' + 
     (timeMin < 10 ? '0' : '') + timeMin);
}

calculeteTime(4000, 0.60, 5);