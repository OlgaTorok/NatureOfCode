[Introduction](../)

# Probability and Non Uniform Distributions 2

The walker is declared as a global variable. The **setup()** and **draw()** functions are set.

The **setup()** function contains the canvas, background and we call the **Walker** class to create a new walker object. The **draw()** function contains the functions that are called from the walker class.

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

The **Walker** class contains the x and y position of the object, which is the middle of the canvas. The class also contains the **render()** function which holds the stroke, stroke weight and the starting point of the object.

```js
function Walker(){
    this.x = width / 2;
    this.y = height / 2;

    this.render = function(){
        stroke(225);
        strokeWeight(1);
        point(this.x, this.y);
    };

```

In the **step()** function, located in the **Walker** class, we declare a variable called **choice** which gives 4 random numbers within 0 and 4 and then we floor it to get an integer. The second variable declared is **r** which gives us a random float number between 0 and 1.

The if and if else statements gives the object:
    * 40% chance of moving to the right
    * 20% chance of moving to the left
    * 20% chance of moving up
    * 20% chance of moving down

```js

this.step = function(){
    var choice = floor(random(4));
    var r = random(1);

    if(r < 0.4){
        this.x++;
    } else if(r < 0.6){
        this.x--;
    } else if(r < 0.8){
        this.y++;
    } else {
        this.y--;
    }
```

The object is constrained to the canvas using the **constrain()** function.


```js
        this.x = constrain(this.x, 0, width - 1);
        this.y = constrain(this.y, 0, height - 1);
    };
}
```

Result:

![Non Uniform Distributions](img/Sketch05.PNG?raw=true "Non Uniform Distributions")
