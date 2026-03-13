//complete this code
class Rectangle {
constructor(width,height){
	this.x=width;
	this.y=height;
}
getWidth(){
	console.log("width",this.x);
}
	getHeight(){
		console.log("height",this.y);
	}

getArea(){
	console.log("The area of the rectangle is :",this.x*this.y);
}
	
}

class Square extends Rectangle {
constructor(side){
	super(side,side);
}	
getPerimeter(){
	console.log(4*side);
}



}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
