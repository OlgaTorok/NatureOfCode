[Vectors](../)

# Bouncing Ball - With Vectors

To draw a moving ball, first we declare the **position** and **velocity** variables. In the **setup()** function we add the canvas and we set the two variables using the **createVector** function which gives two values, one for x and one for y.

```js
var position, velocity;

function setup(){
    createCanvas(650, 350);
    position = createVector(100, 100);
    velocity = createVector(2, 2);
}
```
In the **draw()** function we set the background so it resets every time the loop runs. The next thing is to add the speed to the x and y position of the object. The position variable refers to the position of the object on the canvas and the velocity is the speed of the object. This will create the ball at a different location each time. The **if** statements are added to stop the ball from leaving the canvas.

```js
function draw(){
    background(0);

    position.x = position.x + velocity.x;
    position.y = position.y + velocity.y;

    if((position.x > width) || (position.x < 0)){
        velocity.x = velocity.x * -1;
    }
    if((position.y > height) || (position.y < 0)){
        velocity.y = velocity.y * -1;
    }
```
The ball is created with a stroke, strokeWeight, a fill of white and the ellipse at the x and y position, defined at the start of the code. The x and y position change each frame. The outcome of this exercise is the ball bouncing around the canvas.

```js
    stroke(0);
    strokeWeight(2);
    fill(255);
    ellipse(position.x, position.y, 50, 50);
    }
```

Result:

![Bouncing Ball - Vectors](img/Sketch17.PNG?raw=true "Bouncing Ball - Vectors")
