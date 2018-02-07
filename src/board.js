// 6 February 2018

export
class Board {

  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._numberOfRows = numberOfRows;
    this._numberOfColumns = numberOfColumns;
    this._numberOfBombs = numberOfBombs;

    this._numberOfTiles = numberOfRows * numberOfColumns;
    this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
    this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
  }

  get playerBoard() {
    return this._playerBoard;
  }

  flipTile(rowIndex, columnIndex) {
    if(this._playerBoard[rowIndex][columnIndex] !== ' ') {
      console.log('This tile has already been flipped!');
      return;
    } else if(this._bombBoard[rowIndex][columnIndex] === 'B') {
      this._playerBoard[rowIndex][columnIndex] = 'B';
    } else {
      this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
    }
    this._numberOfTiles = this._numberOfTiles - 1;
  }

  getNumberOfNeighborBombs(rowIndex, columnIndex) {
    const neighborOffsets = [
      [-1, -1], [-1, 0], [-1, 1], [1, -1], [1, 0], [1, 1], [0, 1], [0, -1]
    ];
    const numberOfRows = this._bombBoard.length;
    const numberOfColumns = this._bombBoard[0].length;
    let numberOfBombs = 0;

    neighborOffsets.forEach(offset => {
      const neighborRowIndex = offset[0] + rowIndex;
      const neighborColumnIndex = offset[1] + columnIndex;

      if((neighborRowIndex < this._bombBoard.length && neighborRowIndex >= 0)
        && (neighborColumnIndex < this._bombBoard[0].length && neighborColumnIndex >= 0)) {
          if(this._bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
            numberOfBombs++;
          }
      }
    });
    return numberOfBombs;
  }

  hasSafeTiles() {
    return this._numberOfTiles !== this._numberOfBombs;
  }

  print() {
    console.log(
      this._playerBoard.map(_ => _.join(' | ')).join('\n')
    );
  }

  static generatePlayerBoard(rows, columns) {
    let board = [];
    for(let i=0; i<rows; i++) {
      let row = [];
      for(let j=0; j<columns; j++) {
        row.push(' ');
      }
      board.push(row);
    }
    return board;
  }

  static generateBombBoard(rows, columns, bombs) {
    let board = [];
    for(let i=0; i<rows; i++) {
      let row = [];
      for(let j=0; j<columns; j++) {
        row.push(null);
      }
      board.push(row);
    }

    let numberOfBombsPlaced = 0;
    while(numberOfBombsPlaced < bombs) {
      let randomRowIndex = Math.floor(Math.random() * Math.floor(rows));
      let randomColumnIndex = Math.floor(Math.random() * Math.floor(columns));

      if(board[randomRowIndex][randomColumnIndex] !== 'B') {
        board[randomRowIndex][randomColumnIndex] = 'B';
        numberOfBombsPlaced++;
      }
    }
    return board;
  }

}
