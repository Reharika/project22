class Rope{
    constructor(body1,body1,pointA,pointB){
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.pointA,y:this.pointB}
        }
    this.body = Bodies.rectangle(x,y,w,h,options)
    World.add(world,this.body)
    this.width=w;
    this.height=h;

    }
    display()
    {

      var pointA =this.rope.bodyA.position;
      var pointB =this.rope.bodyB.position;

      strokeWeight(2);

      line(roof.position.x,roof.position.y,ball.position.x,ball.position.y);

    }
}