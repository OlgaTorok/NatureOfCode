[Forces](../)

# Wind Chimes

### Mover

The Mover class is created with parameter for x and y location, x and y velocity, x and y acceleration and the mass. The Mover's **location**, **velocity** and **acceleration** is set using the **createVector()**. We set the **mass** to m.

```js
var Mover = function (x, y, vx, vy, ax, ay, m) {

    this.location = createVector(x, y);
    this.velocity = createVector(vx, vy);
    this.acceleration = createVector(ax, ay);
    this.mass = m;
```

The **update** function updates the object's velocity by adding the acceleration and sets the limit of the maximum velocity to 5. We then add the velocity to the location and we reset the acceleration back to zero each time.

```js
this.update = function () {
    this.velocity.add(this.acceleration);
    this.velocity.limit(4);
    this.location.add(this.velocity);
    this.acceleration.mult(0);
}
```

The **display** function creates the ellipse at the x and y locations with the size of the mass multiplied by 5 and a fill.

The **checkEdges** function checks if the ellipse leaves the canvas and it turns it around.

The **applyForce** function is created with the parameter **force**, to add forces to the objects. Because we don't want to affect the force vector we use a static function **p5.Vector** to calculate the acceleration of the forces.

```js
    this.display = function () {
        noStroke();
        fill(255, 0, 0, 50);
        ellipse(this.location.x, this.location.y, 5 * this.mass, 5 * this.mass);
    }

    this.checkEdges = function () {
        if (this.location.x > width) {
            this.location.x = 0;
        }
        if (this.location.x < 0) {
            this.location.x = width;
        }
        if (this.location.y > height) {
            this.location.y = 0;
        }
        if (this.location.y < 0) {
            this.location.y = height;
        }
    }

    this.applyForce = function (force) {
        var f = p5.Vector.div(force, this.mass)
        this.acceleration.add(f);

    }
}
```
### WindChime

The **WindChime** class is created with the parameters xpos and ypos for location, wind magnitude, and start and end angles . Each variable is set and given the parameter as value. Other variables added added are the **windVec** which is a vector and **time**.

```js
function WindChime(_xpos, _ypos, _windMag, _start, _end){

    this.xpos = _xpos;
    this.ypos = _ypos;
    this.windMag = _windMag;
    this.startAngle = _start;
    this.endAngle = _end;
    this.windVec = createVector();
    this.time = 1000;
```
The **update()** function contains the **wind direction**, which is mapped to the start and end angles, the **wind vector**, which uses the static function **p5.Vector** to calculate the wind direction using the **fromAngle()** and the **radians()** functions. The wind magnitude is then multiplied to the wind vector and the **time** is to be added each frame.

```js
    this.update = function(){

        this.windDir = map(noise(this.time), 0 , 1, this.startAngle, this.endAngle);
        this.windVec = p5.Vector.fromAngle(radians(this.windDir));
        this.windVec.mult(this.windMag);
        this.time += 0.1;
    }
```
The **display()** function contains the creation of the wind chime objects. The content of the wind chime is added inside a **push()** and **pop()** functions which allow new changes of the grid without affecting the variables already created.

The **translation** and **scale** of the grid is added and the **text** with the position and size, to show the magnitude and wind direction. The ellipse is created with the stroke and fill. Next we add the arrow to show the direction of the wind using a line and triangle and we rotate it to the wind direction using the **rotate()** and the **heading()** functions which calculates the angle of roatation.

```js
    this.display = function(){
        push();
            translate(this.xpos, this.ypos);
            scale(0.5, 0.5);

            textSize(23);
            smooth();
            fill(255);
            textAlign(CENTER);
            text("Magitude: " + this.windMag, 0, 120);
            this.string = str(this.windVec.heading());
            text("Wind Direction: " + this.string.substr(0, 6), 0, 160);

            stroke(0);
            strokeWeight(1);
            fill(255);
            ellipse(0, 0, 150, 150);

            rotate(this.windVec.heading());
            line(-65, 0, 65, 0);
            triangle(40, -15, 65, 0, 40, 15);
        pop();
    }
}
```
### Sketch

The windchimes and mover classes are declared. In the **setup()** function we add the canvas and two windchimes objects with parameters. In a **for** loop we add the **mover** at random locations.

```js
var windchimes = [];
var movers = [];

function setup() {
    createCanvas(640, 640);

    windchimes[0] = new WindChime(100, 100, 0.5, 0, 90);
    windchimes[1] = new WindChime(500, 500, 0.6, 180, 280);

    for(var x = 0; x < 100; x++){
        movers[x] = new Mover(random(0, 650), random(0, 640), 0, 0, 0, 0, 4);
    }
}
```

The **draw()** function contains the background, the movers and the wind chimes. There are three **for** loops added. For each mover created, use the wind chimes with their applied force and run the function **update()**, **display()** and **checkEdges()** found in the movers class. For each wind chime run the functions **update()** and **display()** found in the WindChime class.

```js
function draw() {
    background(55, 0, 0);

    for (var i = 0; i < movers.length; i++){

        for (var j = 0; j < windchimes.length; j++){
            movers[i].applyForce(windchimes[j].windVec);
        }
        movers[i].update();
        movers[i].display();
        movers[i].checkEdges();
    }

    for(var y = 0; y < windchimes.length; y++){
        windchimes[y].update();
        windchimes[y].display();
    }
}
```

Result:

![WindChimes](img/Sketch.PNG?raw=true "WindChimes")
