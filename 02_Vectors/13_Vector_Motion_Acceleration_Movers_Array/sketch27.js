var movers = [];

function setup(){
    createCanvas(650, 350);

    for(var i = 0; i < 20; i++) {
        movers[i] = new Mover();
    }
}

function draw(){
    background(0);

    for(var i = 0; i < movers.length; i++){
        movers[i].update();
        movers[i].display();
        movers[i].checkEdge();
    }
}
