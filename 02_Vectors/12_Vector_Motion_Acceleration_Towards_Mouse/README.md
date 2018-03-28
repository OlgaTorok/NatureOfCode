[Vectors](../)

# Vector Motion - Acceleration towards the Mouse

### Mover

The Mover class is created. The Mover's **location** is set at half the width and half the height using the **createVector()** function. The **velocity** is set to 0 and the **acceleration** is declared using the **createVector()** method.

```js
var Mover = function(){

    this.location = createVector(width / 2, height / 2);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector();
```

In the **update** function we add new variable **mouse** using vectors for mouseX and mouseY. The mouse position and location are subtracted using the p5.Vector class and the static method **sub()** to get a vector in return. Then the magnitude of the acceleration vector is set using the **setMag** method. This function updates the object's acceleration, velocity and location by adding the acceleration to velocity and set the limit of the maximum velocity to 10. Then we add the velocity to the location each frame.

 The **display** function draws the ellipse at the x and y locations with a stroke and fill.

The **checkEdge** function checks if the ellipse leaves the canvas and it turns it around.

```js

    this.update = function(){
        var mouse = createVector(mouseX, mouseY);
        this.acceleration = p5.Vector.sub(mouse, this.location);
        this.acceleration.setMag(0.2);

        this.velocity.add(this.acceleration);
        this.velocity.limit(10);
        this.location.add(this.velocity);
    }

    this.display = function(){
        stroke(0);
        strokeWeight(2);
        fill(255);
        ellipse(this.location.x, this.location.y, 40, 40);
    }

    this.checkEdge = function(){
        if(this.location.x > width || this.location.x < 0){
            this.velocity.x = this.velocity.x * -1;
        }

        if(this.location.y > height || this.location.y < 0){
            this.velocity.y = this.velocity.y * -1;
        }
    }
}
```

### Sketch

The global variable **mover** is added to be used in creating the objects. In the **setup()** function we create the canvas and we set the new **Mover**. The **draw()** function has the background and the functions are called from the Mover class so the movers are created.

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
    mover.checkEdge();
}
```

Result:

![Vector Motion - Acceleration](img/Sketch26.PNG?raw=true " Vector Motion - Acceleration")
