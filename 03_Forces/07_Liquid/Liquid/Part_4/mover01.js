
var Mover = function (_x, _y, _vx, _vy, _ax, _ay, _m){
    // Using VALV we add the vectors
    this.location = createVector(_x, _y);
    this.velocity = createVector(_vx, _vy);
    this.acceleration = createVector(_ax, _ay);
    this.mass = _m;


    this.update = function(){
        // Velocity changes according to acceleration
        this.velocity.add(this.acceleration);
        // Limit the velocity to 5
        this.velocity.limit(5);
        // Position chnages by velocity
        this.location.add(this.velocity);
        // Clear the acceleration each frame
        this.acceleration.mult(0);
    }

    this.display = function (){
        noStroke();
        fill(255);
        ellipse(this.location.x, this.location.y, this.mass * 5, this.mass * 5);
    }

    // Bounce off of canvas
    this.checkEdges = function(){
        if(this.location.x > width || this.location.x < 0){
            this.velocity.x = this.velocity.x * -2;
        }
        if(this.location.y > height || this.location.y < 0){
            this.velocity.y = this.velocity.y * -2;
        }
    }

    // Newton's 2nd law: F = M * A
    // or A = F / M
    this.applyForce = function(force){
        var f = p5.Vector.div(force, this.mass);
        this.acceleration.add(f);

    }
}
