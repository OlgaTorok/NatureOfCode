var Mover = function(){

    this.location = createVector(30, 30);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);


    this.update = function(){
        this.velocity.add(this.acceleration);
        this.velocity.limit(10);
        this.location.add(this.velocity);
        this.acceleration.mult(0);
    }

    this.display = function(){
        stroke(0);
        fill(255);
        ellipse(this.location.x, this.location.y, 30, 30);
    }

    this.checkEdge = function(){
        if(this.location.x > width || this.location.x < 0){
            this.velocity.x = this.velocity.x * -1;
        }

        if(this.location.y > height || this.location.y < 0){
            this.velocity.y = this.velocity.y * -1;
        }
    }

    this.applyForce = function(force){
        this.acceleration.add(force);
    }
}
