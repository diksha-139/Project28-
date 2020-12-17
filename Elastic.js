class Elastic{

    constructor(bodyA,pointB){
        var options={
        bodyA : bodyA,
        pointB : pointB,
        stiffness : 0.004
        }
       
    this.pointB=pointB;
    this.elastic = Constraint.create(options);
    
    World.add(world,this.elastic);
    }
    fly(){
        this.elastic.bodyA=null;
    }
    attach(body){
        this.elastic.bodyA=body;
    }
    display(){
        if(this.elastic.body){
        push ();
        strokeWeight(4);
        stroke(255);
        line(this.elastic.bodyA.position.x,this.elastic.bodyA.position.y,this.pointB.x,this.pointB.y);
        pop ();
        }
    }

}