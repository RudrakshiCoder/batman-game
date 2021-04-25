const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Render = Matter.Render;

var drop;
var drops = [];
var maxDrops = 200;
var man_image;

function preload(){
    man_image = loadImage("walking_1.png");
}

function setup(){
 createCanvas(500,700);

 engine = Engine.create();
  world  = engine.world;
   
  if(frameCount%100 === 0){
    for(var i=0; i<maxDrops; i++){
      drops.push(new Drops(random(0,400),random(0,400),4,4));
    }
  }

  umbrella = new Umbrella(200,200,100,100);
 
}

function draw(){

 background("black");
 Engine.update(engine);

 for(var i=0; i<maxDrops; i++){
     drops[i].display();
     drops[i].update();

 }

 umbrella.display();

 
}   

