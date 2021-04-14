class Sand{
constructor(x,y,width,height){

var options={
'restitution':1.3,
'friction':5,
'density':1
}
this.body=Bodies.circle(150,50,40,options)
World.add(world,this.body)
}
display()
}