const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
//preload the images here
backgroundImg = loadImage("GamingBackground.png");

}

function setup() {
  createCanvas(1000, 600);
  
  engine = Engine.create();
  world = engine.world;
  // create sprites here
ground=new Ground(1000,585,10000,20)

hero=new Hero(300,50,100)

rope= new Fly(hero.body,{x:250, y:50})

box1 = new Box (700,150,50,50)
box2 = new Box (700,200,50,50)
box3 = new Box (700,250,50,50)
box4 = new Box(700,300,50,50)
box5 = new Box(700,350,50,50)
box6 = new Box (700,400,50,50)
box7 = new Box (700,450,50,50)
box8 = new Box (700,500,50,50)
box9 = new Box(700,550,50,50)
box10 = new Box(700,600,50,50)
box11 = new Box (650,150,50,50)
box12 = new Box (650,200,50,50)
box13 = new Box (650,250,50,50)
box14 = new Box(650,300,50,50)
box15 = new Box(650,350,50,50)
box16 = new Box (650,400,50,50)
box17 = new Box (650,450,50,50)
box18 = new Box (650,500,50,50)
box19 = new Box(650,550,50,50)
box20 = new Box(650,600,50,50)

monster = new Monster(900,80,100)

}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  ground.display();
  hero.display();
  rope.display();

  box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();

    monster.display();
}


function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX, y:mouseY})
}
 