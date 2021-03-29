class Plinko{

    constructor(x,y,r){

        var options ={

            isStatic: true

        }

        this.radius = radius;

        this.body = Bodies.circle(x,y, this,radius, options);

        World.add(world, this.body);
    }

    display(){

        var pos = this.body.position;

        push();

        fill("white")
        ellipseMode(RADIUS)
        ellipse(x,y, this.radius)

        pop();


    }
}