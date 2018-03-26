var mover;
var liquid;
var ball;


function setup(){
    createCanvas(650, 350);
    // Liquid _x, _y, _w, _h, _c
    liquid = new Liquid(160, 200, 300, 100, 0.2);

    // Mover(_x, _y, _vx, _vy, _ax, _ay, _m)
    ball = new Mover(200, 100, 1, 1, 0, 0, 5);
}
function draw(){
    background(0);

    liquid.display();

    ball.checkEdges();
    ball.update();
    ball.display();
}
