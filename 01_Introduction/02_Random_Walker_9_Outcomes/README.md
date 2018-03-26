[Introduction](../)

# Random walker with 9 outcomes

Declaring the walker and the main functions.

The **setup()** function initialises the object and it's called only once.

```js
var walker;

function setup() {
    createCanvas(650, 350);
    background(0);
    walker = new Walker();
}

```

The **draw()** method is created and the functions inside are called in a loop.
The **render()** and **step()** functions are called from the **Walker** class.

```js
function draw() {
    walker.render();
    walker.step();
}
```

The **Walker** class and the functionality are created.

The x and y locations are set and the **render()** function draws a dot at the given x and y coordinates, which are in the middle of the canvas.

```js
function Walker() {
    this.x = width / 2;
    this.y = height / 2;

    // Sets the walker starting point
    this.render = function() {
        stroke(255);
        point(this.x, this.y);
    }
```
The **step()** function sets the random steps of the walker. The variable **stepx** and **stepy** are declared and we ask for a random number from -1 to 2 and then the number is floored to give an integer. This is one way of getting 9 outcomes if you include not moving.


```js
this.step = function() {
    var stepx = floor(random(-1, 2));
    var stepy = floor(random(-1, 2));

    this.x = this.x + stepx;
    this.y = this.y + stepy;

```
The walker is constrained within the canvas using the **constrain()** function.

```js
        this.x = constrain(this.x, 0, width);
        this.y = constrain(this.y, 0, height);
    }

}
```

Result:

![Random Walker](img/Sketch02.PNG?raw=true "Random Walker")
