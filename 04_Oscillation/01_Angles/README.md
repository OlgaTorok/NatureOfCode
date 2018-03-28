[Oscillation](../)

# Angles


This exercise shows how angles are used in creating a baton in motion.

The variables **angle**, **angular velocity** and **angular acceleration** are declared. In the **setup()** function the canvas in set.

```js
var angle = 0;
var aVelocity = 0.05;
var aAcceleration = 0.001;

function setup(){
    createCanvas(650, 350);
}
```
In the **draw()** function the object is created and set in motion. The background is set here so it will refresh each frame. The shape is then created after adding a fill and a stroke. The functions **push()** and **pop()** are added so the changes made will not affect the objects created after this. Next we **translate()** the object to the middle of the canvas and using the **rotate()** function we rotate the angle of the shape. This will change the location of the objects. The baton is created using a line and two ellipses at both ends of the line. The last thing is to set the baton in motion by adding the acceleration to velocity, setting the **constrain()** function for the angular velocity to slow down the object and then adding the velocity to the angle. This will rotate the baton each frame.

```js
function draw(){
    background(0);

    fill(255);
    stroke(255);
    push();
        translate(width/2, height/2);
        rotate(angle);
        line(-60, 0, 60, 0);
        ellipse(60, 0, 10, 10);
        ellipse(-60, 0, 10, 10);
    pop();

    aVelocity += aAcceleration;
    aVelocity = constrain(aVelocity, 0, 0.05);
    angle += aVelocity;
}
```

Result:

![Angles](img/Sketch.PNG?raw=true "Angles")
