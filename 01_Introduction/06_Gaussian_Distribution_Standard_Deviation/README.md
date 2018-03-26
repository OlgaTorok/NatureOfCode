[Introduction](../)

# Normal/Gaussian Distribution - Standard Deviation

The setup() function contains the canvas and the background.

```js
function setup(){
    createCanvas(650, 350);
    background(0);
}
```
In the draw() function we first declare the x location, which is a gaussian random number, the standard deviation and the mean which is in the middle of the canvas. The gaussioan random number is scaled by standard deviation and mean.

The last thing to do is to draw the ellipse at our random positions.

```js
function draw(){
    // The
    var xloc = randomGaussian();
    var sd = 60;
    var mean = width / 2;

    xloc = (xloc * sd) + mean;

    fill(255, 10);
    noStroke();
    ellipse(xloc, height / 2, 50, 50);
}
```

Result:

![Normal/Gaussian Distribution](img/Sketch06.PNG?raw=true "Normal/Gaussian Distribution")
