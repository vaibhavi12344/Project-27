class Stone{
constructor(x,y,width,height){

var options={
'restitution':0.8,
'density':2,
'friction':1
}
this.body=Bodies.rectangle(x,y,width,height,options);
World.add(world,this.body)


}
display(){}
}
