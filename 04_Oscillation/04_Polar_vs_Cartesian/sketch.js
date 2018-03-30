var r = 150;
var angle = 0;

var aVelocity = 0;
var aAcceleration = 0.01;

function setup(){
    createCanvas(550, 350);
}

function draw(){
    background(0);

    translate(width/2, height/2);
    var x = r * cos(angle);
    var y = r * sin(angle);

    fill(255);
    stroke(255);
    line(0, 0, x, y);
    ellipse(x, y, 50, 50);

    angle += aVelocity;
    aVelocity += aAcceleration;
    aVelocity = constrain(aVelocity, 0, 0.1);
}
