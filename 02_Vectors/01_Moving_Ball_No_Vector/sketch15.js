var x = 320, y = 180, xspeed = 2;

function setup(){
    createCanvas(650, 350);
}

function draw(){
    background(0);

    x = x + xspeed;

    if((x > width) || (x < 0)){
        xspeed = xspeed * -1;
    }

    stroke(0);
    fill(255);
    ellipse(x, 170, 50, 50);
}
