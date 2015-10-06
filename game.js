'use strict';

var author = "jajaio";

var game = new Phaser.Game(320,568,Phaser.AUTO,'game',
  {preload:preload,create:create,update:update,render:render});

var background;
var bird;
var pipe1t;
var pipe1b;
var pipe2t;
var pipe2b;
var pipe3t;
var pipe3b;
var centery;

function preload() {
  game.stage.backgroundColor = '#bbbbbb';
  game.load.image("background","assets/background.gif");
  game.load.spritesheet("bird","assets/bird.png",80,48);
  game.load.image("pipet","assets/pipet.gif");
  game.load.image("pipeb","assets/pipeb.gif");
}

function create() {
  function flap(){
    bird.body.velocity.y = -400;
  }
  centery=game.height/2; //centery is center y
  //Add our Background
  background = game.add.tileSprite(0,0,320,568,"background");
  background.autoScroll(-100,0);
  //Add our bird and give it physics
  bird = game.add.sprite(10,284,"bird");
  //bird.scale.set(2);
  bird.smoothed = false;
  bird.animations.add('fly',[0,1], 6/*6 is the fps*/, true);
  bird.play('fly');
  //Add The Pipes
  pipe1t = game.add.sprite(400,30,"pipet");
  pipe1b = game.add.sprite(400,30,"pipeb");
  pipe2t = game.add.sprite(600,30,"pipet");
  pipe2b = game.add.sprite(600,30,"pibeb");
  pipe3t = game.add.sprite(800,30,"pipet");
  pipe3b = game.add.sprite(800,30,"pipeb");
  pipe1t.scale.set(3);
  pipe1b.scale.set(3);
  //Physics
  
  game.physics.enable(pipe1t, Phaser.Physics.ARCADE);
  game.physics.enable(pipe1b, Phaser.Physics.ARCADE);
  game.physics.enable(pipe2t, Phaser.Physics.ARCADE);
  game.physics.enable(pipe2b, Phaser.Physics.ARCADE);
  game.physics.enable(pipe3t, Phaser.Physics.ARCADE);
  game.physics.enable(pipe3b, Phaser.Physics.ARCADE);

  pipe1t.body.velocity.x = -100;
  pipe1b.body.velocity.x = -100;
  pipe2t.body.velocity.x = -100;
  pipe2b.body.velocity.x = -100;
  pipe3t.body.velocity.x = -100;
  pipe3b.body.velocity.x = -100;

  
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.physics.enable(bird, Phaser.Physics.ARCADE);
  bird.body.gravity.y = 1000;
  bird.body.collideWorldBounds = true;
  //Add some control to the bird
  game.input.onDown.add(flap);
  game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.add(flap); //The Higher the Negative number, the higher our bird will jump.  
}

function startPipe(t, b){
  var offset = 175;
  var margin = 50;
  var pipey = game.rnd.integerInRange(centery, centery);
  t.x = 550;
  b.x = 550;
  t.y = pipey - offset;
  b.y = pipey + offset;
}

function update() {
  if(pipe1t.x < -100){
    startPipe(pipe1t,pipe1b);
  }
  if(pipe2t.x < -100){
    startPipe(pipe2t, pipe2b);
  }
  if(pipe3t.x < -100){
    startPipe(pipe3t, pipe3b);
  }

}

function render() {
}
