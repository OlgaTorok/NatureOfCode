var angle = 0;
var aVelocity = 0.05;
var aAcceleration = 0.001;

function setup(){
    createCanvas(650, 350);
}

function draw(){
    background(0);

    fill(255);
    stroke(255);
    push();
        translate(width/2, height/2);
        rotate(angle);
        line(-60, 0, 60, 0);
        ellipse(60, 0, 10, 10);
        ellipse(-60, 0, 10, 10);
    pop();

    aVelocity += aAcceleration;
    aVelocity = constrain(aVelocity, 0, 0.05);
    angle += aVelocity;
}
