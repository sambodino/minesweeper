# minesweeper
The infamous Minesweeper game that became familiar to the world on our personal computers - now, in JavaScript.


## gameplay
To play Minesweeper, we will create instances of Game in the command line.

*For example:*

In the command line, navigate to the `lib` directory and run `node`.

Run `.load game.js` to load the contents of this file.

Then, create a Game instance and run commands like so:

```javascript
let game = new Game(3, 3, 3);
game.playMove(0, 1);
game.playMove(1, 2);
```

When you've given up like so many before you, or were lucky enough to be congratulated with a nice log message, run `.exit` to finish your game session.
