class Stone{
    constructor(x,y,r){
var options ={
   
    restitution:0,
    friction:1,
    density:1,
    isStatic:false

}
this.r=r;
this.body=Bodies.circle(x,y,this.r/2,options);
this.image = loadImage("stone.png");
World.add(world,this.body);

    }
    display(){
       
        push ();
   
        translate (this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image (this.image,0,0,this.r,this.r);
        pop ();
    }
}