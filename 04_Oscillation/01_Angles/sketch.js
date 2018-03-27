var angle = 0;
var angleVel = 0.05;
// var angleAcc = 0.001;

function setup(){
    createCanvas(650, 350);
}

function draw(){
    background(0);

    fill(255);
    stroke(255);
    rectMode(CENTER);
    translate(width/2, height/2);
    rotate(angle);
    line(-60, 0, 60, 0);
    ellipse(60, 0, 10, 10);
    ellipse(-60, 0, 10, 10);

    // angleVel += angleAcc;
    angle += angleVel;
}
