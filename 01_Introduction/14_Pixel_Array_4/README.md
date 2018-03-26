[Introduction](../)

# Understanding Pixel Array - 2D Noise

The variable **yoff** is declared first. The value is an arbitrary moment in time, offset by an amount of 1000. The **setup()** function sets the frame rate which will refresh 1 time per second, canvas size, the pixel density to 1 and the noiseDetail which adjusts the character and level of detail produced by Perlin noise.

```js
var yoff = 1000.0;

function setup(){
    frameRate(1);
    createCanvas(650, 350);
    pixelDensity(1);
    noiseDetail(10);
}
```
The **draw()** function uses the **loadPixels()** function to load the pixels on the canvas into the pixels array. This function is always called before the pixels are read or drawn on the canvas.

Two **for** loops are added to go through each y value first and then for each y value, loop through each x value. In the y loop we declare the xoff variable and give it an amount of 100. In the x loop we add a new variable called **index** which will hold the formula to calculate the pixels. The second variable **bright** gets a noise value for the xoff and yoff and maps it to a value. Next the pixels are added in the array, each pixel for each RGBA value, which is the mapped value.

At the end of the x loop the xoff value is incremented by 0.02 and at the end of the y loop the yoff is incremented by 0.02.

The function **updatePixels()** draws the pixels on the canvas.

```js

function draw(){
    loadPixels();

    for(var y = 0; y < height; y++){
        var xoff = 100.0;

        for(var x = 0; x < width; x++){

            var index = (x + y * width) * 4;
            var bright = map(noise(xoff, yoff), 0, 1, 0, 255);

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
```

Result:

![Pixel Array - 2D Noise](img/Sketch14.PNG?raw=true "Pixel Array - 2D Noise")
