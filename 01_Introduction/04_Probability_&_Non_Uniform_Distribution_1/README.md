[Introduction](../)

# Probability and Non Uniform Distributions

The walker is declared as a global variable. The **setup()** and **draw()** functions are set.

The **setup()** function contains the canvas, background and we call the walker class to create a new walker object. The **draw()** function contains the functions that are called from the walker class.

```js
var walker;

function setup(){
    createCanvas(650, 350);
    background(0);
    walker = new Walker();
}

function draw(){
    walker.render();
    walker.step();
}
```

The **Walker** class contains the x and y position of the object, which is the middle of the canvas. The class also contains the **render** function which holds the stroke, stroke weight and the starting point of the object.

```js
function Walker(){
    this.x = width / 2;
    this.y = height / 2;

    this.render = function(){
        stroke(225);
        strokeWeight(4);
        point(this.x, this.y);
    };

```

The **step()** function, located in the Walker class, contains an empty array to which we then add our own values. There is a 40% chance that 1 and 3 are chosen and a 20% that 2 will be chosen.

```js
    this.step = function(){
        var probArr = [];
        probArr[0] = 1;
        probArr[1] = 1;
        probArr[2] = 2;
        probArr[3] = 3;
        probArr[4] = 3;
```
A new variable **index** is declared which takes the array random values and floors it to give us integers and we add it to the array. A variable **r** is declared to take the new random integer value.

The object is constrained to the canvas using the **constrain()** function.

```js
        var index = floor(random(probArr.length));
        var r = probArr[index];

        this.x = constrain(this.x, 0, width - 1);
        this.y = constrain(this.y, 0, height - 1);
    };
}
```

Result:

![Non Uniform Distribution](img/Sketch04.PNG?raw=true "Non Uniform Distribution")
