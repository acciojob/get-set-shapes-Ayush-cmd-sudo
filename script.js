//complete this code
class Rectangle {
constructor(width,height){
	this.x=width;
	this.y=height;
}
getWidth(){
	return(this.x);
}
	getHeight(){
		return(this.y);
	}

getArea(){
    return(this.x*this.y);
}
	
}

class Square extends Rectangle {
constructor(side){
	super(side,side);
}	
getPerimeter(){
	return(4*this.width);
}



}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
