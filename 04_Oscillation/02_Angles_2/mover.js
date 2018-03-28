var Mover = function(){

    this.position = createVector(30, 30);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector();
    this.mass = 10;

    this.angle = 0;
    this.aVelocity = 0;
    this.aAcceleration = 0;

    this.update = function(){
        this.velocity.add(this.acceleration);
        this.velocity.limit(10);
        this.position.add(this.velocity);
        this.acceleration.mult(0);

        this.aAcceleration = this.velocity.x / 10;
        this.aVelocity += this.aAcceleration;
        this.aVelocity = constrain(this.aVelocity, -0.1, 0.1);
        this.angle += this.aVelocity;
        this.acceleration.mult(0);
    }

    this.display = function(){

        fill(255);
        stroke(255);

        push();
            translate(this.position.x, this.position.y);
            rotate(this.angle);
            rectMode(CENTER);
            rect(0, 0, this.mass * 5, this.mass * 5);
        pop();
    }

    this.checkEdges = function(){
        if(this.position.x > width || this.position.x < 0){
            this.velocity.x = this.velocity.x * -1;
        }

        if(this.position.y > height || this.position.y < 0){
            this.velocity.y = this.velocity.y * -1;
        }
    }

    this.applyForce = function(force){
        this.acceleration = force;
    }
}
