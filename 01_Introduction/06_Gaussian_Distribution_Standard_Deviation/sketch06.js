function setup(){
    createCanvas(650, 350);
    background(0);
}

function draw(){
    var xloc = randomGaussian();
    console.log(xloc);

    var sd = 60;
    var mean = width / 2;
    xloc = (xloc * sd) + mean;

    fill(255, 10);
    noStroke();
    ellipse(xloc, height / 2, 50, 50);
}
