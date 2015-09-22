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
  //Start Physics Engine
  game.physics.startSystem(Phaser.Physics.ARCADE);
  //Add our Background
  background = game.add.tileSprite(0,0,320,568,"background");
  background.autoScroll(-100,0);
  //Add our bird and gice it physics
  bird = game.add.sprite(10,284,"bird");
  game.physics.enable(bird, Phaser.Physics.ARCADE);
  bird.body.gravity.y = 1000;
  //Add some control to the bird
  game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
    .onDown.add(function(){bird.body.velocity.y=-400; //The Higher the Negative number, the higher our bird will jump.
    });
}

function update() {
}

function render() {
}
