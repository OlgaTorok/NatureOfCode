[Introduction](../)

# Randomness

 The **setup()** function sets the canvas size and the background.

```js
function setup() {
    createCanvas(650, 350);
    background(0);
}
```
In the **draw()** function we declare the x and y locations using **randomGaussian()** which returns a "normal" distribution of numbers.
The RGB colours are set using random numbers from 0 to the number set.


```js
function draw() {
    var xloc = randomGaussian();
    var yloc = randomGaussian();

    var r=Math.floor(random(255));
    var g=Math.floor(random(255));
    var b=Math.floor(random(10));
```
The next variables set are the **ball** which is the size of the ellipse, the x and y standard deviation and the x and y mean. The location of the object is then multiplied by the standard deviation and added to the mean. This will give us the x and y position of the object on the canvas which is a random number around the centre of the canvas.

Next the ellipse is created using the random colours with no stroke and the random x and y locations.

```js
    var ball = 20;

    var xsd = 50;
    var ysd = 30;

    var xMean = width / 2;
    var yMean = height / 2;

    xloc = (xloc * xsd) + xMean;
    yloc = (yloc * ysd) + yMean;

    fill(r, g, b);
    noStroke();
    ellipse(xloc, yloc, ball, ball);
}
```

Result:

![Randomness](img/Sketch15.PNG?raw=true "Randomness")
