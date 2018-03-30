var Mover = function(){

    this.location = createVector(width / 2, height / 2);
    this.velocity = createVector(0, 0);
    this.acceleration = 0;

    this.angle = 0;
    this.aVelocity = 0;
    this.aAcceleration = 0;

    this.update = function(){
        var mouse = createVector(mouseX, mouseY);
        this.acceleration = p5.Vector.sub(mouse, this.location);
        this.acceleration.setMag(0.3);

        this.velocity.add(this.acceleration);
        this.velocity.limit(5);
        this.location.add(this.velocity);

        // calculate angular acceleration according to
        // the acceleration's horozontal direction and magnitude
        this.aAcceleration = this.velocity.x / 100;
        this.aVelocity += this.aAcceleration;

        // Use constrain() to ensure that angular velocity slows down
        this.aVelocity = constrain(this.aVelocity, -0.1, 0.1);
        this.angle += this.aVelocity;
        this.acceleration.mult(0);

    }

    this.display = function(){
        var angle = this.velocity.heading();

        stroke(255);
        fill(0);
        push();
            // rectMode(CENTER);
            translate(this.location.x, this.location.y);
            rotate(this.angle);
            rect(0, 0, 30 , 10);
        pop();

    }

    // this.checkEdges = function(){
    //     if(this.location.x > width || this.location.x < 0){
    //         this.velocity.x = this.velocity.x * -1;
    //     }
    //
    //     if(this.location.y > height || this.location.y < 0){
    //         this.velocity.y = this.velocity.y * -1;
    //     }
    // }
}
