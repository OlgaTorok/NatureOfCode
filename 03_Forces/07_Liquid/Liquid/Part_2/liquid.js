
var Liquid = function (_x, _y, _w, _h, _c){

    this.location = createVector(_x, _y);
    this.width = _w;
    this.height = _h;
    this.cDrag = _c;

    this.display = function (){
        fill(255, 0, 0);
        rect(this.location.x, this.location.y, this.width, this.height);
    }
}
