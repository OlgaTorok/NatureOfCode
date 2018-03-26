var windchimes = [];
var movers = [];

function setup() {
    createCanvas(640, 640);
    
    // WindChimes (_xpos, _ypos, _windMag, _start, _end)
    windchimes[0] = new WindChime(100, 100, 0.5, 0, 90);
    windchimes[1] = new WindChime(500, 500, 0.6, 180, 280);
    
    
    for(var x = 0; x < 100; x++){
        // Mover (x, y, vx, vy, ax, ay, m)
        movers[x] = new Mover(random(0, 650), random(0, 640), 0, 0, 0, 0, 4);
    }
  
}


function draw() {
    background(55, 0, 0);
    
    for (var i = 0; i < movers.length; i++){
    
        for (var j = 0; j < windchimes.length; j++){
            movers[i].applyForce(windchimes[j].windVec);
        }
    
        movers[i].update();
        movers[i].display();
        movers[i].checkEdges();
    }
    
    
    
    for(var y = 0; y < windchimes.length; y++){
        windchimes[y].update();
        windchimes[y].display();
    }
}

