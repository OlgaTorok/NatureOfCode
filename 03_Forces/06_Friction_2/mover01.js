// Create the Mover class with a parameter
var Mover = function (m){
    // Declaring variables
    this.location = createVector(Math.floor(random(width)), 30);
    this.velocity = createVector(2, 2);
    this.acceleration = createVector(0, 0);
    this.mass = m;

    this.update = function(){
         // Using VALV we add the vectors
        this.velocity.add(this.acceleration);
        this.velocity.limit(5);
        this.location.add(this.velocity);
        // Reset the acceleration force to 0
        this.acceleration.mult(0);
    }

    // Create the object
    this.display = function (){
        fill(255);
        stroke(255, 0, 255);
        strokeWeight(1);
        // Create ellipse using the location and the mass
        ellipse(this.location.x, this.location.y, this.mass, this.mass);
    }

    this.checkEdges = function(){
        if(this.location.x > width || this.location.x < 0){
            this.velocity.x = this.velocity.x * -1;
        }
        if(this.location.y > height || this.location.y < 0){
            this.velocity.y = this.velocity.y * -1;
        }
    }

    this.applyForce = function(force){
        // The mass is cancelled out from the draw() function
        // so all the objects fall in the same time
        var f = p5.Vector.div(force, this.mass);
        this.acceleration.add(f);

    }
}
