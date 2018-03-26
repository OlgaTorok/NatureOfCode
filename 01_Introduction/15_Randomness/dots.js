function setup() {
    // Create canvas and background colour
    createCanvas(650, 350);
    background(0);
}

function draw() {
    // Declare variables
    var xloc = randomGaussian();
    var yloc = randomGaussian();
    
    var r=Math.floor(random(255));
    var g=Math.floor(random(255));
    var b=Math.floor(random(10));
    
    var ball = 20;

    var xsd = 50;
    var ysd = 30;

    var xMean = width / 2;
    var yMean = height / 2;

    // The gaussioan random number is scaled by standard deviation and mean
    xloc = (xloc * xsd) + xMean;
    yloc = (yloc * ysd) + yMean;
    
    // Create the ball
    fill(r, g, b);
    noStroke();
    ellipse(xloc, yloc, ball, ball);
}
