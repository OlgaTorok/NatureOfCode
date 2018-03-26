
var Liquid = function (_x, _y, _w, _h, _c, _r, _g, _b, _a){

    this.location = createVector(_x, _y);
    this.width = _w;
    this.height = _h;
    this.cDrag = _c;
    this.red = _r;
    this.green = _g;
    this.blue = _b;
    this.opacity = _a;

    
    // Is the mover in the liquid?
    this.contains = function(m){
        
        return m.location.y > this.location.y && m.location.y < this.location.y + this.height &&
                m.location.x > this.location.x && m.location.x < this.location.x + this.width;
    }

    // Calculate drag force
    this.calcDrag = function(m){
        var speed = m.velocity.mag();
        // Magnitude is coefficient * speed squared
        var dragMag = this.cDrag * speed * speed; 
        
        // Direction is inverse of velocity
        var dragForce = m.velocity.copy();
        dragForce.mult(-1);
        
        // Scale according to magnitude
        // dragForce.setMag(dragMagnitude);
        dragForce.normalize();
        dragForce.mult(dragMag);
        return dragForce;
    }
    
    this.display = function (){
        fill(_r,_g, _b, _a);
        rect(this.location.x, this.location.y, this.width, this.height);
    }
}
