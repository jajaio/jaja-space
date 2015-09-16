'use strict';

var game = new Phaser.Game(320,568,Phaser.AUTO,'game',
  {preload:preload,create:create,update:update,render:render});

var background;
var bird;
var pipe;

function preload() {
  game.stage.backgroundColor = '#bbbbbb';
  game.load.image("background","assets/background.gif");
  game.load.image("bird","assets/bird.gif");
  game.load.image("pipe","assets/pipe.gif");
}

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  background = game.add.tileSprite(0,0,320,568,"background");
  background.autoScroll(-100,0);
  bird = game.add.sprite(20,284,"bird");//10
  game.physics.enable(bird, Phaser.Physics.ARCADE);
  bird.body.gravity.y = 1000;
}

function update() {
}

function render() {
}
