var Mover = function(){
    this.location = createVector(width / 2, height / 2);
    this.velocity = createVector(0, 0);
    this.acceleration = p5.Vector.random2D();
    this.acceleration.mult(0.02);


    this.update = function(){
        this.velocity.add(this.acceleration);
        this.velocity.limit(10);
        this.location.add(this.velocity);
    }

    this.display = function(){
        stroke(0);
        strokeWeight(2);
        fill(255);
        ellipse(this.location.x, this.location.y, 40, 40);
    }

    this.checkEdge = function(){
        if(this.location.x > width || this.location.x < 0){
            this.velocity.x = this.velocity.x * -1;
        }

        if(this.location.y > height || this.location.y < 0){
            this.velocity.y = this.velocity.y * -1;
        }
    }
}
