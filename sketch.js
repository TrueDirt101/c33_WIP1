var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];


var divisionHeight=300;
var score =0;
var turns =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  
  background("black");
 
  
   

   Engine.update(engine);

   textSize(20)
    text("score : "+score,20,30);
    text("20", 750, 550)

    push();
  strokeWeight(5);
  stroke("yellow");
   line(0,450,800,450);
   pop();

   for(var i = 20; i<160; i=i+80)
   {
     text("20", i, 550);
   }
 for(var i = 180; i<400; i=i+80)
{
 text("10", i, 550)
}
for(var i = 400; i<560; i=i+80)
{
 text("5", i+30, 550)
}
for(var i = 560; i<700; i=i+80)
{
 text("10", i+30, 550)
}



   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
    
   }
   if(keyCode === 32&&turns<5 ){
    if (frameCount%10===0)
    {particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    
      turns=turns+1}
    
   
}
   
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
     var n=0;
   
     if(particles[j].body.position.y> 450 && particles[j].body.position.x<500 && n<5)
   {
    score = score+10;

    n=n+1;

  }
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   
}