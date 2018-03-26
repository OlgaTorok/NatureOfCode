// Declare walker object
var walker;

function setup() {
    createCanvas(650, 350);
    background(0);
    walker = new Walker();
}

function draw() {
    walker.render();
    walker.step();
}

function Walker(){

    this.x = width/2;
    this.y = height/2;

    this.render = function(){
        stroke(255);
        point(this.x, this.y);
    }

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

        this.x = constrain(this.x, 0, width);
        this.y = constrain(this.y, 0, height);
    }
}
