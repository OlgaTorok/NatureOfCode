[Vectors](../)

# Vector Motion - An Array of Movers

The Mover class is created. The Mover's **location** is set at a random point on the canvas using the **createVector()** and **random()** methods and we **Math.floor()** the random numbers to get an integer. The **velocity** is set and the **acceleration** is declared using the **createVector()** method.

```js
var Mover = function(){

    this.location = createVector(Math.floor(random(width)), Math.floor(random(height)));
    this.velocity = createVector(3, 3);
    this.acceleration = createVector();
```

In the **update** function we add new variable **mouse** using vectors for mouseX and mouseY. The mouse position and location are subtracted using the p5.Vector class and the static method **sub()** to get a vector in return. Then the magnitude of the acceleration vector is set using the **setMag()** method. This function updates the object's acceleration, velocity and location by adding the acceleration to velocity and set the limit of the maximum velocity to 10. Then we add the velocity to the location each frame.

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

The global variable **mover** is added as an array. In the **setup()** function we create the canvas and we add a **for** loop that creates a new **Mover** object each time the loop is run. The **draw()** function has the background and the functions are called in a **for** loop from the Mover class so the movers objects are drawn on the canvas.

```js
var movers = [];

function setup(){
    createCanvas(650, 350);

    for(var i = 0; i < 20; i++) {
        movers[i] = new Mover();
    }
}

function draw(){
    background(0);

    for(var i = 0; i < movers.length; i++){
        movers[i].update();
        movers[i].display();
        movers[i].checkEdge();
    }
}
```

Result:

![Vector Motion - Acceleration](img/Sketch27.PNG?raw=true " Vector Motion - Acceleration")
