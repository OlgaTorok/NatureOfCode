var movers= [];

function setup(){
    createCanvas(650, 350);
    for (var i = 0; i < 10; i++){
        // Create the mover with the parameters given
        movers[i] = new Mover(Math.floor(random(20, 60)));
    }
}
function draw(){
    background(0);
    
    for (var i = 0; i < movers.length; i++){
        // Declaring variables 
        var c = 0.5;
        var normal = 1;
        var frictionMag = c * normal;
        // Get velocity vector and multiply by 1
        var friction = p5.Vector.mult(movers[i].velocity, -1);
        // Normalise the friction
        friction.normalize();
        friction.mult(frictionMag);

        movers[i].applyForce(friction);
        movers[i].checkEdges();
        movers[i].update();
        movers[i].display();
    }
}
