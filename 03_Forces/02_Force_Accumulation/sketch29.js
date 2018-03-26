var mover;

function setup(){
    createCanvas(650, 350);
    mover = new Mover();
}

function draw(){
    var wind = createVector(0.1, 0);
    var gravity = createVector(0, 0.01);

    background(0);

    mover.applyForce(wind);
    mover.applyForce(gravity);

    mover.update();
    mover.display();
    mover.checkEdge();
}
