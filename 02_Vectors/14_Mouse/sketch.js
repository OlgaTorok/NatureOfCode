var movers = [];

function setup() {
    createCanvas(650, 350);

    for(var i = 0; i < 40; i++){
		movers[i] = new Mover();
	}
}


function draw() {
	background(0, 50);

 	for(var j = 0; j < movers.length; j++){
        movers[j].render();
        movers[j].update();
 		movers[j].checkEdge();
	}
}
