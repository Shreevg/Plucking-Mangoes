class PointLink{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.mango = Constraint.create(options);
        World.add(world, this.mango);
    }


fly(){

this.slingshot.bodyA=null

}





    display(){
        
        //if(this.mango.bodyA){


        var pointA = this.mango.bodyA.position;
        var pointB = this.mango.pointB
        strokeWeight(3);
        stroke("brown")
        line(pointA.x, pointA.y, pointB.x, pointB.y);
//    }
    }
    
}