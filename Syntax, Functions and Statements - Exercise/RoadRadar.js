function radar(speed, area) {
    let result;
    switch (area) {
        case 'city':
            result = calculeteSpeed(speed, 50);
            break;
        case 'residential':
            result = calculeteSpeed(speed, 20);
            break;
        case 'interstate':
            result = calculeteSpeed(speed, 90);
            break;
        case 'motorway':
            result = calculeteSpeed(speed, 130);
            break;
    }

    function calculeteSpeed(speed, speedLimit) {
        if (speed <= speedLimit) {
            return `Driving ${speed} km/h in a ${speedLimit} zone`;
        }

        let status;
        let difference = Math.abs(speed - speedLimit);
        if (difference <= 20) {
            status = 'speeding'
        } else if (difference <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving'
        }

        return `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
    }

    console.log(result);
}

radar(200, 'motorway');