[Forces](../)

# Friction 2

The Mover class is created with the parameter **m**. The Mover's **location**, **velocity** and **acceleration** is set using the **createVector()**. We set the **mass** to m.

```js
var Mover = function (m){
    this.location = createVector(Math.floor(random(width)), 30);
    this.velocity = createVector(2, 2);
    this.acceleration = createVector(0, 0);
    this.mass = m;
```
The **update** function updates the object's velocity and location by adding the acceleration to velocity and set the limit of the maximum velocity to 5. We then add the velocity to the location and we reset the acceleration back to zero. This will reset the acceleration each frame.

```js

    this.update = function(){
        this.velocity.add(this.acceleration);
        this.velocity.limit(5);
        this.location.add(this.velocity);
        this.acceleration.mult(0);
    }
```
The **display** function creates the ellipse at the x and y locations with the size of the mass and a stroke and fill.

The **checkEdge** function checks if the ellipse leaves the canvas and it turns it around.

The **applyForce** function is created to add forces to the objects. Because we don't want to affect the force vector we use a static function **p5.Vector** to calculate the acceleration.

```js

    this.display = function (){
        fill(255);
        stroke(255, 0, 255);
        strokeWeight(1);
        ellipse(this.location.x, this.location.y, this.mass, this.mass);
    }

    this.checkEdges = function(){
        if(this.location.x > width || this.location.x < 0){
            this.velocity.x = this.velocity.x * -1;
        }
        if(this.location.y > height || this.location.y < 0){
            this.velocity.y = this.velocity.y * -1;
        }
    }

    this.applyForce = function(force){
        var f = p5.Vector.div(force, this.mass);
        this.acceleration.add(f);

    }
}

```
The global variable **mover** is added as an array. In the **setup()** function we add the canvas and in a **for** loop we create the new **Mover** with the parameters given.

```js
var movers= [];

function setup(){
    createCanvas(650, 350);

    for (var i = 0; i < 10; i++){
        movers[i] = new Mover(Math.floor(random(20, 60)));
    }
}
```
The **draw()** function contains the background and a **for** loop where each Mover is set. The loop contains the **coefficient of friction**, the **normal force**, the **magnitude of friction** and the **friction** using a static function and then we **normalize** it and multiply it by the magnitude of friction which gets the velocity vector and multiplies it by 1. This will determine the direction and magnitude of friction.

The functions are called from the Mover class so the mover is created.

```js
function draw(){
    background(0);

    for (var i = 0; i < movers.length; i++){
        var c = 0.5;
        var normal = 1;
        var frictionMag = c * normal;
        var friction = p5.Vector.mult(movers[i].velocity, -1);
        friction.normalize();
        friction.mult(frictionMag);

        movers[i].applyForce(friction);
        movers[i].checkEdges();
        movers[i].update();
        movers[i].display();
    }
}
```

Result:

![Friction](img/Sketch.PNG?raw=true "Friction")
