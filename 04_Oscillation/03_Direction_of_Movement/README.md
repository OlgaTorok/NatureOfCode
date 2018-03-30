[Oscillation](../)

# Direction of Movement


This exercise shows how angles are used in creating an object following the mouse.

### Mover

The variables added in the Mover class are the location, velocity, acceleration, angle, angular velocity and angular acceleration.

```js
var Mover = function(){

    this.location = createVector(width / 2, height / 2);
    this.velocity = createVector(0, 0);
    this.acceleration = 0;

    this.angle = 0;
    this.aVelocity = 0;
    this.aAcceleration = 0;
```

The **update** function contains a new variable **mouse**. The mouse position and the location are subtracted using the p5.Vector class and the static method **sub()** to get a vector in return for the acceleration. The magnitude of the acceleration vector is set using the **setMag()** method. Then we update the object's acceleration, velocity and location by adding the acceleration to velocity and set the limit of the maximum velocity to 5. Next we add the velocity to the location, each frame.

Next we calculate the angular acceleration according to the acceleration's x direction and magnitude. Then we  use the **constrain** function to make sure that the angular velocity slows down. and the acceleration is set to zero.

```js
    this.update = function(){
        var mouse = createVector(mouseX, mouseY);
        this.acceleration = p5.Vector.sub(mouse, this.location);
        this.acceleration.setMag(0.3);

        this.velocity.add(this.acceleration);
        this.velocity.limit(5);
        this.location.add(this.velocity);

        this.aAcceleration = this.velocity.x / 100;
        this.aVelocity += this.aAcceleration;

        this.aVelocity = constrain(this.aVelocity, -0.1, 0.1);
        this.angle += this.aVelocity;
        this.acceleration.mult(0);
    }
```
The **display()** function contains a new variable **angle** which takes the velocity and returns it in radians using the function **heading()**, the object with the fill, stroke and grid translated at the x and y coordinates, and the rotation of the object at the angle given. We use the **push()** and **pop()** functions to keep the changes contained.

```js
    this.display = function(){
        var angle = this.velocity.heading();

        stroke(255);
        fill(0);
        push();
            translate(this.location.x, this.location.y);
            rotate(this.angle);
            rect(0, 0, 30 , 10);
        pop();
    }
}
```
### Sketch

The **Mover** class is added as a variable. In the **setup()** function the canvas in set and the new mover is created. In the **draw()** function the object is added and set in motion by calling the functions **update()** and **display()** from the mover class.

```js
var mover;

function setup(){
    createCanvas(650, 350);
    mover = new Mover();
}

function draw(){
    background(0);

    mover.update();
    mover.display();
}
```

Result:

![Direction](img/Sketch.PNG?raw=true "Direction")
