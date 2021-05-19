
class Paper{
    constructor(x,y,radius){
        var options = {
            
            'restitution' : 0,
            'friction': 0,
            'density': 1.2,   
  }
this.body = Bodies.circle(x,y,radius,options);
this.radius= radius   
this.image= loadImage("paper.png")

World.add(world, this.body);
}
display(){
    //ellipseMode(RADIUS);
    push () ;
    translate (this.body.position.x, this.body.position.y);


        fill('yellow');
    // circle(this.body.position.x, this.body.position.y, this.radius);
    image(this.image,0,0, this.radius,this.radius);

    pop();

}
};
