class Rock{

    constructor(x, y)
    {
    
    var circleOptions1 = {
        
        restitution:0.5,
        density:2,
        friction:0.0
    }
    
    
    this.body=Bodies.circle(x, y, 10, circleOptions1)
    this.r1=20
    this.image = loadImage("rock.png")

    World.add(world, this.body)
    }
    
            
        display(){

            push()
            translate(this.body.position.x, this.body.position.y);
            rotate(this.body.angle);

    
    imageMode(CENTER)
    image(this.image, 0, 0, this.r1*3, this.r1*3);    
    

    pop();
    
        }

    
    
    }