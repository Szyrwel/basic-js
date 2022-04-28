const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let newStr = "";
  let n = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      n++;
    } else {
      if (n !== 1) {
        newStr += n + str[i];
      } else {
        newStr += str[i];
      }
      n = 1;
    }
  }
  return newStr;
}

module.exports = {
  encodeLine,
};
