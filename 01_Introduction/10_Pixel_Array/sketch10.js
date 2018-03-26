function setup(){
    createCanvas(650, 350);
    pixelDensity(1);
}

function draw(){
    loadPixels();

    var index = (2 + 2 * width) * 4;
    pixels[index + 0] = 255;
    pixels[index + 1] = 0;
    pixels[index + 2] = 0;
    pixels[index + 3] = 255;

    updatePixels();
}
