const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  let m = []
  for (let i = 0; i < matrix.length; i++) {
   
    let row = [];
     for (let k = 0; k < matrix[i].length; k++) {
       let result = 0;
      ((i - 1 !== -1) && (k - 1 !== -1) && (matrix[i-1][k - 1] === true)) ? result++ : result;

       ((i - 1 !== -1) && (matrix[i-1][k] === true)) ? result++ : result;

       ((i - 1 !== -1) && (k + 1 !== matrix[i][k].length - 1) && (matrix[i-1][k + 1] === true)) ? result++ : result;

       ((k - 1 !== -1) && (matrix[i][k - 1] === true)) ? result++ : result;

       ((k + 1 !== matrix[i][k].length) && (matrix[i][k + 1] === true)) ? result++ : result;

       ((i + 1 !== matrix.length) && (k - 1 !== -1) && (matrix[i+1][k - 1] === true)) ? result++ : result;

       ((i + 1 !== matrix.length) && (matrix[i+1][k] === true)) ? result++ : result;
        if (matrix.length === 3) {
       ((i + 1 !== matrix[i].length) && (k + 1 !== matrix[i][k].length) && (matrix[i+1][k + 1] === true)) ? result++ : result;
        }

       row.push(result)

            
    }
    m.push(row)
//     
  }
  return m
}

module.exports = {
  minesweeper,
};
