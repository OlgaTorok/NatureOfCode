[Introduction](../)

# Understanding Pixel Array

The **setup()** function sets the canvas size and the pixel density to 1, for the HD and retina display devices.

The **draw()** function uses the **loadPixels()** function, which loads the pixels on the canvas into the pixels array. This function is always called before the pixels are read or drawn on the canvas.  A new variable **index** is created to hold the formula which calculates the pixels. The second pixel in the x and y position in the array is chosen. Next the pixels are added in the array, each pixel for each RGBA value. The **index + 0** is the red in the array, the **index + 1** is the red plus one pixel, which is green, the **index + 2** is the red plus two pixels, which is blue and then **index + 3** is the opacity. The function **updatePixels()** draws the pixels on the canvas. In this case all the pixels are drawn green.

```js
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
```

Result:

![Pixel Array](img/Sketch10.PNG?raw=true "Pixel Array")
