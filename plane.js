class Plane{
constructor(x,y,width,height){

var options={
'friction':1.0
}
    this.body=Bodies.rectangle(x,y,width,height,options)
    this.width=width;
    this.height=height;
    
    World.add(world,this.body);
}
display(){}
}