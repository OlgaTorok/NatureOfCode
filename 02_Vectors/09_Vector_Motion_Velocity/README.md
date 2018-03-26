[Vectors](../)

# Vector Motion - Velocity

The Mover class is created. The Mover's **location** is set at a random width and height using the **createVector()** function. The **velocity** is also used using the **createVector()** function. Next the functions are added.

The **update** function updates the object's location by adding the velocity each frame. The **display** function creates the ellipse at the x and y locations with a stroke and fill. The **checkEdge** function checks if the ellipse leaves the canvas and it turns it around.

```js
var Mover = function(){
    this.location = createVector(random(width), random(height));
    this.velocity = createVector(10, 5);

    this.update = function(){
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

![Vector Motion - Velocity](img/Sketch23.PNG?raw=true " Vector Motion - Velocity")
