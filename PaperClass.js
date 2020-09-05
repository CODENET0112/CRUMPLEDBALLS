class Paper
{
    constructor(x,y,width,height)
    {
     var options=
     {
         isStatic:false,
         restitution:0.3,
         friction:0.5,
         density:1.2
         
     }
         this.body= Bodies.circular(x,y,parameter,[options],[maxSides])
         this.radius = radius
         this.maxSides = maxSides
         World.add(world, this.body)
    }
   
    display(){
        var pos =this.body.position;
        fill("white"); 
       circular(pos.x, pos.y, this.width, this.height);
      
    }
}