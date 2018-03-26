[Vectors](../)

# Vector Motion - Constant Acceleration

The Mover class is created. The Mover's **location** is set at half the width and half the height using the **createVector()** function. The **velocity** is set to 0 on this exercise so we can test the acceleration and the **acceleration** is set using the **createVector()** function and we give it a small number. The acceleration affects the velocity and the velocity in its turn affects the location of the object. Next we added the functions that create the objects.

The **update** function updates the object's location and velocity by adding the acceleration to velocity and set the limit of the maximum velocity to 10. We then add the velocity to the location each frame. The **display** function creates the ellipse at the x and y locations with a stroke and fill. The **checkEdge** function checks if the ellipse leaves the canvas and it turns it around.

```js
var Mover = function(){
    this.location = createVector(width / 2, height / 2);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0.03, 0.04);

    this.update = function(){
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

![Vector Motion - Acceleration](img/Sketch24.PNG?raw=true " Vector Motion - Acceleration")
