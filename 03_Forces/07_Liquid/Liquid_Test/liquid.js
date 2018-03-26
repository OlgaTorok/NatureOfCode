var Liquid = function(){
    this.location = createVector(0, height / 2);
    

    this.display = function(){
        noStroke();
        fill(255);
        rect(location.x, location.y, width, height / 2);
    }
    
    this.isInside = function(){
        if(location.x > 0 && location.x < width && location.y > height / 2 && location.y < height){
            return true;    
        } else {
            return false;
        }
    }
    
}