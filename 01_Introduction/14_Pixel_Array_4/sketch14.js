var yoff = 1000.0;

function setup(){
    frameRate(1);
    createCanvas(650, 350);
    pixelDensity(1);
    noiseDetail(10);
}

function draw(){
    loadPixels();

    for(var y = 0; y < height; y++){
        var xoff = 100.0;

        for(var x = 0; x < width; x++){

            var index = (x + y * width) * 4;
            var bright = map(noise(xoff, yoff), 0, 1, 0, 225);

            pixels[index + 0] = bright;
            pixels[index + 1] = bright;
            pixels[index + 2] = bright;
            pixels[index + 3] = 255;

            xoff += 0.02;
        }
        yoff += 0.02;
    }
    updatePixels();
}
