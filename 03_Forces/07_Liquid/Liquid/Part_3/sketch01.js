//var mover;
var liquid = [];
var ball;


function setup(){
    createCanvas(650, 500);
    
    // Liquid _x, _y, _w, _h, _c, _r, _g, _b, _a
    liquid1 = new Liquid(160, 350, 300, 100, 0.1, 255, 115, 115, 225);
    liquid2 = new Liquid(160, 240, 300, 100, 0.2, 115, 255, 115, 225);
    liquid3 = new Liquid(160, 130, 300, 100, 0.2, 115, 115, 255, 225);

    // Mover(_x, _y, _vx, _vy, _ax, _ay, _m)
    ball = new Mover(200, 100, 1, 1, 0, 0, 5);
}
function draw(){
    background(0);

    liquid1.display();
    liquid2.display();
    liquid3.display();

    if(liquid1.contains(ball)){
        console.log("Is in liquid");
        // Calculate drag force
        var dragForce = liquid1.calcDrag(ball);
        // Apply drag force to mover
        ball.applyForce(dragForce);
    }
    
    // Gravity us scaled by mass
    var gravity = createVector(0, 0.1 * ball.mass);
    // Apply gravity
    ball.applyForce(gravity);
    
    ball.checkEdges();
    ball.update();
    ball.display();
}
