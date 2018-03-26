function setup(){
    createCanvas(650, 350);
    background(0);
}

function draw(){
    var xloc = randomGaussian();
    var yloc = randomGaussian();

    var xsd = 100;
    var ysd = 40;

    var xMean = width / 2;
    var yMean = height / 2;

    xloc = (xloc * xsd) + xMean;
    yloc = (yloc * ysd) + yMean;

    var rColor = 233;

    fill(rColor, 10);
    noStroke();
    ellipse(xloc, yloc, 50, 50);
}
