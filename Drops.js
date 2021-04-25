class Drops{
    constructor(x,y,radius){
        var options = {
            'restitution':0.1,
            'friction':0.002,
            

            
        }

        this.body = Bodies.circle(x,y,radius,options);
        this.x = x;
        this.y = y;
        this.radius = radius;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        fill("blue");
        ellipseMode(RADIUS);
        circle(pos.x,pos.y,4,4);
    }

    update(){
        if(this.body.position.y>700){
            Matter.body.setPosition(this.body,{x:random(0,400),y:random(1,5)})
            
        }
    }

}