'use strict';

var game = new Phaser.Game(320,568,Phaser.AUTO,'game',
  {preload:preload,create:create,update:update,render:render});

var background;

function preload() {
  game.stage.backgroundColor = '#bbbbbb';
  game.load.image("background","assets/background.gif");
}

function create() {
  background = game.add.tileSprite(0,0,320,568,"background");
  background.autoScroll(-100,0);
}

function update() {
}

function render() {
}
