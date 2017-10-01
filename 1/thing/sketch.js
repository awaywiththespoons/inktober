//inktober 2017
//1 
//first a thing
//this p5 play library is amazing thankyou.

var thing; // this is the sprite object

function setup() {

  createCanvas(windowWidth, windowHeight);
  //create a  new sprite object 
  thing = createSprite(200, 150, 150, 200);

  //add the 3 animations to the object
  //(label, first frame, last frame)
  thing.addAnimation("floating", "thing_still01.png", "thing_still02.png");
  thing.addAnimation("moving", "thing_walk01.png", "thing_walk02.png");
  thing.addAnimation("spinning", "thing_walk01.png", "thing_walk01.png");

}

function draw() {
  background(255, 255, 255);

  //move LEFT towards mouse
  if (mouseX < thing.position.x + 10) {
    thing.changeAnimation("moving");
    //flip horizontally
    thing.mirrorX(1);
    //negative x velocity: move left
    thing.velocity.x = -1;
  }

  //move RIGHT towards mouse
  else if (mouseX > thing.position.x - 10) {
    thing.changeAnimation("moving");
    //unflip 
    thing.mirrorX(-1);
    thing.velocity.x = 1;
  }
        //STILL
  else {
    //if close to the mouse
    thing.changeAnimation("floating"); //change to floating animation sequance
    thing.velocity.x = 0; //don't move
  }

  // SPINNING
  if (mouseIsPressed) {
    //the rotation is not part of the spinning animation
    thing.rotation -= 10;
    thing.changeAnimation("spinning");
  }
  else
    thing.rotation = 0;
    


  //draw the sprite
  drawSprites();
}