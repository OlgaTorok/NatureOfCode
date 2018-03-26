var mover;

function setup(){
    createCanvas(650, 350);
    mover = new Mover(10);

}

function draw(){
    background(0);

    var wind = createVector(0.1, 0);
    var gravity = createVector(0, 0.05);

    mover.applyForce(wind);
    mover.applyForce(gravity);

    mover.update();
    mover.display();
    mover.checkEdge();

}
