// Declaring the global variables
var randomCounts = [];
var total = 20;

// Setting up the canvas and populate the array
function setup(){
    createCanvas(650, 350);

    for (var i = 0; i < total; i++){
        randomCounts[i] = 0;
     }
}

// Draw the objects
function draw(){
    background(0);
    var index = floor(random(total));
    randomCounts[index]++;

    stroke(0);
    strokeWeight(0.5);
    fill(255);

    var w = width / randomCounts.length;

    for (var x = 0; x < randomCounts.length; x++){
        rect(x * w, height - randomCounts[x], w - 1, randomCounts[x]);
    }
}
