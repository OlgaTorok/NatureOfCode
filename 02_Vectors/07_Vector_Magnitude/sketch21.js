
function setup(){
    createCanvas(650, 350);
}

function draw(){
    background(0);

    var mouse = createVector(mouseX, mouseY);
    var centre = createVector(width / 2, height / 2);
    var vectorLine = mouse.sub(centre);

    var m = vectorLine.mag();
    fill(255);
    stroke(255, 0, 0);
    rect(0, 0, m, 10);

    translate(width /2, height / 2);
    strokeWeight(2);
    stroke(255);
    line(0, 0, vectorLine.x, vectorLine.y);

}
