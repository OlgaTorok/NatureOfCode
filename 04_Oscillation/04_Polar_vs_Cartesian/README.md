[Oscillation](../)

# Polar vs Cartesian Coordinates

The global variables added are the radius, angle, angular velocity and angular acceleration.

```js
var r = 150;
var angle = 0;

var aVelocity = 0;
var aAcceleration = 0.01;
```
The **setup()** function contains the canvas where the objects are drawn.

```js
function setup(){
    createCanvas(550, 350);
}
```

The **draw()** function contains the working parts of the object. The background is added here to run each frame and keep the canvas clean each frame.

The grid is translated to the middle of the screen where the x and y variables are declared using the sine and cosine of the angle multiplied by the radius. Next the ellipse and line are added with the fill and stroke. To create the motion the angular velocity was added to the angle, the angular acceleration added to the angular velocity which is then constrained so it will not speed up too fast. 

```js
function draw(){
    background(0);

    translate(width/2, height/2);
    var x = r * cos(angle);
    var y = r * sin(angle);

    fill(255);
    stroke(255);
    line(0, 0, x, y);
    ellipse(x, y, 50, 50);

    angle += aVelocity;
    aVelocity += aAcceleration;
    aVelocity = constrain(aVelocity, 0, 0.1);
}

```

Result:

![Coordinates](img/Sketch.PNG?raw=true "Coordinates")
