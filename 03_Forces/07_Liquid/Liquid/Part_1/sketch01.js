var mover;
var ball;

function setup(){
    createCanvas(650, 350);

    // Mover(_x, _y, _vx, _vy, _ax, _ay, _m)
    ball = new Mover(50, 50, 1, 1, 0, 0, 10);
}
function draw(){
    background(0);

    ball.checkEdges();
    ball.update();
    ball.display();
}
