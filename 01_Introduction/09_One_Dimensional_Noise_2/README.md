[Introduction](../)

# One Dimensional Noise - Vectors

In the first part of the exercise the **walker** and the **number of walkers** are declared. The **setup()** function creates the canvas, sets the number of walkers to 10, sets the walkers to be an empty array and then sets the background colour. A **for** loop is set so for each loop where **i** is less than the number of walkers then a new walker is created. This loop will run ten times.

```js

var walkers;
var noOfWalkers;

function setup(){
    createCanvas(650, 350);
    noOfWalkers = 10;
    walkers = [];

    for (i = 0; i < noOfWalkers; i++){
        walkers[i] = new Walker();
    }

    background(141,160,203);
}
```
The **draw()** function first creates a rectangle the size of the canvas with an opacity of 15 and then a **for** loop is set so for each loop where **i** is less than the number of walkers the **step()** and **render()** functions are called for each walker object.

```js

function draw(){
    fill(0, 15);
    rect(0, 0, width, height);

    for(i = 0; i < noOfWalkers; i++){
        walkers[i].step();
        walkers[i].render();
    }
}
```
The **Walker** class is created next. In the Walker class we store the position x and y in a variable called **position** by using  **createVector()** which stores two values in a variable. The next variable **noff** gets two random numbers for x and y between 0 and 1000.

The **render()** function contains an ellipse with no stroke and a white fill. The ellipse is created using the position x and y and for width and height the same function **map()** was used to create a circle. The map() function takes five arguments which are the value we want to map, the current x and y ranges and the desired new x and y ranges. For the value we want to map we use the **noise()** function with the random **noff.x** as argument. This takes the first random number and draws the ellipse.

```js

function Walker(){
    this.position = createVector(width/2, height/2);
    this.noff = createVector(random(1000), random(1000));

    this.render = function(){
        noStroke();
        fill(255, 50);
        ellipse(this.position.x,
                this.position.y,
                map(noise(this.noff.x), 0, 1, 20, 200),
                map(noise(this.noff.x), 0, 1, 20, 200)
                );
    }
```
The **step()** function takes the x and y position and maps them using the **noise()** function for **noff.x** and then **noff.y** values which are then incremented using the vector **add()** function that takes two parameters, one for x and one for y. This will add ellipses with a trail all over the canvas, but in a smooth sequence.

```js

    this.step = function(){
        this.position.x = map(noise(this.noff.x), 0, 1, 0 - 200, width + 200);
        this.position.y = map(noise(this.noff.y), 0, 1, 0 - 200, height + 200);
        this.noff.add(0.005, 0.005);
    }
}
```

Result:

![One Dimensional Noise - Vectors](img/Sketch09.PNG?raw=true "One Dimensional Noise - Vectors")
