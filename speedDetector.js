function detectSpeed(speed) {
    if (speed < 70) {
        console.log("Ok");
    }
    else {
        let points = (speed - 70) /5;
    if (points > 12){
        console.log("License suspended");
    } else {
        console.log(`Points${points}`);
    }
    }
}
detectSpeed();