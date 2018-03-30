var r = 0;
var angle = 0;

var aVelocity = 0;
var aAcceleration = 0.01;

function setup(){
    createCanvas(550, 350);
    background(0);
}

function draw(){
    var x = r * cos(angle);
    var y = r * sin(angle);

    fill(255);
    stroke(255);
    ellipse(x+width/2, y+height/2, 10, 10);

    angle += 0.01;
    r += 0.05;
}
