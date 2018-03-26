// Declaring the walker
var walker;

// Initialising the object
function setup() {
    createCanvas(650, 350);
    background(0);
    walker = new Walker();
}

// Calling the functions in a loop
function draw() {
    // Functions from inside the walker object
    walker.render();
    walker.step();
}

// The walker class
function Walker() {

    // Declaring the x and y position
    this.x = width / 2;
    this.y = height / 2;

    // Sets the walker starting point
    this.render = function() {
        stroke(255);
        point(this.x, this.y);
    }

    // Sets the random steps for the walker
    this.step = function() {
        // Creating a random number from -1 to 2
        // and we floor it to receive an integer
        // This creates 9 outcomes
        var stepx = floor(random(-1, 2));
        var stepy = floor(random(-1, 2));

        this.x = this.x + stepx;
        this.y = this.y + stepy;

        // Constrain the walker within the canvas
        this.x = constrain(this.x, 0, width);
        this.y = constrain(this.y, 0, height);

    }

}
