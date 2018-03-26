[Introduction](../)

# One Dimensional Noise

In the first part of the exercise the **Walker** is declared. The **setup()** function contains the canvas, the background and the walker object is called to create a new walker. The **draw()** function holds a rectangle, the rectangle fill colour with the opacity of 15 and the two functions called from object's class **Walker**. The opacity is used to create a train effect on the object.

```js

var walker;

function setup(){
    createCanvas(650, 350);
    walker = new Walker();
    background(141,160,203);
}

function draw(){
    fill(0, 15);
    rect(0, 0, width, height);

    walker.step();
    walker.render();
}
```

The **Walker** class is created. It contains the x location, which is set to the middle of the canvas and the **xOff** variable, which is a random number from 0 to 1000 and represents the time.

The **render()** function, when called, draws an ellipse with no stroke and a fill colour of red and the opacity of 50%.

The **step()** function takes the noise variable that is current and maps it to the size of the canvas and then increments the time by 0.005 which makes the ellipse move giving the impression on a trail.

```js
function Walker(){
    this.x = width / 2;
    this.xOff = random(1000);

    this.render = function(){
        noStroke();
        fill(255, 45, 0, 50);
        ellipse(this.x, 100, 40, 40);
    }

    this.step = function(){
        this.x = map(noise(this.xOff), 0, 1, 0, width);
        this.xOff += 0.005;
    }
}
```

Result:

![One Dimensional Noise](img/Sketch08.PNG?raw=true "One Dimensional Noise")
