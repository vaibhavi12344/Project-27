class Hammer{
constructor(x,y,width,height){

MouseY=this.body.position.y;

var options= {
'restitution':0.5,
'density':2,
'friction':1
};
this.body=Bodies.rectangle(x,y,50,50,options)

World.add(world,this.body)
}

display(){
}
}
