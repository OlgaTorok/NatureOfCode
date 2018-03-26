// Mover class
function Mover() {
    // Declaring the variables
    this.location = createVector(Math.floor(random(width)), Math.floor(random(height)));
    this.r=Math.floor(random(255));
    this.g=Math.floor(random(255));
    this.b=Math.floor(random(255));

    this.velocity = createVector(1, 2);
    this.acceleration = createVector();
    

    // render function cretaes the ball object
    this.render = function () {
    	fill(this.r,this.g,this.b);
        noStroke();
    	ellipse(this.location.x, this.location.y, 10, 10);
    };

    // Update function updates the objects each frame
    this.update = function(){
        // Variable mouse created 
        var mouse = createVector(mouseX, mouseY);
        
        this.acceleration = p5.Vector.sub(mouse, this.location);
        this.acceleration.setMag(0.2);
        
        this.velocity.add(this.acceleration);
        this.velocity.limit(5);
    	this.location.add(this.velocity);
    };


    // The checkEdges function checks that the ball does not leave the canvas
    this.checkEdge = function (){
    	if(this.location.x > width || this.location.x < 0){
    		this.velocity.x = this.velocity.x * -1;
    	}
    	if(this.location.y > height || this.location.y < 0){
    		this.velocity.y = this.velocity.y * -1;
    	}
    };
};



