var Mover = function(){
    this.location = createVector(random(width), random(height));
    this.velocity = createVector(10, 5);

    this.update = function(){
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
