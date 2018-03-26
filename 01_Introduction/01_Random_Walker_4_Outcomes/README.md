[Introduction](../)

# Random Walker with 4 outcomes

In this exercise a Walker is created by adding a class which creates the walker objects.

Declaring the walker and the main functions are shown below.

The setup() function is called only once and it initialises the object.
The draw() function calls on the object's functions from inside the class, in a loop.
Because the background is set in the setup() function, we will be able to see all the steps the walker takes.

```js
var walker;

function setup() {
    createCanvas(640, 350);
    background(0);
    walker = new Walker();
}

function draw() {
    walker.render();
    walker.step();
}

```

Creating the class and adding the functionality.


In the walker class we declare the x and y coordinates of the walker and then the functions that make the walker move.

The render() function draws a dot at the given x and y coordinates.

```js
function Walker(){

    this.x = width/2;
    this.y = height/2;

    this.render = function(){
        stroke(255);
        point(this.x, this.y);
    }
```

The step() function creates a random float number from 0 to 4 and then the number is floored to get an integer. The function contains if and else statements which creates choices for each step depending on the random number.

```js

    this.step = function(){
        var choice = floor(random(4));

        if (choice === 0){
            this.x++;
        }
        else if (choice === 1){
            this.x--;
        }
        else if(choice === 2){
            this.y++;
        }
        else {
            this.y--;
        }
```

The walker is constrained to the window using the constrain() function.

```js

        this.x = constrain(this.x, 0, width);
        this.y = constrain(this.y, 0, height);
    }
}
```

Result:


![Random Walker](img/Sketch01.PNG?raw=true "Random Walker")
