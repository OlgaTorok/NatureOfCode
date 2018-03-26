var position, velocity;

function setup(){
    createCanvas(650, 350);
    position = createVector(100, 100);
    velocity = createVector(2, 2);
}

function draw(){
    background(0);

    position.add(velocity);

    if((position.x > width) || (position.x < 0)){
        velocity.x = velocity.x * -1;
    }
    if((position.y > height) || (position.y < 0)){
        velocity.y = velocity.y * -1;
    }

    stroke(0);
    strokeWeight(2);
    fill(255);
    ellipse(position.x, position.y, 50, 50);
}
