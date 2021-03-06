class Block {
    constructor(x, y, width, height) {
      var options = {
           isStatic : false,
          'restitution':0.8,
          'friction':1.0
      }
      this.image = loadImage("Hexagon.jpg");
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visibility = 225;
      
      World.add(world, this.body);
    }

    score()
    {
      if(this.visibility<0 && this.visibility >- 105)
      {
        score++
      }
    }

    display(){

      if (this.body.speed<10)
      {
      var pos =this.body.position;
      var angle = this.body.angle
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("#FF5733");
      fill(176,196,222);
      rect(0, 0, this.width, this.height);
      pop();
      }else{
        World.remove(world,this.body);
        push();
        this.visibility=this.visibility-155;
        tint(255,this.visibility);
        image(this.image,this.body.position.x,this.body.position.y,50,50);
        pop();
      }
    }
  }
