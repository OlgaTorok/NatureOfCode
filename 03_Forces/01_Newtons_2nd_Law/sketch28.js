var mover;

function setup(){
    createCanvas(650, 350);
    mover = new Mover();

}

function draw(){
    background(0);

    var wind = createVector(0.1, 0.01);

    mover.applyForce(wind);

    mover.update();
    mover.display();
    mover.checkEdge();

}
