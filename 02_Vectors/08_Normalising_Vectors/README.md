[Vectors](../)

# Normalising Vectors

In the **setup()** function we create the canvas.

```js
function setup(){
    createCanvas(650, 350);
}
```
In the **draw()** function we set the background so it resets every time the loop runs. Next we add the **mouse** variable which uses the **createVector()** function to get vector for the mouse x and y location. The **centre** variable sets a vector to the centre of the canvas and the variable **vectorLine** takes the mouse coordinates and subtracts them from the **centre** variable.

The **normalize()** function will normalise the vector to the pixels and then multiply it by a number to get that number of pixels to form the line.

Next we translate the vector to the canvas by half the width and the height using the **translate()** function and then we draw the line that represents the vector.

```js
function draw(){
    background(0);

    var mouse = createVector(mouseX, mouseY);
    var centre = createVector(width / 2, height / 2);
    var vectorLine = mouse.sub(centre);

    vectorLine.normalize();
    vectorLine.mult(100);

    translate(width /2, height / 2);
    strokeWeight(2);
    stroke(255);
    line(0, 0, vectorLine.x, vectorLine.y);
}
```

Result:

![Normalising Vectors](img/Sketch22.PNG?raw=true " Normalising Vectors")
