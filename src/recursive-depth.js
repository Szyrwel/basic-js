const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
  calculateDepth(arr) {
    
    if(!Array.IsArray(arr)) {
      return 0
    }
    let result = 1;
      
    if (arr.some((el) => {
      Array.IsArray(el) === true
        })) {
        arr = arr.flat()
        result = result + this.calculateDepth(arr)
      }
    
return result
}
}

module.exports = {
  DepthCalculator
};
