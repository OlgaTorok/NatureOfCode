[Introduction](../)

# Understanding Pixel Array - Randomness

The **setup()** function sets the canvas size and the pixel density to 1, for the HD and retina display devices.

The **draw()** function uses the **loadPixels()** function to load the pixels on the canvas into the pixels array. This function is always called before the pixels are read or drawn on the canvas. Two **for** loops are added to go through each y value first and then for each y value loop through each x value. In the x loop we add a new variable called **index** which will hold the formula to calculate the pixels. The second variable **bright** is a random number from 0 to 255. Next the pixels are added in the array, each pixel for each RGBA value, which is a random colour from black to white. The function **updatePixels()** draws the pixels on the canvas.

```js
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
```

Result:

![Pixel Array - Randomness](img/Sketch13.PNG?raw=true "Pixel Array - Randomness")
