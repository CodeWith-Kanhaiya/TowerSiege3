class Slinglaunch{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 1,
        }
        this.poly = Constraint.create(options);
        this.pointB = pointB      
        World.add(world, this.poly);
    }

      attach (body)
      {
        this.poly.bodyA = body;
      }

      fly ()
      {
        this.poly.bodyA = null;
      }

    display(){
        if (this.poly.bodyA){
        var pointA = this.poly.bodyA.position;
        var pointB = this.pointB

        strokeWeight(4);
        stroke("turquoise");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        
        }
    }
    
}