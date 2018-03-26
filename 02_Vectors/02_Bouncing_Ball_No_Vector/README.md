[Vectors](../)

# Bouncing Ball - No Vector

To draw a moving ball, the first thing in the code is to declare the **x**, **y**, **xspeed** and **yspeed** variables. In the **setup()** function we add the canvas.

```js
var x = 100,
    y = 100,
    xspeed = 2.5,
    yspeed = 5;

function setup(){
    createCanvas(650, 350);
}
```
In the **draw()** function we set the background so it resets every time the loop runs. The next thing is to add the speed to the x and y variables. This will create the ball at a different location each time. The **if** statements are added to stop the ball from leaving the canvas.

```js
function draw(){
    background(0);

    x = x + xspeed;
    y = y + yspeed;

    if((x > width) || (x < 0)){
        xspeed = xspeed * -1;
    }
    if((y > height) || (y < 0)){
        yspeed = yspeed * -1;
    }
```
The ball is created with a stroke, a fill of white and the ellipse at the x and y locations defined at the start of the code. The x and y locations change each frame. The outcome of this exercise is the ball bouncing around the canvas.

```js
    stroke(0);
    fill(255);
    ellipse(x, 170, 50, 50);
}
```

Result:

![Bouncing Ball - No Vectors](img/Sketch16.PNG?raw=true "Bouncing Ball - No Vectors")
