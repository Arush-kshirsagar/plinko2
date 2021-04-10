const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;
var score=0;
var particle;
var turn=0;
var GameState='PLAY';

function setup() {
  createCanvas(800,800);
  engine=Engine.create();
  world=engine.world;
  Engine.run(engine);
  ground=new Ground(width/2,height,width,20);
  for(var a=0;a<=width;a=a+80){
    divisions.push(new Divisions(a,height-divisionHeight/2,10,divisionHeight));
  }
  for(var b=75;b<=width;b=b+50){
    plinkos.push(new Plinko(b,75))
  }
  for(var b=50;b<=width-10;b=b+50){
    plinkos.push(new Plinko(b,175));
  }
  for(var b=75;b<=width;b=b+50){
    plinkos.push(new Plinko(b,275))
  }
  for(var b=50;b<=width-10;b=b+50){
    plinkos.push(new Plinko(b,375))
  }
}


function draw() {
  background(0);  
  textSize(40);
  text("Score"+score,width-700,50)
  text("200",480,500);
  text("200",570,500);
  text("200",650,500);
  text("100",400,500);
  text("100",330,500);
  text("100",250,500);
  text("500",170,500);
  text("500",90,500);
  text("500",10,500);

  
  
  Engine.update(engine);
  ground.display();
  for(var i=0;i<plinkos.length;i++){
    plinkos[i].display();
  }
  if(frameCount%60===0){
    particles.push(new Particle(random (width/2-30,width/2+30),10,10))
    score++
  }
  for(var b=0;b<particles.length;b++){
    particles[b].display();
  }
  for(var a=0;a<divisions.length;a++){
    divisions[a].display();
  }
  if (turn===5){
    GameState='END'
  }

  if(GameState==='END'){
    fill(red);
    textSize(100);
    text("Game Over",350,350)
  }

  if(particle!=null){
    particle.display
  }
  elif
  elif
  
 
}