function detectSpeed(speed) {
    //determine if the speed is less than 70
    if (speed < 70) {
        console.log("Ok");
    }
    else {
    //calculate the points of exceeded speed
        let points = (speed - 70) /5;
    //check if the points are more than 12
    if (points > 12){
        console.log("License suspended");
    } else {
        console.log(`Points${points}`);
    }
    }
}
//call the detectSpeed function
detectSpeed();