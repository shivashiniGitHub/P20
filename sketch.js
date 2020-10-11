var car,wall;

var speed,weight

var car1,car2,car3,car4;

function preload(){

  car1 = loadImage("purple_car.png");  

  car2 = loadImage("red_car.png");  

  car3 = loadImage("green_car.png");  

  car4 = loadImage("yellow_car.png");  

}


function setup() {
    createCanvas(1600,600);
    car = createSprite(125,300,50,50);
    car.addImage("C1",car1);
    car.addImage("C2",car2);
    car.addImage("C3",car3);
    car.addImage("C4",car4);
    car.scale = 0.5;
    car.velocityX = speed;

    wall = createSprite(1500,300,60,height/2);
    wall.shapeColor = "white";
      
    speed = random(55,90);
    weight = random(400,1500);
}

function draw() {
  background("black"); 
    
  if(wall.x - car.x < (car.width + wall.width/2)){
  car.velocityX = 0;

    var deformation = 0.5 * weight * speed * speed/22500;

    if( deformation > 180){
     car.changeImage("C2",car2);
    }

    if(deformation<180 && deformation>100){
     car.changeImage("C4",car4);
    }

    if(deformation < 100){
     car.changeImage("C3",car3) ;   
    }

  }

  drawSprites();

}