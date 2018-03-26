function setup() {
    createCanvas(640, 640);

}

function draw() {
    push();
    translate(200, 200);
    scale(0.5, 0.5);
    stroke(0);
    strokeWeight(1);
    fill(255);
    ellipse(0, 0, 150, 150);
    
    rotate(radians(45));
    line(-65, 0, 65, 0);
    triangle(40, -15, 65, 0, 40, 15);
    pop();
    
    

    rect(5, 5, 100, 100);
}