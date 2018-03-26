var x = 100,
    y = 100,
    xspeed = 2.5,
    yspeed = 5;

function setup(){
    createCanvas(650, 350);
}

function draw(){
    background(0);

    x = x + xspeed;
    y = y + yspeed;

    if((x > width) || (x < 0)){
        xspeed = xspeed * -1;
    }
    if((y > height) || (y < 0)){
        yspeed = yspeed * -1;
    }

    stroke(0);
    fill(255);
    ellipse(x, y, 50, 50);
}
