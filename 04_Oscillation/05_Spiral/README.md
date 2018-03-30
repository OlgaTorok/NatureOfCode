[Oscillation](../)

# Spiral

The global variables added are the radius, angle, angular velocity and angular acceleration.

```js
var r = 0;
var angle = 0;

var aVelocity = 0;
var aAcceleration = 0.01;
```
The **setup()** function contains the canvas and the background. This function will only run once.

```js
function setup(){
    createCanvas(550, 350);
    background(0);
}
```

The **draw()** function contains the working parts of the object.
The x and y variables are declared using the sine and cosine of the angle multiplied by the radius. Next the ellipse is added with the fill and stroke. To create the spiral the angle and radius have to be increased each frame.

```js
function draw(){
    var x = r * cos(angle);
    var y = r * sin(angle);

    fill(255);
    stroke(255);
    ellipse(x+width/2, y+height/2, 10, 10);

    angle += 0.01;
    r += 0.05;
}
```

Result:

![Spiral](img/Sketch.PNG?raw=true "Spiral")
