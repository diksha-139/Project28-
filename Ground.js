class Ground{

    constructor(x,y,w,h){
        this.w=w;
        this.h=h;
        this.body=Bodies.rectangle(x,y,this.w,this.h,{isStatic:true});
        World.add(world,this.body);
    }

    display(){

        push ();
        rectMode(CENTER);
        fill("brown");
        rect(this.body.position.x,this.body.position.y,this.w,this.h);
        pop ();
    }
}