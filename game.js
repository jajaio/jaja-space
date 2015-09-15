'use strict';

var game = new Phaser.Game(320,568,Phaser.AUTO,'game',
  {preload:preload,create:create,update:update,render:render});

var background;
var bird;
function preload() {
  game.stage.backgroundColor = '#bbbbbb';
  game.load.image("background","assets/background.gif");
  game.load.image("bird","assets/background.gif");
}

function create() {
  background = game.add.tileSprite(0,0,320,568,"background");
  background.autoScroll(-100,0);
  bird = game.add.sprite(10,284,"bird");
}

function update() {
}

function render() {
}
