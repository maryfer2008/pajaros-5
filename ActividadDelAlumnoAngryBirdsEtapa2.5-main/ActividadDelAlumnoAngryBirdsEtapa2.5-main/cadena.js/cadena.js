class Cadena{
  constructor(bodyA,bodyB){
var options={
bodyA:bodyA,
bodyB:bodyB,
stiffness:0.04,
length:10
}
this.cadena=Contraint.create(options);
World.add(world,this.cadena);
  }  
  display(){
var puntoA =this.cadena.bodyA.position;
var puntoB =this.cadena.bodyB.position;
strokeWeight(4);
line(puntoA.x,puntoA.y,puntoB.x,puntoB.y)
  }
}