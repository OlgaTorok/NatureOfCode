// Declaring variables
var wind;
var angle;
var time = 1000;

function setup(){
    createCanvas(650, 350);
}

function draw(){
    background(0);
    
    // Create a ststic vector using fromAngle function
    wind = p5.Vector.fromAngle(radians(angle));
    wind.mult(100);

    stroke(255);
    strokeWeight(1);
    line(0, 0, wind.x, wind.y);
    angle = map(noise(time), 0, 1, 0, 90);

    // smooth changes in time
    time = time + 0.005;

}
