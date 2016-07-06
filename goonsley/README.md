# SkilStak Flappy Boilerplate

First make your own flappy-ish game directory in your `<you>.github.io`
repo. (If you know how to do it a more complicated way you can also
create a separate repo with a default `gh-pages` branch.)

Then download these files is to just [download a zip of
the whole game including the
assets](https://github.com/skilstak/flappy/archive/gh-pages.zip)
and then drag and drop the ones you want to reuse into your own
game site.

Don't forget to make your own [`assets`](assets/) as well. **If you
are missing any asset or it is the wrong dimensions or wrong number
of frames your game won't work (without hacking the script).** 

Experiment with "hacking" the game by changing the CONFIG settings
at the beginning of the skilstak-flappy.js file, but be careful not
to break it and check for syntax errors.  This is free and unencumbered
software released into the public domain.

## Image Asset Dimensions

The easiest way to customize these assets is to import them directly
into [Piskel](http://piskelapp.com) and alter them there. That way the
dimensions are ensured to be the right ones.

* [`background.png`](assets/background.png) - 960 x 568 (3x game width so scrolls)
* [`button.png`](assets/button.png) - whatever
* [`flappy.png`](assets/flappy.png) - 46 x 64 (2 frames)
* [`pipebot.png`](assets/pipebot.png) - 90 x 500
* [`pipetop.png`](assets/pipetop.png) - 90 x 500
* [`sign.png`](assets/sign.png) - 46 x 64 (2 frames)
* [`skilstak.png` - copy exactly from boilerplate, required](assets/skilstak.png)

## Sound Assets

* [`gameover.wav`](assets/gameover.wav)
* [`point.wav`](assets/point.wav)
* [`start.mp3`](assets/start.mp3)
* [`flap.wav`](assets/flap.wav)
* [`crash.wav`](assets/crash.wav)
* [`play.mp3`](assets/play.mpe)

## Hacking the Script

If you have loaded your own assets and got your game working and
want a fun challenge. Download a local copy of
[`skilstak-flappy.js`](skilstak-flappy.js) and mess with the `CONFIG`
settings at the top. **DO NOT TRY TO OPEN THE SCRIPT IN GITHUB USING
THE EDITOR THERE.** It is too big and will crash your chrome window.
This is because it includes a full copy of [Phaser](http://phaser.io)
for convenient dragging and dropping.

Remember, if you really break something bad, you can always [get the
original script](skilstak-flappy.js) again and drag it in.

## PUBLIC DOMAIN LICENSE

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org>

