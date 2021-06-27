class slingshot {
    constructor(bodyA, pointB){
        var properties = {
            bodyA: bodyA,
            pointB: pointB,
            length: 10,
            stiffness: 0.05,
    
        } 
        this.shooter = Constraint.create(properties);
        World.add(world, this.shooter);
    }
    display(){ if(this.shooter.bodyA){

        
        line(this.shooter.bodyA.position.x, this.shooter.bodyA.position.y, this.shooter.pointB.x, this.shooter.pointB.y);
        

    }
}


    fly(){
        this.shooter.bodyA = null;
    }

}
