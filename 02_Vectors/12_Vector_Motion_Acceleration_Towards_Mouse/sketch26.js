var mover;

function setup(){
    createCanvas(650, 350);
    mover = new Mover();
}

function draw(){
    background(0);

    mover.update();
    mover.display();
    mover.checkEdge();
}
