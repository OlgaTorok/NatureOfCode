function WindChime(_xpos, _ypos, _windMag, _start, _end){

    this.xpos = _xpos;
    this.ypos = _ypos;
    this.windMag = _windMag;
    this.startAngle = _start;
    this.endAngle = _end;
    this.windVec = createVector();
    this.time = 1000;



    this.update = function(){

        this.windDir = map(noise(this.time), 0 , 1, this.startAngle, this.endAngle);

        this.windVec = p5.Vector.fromAngle(radians(this.windDir));
        this.windVec.mult(this.windMag);
        this.time += 0.1;
    }

    this.display = function(){

        push();
        translate(this.xpos, this.ypos);
        scale(0.5, 0.5);

        // Add text for the windchime
        textSize(23);
        smooth();
        fill(255);
        textAlign(CENTER);
        text("Magitude: " + this.windMag, 0, 120);

        this.string = str(this.windVec.heading());
        text("Wind Direction: " + this.string.substr(0, 6), 0, 160);

        stroke(0);
        strokeWeight(1);
        fill(255);
        ellipse(0, 0, 150, 150);

        rotate(this.windVec.heading());
        line(-65, 0, 65, 0);
        triangle(40, -15, 65, 0, 40, 15);
        pop();
    }


}
