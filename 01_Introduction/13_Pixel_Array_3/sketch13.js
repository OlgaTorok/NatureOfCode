function setup(){
    createCanvas(650, 350);
    pixelDensity(1);
}

function draw(){
    loadPixels();

    for(var y = 0; y < height; y++){
        for(var x = 0; x < width; x++){

            var index = (x + y * width) * 4;
            var bright = random(255);

            pixels[index + 0] = bright;
            pixels[index + 1] = bright;
            pixels[index + 2] = bright;
            pixels[index + 3] = 255;
        }
    }
    updatePixels();
}
