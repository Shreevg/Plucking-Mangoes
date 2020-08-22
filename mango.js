class Mango{

    constructor(x, y)
    {
    
    var circleOptions = {
        
        restitution:0.5,
        density:2,
        friction:0.0
    }
    
    
    this.ball=Bodies.circle(x, y, 10, circleOptions)
    this.r1=20
    this.image = loadImage("mango.png")

    World.add(world, this.ball)
    }
    
            
        display(){

            push()
            translate(this.ball.position.x, this.ball.position.y);
            rotate(this.ball.angle);

    
    imageMode(CENTER)
    image(this.image, 0, 0, this.r1*4, this.r1*4);    

    pop();
    
        }

    
    
    }