//inktober 2017
//7
//masks
//this p5 play library is amazing thankyou.


var walker;
var grassGroup;


function setup() {
  createCanvas(windowWidth, windowHeight);
 

  grassGroup = new Group();
    for (var i = 0; i < 50; i++) {
    var grass = createSprite(random(0, width), random(0, height));
    grass.addAnimation("normal", "grass001.png", "grass003.png");
  
    //grass.setSpeed(random(2, 3), random(0, 360));

    //scale affects the size of the collider
    grass.scale = random(0.5, 1);
    //mass determines the force exchange in case of bounce
   //grass.mass = grass.scale;
    grass.rotation = random(-10, 10);
    grass.immovable = true;

    grassGroup.add(grass);
  }

 walker = createSprite(width / 2, height / 3, 40, 40);
  walker.addAnimation("walking", "walk001.png", "walk003.png");
  walker.addAnimation("still", "still001.png", "still002.png");
  walker.changeAnimation("still");
  
} //end of setup

function draw() {
  background(255);


 //lefs bounce against each others and against pandas

  drawSprites();
} //end of draw

function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    walker.changeAnimation("walking");
    walker.mirrorX(1);
    walker.setSpeed(1.5, 0);
  } else if (keyCode == DOWN_ARROW) {
    walker.changeAnimation("walking");
    walker.setSpeed(1.5, 90);
  } else if (keyCode == LEFT_ARROW) {
    walker.changeAnimation("walking");
    walker.mirrorX(-1);
    walker.setSpeed(1.5, 180);
  } else if (keyCode == UP_ARROW) {
    walker.changeAnimation("walking");
    walker.setSpeed(1.5, 270);
  } else if (key == ' ') {
    walker.changeAnimation("still");
    walker.setSpeed(0, 0);
  }
  //return false;
} //end of draw