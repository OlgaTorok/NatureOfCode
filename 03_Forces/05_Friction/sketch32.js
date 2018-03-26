var mover;

function setup(){
    createCanvas(650, 350);
    mover = new Mover(Math.floor(random(5, 20)));
}

function draw(){
    background(0);

    var m = mover.mass;

    var wind = createVector(0.5, 0);
    var gravity = createVector(0, 0.1 * m);

    var c = 0.5;
    var normal = 1;
    var frictionMag = c * normal;
    var friction = p5.Vector.mult(mover.velocity, -1);
    friction.normalize();
    friction.mult(frictionMag);

    mover.applyForce(friction);
    mover.applyForce(wind);
    mover.applyForce(gravity);

    mover.update();
    mover.display();
    mover.checkEdge();
}
