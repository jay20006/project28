class Stone {
constructor(x,y,width,height,angle){
var options= {
isStatic:false,
restitution:0,
friction:1,
density:1.2

}
this.x=x;
this.y=y;
this.width=width;
this.height=height;
this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
this.image=loadImage("images/stone.png");
World.add(world,this.body)
}
 display(){
var  angle=this.body.angle;
push();
translate=(this.body.position.x,this.body.position.y);
rotate(angle);
imageMode(CENTER);
image(this.image, 0, 0, this.width, this.height);
Pop();
 }
}