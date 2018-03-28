[Forces](../)

# Dealing with Mass

### Mover

The Mover class is created with the parameter **m**. The Mover's **location**, **velocity** and **acceleration** is set using the **createVector()**. We set the **mass** to m.

```js
var Mover = function(m){
    this.location = createVector(30, 30);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.mass = m;
```
The **update** function updates the object's velocity and location by adding the acceleration to velocity and set the limit of the maximum velocity to 10. We then add the velocity to the location and we reset the acceleration back to zero.

```js

    this.update = function(){
        this.velocity.add(this.acceleration);
        this.velocity.limit(10);
        this.location.add(this.velocity);
        this.acceleration.mult(0);
    }
```
The **display** function creates the ellipse at the x and y locations with a stroke and fill.

```js
    this.display = function(){
        stroke(0);
        fill(255);
        ellipse(this.location.x, this.location.y, this.mass * 10, this.mass * 10);
    }
```
The **checkEdge** function checks if the ellipse leaves the canvas and it turns it around.

```js
    this.checkEdge = function(){
        if(this.location.x > width || this.location.x < 0){
            this.velocity.x = this.velocity.x * -1;
        }

        if(this.location.y > height || this.location.y < 0){
            this.velocity.y = this.velocity.y * -1;
        }
    }
```
The **applyForce** function is created to add forces to the objects. Because we don't want to affect the force vector we use a static function **p5.Vector** to calculate the acceleration.

```js
    this.applyForce = function(force){
        var f = p5.Vector.div(force, this.mass);
        this.acceleration.add(f);
    }
}
```
### Sketch

The global variable **mover** is added to be used in creating the objects. In the **setup()** function we create the canvas and we set the new **Mover**. The **draw()** function has the background, the new variables called **wind** and **gravity** which are forces, and the functions needed to add the object to the canvas. The functions are called from the Mover class so the movers are created.

```js
var mover;

function setup(){
    createCanvas(650, 350);
    mover = new Mover(10);
}

function draw(){
    background(0);

    var wind = createVector(0.1, 0);
    var gravity = createVector(0, 0.05);

    mover.applyForce(wind);
    mover.applyForce(gravity);

    mover.update();
    mover.display();
    mover.checkEdge();
}
```

Result:

![Mass](img/Sketch30.PNG?raw=true " Mass")
