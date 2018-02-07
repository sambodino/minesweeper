# minesweeper
The infamous Minesweeper game that became familiar to the world on our personal computers - now, in JavaScript.

## prework
Babel is used in this project to transpile the ES6 JavaScript into "old" JavaScript syntax.

`babel-cli` is then used to load the files in the command line. In order to do this, we need to run `npm run build`, which will create a `/lib` directory with our transpiled JavaScript files.

## gameplay
To play Minesweeper, we will create instances of Game in the command line.

*For example:*

In the command line, navigate to the `/lib` directory and run `node`.

Run `.load game.js` to load the contents of this file.

Then, create a Game instance and run commands like so:

```javascript
let game = new Game(3, 3, 3);
game.playMove(0, 1);
game.playMove(1, 2);
```

When you've given up like so many before you, or were lucky enough to be congratulated with a nice log message, run `.exit` to finish your game session.
