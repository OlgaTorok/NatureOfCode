[Vectors](../)

# Direction of Movement


This exercise shows how angles are used in creating a baton in motion.


In the **setup()** function the canvas in set. In the **draw()** function the object is created and set in motion. The background is set here so it will refresh each frame. The shape is then created by adding a fill and a stroke, we set the shape to be drawn from the centre using the **rectMode()** function. Next we **translate()** the object to the middle of the canvas and using the **rotate()** function we rotate the angle of the shape. This will change the location of the objects. The baton is created using a line and two ellipses at both ends of the line. The last thing is to set the baton in motion by adding the acceleration to velocity and the velocity to the angle. This will rotate and accelerate the baton each frame.

```js

```

Result:

![Direction](img/Sketch.PNG?raw=true "Direction")
