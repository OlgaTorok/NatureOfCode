var movers = [];

function setup(){
    createCanvas(650, 350);
    for(var i = 0; i < 20; i++){
        movers[i] = new Mover(Math.floor(random(5, 20)));
    }
}

function draw(){
    background(0);

    for(var i = 0; i < movers.length; i++){
        var m = movers[i].mass;

        var wind = createVector(0.1, 0);
        var gravity = createVector(0, 0.05);

        movers[i].applyForce(wind);
        movers[i].applyForce(gravity);

        movers[i].update();
        movers[i].display();
        movers[i].checkEdge();
    }

}
