var movers = [];
var liquid;

function setup(){
    createCanvas(650, 350);
    for (var i = 0; i < 10; i++){
        // Create the mover with the parameters given
        movers[i] = new Mover(Math.floor(random(20, 60)));
    }
    
    liquid = new Liquid();
}


function draw(){
    // Adding the background
    background(0);
    
    for (var i = 0; i < movers.length; i++){
        var m = movers[i].mass;
        
         var wind = createVector(0, 0);
        // All the objects fall at the same time
         var gravity = createVector(0, 0.1 * m);

        // Adding the friction to the object
        // c is coeficient
        var c = 0.5;
        var normal = 1;
        //
        var frictionMag = c * normal;
        // Get velocity vector and multiply by 1
        var friction = p5.Vector.mult(movers[i].velocity, -1);
        // Normalise the friction
        friction.normalize();
        friction.mult(frictionMag);

        movers[i].applyForce(wind);
        movers[i].applyForce(gravity);

        movers[i].checkEdges();
        movers[i].update();
        movers[i].display();
        

        
        liquid.display();
    }
}
