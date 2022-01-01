var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var car1 = createSprite(125,75,10,10);
car1.shapeColor="red";

var car2 = createSprite(175,325,10,10);
car2.shapeColor="red";

var car3 = createSprite(225,75,10,10);
car3.shapeColor="red";

var car4 = createSprite(275,325,10,10);
car4.shapeColor="red";




var boundary1 = createSprite(50,150,100,10);
boundary1.shapeColor="black";


var boundary2 = createSprite(50,250,100,10);
boundary2.shapeColor="black";


var boundary3 = createSprite(100,102.5,10,105);
boundary3.shapeColor="black";


var boundary4 = createSprite(100,297.5,10,105);
boundary4.shapeColor="black";


var boundary5 = createSprite(100,297.5,10,105);
boundary5.shapeColor="black";


var boundary6 = createSprite(200,50,210,10);
boundary6.shapeColor="black";


var boundary7 = createSprite(200,350,210,10);
boundary7.shapeColor="black";


var boundary8 = createSprite(300,102.5,10,105);
boundary8.shapeColor="black";


var boundary9 = createSprite(300,297.5,10,105);
boundary9.shapeColor="black";


var boundary10 = createSprite(350,150,100,10);
boundary10.shapeColor="black";


var boundary11 = createSprite(350,250,100,10);
boundary11.shapeColor="black";



var sam = createSprite(25,200,10,10);
sam.shapeColor="red";
 

car1.velocityY= 8;
car2.velocityY= -8;
car3.velocityY= 8;
car4.velocityY= -8;




function draw() {
   
   if(sam.isTouching(car1))
  {
    sam.x=25;
    sam.y=200;
    life = life +1;
  }
  
  if(sam.isTouching(car2))
  {
    sam.x=25;
    sam.y=200;
    life = life +1;
  }
  
  if(sam.isTouching(car3))
  {
    sam.x=25;
    sam.y=200;
    life = life +1;
  }
  
  if(sam.isTouching(car4))
  {
    sam.x=25;
    sam.y=200;
    life = life +1;
  }
   
    createEdgeSprites();

  
  car1.bounceOff(boundary6);
  car1.bounceOff(boundary7);
  
  car2.bounceOff(boundary6);
  car2.bounceOff(boundary7);
  
  car3.bounceOff(boundary6);
  car3.bounceOff(boundary7);
  
  car4.bounceOff(boundary6);
  car4.bounceOff(boundary7);
  
  
  
 
  if(keyDown("right"))
  {
      sam.x=sam.x+6;
  }

  if(keyDown("left"))
  {
      sam.x=sam.x-6;
  }
  
  
  
  
 
  
   background("white");
  text("Lives: " + life,25,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,150,52,100);
  fill("yellow");
  rect(345,150,52,100);
  
 
  
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
