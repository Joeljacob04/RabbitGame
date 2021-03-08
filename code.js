var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["f2ecd00c-a6c1-41ea-8568-2717bf5f3d64","c72382d6-6dd8-473d-a3fd-ca31ed74f3d9","bb86985d-eb7c-42b9-8744-40d506d7bf0e","87f9b9f6-239f-4c7a-b469-b0742cfc875a","721be164-380c-43ca-a8f6-4548271aba78","0d40aa19-d944-4bf8-9354-51b35630fb91","edf53008-7fd6-4ec0-9cf6-3553616fd8c3","1b6d0127-1def-46a0-9326-dab468241c9f","80848742-4964-40a1-b37c-2153313fa7cd","76ea20ae-f7cf-42ce-9fb4-2dc6f618f0f1","05f108fe-0997-4524-94b0-2bf053ced3dc","8b1ddac6-3de7-42e4-abcf-d22e1723987b","6d971a92-b5b7-40bc-96c8-a0f679c79c62","18f17b31-0507-412c-ae72-a14217a8ddcf","b2cee359-a984-4fb0-8542-518e154fe4b7","8817845a-9c50-43cb-aa98-a7cb1064ef9d","dca3879c-88b7-4fcf-bc71-6754e1354663"],"propsByKey":{"f2ecd00c-a6c1-41ea-8568-2717bf5f3d64":{"name":"Ground 1","sourceUrl":"assets/v3/animations/jEC_xz59xh9fbCGBnzfK5otqrT6pqfmBQ19qEunD8N8/f2ecd00c-a6c1-41ea-8568-2717bf5f3d64.png","frameSize":{"x":400,"y":311},"frameCount":1,"looping":true,"frameDelay":4,"version":"GB1lCGLnU4J6hJWq9nEPqLPW6442zfpR","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":311},"rootRelativePath":"assets/v3/animations/jEC_xz59xh9fbCGBnzfK5otqrT6pqfmBQ19qEunD8N8/f2ecd00c-a6c1-41ea-8568-2717bf5f3d64.png"},"c72382d6-6dd8-473d-a3fd-ca31ed74f3d9":{"name":"Spike","sourceUrl":null,"frameSize":{"x":59,"y":24},"frameCount":1,"looping":true,"frameDelay":12,"version":"0NejPl0lCjI6H4ltGRnHVa4GONdTqmvN","loadedFromSource":true,"saved":true,"sourceSize":{"x":59,"y":24},"rootRelativePath":"assets/c72382d6-6dd8-473d-a3fd-ca31ed74f3d9.png"},"bb86985d-eb7c-42b9-8744-40d506d7bf0e":{"name":"Spike1","sourceUrl":null,"frameSize":{"x":29,"y":23},"frameCount":1,"looping":true,"frameDelay":12,"version":"YZ1pYvtVqn8qZ5sZ9g2UXfNShCWYWmGS","loadedFromSource":true,"saved":true,"sourceSize":{"x":29,"y":23},"rootRelativePath":"assets/bb86985d-eb7c-42b9-8744-40d506d7bf0e.png"},"87f9b9f6-239f-4c7a-b469-b0742cfc875a":{"name":"Spike2","sourceUrl":null,"frameSize":{"x":29,"y":22},"frameCount":1,"looping":true,"frameDelay":12,"version":"UZ4P0k1t5mr2SOfrSQRJ1_OEd2sKHNe8","loadedFromSource":true,"saved":true,"sourceSize":{"x":29,"y":22},"rootRelativePath":"assets/87f9b9f6-239f-4c7a-b469-b0742cfc875a.png"},"721be164-380c-43ca-a8f6-4548271aba78":{"name":"Ground 2","sourceUrl":null,"frameSize":{"x":200,"y":40},"frameCount":1,"looping":true,"frameDelay":12,"version":"3szDtkJ1wc86fxLxXMZr7z951rwJjpvi","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":40},"rootRelativePath":"assets/721be164-380c-43ca-a8f6-4548271aba78.png"},"0d40aa19-d944-4bf8-9354-51b35630fb91":{"name":"Ladder","sourceUrl":"assets/v3/animations/jEC_xz59xh9fbCGBnzfK5otqrT6pqfmBQ19qEunD8N8/0d40aa19-d944-4bf8-9354-51b35630fb91.png","frameSize":{"x":60,"y":90},"frameCount":1,"looping":true,"frameDelay":4,"version":"dLi15ZF6tW9nWYD0CTs.TquASqfHeSXJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":90},"rootRelativePath":"assets/v3/animations/jEC_xz59xh9fbCGBnzfK5otqrT6pqfmBQ19qEunD8N8/0d40aa19-d944-4bf8-9354-51b35630fb91.png"},"edf53008-7fd6-4ec0-9cf6-3553616fd8c3":{"name":"Ground 3","sourceUrl":"assets/v3/animations/jEC_xz59xh9fbCGBnzfK5otqrT6pqfmBQ19qEunD8N8/edf53008-7fd6-4ec0-9cf6-3553616fd8c3.png","frameSize":{"x":150,"y":34},"frameCount":1,"looping":true,"frameDelay":4,"version":"I3vqy7WhjgILmiruOwZ94so1ZgV.FFjO","loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":34},"rootRelativePath":"assets/v3/animations/jEC_xz59xh9fbCGBnzfK5otqrT6pqfmBQ19qEunD8N8/edf53008-7fd6-4ec0-9cf6-3553616fd8c3.png"},"1b6d0127-1def-46a0-9326-dab468241c9f":{"name":"Ground 4","sourceUrl":"assets/v3/animations/jEC_xz59xh9fbCGBnzfK5otqrT6pqfmBQ19qEunD8N8/1b6d0127-1def-46a0-9326-dab468241c9f.png","frameSize":{"x":150,"y":31},"frameCount":1,"looping":true,"frameDelay":4,"version":"1gZJpXfdWxU_jhiPMbwKf85WeV9yujLH","loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":31},"rootRelativePath":"assets/v3/animations/jEC_xz59xh9fbCGBnzfK5otqrT6pqfmBQ19qEunD8N8/1b6d0127-1def-46a0-9326-dab468241c9f.png"},"80848742-4964-40a1-b37c-2153313fa7cd":{"name":"Ladder 1","sourceUrl":"assets/v3/animations/jEC_xz59xh9fbCGBnzfK5otqrT6pqfmBQ19qEunD8N8/80848742-4964-40a1-b37c-2153313fa7cd.png","frameSize":{"x":50,"y":75},"frameCount":1,"looping":true,"frameDelay":4,"version":"i1k7Oft1BugDv_WtWeqQXzI0RpFHyitD","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":75},"rootRelativePath":"assets/v3/animations/jEC_xz59xh9fbCGBnzfK5otqrT6pqfmBQ19qEunD8N8/80848742-4964-40a1-b37c-2153313fa7cd.png"},"76ea20ae-f7cf-42ce-9fb4-2dc6f618f0f1":{"name":"Ground 5","sourceUrl":null,"frameSize":{"x":150,"y":37},"frameCount":1,"looping":true,"frameDelay":12,"version":"msMXa6bV00SXR.OMze3FwNudyz4g4.EA","loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":37},"rootRelativePath":"assets/76ea20ae-f7cf-42ce-9fb4-2dc6f618f0f1.png"},"05f108fe-0997-4524-94b0-2bf053ced3dc":{"name":"Spike 1","sourceUrl":null,"frameSize":{"x":73,"y":73},"frameCount":1,"looping":true,"frameDelay":12,"version":"GnBfTi0l5x0bNFlOYfv_ILAWCg3ME6SG","loadedFromSource":true,"saved":true,"sourceSize":{"x":73,"y":73},"rootRelativePath":"assets/05f108fe-0997-4524-94b0-2bf053ced3dc.png"},"8b1ddac6-3de7-42e4-abcf-d22e1723987b":{"name":"bunny3","sourceUrl":null,"frameSize":{"x":25,"y":31},"frameCount":2,"looping":true,"frameDelay":4,"version":"j_8y07GZJvwDfCri5BPTlemHf9fPvJ9o","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":31},"rootRelativePath":"assets/8b1ddac6-3de7-42e4-abcf-d22e1723987b.png"},"6d971a92-b5b7-40bc-96c8-a0f679c79c62":{"name":"bunny2","sourceUrl":null,"frameSize":{"x":25,"y":31},"frameCount":1,"looping":true,"frameDelay":12,"version":"gcPl2hKmbnI4LXQMslmFX2Rovg_0cZIH","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":25,"y":31},"rootRelativePath":"assets/6d971a92-b5b7-40bc-96c8-a0f679c79c62.png"},"18f17b31-0507-412c-ae72-a14217a8ddcf":{"name":"apple","sourceUrl":null,"frameSize":{"x":20,"y":24},"frameCount":1,"looping":true,"frameDelay":12,"version":"4msvwGM1XHyd4AUAEI4U3VCkNSmrrTlV","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":24},"rootRelativePath":"assets/18f17b31-0507-412c-ae72-a14217a8ddcf.png"},"b2cee359-a984-4fb0-8542-518e154fe4b7":{"name":"spike 2","sourceUrl":null,"frameSize":{"x":69,"y":15},"frameCount":1,"looping":true,"frameDelay":12,"version":"gSGBtacnscxU8s.0uHGC4MBxkIucZUjJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":69,"y":15},"rootRelativePath":"assets/b2cee359-a984-4fb0-8542-518e154fe4b7.png"},"8817845a-9c50-43cb-aa98-a7cb1064ef9d":{"name":"bunny1","sourceUrl":null,"frameSize":{"x":25,"y":31},"frameCount":2,"looping":true,"frameDelay":4,"version":"7ktHs3pHRhFpIfwO2DgrJEg3ldpeouFI","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":31},"rootRelativePath":"assets/8817845a-9c50-43cb-aa98-a7cb1064ef9d.png"},"dca3879c-88b7-4fcf-bc71-6754e1354663":{"name":"medal","sourceUrl":null,"frameSize":{"x":25,"y":45},"frameCount":1,"looping":true,"frameDelay":12,"version":"yXKeU7_r1q8DSoyCeQ9Lu9HdccyWqZzQ","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":25,"y":45},"rootRelativePath":"assets/dca3879c-88b7-4fcf-bc71-6754e1354663.png"}}};
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

var paddle4 = createSprite(190,310,45,90);
paddle4.shapeColor="lightblue";

var paddle10 = createSprite(200,285,120,10);
paddle10.shapeColor="lightblue";

var paddle11 = createSprite(70,40,50,10);
paddle11.shapeColor="lightblue";

var ladder1 = createSprite(378,340,20,102);
ladder1.shapeColor="lightblue";

var ladder2 = createSprite(255,258,10,85);
ladder2.shapeColor="lightblue";

var ladder3 = createSprite(30,180,10,90);
ladder3.shapeColor="lightblue";

var ladder4 = createSprite(150,105,10,100);
ladder4.shapeColor="lightblue";

var ladder5 = createSprite(310,105,10,90);
ladder5.shapeColor="lightblue";

var ground1 = createSprite(200,402,400,30);
ground1.shapeColor="lightblue";

var ground = createSprite(235,400,400,200);
ground.setAnimation("Ground 1");

var spike1 = createSprite(20,405,60,30);
spike1.shapeColor="lightblue";

var spike = createSprite(30,395,400,200);
spike.setAnimation("Spike");

var spike2 = createSprite(158,150,400,200);
spike2.setAnimation("spike 2");
spike2.velocityY="0";

var spike4 = createSprite(215,300,80,10);
spike4.setAnimation("Spike1");
spike4.velocityY="0";

var ground2 = createSprite(330,289,190,10);
ground2.shapeColor="lightblue";

var ground = createSprite(330,300,400,200);
ground.setAnimation("Ground 2");

var ground3 = createSprite(265,214,140,10);
ground3.shapeColor="lightblue";

var ground = createSprite(265,224,400,200);
ground.setAnimation("Ground 3");

var ground4 = createSprite(58,214,120,10);
ground4.shapeColor="lightblue";

var ground = createSprite(45,225,400,200);
ground.setAnimation("Ground 4");

var ground5 = createSprite(90,132,180,10);
ground5.shapeColor="lightblue";

var ground = createSprite(90,145,400,200);
ground.setAnimation("Ground 2");

var ground6 = createSprite(160,55,140,10);
ground6.shapeColor="lightblue";

var ground = createSprite(160,65,400,200);
ground.setAnimation("Ground 3");

var ground7 = createSprite(280,133,140,10);
ground7.shapeColor="lightblue";

var ground = createSprite(280,145,400,200);
ground.setAnimation("Ground 5");

var ground8 = createSprite(340,58,120,10);
ground8.shapeColor="lightblue";

var ground = createSprite(350,70,400,200);
ground.setAnimation("Ground 4");

var ladder = createSprite(375,340,400,200);
ladder.setAnimation("Ladder");

var ladder = createSprite(255,258,400,200);
ladder.setAnimation("Ladder 1");

var ladder = createSprite(30,180,400,200);
ladder.setAnimation("Ladder 1");

var ladder = createSprite(150,100,400,200);
ladder.setAnimation("Ladder 1");

var ladder = createSprite(310,100,400,200);
ladder.setAnimation("Ladder 1");

var paddle1 = createSprite(158,214,80,10);
paddle1.shapeColor="brown";

var paddle2 = createSprite(65,72,20,40);
paddle2.shapeColor="lightblue";

var spike3 = createSprite(140,380,80,10);
spike3.setAnimation("Spike1");
spike3.velocityY="0";

var Spike = createSprite(155,260,400,200);
Spike.setAnimation("Spike 1");

var apple = createSprite(385,40,20,20);
apple.setAnimation("apple");

var spike5 = createSprite(80,50,60,10);
spike5.setAnimation("Spike1");
spike5.velocityY="0";

var paddle6 = createSprite(255,74,10,50);
paddle6.shapeColor="lightblue";

var paddle7 = createSprite(370,228,65,40);
paddle7.shapeColor="lightblue";

var paddle8 = createSprite(196,150,2,45);
paddle8.shapeColor="lightblue";

var paddle9 = createSprite(370,160,45,80);
paddle9.shapeColor="lightblue";

var bunny = createSprite(80,375,5,5);
bunny.setAnimation("bunny2");

var gameState = "serve";

var computerScore = 0;
var playerScore = 0;

function draw() {
  
   background("lightblue");
   
    if (gameState === "serve") {
    fill("blue");
    textSize(25);
    textFont("forte");
    text("Press 'S' to Start",125,190);
    spike2.velocityY="0";
    spike3.velocityY="0";
    spike4.velocityY="0";
    spike5.velocityY="0";
    bunny.x=80;
    bunny.y=375;
    bunny.setAnimation("bunny2");
    }
    
    fill("yellow");
    textSize(25);
    textFont("Arial Rounded MT Bold");
    text(computerScore, 170,20);
    text(playerScore, 230,20);
  
    if (keyDown("s") &&  gameState === "serve") {
      gameState = "play";
      spike2.velocityY="2";
      spike3.velocityY="4";
      spike4.velocityY="4";
      spike5.velocityY="4";
      bunny.x=80;
      bunny.y=375;
      bunny.setAnimation("bunny2");
    }
    
    if(bunny.isTouching(paddle2) || bunny.isTouching(paddle4) || bunny.isTouching(paddle6) || bunny.isTouching(paddle7) || bunny.isTouching(paddle8) || bunny.isTouching(paddle9)){
    bunny.y=bunny.y+4;
    }
    
   if(bunny.isTouching(spike1) || bunny.isTouching(spike3) || bunny.isTouching(spike4) || bunny.isTouching(spike5) || bunny.isTouching(spike2)){ 
    bunny.x=80;
    bunny.y=375;
    bunny.setVelocity(0,0);
    playSound("assets/category_hits/retro_game_simple_impact_3.mp3");
    computerScore = computerScore + 1;
    }
   
   if(bunny.isTouching(ladder1) || bunny.isTouching(ladder2) || bunny.isTouching(ladder3) || bunny.isTouching(ladder4) || bunny.isTouching(ladder5)){
   if(keyDown("up")){
    bunny.y=bunny.y-6;
    }
   }
   
   if(bunny.isTouching(ladder5)){
     playSound("assets/category_human/character_sharon_awesome_2.mp3");
   }
   
    if(bunny.isTouching(ladder1)){
     playSound("assets/category_human/character_jimmy_woah_1.mp3");
   }
   
    if(bunny.isTouching(ladder3)){
     playSound("assets/category_human/character_calvin_amazing_1.mp3");
   }
   
   if(bunny.isTouching(ladder1) || bunny.isTouching(ladder2) || bunny.isTouching(ladder3) || bunny.isTouching(ladder4) || bunny.isTouching(ladder5)){
   if(keyDown("down")){
    bunny.y=bunny.y+6;
    }
   }
   
   if(bunny.isTouching(paddle1) || bunny.isTouching(ground1) || bunny.isTouching(ground2) || bunny.isTouching(ground3) || bunny.isTouching(ground4) || bunny.isTouching(ground5) || bunny.isTouching(ground6) || bunny.isTouching(ground7) || bunny.isTouching(ground8)){
      if(keyDown("right")){
        bunny.setAnimation("bunny1");
        bunny.x=bunny.x+6;
    }
    }
    
    if(bunny.isTouching(paddle1) || bunny.isTouching(ground1) || bunny.isTouching(ground2) || bunny.isTouching(ground3) || bunny.isTouching(ground4) || bunny.isTouching(ground5) || bunny.isTouching(ground6) || bunny.isTouching(ground7) || bunny.isTouching(ground8)){
    if(keyDown("left")){
      bunny.setAnimation("bunny3");
      bunny.x=bunny.x-6;
    }
    }
    
    if(bunny.isTouching(apple)){
      playerScore = playerScore + 5;
    }
    
    if (playerScore === 5){
    gameState = "over";
    spike2.velocityY="0";
    spike3.velocityY="0";
    spike4.velocityY="0";
    spike5.velocityY="0";
    bunny.x=350;
    bunny.y=40;
    spike4.y=300;
    spike3.y=380;
    spike2.y=150;
    bunny.setAnimation("bunny2");
    playSound("assets/category_female_voiceover/you_win_female.mp3");
    fill("red");
    textSize(20);
    textFont("cooper black");
    text("Game Over!",150,180);
    text("YOU WIN",180,120);
    text("Press 'R' to Restart",110,200);
  }
  
  if (computerScore === 5){
    gameState = "over";
    spike2.velocityY="0";
    spike3.velocityY="0";
    spike4.velocityY="0";
    spike5.velocityY="0";
    bunny.x=80;
    bunny.y=375;
    spike4.y=300;
    spike3.y=380;
    spike2.y=150;
    bunny.setAnimation("bunny2");
    playSound("assets/category_female_voiceover/you_lose_female.mp3");
    fill("green");
    textSize(20);
    textFont("cooper black");
    text("Game Over!",150,180);
    text("YOU LOSE",180,120);
    text("Press 'R' to Restart",110,200);
  }
  
  if (keyDown("r") && gameState === "over") {
    gameState = "serve";
    computerScore = 0;
    playerScore = 0;
  }
  
    createEdgeSprites();
    spike2.bounceOff(paddle1);
    spike2.bounceOff(ground5);
    spike3.bounceOff(paddle10);
    spike3.bounceOff(ground1);
    spike4.bounceOff(paddle10);
    spike4.bounceOff(ground1);
    spike5.bounceOff(ground5);
    spike5.bounceOff(paddle11);
    bunny.collide(edges);
    
    Spike.rotation=Spike.rotation-6;
  
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
