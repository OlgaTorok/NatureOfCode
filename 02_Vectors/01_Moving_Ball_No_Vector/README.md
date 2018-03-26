[Vectors](../)

# Moving Ball in x Direction - No Vector

To draw a moving ball, the first thing in the code is to declare the **x**, **y** and **xspeed** variables. In the **setup()** function we add the canvas.

```js
var x = 320, y = 180, xspeed = 2;

function setup(){
    createCanvas(650, 350);
}
```
In the **draw()** function we set the background so it resets every time the loop runs. The next thing is to add the speed to the x variables. This will create the ball at a different location each time. The **if** statement is added to stop the ball from leaving the canvas.

```js
function draw(){
    background(0);

    x = x + xspeed;

    if((x > width) || (x < 0)){
        xspeed = xspeed * -1;
    }
```
The ball is created with a stroke, a fill of white and the ellipse at the x location, which changes each frame, and the y location which never changes. The outcome of this exercise is the ball moving from left to right on the canvas.

```js
    stroke(0);
    fill(255);
    ellipse(x, 170, 50, 50);
}
```

Result:

![Moving Ball - No Vectors](img/Sketch15.PNG?raw=true "Moving Ball - No Vectors")
