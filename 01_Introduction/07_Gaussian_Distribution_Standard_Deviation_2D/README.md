[Introduction](../)

# Normal/Gaussian Distribution - Standard Deviation 2D

The setup() function contains the canvas and the background.

```js
function setup(){
    createCanvas(650, 350);
    background(0);
}
```
In the draw() function we first declare the x and y locations, which are gaussian random numbers, the standard deviations for x and y and the x and y means which are in the middle of the canvas. The gaussioan random numbers are then scaled by standard deviation and mean. A variable is declared for colour also to make the colour change easier.

The last thing to do is to draw the ellipse at our random positions.

```js
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
```

Result:

![Normal/Gaussian Distribution 2D](img/Sketch07.PNG?raw=true "Normal/Gaussian Distribution")
