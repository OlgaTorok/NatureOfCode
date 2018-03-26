[Introduction](../)

# Understanding Pixel Array - Loops

The **setup()** function sets the canvas size and the pixel density to 1, for the HD and retina display devices.

The **draw()** function uses the **loadPixels()** function, which loads the pixels on the canvas into the pixels array. This function is always called before the pixels are read or drawn on the canvas. Two **for** loops are added to go through each y value first and then for each y value loop through each x value. In the x loop we add a new variable called **index** which will hold the formula to calculate the pixels. Next the pixels are added in the array, each pixel for each RGBA value. The **index + 0** is the red in the array, the **index + 1** is the red plus one pixel, which is green, the **index + 2** is the red plus two pixels, which is blue and then **index + 3** is the opacity. The function **updatePixels()** draws the pixels on the canvas. In this case all the pixels are drawn green.

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
            pixels[index + 0] = 0;
            pixels[index + 1] = 255;
            pixels[index + 2] = 0;
            pixels[index + 3] = 255;
        }
    }
    updatePixels();
}
```

Result:

![Pixel Array - Gradients](img/Sketch11.PNG?raw=true "Pixel Array - Gradients")
