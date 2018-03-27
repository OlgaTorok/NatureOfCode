[Oscillation](../)

# Angles


This exercise shows how angles are used in creating a baton in motion.

The variables **angle**, **angle velocity** and **angle acceleration** are declared. In the **setup()** function the canvas in set.

```js
var angle = 0;
var angleVel = 0.05;
var angleAcc = 0.001;

function setup(){
    createCanvas(650, 350);
}
```
In the **draw()** function the object is created and set in motion. The background is set here so it will refresh each frame. The shape is then created by adding a fill and a stroke, we set the shape to be drawn from the centre using the **rectMode()** function. Next we **translate()** the object to the middle of the canvas and using the **rotate()** function we rotate the angle of the shape. This will change the location of the objects. The baton is created using a line and two ellipses at both ends of the line. The last thing is to set the baton in motion by adding the acceleration to velocity and the velocity to the angle. This will rotate and accelerate the baton each frame.

```js
function draw(){
    background(0);

    fill(255);
    stroke(255);
    rectMode(CENTER);
    translate(width/2, height/2);
    rotate(angle);
    line(-60, 0, 60, 0);
    ellipse(60, 0, 10, 10);
    ellipse(-60, 0, 10, 10);

    angleVel += angleAcc;
    angle += angleVel;
}
```

Result:

![Angles](img/Sketch.PNG?raw=true "Angles")
