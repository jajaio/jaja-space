'use strict';

var author = "jajaio";

var game = new Phaser.Game(320,568,Phaser.AUTO,'game',
  {preload:preload,create:create,update:update,render:render});

var background;
var bird;
var pipe1t;

function preload() {
  game.stage.backgroundColor = '#bbbbbb';
  game.load.image("background","assets/background.gif");
  game.load.spritesheet("bird","assets/bird.png",80,48);
  game.load.image("pipe","assets/pipe.gif");
}

function create() {
  function flap(){
    bird.body.velocity.y = -400;
  }
  //Start Physics Engine
  game.physics.startSystem(Phaser.Physics.ARCADE);
  //Add our Background
  background = game.add.tileSprite(0,0,320,568,"background");
  background.autoScroll(-100,0);
  //Add our bird and give it physics
  bird = game.add.sprite(10,284,"bird");
  //bird.scale.set(2);
  bird.smoothed = false;
  bird.animations.add('fly',[0,1], 10, true);
  bird.play('fly');
  //Physics
  game.physics.enable(bird, Phaser.Physics.ARCADE);
  bird.body.gravity.y = 1000;
  bird.body.collideWorldBounds = true;
  //Add some control to the bird
  game.input.onDown.add(flap);
  game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.add(flap); //The Higher the Negative number, the higher our bird will jump.  
}

function update() {
}

function render() {
}
