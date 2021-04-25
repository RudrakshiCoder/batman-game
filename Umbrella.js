class Umbrella{
    constructor(x,y,radius){
        var options ={
            isStatic:true,
            friction:1,
            density:2
        }

        this.body = Bodies.circle(x,y,radius,options);
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        image(man_image,pos.x,pos.y,200,200);
    }
}