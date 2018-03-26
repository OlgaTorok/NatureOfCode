[Vectors](../)

# Follow the mouse

The Mover class is created. The Mover's **location** is set at a random point on the canvas using the **createVector()** and **random()** methods and we **Math.floor()** the random numbers to get an integer. The RGB colours are set using the **random()** function which we **Math.floor()** to get an integer value from 0 to 255.

The **velocity** and **acceleration** are set using the **createVector()** method.

```js
function Mover() {
    this.location = createVector(Math.floor(random(width)), Math.floor(random(height)));
    this.r=Math.floor(random(255));
    this.g=Math.floor(random(255));
    this.b=Math.floor(random(255));

    this.velocity = createVector(1, 2);
    this.acceleration = createVector();
```
The **render** function draws the ellipse at the x and y locations with no stroke and a random fill.

In the **update** function we add a new variable **mouse** using vectors for mouseX and mouseY. The mouse position and location are subtracted using the p5.Vector class and the static method **sub()** to get a vector in return for the acceleration. The magnitude of the acceleration vector is set using the **setMag()** method. Then we update the object's acceleration, velocity and location by adding the acceleration to velocity and set the limit of the maximum velocity to 5. Next we add the velocity to the location, each frame.

The **checkEdge** function checks if the ellipse leaves the canvas and it turns it around.

```js
    this.render = function () {
        fill(this.r,this.g,this.b);
        noStroke();
        ellipse(this.location.x, this.location.y, 10, 10);
    };

    this.update = function(){
        var mouse = createVector(mouseX, mouseY);

        this.acceleration = p5.Vector.sub(mouse, this.location);
        this.acceleration.setMag(0.2);

        this.velocity.add(this.acceleration);
        this.velocity.limit(5);
        this.location.add(this.velocity);
    };

    this.checkEdge = function (){
        if(this.location.x > width || this.location.x < 0){
            this.velocity.x = this.velocity.x * -1;
        }
        if(this.location.y > height || this.location.y < 0){
            this.velocity.y = this.velocity.y * -1;
        }
    };
};
```

The global variable **mover** is added as an array. In the **setup()** function we create the canvas and we add a **for** loop that creates a new **Mover** object each time the loop runs. The **draw()** function has the background and the functions are called in a **for** loop from the Mover class so the movers objects are drawn on the canvas.

```js
var movers = [];

function setup() {
    createCanvas(650, 350);

    for(var i = 0; i < 40; i++){
		movers[i] = new Mover();
	}
}

function draw() {
	background(0, 50);

 	for(var j = 0; j < movers.length; j++){
        movers[j].render();
 		movers[j].update();
 		movers[j].checkEdge();
	}
}
```

Result:

![Vector Motion - Acceleration](img/Sketch.PNG?raw=true " Vector Motion - Acceleration")
