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

function Walker(){

    this.x = width / 2;
    this.y = height / 2;

    this.render = function(){
        stroke(225);
        strokeWeight(4);
        point(this.x, this.y);
    };

    this.step = function(){
        var probArr = [];
        probArr[0] = 1;
        probArr[1] = 1;
        probArr[2] = 2;
        probArr[3] = 3;
        probArr[4] = 3;

        var index = floor(random(probArr.length));
        var r = probArr[index];

        this.x = constrain(this.x, 0, width - 1);
        this.y = constrain(this.y, 0, height - 1);
    };

}
