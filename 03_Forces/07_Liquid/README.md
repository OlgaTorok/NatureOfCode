[Forces](../)

# Fluid Resistance

### Mover

The Mover class is created with parameter for x and y location, x and y velocity, x and y acceleration and the mass. The Mover's **location**, **velocity** and **acceleration** is set using the **createVector()**. We set the **mass** to m.

```js
var Mover = function (_x, _y, _vx, _vy, _ax, _ay, _m){
    this.location = createVector(_x, _y);
    this.velocity = createVector(_vx, _vy);
    this.acceleration = createVector(_ax, _ay);
    this.mass = _m;
```

The **update** function updates the object's velocity by adding the acceleration and sets the limit of the maximum velocity to 5. We then add the velocity to the location and we reset the acceleration back to zero each time.

```js
this.update = function(){
    this.velocity.add(this.acceleration);
    this.velocity.limit(5);
    this.location.add(this.velocity);
    this.acceleration.mult(0);
}
```

The **display** function creates the ellipse at the x and y locations with the size of the mass multiplied by 5 and a stroke and fill.

The **checkEdges** function checks if the ellipse leaves the canvas and it turns it around.

The **applyForce** function is created to add forces to the objects. Because we don't want to affect the force vector we use a static function **p5.Vector** to calculate the acceleration of the forces.

```js
    this.display = function (){
        noStroke();
        fill(255);
        ellipse(this.location.x, this.location.y, this.mass * 5, this.mass * 5);
    }

    this.checkEdges = function(){
        if(this.location.x > width || this.location.x < 0){
            this.velocity.x = this.velocity.x * -2;
        }
        if(this.location.y > height || this.location.y < 0){
            this.velocity.y = this.velocity.y * -2;
        }
    }

    this.applyForce = function(force){
        var f = p5.Vector.div(force, this.mass);
        this.acceleration.add(f);

    }
}
```
### Liquid

The **Liquid** class is created with the parameters x and y for location, width and height, coefficient of drag and the r, g and b for the RGB colours. Each variable is set and given the parameter as value.   

```js

var Liquid = function (_x, _y, _w, _h, _c, _r, _g, _b, _a){

    this.location = createVector(_x, _y);
    this.width = _w;
    this.height = _h;
    this.cDrag = _c;
    this.red = _r;
    this.green = _g;
    this.blue = _b;
    this.opacity = _a;
```
A new function **contains()** is added to check if the object is in the liquid. This function checks the x and y location of the object.

```js
    this.contains = function(m){

        return m.location.y > this.location.y && m.location.y < this.location.y + this.height &&
                m.location.x > this.location.x && m.location.x < this.location.x + this.width;
    }
```
The function **calcDrag()** is added next with the parameter **m** to calculate the drag. Magnitude is the coefficient multiplied by speed squared and the direction is inverse of velocity. Next we normalise the drag force and we multiply it by the magnitude.

The **display()** function creates the object with the RGB fill.

```js
    this.calcDrag = function(m){
        var speed = m.velocity.mag();
        var dragMag = this.cDrag * speed * speed;

        var dragForce = m.velocity.copy();
        dragForce.mult(-1);

        // dragForce.setMag(dragMagnitude);
        dragForce.normalize();
        dragForce.mult(dragMag);
        return dragForce;
    }

    this.display = function (){
        fill(_r,_g, _b, _a);
        rect(this.location.x, this.location.y, this.width, this.height);
    }
}
```

### Sketch

The global variable **liquid** is added as an array and the mover class called **ball**.

In the **setup()** function we add the canvas and we create three liquids with the parameters given. The mover **ball** is also added with it's parameters.

```js
var liquid = [];
var ball;

function setup(){
    createCanvas(650, 500);

    liquid1 = new Liquid(160, 350, 300, 100, 0.1, 255, 115, 115, 225);
    liquid2 = new Liquid(160, 240, 300, 100, 0.2, 115, 255, 115, 225);
    liquid3 = new Liquid(160, 130, 300, 100, 0.2, 115, 115, 255, 225);

    ball = new Mover(200, 100, 1, 1, 0, 0, 5);
}
```

The **draw()** function contains the background and it displays the three liquids. An **if** function is added to say if the ball is contained in the first liquid then add a message to the console to say "Is in the liquid" and calculate the drag force and apply it to the mover **ball**.

Next we add a new variable **gravity** as a vector, which is scaled by mass and then applied to the mover object using the **applyForce** function.

The functions **checkEdges()**, **update()** and **display()** are called from the Mover class so the mover is created.

```js
function draw(){
    background(0);

    liquid1.display();
    liquid2.display();
    liquid3.display();

    if(liquid1.contains(ball)){
        console.log("Is in liquid");
        var dragForce = liquid1.calcDrag(ball);
        ball.applyForce(dragForce);
    }

    var gravity = createVector(0, 0.1 * ball.mass);
    ball.applyForce(gravity);

    ball.checkEdges();
    ball.update();
    ball.display();
}
```

Result:

![Liquid Resistance](img/Sketch.PNG?raw=true "Liquid Resistance")
