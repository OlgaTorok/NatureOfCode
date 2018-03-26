
function setup(){
    createCanvas(650, 350);
}

function draw(){
    background(0);

    var mouse = createVector(mouseX, mouseY);
    var centre = createVector(width / 2, height / 2);
    var vectorLine = mouse.sub(centre);
    vectorLine.mult(0.5);

    translate(width /2, height / 2);
    strokeWeight(2);
    stroke(255);
    line(0, 0, vectorLine.x, vectorLine.y);

}
