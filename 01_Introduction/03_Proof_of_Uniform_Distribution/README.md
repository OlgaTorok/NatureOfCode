[Introduction](../)

# Proof of uniform distribution of numbers

Declare the global variables. An empty array is created and then the total number of the elements in the array is set.

```js
var randomCounts = [];
var total = 20;

```
The **setup()** function contains the canvas and the loop that populates the array with 0s.

```js
function setup(){
    createCanvas(650, 350);

    for (var i = 0; i < total; i++){
        randomCounts[i] = 0;
     }
}
```
The **draw()** function will run in a loop creating the objects.

The background is set so every loop it will refresh and hide the trail. A new variable **index** is created which takes the random numbers in the array and floors it, returning an integer from 0 to 19, and then it gets added to the array.

```js
// Draw the objects
function draw(){
    background(0);
    var index = floor(random(total));
    randomCounts[index]++;
```

The next thing is drawing the rectangles by giving them the stoke, stroke weight and a fill colour. A new variable is declared to calculate the width of the bars by dividing the width of the canvas by the number of the elements in the array. A **for** loop is created to generate the rectangles depending on the random number received.

```js
    stroke(0);
    strokeWeight(0.5);
    fill(255);

    var w = width/randomCounts.length;

    for (var x = 0; x < randomCounts.length; x++){
        rect(x * w, height - randomCounts[x], w - 1, randomCounts[x]);
    }
}
```

Result:

![Uniform Distribution](img/Sketch03.PNG?raw=true "Uniform Distribution")
