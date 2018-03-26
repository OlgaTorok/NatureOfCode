
var Mover = function (_x, _y, _vx, _vy, _ax, _ay, _m){
    // Using VALV we add the vectors
    this.location = createVector(_x, _y);
    this.velocity = createVector(_vx, _vy);
    this.acceleration = createVector(_ax, _ay);
    this.mass = _m;


    this.update = function(){
        this.velocity.add(this.acceleration);
        this.velocity.limit(5);
        this.location.add(this.velocity);
        this.acceleration.mult(0);
    }

    this.display = function (){
        fill(255);
        ellipse(this.location.x, this.location.y, this.mass * 10, this.mass * 10);
    }

    this.checkEdges = function(){
        if(this.location.x > width || this.location.x < 0){
            this.velocity.x = this.velocity.x * -2;
        }
        if(this.location.y > height || this.location.y < 0){
            this.velocity.y = this.velocity.y * -2;
        }
    }

    this.applyForce = function(force){
        var f = p5.Vector.div(force, this.mass);
        this.acceleration.add(f);
    }
}
