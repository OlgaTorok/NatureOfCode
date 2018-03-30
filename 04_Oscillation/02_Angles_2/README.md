[Oscillation](../)

# Angles 2


This exercise shows how angles are used when an object changes direction. This exercise contains a **Mover** class.

### Mover

The Mover class is created and called in the Sketch file.

The variables **position**, **velocity** and **acceleration** are declared using the **createVector()** functions. Next the **angle**, **angular velocity** and **angular acceleration** variables are set. These will be used for changing the angle of the object when the direction changes.

```js
var Mover = function(){

    this.position = createVector(30, 30);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector();
    this.mass = 10;

    this.angle = 0;
    this.aVelocity = 0;
    this.aAcceleration = 0;
```
The **update()** function contains the addition of acceleration to velocity, the velocity limit, the addition of velocity to position and the reset of the acceleration back to zero.

The angular acceleration is set to x velocity divided by 100, which will change the rotation of the object. The velocity is then set using the function **constrain** to ensure that the angular velocity slows down. The angle is added to velocity and the acceleration is set to zero.

```js
    this.update = function(){
        this.velocity.add(this.acceleration);
        this.velocity.limit(10);
        this.position.add(this.velocity);
        this.acceleration.mult(0);

        this.aAcceleration = this.velocity.x / 10;
        this.aVelocity += this.aAcceleration;
        this.aVelocity = constrain(this.aVelocity, -0.1, 0.1);
        this.angle += this.aVelocity;
        this.acceleration.mult(0);
    }
```
The **display()** function contains the rectangle with the stroke and fill, and the rectangle translated to the position x and y on the canvas, rotated by the angle and drawn from the center.

```js

    this.display = function(){

        fill(255);
        stroke(255);

        push();
            translate(this.position.x, this.position.y);
            rotate(this.angle);
            rectMode(CENTER);
            rect(0, 0, this.mass * 5, this.mass * 5);
        pop();
    }
```
The **checkEdges()** function checks that the object does not leaving the canvas and the **applyForce()** function applies the force to the object. In this case the force is the wind.

```js
    this.checkEdges = function(){
        if(this.position.x > width || this.position.x < 0){
            this.velocity.x = this.velocity.x * -1;
        }

        if(this.position.y > height || this.position.y < 0){
            this.velocity.y = this.velocity.y * -1;
        }
    }

    this.applyForce = function(force){
        this.acceleration = force;
    }
}
```

### Sketch

The variables **mover** is declared first. In the **setup()** function the canvas in set and the Mover class is called.

```js
var mover;

function setup(){
    createCanvas(650, 350);
    mover = new Mover();
}
```
In the **draw()** function the background is added so it will be refreshed each frame. A variable **wind** is declared as a vector and the functions are called from the Mover class.

```js
function draw(){
    background(0);

    var wind = createVector(0.1, 0.1);

    mover.applyForce(wind);

    mover.checkEdges();
    mover.update();
    mover.display();
}
```

Result:

![Angles 2](img/Sketch.PNG?raw=true "Angles 2")
